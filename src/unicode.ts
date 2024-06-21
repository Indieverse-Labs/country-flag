/**
 * Converts a two-letter ISO country code into a Unicode flag for that country.
 * Source: https://stackoverflow.com/questions/24050671/how-to-put-japan-flag-character-in-a-string
 * @param {string} isoCode - The two-letter ISO country code (case-insensitive).
 * @return {string} The Unicode flag for the specified country.
 */
export function getCountryFlag(isoCode: string): string {
  return isoCode
    .slice(0, 2)
    .toUpperCase()
    .replace(/./g, (char) => getRegionalIndicatorSymbol(char))
}

/**
 * Converts a letter to a Regional Indicator Symbol.
 * @param {string} letter The letter to convert.
 * @return {string} The Regional Indicator Symbol corresponding to the input letter.
 */
function getRegionalIndicatorSymbol(letter: string): string {
  return String.fromCodePoint((letter.charCodeAt(0) % 32) + 0x1f1e5)
}
