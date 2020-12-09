const playOdds = require('../odds');
const utils = require('../utils');

it('playOdds()', () => {
  jest.spyOn(utils, 'getWinner');
  utils.getWinner.mockImplementation((p1, p2) => p1);

  const player1 = 'Taka';
  const player2 = 'hashi';

  const winner = playOdds(player1, player2);

  expect(winner).toBe(player1);

  // Improved assertions
  expect(utils.getWinner.mock.calls).toEqual([
    [player1, player2],
    [player1, player2],
    [player1, player2],
  ])

  // cleanup
  utils.getWinner.mockRestore();
})