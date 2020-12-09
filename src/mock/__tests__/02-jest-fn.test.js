const playOdds = require('../odds');
const utils = require('../utils');

it('playOdds()', () => {
  const originalGetWinner = utils.getWinner;
  utils.getWinner = jest.fn((p1, p2) => p1);

  const player1 = 'Taka';
  const player2 = 'hashi';

  const winner = playOdds(player1, player2);

  expect(winner).toBe(player1);

  // console.log(utils.getWinner.mock);

  // Assertions
  expect(utils.getWinner).toHaveBeenCalledTimes(3);
  expect(utils.getWinner).toHaveBeenCalledWith(player1, player2);

  expect(utils.getWinner).toHaveBeenNthCalledWith(1, player1, player2);
  expect(utils.getWinner).toHaveBeenNthCalledWith(2, player1, player2);
  expect(utils.getWinner).toHaveBeenNthCalledWith(3, player1, player2);

  // Improved assertions
  expect(utils.getWinner.mock.calls).toEqual([
    [player1, player2],
    [player1, player2],
    [player1, player2],
  ])

  // cleanup
  utils.getWinner = originalGetWinner;
})