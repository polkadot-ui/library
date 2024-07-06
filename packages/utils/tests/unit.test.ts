import { describe, expect, test } from "vitest"
import * as fn from "../lib/index"

describe("Tests suite - planckToUnit Function", () => {
  test("should correctly convert a BigInt to unit", () => {
    const inputValue = 249959811600n
    const units = 10
    const expectedOutput = Number("24.99598116")
    const result = fn.planckToUnit(inputValue, units)
    expect(result).toEqual(expectedOutput)
  })

  test("should correctly convert a BigInt to units", () => {
    const inputValue = 10000000n
    const units = 6
    const expectedOutput = Number("10.000000")
    const result = fn.planckToUnit(inputValue, units)
    expect(result).toEqual(expectedOutput)
  })

  test("should throw error when negative units", () => {
    const inputValue = 10000000n
    const units = -2
    expect(() => fn.planckToUnit(inputValue, units)).toThrowError(
      "Argument out of range: -2"
    )
  })

  test("should throw error when undefined value", () => {
    const inputValue = undefined
    const units = 2
    const expectedOutput = Number("0")
    const result = fn.planckToUnit(inputValue, units)
    expect(result).toEqual(expectedOutput)
  })
})

describe("Test suite - unitToPlanck Function", () => {
  test("should correctly convert a string to planck with positive units", () => {
    const val = "10.2"
    const units = 6
    const expectedOutput = BigInt("10200000")
    const result = fn.unitToPlanck(val, units)
    expect(result).toEqual(expectedOutput)
  })

  test("should correctly convert a string to planck with zero units", () => {
    const val = "42"
    const units = 0
    const expectedOutput = BigInt("42")
    const result = fn.unitToPlanck(val, units)
    expect(result).toEqual(expectedOutput)
  })

  test("should correctly convert a string to planck with negative units but return integer", () => {
    const val = "100000"
    const units = -6
    expect(() => fn.unitToPlanck(val, units)).toThrowError(
      "Param(s) cannot be negative"
    )
  })

  test("should error for an empty string", () => {
    const val = ""
    const units = 8
    expect(() => fn.unitToPlanck(val, units)).toThrowError("Params are wrong")
  })

  test("should error for a non-numeric string", () => {
    const val = "invalid"
    const units = 4
    expect(() => fn.unitToPlanck(val, units)).toThrowError("Params are wrong")
  })
})

describe("Tests suite - transformToBaseUnit Function", () => {
  test("Should accept a fee (275002583), chain has 9 decimals", () => {
    const result = fn.transformToBaseUnit("275002583", 9)
    expect(result).toBe("0.275002583")
  })

  test("Should accept a fee (275002583), chain has 20 decimals", () => {
    const result = fn.transformToBaseUnit("275002583", 20)
    expect(result).toBe("0.0000000000275002583")
  })

  test("Should accept a very small fee (23), chain has 9 decimals", () => {
    const result = fn.transformToBaseUnit("23", 9)
    expect(result).toBe("0.00000023")
  })

  test("Should accept a very small fee (23), chain has 18 decimals", () => {
    const result = fn.transformToBaseUnit("23", 18)
    expect(result).toBe("0.00000000000000023")
  })

  test("Should accept a fee (20000000000), chain has 18 decimals (aka ETH example)", () => {
    const result = fn.transformToBaseUnit((20 * 10 ** 7).toString(), 18)
    expect(result).toBe("0.000000002")
  })

  test("Should accept a huge fee (2350000000), chain has 9 decimals", () => {
    const result = fn.transformToBaseUnit((235 * 10 ** 7).toString(), 9)
    expect(result).toBe("2.35")
  })

  test("Should has 0 fee and return 0", () => {
    const result = fn.transformToBaseUnit("0", 9)
    expect(result).toBe("0")
  })

  test("Should has 0.0000 fee and return 0", () => {
    const result = fn.transformToBaseUnit("0.0000", 20)
    expect(result).toBe("0")
  })

  test("Should fail if input is undefined", () => {
    const input = undefined
    const dec = 18
    expect(() => fn.transformToBaseUnit(input, dec)).toThrowError(
      "[@polkadot/utils | transformToBaseUnit] Input is not defined"
    )
  })
})
