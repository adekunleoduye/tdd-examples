import squareRoot from './squareRoot.js'

describe('Squareroot', () => {
  it("Should output number's square", () => {
    const actual = squareRoot(3);
    const expected = 9;

    expect(actual).toEqual(expected);
  })
})
