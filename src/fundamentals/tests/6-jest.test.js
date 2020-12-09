// Run `yarn fundamentals:06` to execute this test

const { sumAsync, subtractAsync } = require('../math');

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
