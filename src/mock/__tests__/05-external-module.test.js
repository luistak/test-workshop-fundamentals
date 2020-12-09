const playOdds = require('../odds');
const utils = require('../utils')

// Using utils.js from `__mocks__/utils.js`
jest.mock('../utils');

test('returns winner', () => {
  const player1 = 'Taka';
  const player2 = 'hashi';
  const winner = playOdds(player1, player2);
  expect(winner).toBe(player1);

  expect(utils.getWinner.mock.calls).toEqual([
    [player1, player2],
    [player1, player2],
    [player1, player2],
  ])

  // cleanup
  utils.getWinner.mockReset()
})