<template>
  <div />
</template>
<script lang="ts">
import Vue from 'vue'

/* eslint-disable no-undef */
// @ts-ignore
import VueScript2 from 'vue-script2'

export default Vue.extend({
  mounted() {
    VueScript2.load(
      'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML'
    ).then(function () {
      // @ts-ignore
      MathJax.Hub.Config({
        tex2jax: {
          inlineMath: [
            ['$', '$'],
            ['\\(', '\\)'],
          ],
          displayMath: [['$$', '$$']],
          processEscapes: true,
          processEnvironments: true,
          skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
          TeX: {
            equationNumbers: { autoNumber: 'AMS' },
            extensions: ['AMSmath.js', 'AMSsymbols.js'],
          },
        },
      })

      // @ts-ignore
      MathJax.Hub.Queue(function () {
        // Fix < code > tags after MathJax finishes running. This is a
        // hack to overcome a shortcoming of Markdown. Discussion at
        // https://github.com/mojombo/jekyll/issues/199
        // @ts-ignore
        const all = MathJax.Hub.getAllJax()
        let i
        for (i = 0; i < all.length; i += 1) {
          all[i].SourceElement().parentNode.className += ' has-jax'
        }
      })

      // @ts-ignore
      MathJax.Hub.Config({
        // Autonumbering by mathjax
        TeX: { equationNumbers: { autoNumber: 'AMS' } },
      })
    })
  },
})
</script>
