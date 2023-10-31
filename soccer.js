
const RESULT_VALUES = {
  w: 3,
  d: 1,
  l: 0
}

/**
 * Takes a single result string and (one of 'w', 'l', or 'd') 
 * and returns the point value
 * 
 * @param {string} result 
 * @returns {number} point value
 */
function getPointValue(result) {
  switch (result) {
    case 'w':
      return 3; 
    case 'l':
      return 0; 
    case 'd':
      return 1; 
  }
}


// Create getTotalPoints function which accepts a string of results
// including wins, draws, and losses i.e. 'wwdlw'
// Returns total number of points won
const getTotalPoints = function(results) {
  let totalPoints = 0;

  for (const result of results) {
    totalPoints += getPointValue(result);
  }
  return totalPoints;
}


// Check getTotalPoints
console.log(getTotalPoints('wwdl')); // should equal 7

// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"

function orderTeams(...teams) {
  for (const team of teams) {
    const points = getTotalPoints(team.results);
    console.log(`${team.name}: ${points} points`);
  }
}

const team1 = {name: 'Dragon Army', results: 'wwwwdl'}
const team2 = {name: 'Salamander Army', results: 'wwwddl'}
const team3 = {name: 'Rabbit Army', results: 'llddwl'}
const team4 = {name: 'Phoenix Army', results: 'lllddd'}
const team5 = {name: 'Rat Army', results: 'wlllld'}

// Check orderTeams
orderTeams(team1, team2, team3);
console.log("Go Dragon Army!")

orderTeams(
  { name: 'Sounders', results: 'wwdl' },
  { name: 'Galaxy', results: 'wlld' }
);
// should log the following to the console:
// Sounders: 7
// Galaxy: 4