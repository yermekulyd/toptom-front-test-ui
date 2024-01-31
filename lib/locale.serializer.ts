export interface ILocale {
  code: string
  messages: {
    [key: string]: string
  }
}

export const localeSerializer = (locales: ILocale[]) => {
  const messages = {}

  for (const locale of locales) {
    messages[locale.code] = locale.messages
  }

  return messages
}
