console.log('Lodash is loaded:', typeof _ !== 'undefined');

var deck = [];
var players = [
  {
    name: 'player 1',
    hand: [],
    score: null
  },
  {
    name: 'player 2',
    hand: []
  },
  {
    name: 'player 3',
    hand: [],
    score: null
  },
  {
    name: 'player 4',
    hand: [],
    score: null
  }
];

function createDeck(type) {
  for (var i = 2; i < 11; i++) {
    deck.push({ rank: i, suit: type });
  }
  deck.push({ rank: 'A', suit: type });
  deck.push({ rank: 'K', suit: type });
  deck.push({ rank: 'Q', suit: type });
  deck.push({ rank: 'J', suit: type });
}

createDeck('spades');
createDeck('diamonds');
createDeck('hearts');
createDeck('clubs');

var shuffled = _.shuffle(deck);

var m = 0;
for (var i = 0; i < players.length; i++) {
  for (var k = m; k <= m + 1; k++) {
    players[i].hand.push(shuffled[k]);
  }
  m = m + 2;
}

function getFirstValue(rank) {
  if (rank === 'J' || rank === 'K' || rank === 'Q') {
    var score1 = 10;
  } else if (rank === 'A') {
    score1 = 11;
  } else {
    score1 = rank;
  }
  return score1;
}

function getSecondValue(rank) {
  if (rank === 'J' || rank === 'K' || rank === 'Q') {
    var score2 = 10;
  } else if (rank === 'A') {
    score2 = 11;
  } else {
    score2 = rank;
  }
  return score2;
}

for (i = 0; i < players.length; i++) {
  var first = getFirstValue(players[i].hand[0].rank);
  var second = getSecondValue(players[i].hand[1].rank);
  players[i].score = first + second;
}

var winner = players[0];
for (i = 0; i < players.length; i++) {
  if (players[i].score > winner.score) {
    winner = players[i];
  }
}

console.log(winner);
