import squareRoot from './squareRoot.js'

describe('Squareroot', () => {
  it("Should output number's square", () => {
    const acutal = squareRoot(3);
    const expected = 9;

    expect(acutal).toEqual(expected);
  })
})
