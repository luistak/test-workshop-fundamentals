const utils = require('./utils');

function playOdds(player1, player2) {
  const desiredWins = 3;
  let p1Wins = 0;
  let p2Wins = 0;
  
  while(p1Wins < desiredWins && p2Wins < desiredWins) {
    const winner = utils.getWinner(player1, player2);
    if (winner === player1) {
      p1Wins++;
    } else if (winner === player2){
      p2Wins++;
    }
  }

  return p1Wins > p2Wins ? player1 : player2
}

module.exports = playOdds;
