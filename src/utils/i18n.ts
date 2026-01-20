import en_us from '../config/text.json'

const translations = en_us

/**
 * Global translation function
 * Returns the key itself if missing
 */
export const t = <T = string>(path: string): T => {
  const keys = path.split('.')
  let value: any = translations

  for (const key of keys) {
    if (value?.[key] === undefined) {
      return path as unknown as T
    }
    value = value[key]
  }

  return value as T
}
