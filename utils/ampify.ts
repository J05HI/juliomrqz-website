import hashSum from 'hash-sum'
// @ts-ignore
import AmpOptimizer from '@ampproject/toolbox-optimizer'
// @ts-ignore
import AmpCustom from 'amp-custom'
import cheerio from 'cheerio'
import consola from 'consola'

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
