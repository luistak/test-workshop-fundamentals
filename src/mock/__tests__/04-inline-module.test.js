const playOdds = require('../odds');
const utils = require('../utils')

// Monkey-patching only works in commonJs
// EsModule require mocking whole module alogn with `jest.mock`

jest.mock('../utils', () => {
  return {
    getWinner: jest.fn((p1, p2) => p1)
  }
});

it('playOdds()', () => {
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
  utils.getWinner.mockReset() // Clear all `mock.calls`
})