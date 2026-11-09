export function longDate(d: Date, locale: 'en-US' | 'pt-BR' = 'en-US'): string {
  return d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
