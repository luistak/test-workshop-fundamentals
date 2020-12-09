const playOdds = require('../odds');
const utils = require('../utils');

it('playOdds()', () => {
  const originalGetWinner = utils.getWinner;
  utils.getWinner = (p1, p2) => p1;

  const player1 = 'Taka';
  const player2 = 'hashi';

  const winner = playOdds(player1, player2);

  expect(winner).toBe(player1);

  // cleanup
  utils.getWinner = originalGetWinner;
})