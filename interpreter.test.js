import interpreter, {Errors} from "./interpreter"

describe("interpreter error when not all the elements are integers", () => {
    test("test if return error when string is in the list", () => {
        const result = interpreter(["2", 3, 5, 6, 7, 8])
        expect(result).toBe(Errors.ERROR_ALL_ELEMENTS_NOT_INTS)
    })

    test("test if return error when bool is in the list", () => {
        const result = interpreter([2, 3, 5, 6, true, 8])
        expect(result).toBe(Errors.ERROR_ALL_ELEMENTS_NOT_INTS)
    })

    test("test if return error when a float number is in the list", () => {
        const result = interpreter([2, 3, 5.645, 6, 2, 8])
        expect(result).toBe(Errors.ERROR_ALL_ELEMENTS_NOT_INTS)
    })

    // test("test first example", () => {
    //     const result = interpreter([1, 0, 0, 0, 99])
    //     expect(result).toBe([2, 0, 0, 0, 99])
    // })
})