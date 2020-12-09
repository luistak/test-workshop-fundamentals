// Run `yarn fundamentals:05` to execute this test

const { sumAsync, subtractAsync } = require('../math');

const expect = (result) => ({
  toBe: (expected) => {
    if (result !== expected) {
      throw new Error(`${result} should be: ${expected}`);
    }
  }
});

async function test(title, callback) {
  try {
    await callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.log(`x ${title}`);
    console.error(error);
  }
}

let result, expected;

test('sum', async () => {
  result = await sumAsync(10, 5);
  expected = 15;

  expect(result).toBe(expected);
});

test('subtract', async () => {
  result = await subtractAsync(10, 5);
  expected = 5;

  expect(result).toBe(expected);
});
