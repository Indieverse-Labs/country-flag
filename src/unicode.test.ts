import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { getCountryFlag } from './unicode'

describe('getCountryFlag', () => {
  it('should return the flag for the United States for input "US"', () => {
    assert.strictEqual(getCountryFlag('US'), '🇺🇸')
  })

  it('should return the flag for Japan for input "JP"', () => {
    assert.strictEqual(getCountryFlag('JP'), '🇯🇵')
  })

  it('should return the flag for Canada for input "CA"', () => {
    assert.strictEqual(getCountryFlag('CA'), '🇨🇦')
  })

  it('should return the regional indicator symbol for input "A"', () => {
    assert.strictEqual(getCountryFlag('A'), '🇦')
  })

  it('should return the flag for Spain for input "ESR"', () => {
    assert.strictEqual(getCountryFlag('ESR'), '🇪🇸')
  })

  it('should return the regional indicator symbols for input "AB"', () => {
    assert.strictEqual(getCountryFlag('AB'), '🇦🇧')
  })
})
