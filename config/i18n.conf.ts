import { locales } from '../locales'
import { localeSerializer } from '../lib'

const messages = localeSerializer(locales)

export const config = {
  legacy: false,
  globalInjection: true,
  locale: 'ru',
  fallbackLocale: 'en',
  messages,
  datetimeFormats: {
    en: {
      short: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
    },
    ru: {
      short: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
    }
  },
  pluralizationRules: {
    ru: function (choice: number, choicesLength: number) {
      if (!choice) {
        return 0
      }

      const isBetween = choice > 10 && choice < 20
      const endsWithOne = choice % 10 === 1

      if (choicesLength < 4) {
        return !isBetween && endsWithOne ? 1 : 2
      }
      if (!isBetween && endsWithOne) {
        return 1
      }
      if (!isBetween && choice % 10 >= 2 && choice % 10 <= 4) {
        return 2
      }

      return choicesLength < 4 ? 2 : 3
    }
  }
}
