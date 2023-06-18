import { describe, it, expect } from 'vitest'
import { currencyFormatter } from './currencyFormatter'

describe('currencyFormatter', () => {
  it('Should format a number', () => {
    const pattern = /^R\$\s\d{1,3}(?:\.\d{3})*(?:,\d{2})$/
    const value = currencyFormatter(1000)
    expect(value).toMatch(pattern)
  })
})
