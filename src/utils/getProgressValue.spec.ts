import { describe, it, expect } from 'vitest'

import { getProgressValue } from './getProgressValue'

describe('getProgressValue', () => {
  it('Should a get progress in percentage', () => {
    const value = getProgressValue(66, 120)
    expect(value).toBe(55)
  })
})
