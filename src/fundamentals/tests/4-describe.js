// Run `yarn fundamentals:04` to execute this test

const { sum, subtract } = require('../math');

const expect = (result) => ({
  toBe: (expected) => {
    if (result !== expected) {
      throw new Error(`${result} should be: ${expected}`);
    }
  }
});

function test(title, callback) {
  const prefix = test.parentTitle ? `    ` : '';
  try {
    callback();
    console.log(`${prefix}✓ ${title}`);
  } catch (error) {
    console.log(`${prefix}x ${title}`);
    console.error(error);
  }
}

function describe(title, callback) {
  console.log(`> ${title}`);

  test.parentTitle = title;
  try {
    callback();
  } catch (error) {
    console.error(error);
  }
  delete test.parentTitle;
}

let result, expected;

test('should sum numbers', () => {
  result = sum(10, 5);
  expected = 15;

  expect(result).toBe(expected);
});

describe('When something', () => {
  test('should works', () => {
    expect(2 + 2).toBe(4);
  });
})

test('should subtract numbers', () => {
  result = subtract(10, 5);
  expected = 5;

  expect(result).toBe(expected);
});
