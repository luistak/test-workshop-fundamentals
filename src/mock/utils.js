function getWinner(p1, p2) {
  const players = [p1, p2];
  const winner = players[Math.floor(Math.random() * players.length)];

  return winner;
}

module.exports = {getWinner}