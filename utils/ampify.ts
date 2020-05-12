import hashSum from 'hash-sum'
// @ts-ignore
import AmpOptimizer from '@ampproject/toolbox-optimizer'
// @ts-ignore
import AmpCustom from 'amp-custom'
import cheerio from 'cheerio'
import consola from 'consola'
import axios from 'axios'
import { parse } from 'svgson'

interface ImageSize {
  width: string
  height: string
}

const responses: { [key: string]: ImageSize } = {}
const promises: Promise<void>[] = []

async function getImateDimensions(imageUrl: string): Promise<void> {
  if (!responses[imageUrl]) {
    let dimensions = { width: '0', height: '0' }

    try {
      const response = await axios.get(imageUrl, { responseType: 'text' })

      if (response && response.status === 200) {
        const attributes = (await parse(response.data)).attributes
        const width = `${Number(attributes.width.replace('pt', '')) * 1.3333}px`
        const height = `${
          Number(attributes.height.replace('pt', '')) * 1.3333
        }px`

        dimensions = { width, height }
      } else {
        consola.error(`Invalid Image: "${imageUrl}"`)
      }
    } catch (error) {
      consola.error(error)
    }

    responses[imageUrl] = dimensions
  }
}

/**
 *
 * @param {boolean} debug
 * @param {string} html
 */
export const ampify = async (debug: boolean, html: string) => {
  const ampCustom = new AmpCustom()
  const ampOptimizer = AmpOptimizer.create()
  const $ = cheerio.load(html, { decodeEntities: true })

  /* fix SVG Images */
  // Remove the pid attribute
  $('path').removeAttr('pid').removeAttr('_fill')

  /* fix images from math equation */

  $('img[svgimg="1"]').each(function (this: any) {
    const src = $(this).attr('src')

    if (src && responses[src]) {
      return
    }

    if (src && src.includes('//')) {
      promises.push(getImateDimensions(src))
    }
  })

  await Promise.all(promises)

  $('img[svgimg="1"]').each(function (this: any) {
    const src = $(this).attr('src')

    $(this).attr('layout', 'fixed')
    $(this).removeAttr('svgimg')

    $(this).replaceWith(() => {
      // create a replacement tag of the desired type
      const $ampImage = $('<amp-img>')

      // grab all of the original's attributes, and pass them to the replacement
      Object.keys($(this)[0].attribs).forEach((key) => {
        $ampImage.attr(key, $(this)[0].attribs[key])
      })

      if (src) {
        const response = responses[src]

        if (!response) {
          const message = `No image for ${src}`

          if (debug) {
            consola.error(message)
          } else {
            throw new Error(message)
          }
        } else {
          $ampImage.attr('width', `${response.width}`)
          $ampImage.attr('height', `${response.height}`)
        }
      }

      // Switch to amp-image
      return $ampImage
    })
  })

  /* improve style definitions */
  let styleConcat = ''

  $('style').each(function (this: any) {
    styleConcat += $(this).html()
  })

  $('style').remove()

  try {
    styleConcat = ampCustom.optimize(styleConcat)

    if (debug && ampCustom.isOverMaxByte(styleConcat)) {
      consola.warn("The CSS string size doesn't meets the AMP rules (50KB)")
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }

  html = $.html().replace(
    '</head>',
    `<style amp-custom id="${hashSum(
      styleConcat
    )}">${styleConcat}</style></head>`
  )

  const optimizedHtml = await ampOptimizer.transformHtml(html)

  return optimizedHtml
}
