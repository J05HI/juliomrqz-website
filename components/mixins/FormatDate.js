import { format } from 'date-fns'
import esLocale from 'date-fns/locale/es'

export default {
  methods: {
    formatDate(date) {
      const enDate = format(new Date(date), 'MMMM Q, yyyy')
      const esDate = format(new Date(date), "q' de 'LLLL' de 'yyyy", {
        locale: esLocale,
      })

      return this.$i18n.locale === 'en' ? enDate : esDate
    },
  },
}
