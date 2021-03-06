/*

// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/**
 * ### Challenge `getName`
 * Example ✅
 * 
 * @instructions
 * Must return input object's `name` property.
 *
 * Sample data expected output: `Luke Skywalker`
*/
function getName(character) {
  // ⭐️ Example Solution Provided For First Function ⭐️
  return character.name
}



/**
 * ### Challenge `getFilmCount`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Must return the number of elements in the `films` property.
 *
 * Sample data expected output: 5
 */
function getFilmCount(character) {
  return character.films.length;
}

/**
 * ### Challenge `getSecondStarshipName`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Return second starship's name from `starships` property.
 * If length is 0. Return 'none'
*/
function getSecondStarshipName(character) {
  if ( character.starships.length > 0) {
    return character.starships[1].name;
  } else {
    return 'none';
  }
}

/**
 * ### Challenge `getSummary`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Combine specified field values and return them in the following string format:
 *    Template: `{name}, {height}cm, {mass}kg. Featured in {film count} films.`
 *    Result: `Luke Skywalker, 172cm, 77kg. Featured in 5 films.`
 */
function getSummary(character) {
  return `${character.name}, ${character.height}cm, ${character.mass}kg. Featured in ${getFilmCount(character)} films.`;
}

/**
 * ### Challenge `getVehiclesCostInCreditsSumTotal`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Sum the total cost in credits for all vehicles defined on the input character.
 * Sample data expected output: 8000
*/
function getVehiclesCostInCreditsSumTotal(character) {
  return character.vehicles.reduce( (acc, veh) => {
    const cost = veh["cost_in_credits"];
    if (cost !== null) {
      return acc + cost;
    } else {
      return acc;
    }
  }, 0);
}


/**
 * ### Challenge `getStarshipPassengerAndCrewSumTotal`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Sum the number of crew and passenger spots for all starships defined on the
 * input character.
 *
 * Sample data expected output: 27
*/
function getStarshipPassengerAndCrewSumTotal(character) {
  return character.starships.reduce( (acc, ship) => {
    const crew = ship["crew"];
    const passengers = ship["passengers"];
    if ( crew !== null) {
      if (passengers !== null) {
        return acc  + crew + passengers;
      } 
      return acc + crew;
    }
    else if (passengers !== null) {
      return acc + passengers;
    } else {
      return acc;
    }
  }, 0);
}

/**
 * ### Challenge `getNthFilm`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Return the Nth `films` value (in this case title).
 * Rules: filmNumber starts at 1 and refers to the *first* film, and includes only the range 1-3.
 * Any numbers outside that range should throw an error.
 * The Error must mention the name of your favorite _extra cheesy_ movie.
 *
 * Given film #1, expected output: `A New Hope`
 * Given film #7, expected error: `There are only 3 Star Wars movies. Flan fiction excluded.`
*/
function getNthFilm(character, filmNumber) {
  if (filmNumber > 3 || filmNumber < 1) {
    throw Error('There are only 3 Star Wars movies. Flan fiction excluded.');
  } else {
    return character.films[filmNumber-1];
  }
}

/**
 * ### Challenge `getCargoCapacityTotal`
 * Stretch Goal 💪
 * 
 * @instructions
 * Sum the total cargo capacity for *all* vehicles and starships.
 * Some objects may not have a value for their cargo capacity.
 *
 * Sample data expected output: 80124
*/
function getCargoCapacityTotal(character) {
  const sumVehicles = character["vehicles"].reduce( (sum, vehicle) => {
    const cap = vehicle["cargo_capacity"];
    if (cap === null) { return sum; }
    const filteredCap = filterInt(cap);
    if (typeof filteredCap === "number") { return sum + filteredCap; } 
    else {return sum;}
  }, 0);
  const sumStarships = character["starships"].reduce( (sum, ship) => {
    const cap = ship["cargo_capacity"];
    if (cap === null) { return sum; }
    const filteredCap = filterInt(cap);
    if (typeof filteredCap === "number") { return sum + filteredCap; } 
    else { return sum; }
  }, 0);
  return sumVehicles + sumStarships;
}

function filterInt(value) {
  if (/^[-+]?(\d+|Infinity)$/.test(value)) {
    return Number(value)
  } else {
    return NaN
  }
}

/**
 * ### Challenge `getFastestStarshipName`
 * Stretch Goal 💪
 * 
 * @instructions
 * Find the fastest starship (by atmospheric speed.)
 * Determine the correct field to compare, and return the name of the fastest.
 * If the character does not have any starships, then return 'none'.
 *
 * Sample data expected output: `X-wing`
*/
function getFastestStarshipName(character) {
  if (character["starships"].length <= 0) { return "none"; }
  
  let fastestSpeed = 0;
  let fastestShip = "";

  character["starships"].forEach( ship => {
    const speed = ship["max_atmosphering_speed"];
    if (speed === null ) { return; }
    const filteredSpeed = filterInt(speed); 

    if (filteredSpeed > fastestSpeed) {
      fastestSpeed = filteredSpeed;
      fastestShip = ship["name"];
    }
  });
  return fastestShip;
}

/**
 * ### Challenge `getLargestCargoStarshipModelName`
 * Stretch Goal 💪
 * 
 * @instructions
 * Determine the starship with the largest cargo capacity.
 * Return it's **_model_** property.
 * If the character does not have any starships, then return 'none'.
 *
 * Sample data expected output: `Lambda-class T-4a shuttle`
*/
function getLargestCargoStarshipModelName(character) {
  if (character["starships"].length <= 0) { return "none"; }
  let largestCargoCap = 0;
  let largestCargoModelName = "";
  character["starships"].forEach( ship => {
    const cargo = ship["cargo_capacity"];
    if (cargo === null) { return; }
    const filteredCargo = filterInt(cargo);
    if (filteredCargo > largestCargoCap) { 
      largestCargoCap = filteredCargo;
      largestCargoModelName = ship["model"];
    }
  });
  return largestCargoModelName;
}

/**
 * ### Challenge `getSlowestVehicleOrStarshipName`
 *Stretch Goal 💪
 *
 * @instructions
 * Find the slowest transport (including vehicles and starships)
 * based on `max_atmosphering_speed`, and return its name.
 * If the character does not have any starships or vehicles, then return string 'none'.
 *
*/
function getSlowestVehicleOrStarshipName(character) {
  if (character["starships"] === 0 && character["vehicles"] === 0) { return "none"; }

  let slowestSpeed = Infinity;
  let slowestTransport = "";
  character["starships"].forEach( ship => {
    const speed = ship["max_atmosphering_speed"];
    if (speed === null) { return; }
    const filteredSpeed = filterInt(speed);
    if (filteredSpeed < slowestSpeed) { 
      slowestSpeed = filteredSpeed;
      slowestTransport = ship["name"];
    }
  });
  character["vehicles"].forEach( veh => {
    const speed = veh["max_atmosphering_speed"];
    if (speed === null) { return; }
    const filteredSpeed = filterInt(speed);
    if (filteredSpeed < slowestSpeed) { 
      slowestSpeed = filteredSpeed;
      slowestTransport = veh["name"];
    }
  });
  return slowestTransport;

}





/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
// DO NOT CHANGE ANYTHING BELOW THIS LINE //
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (getName) { module.exports.getName = getName }
  if (getFilmCount) { module.exports.getFilmCount = getFilmCount }
  if (getSecondStarshipName) { module.exports.getSecondStarshipName = getSecondStarshipName }
  if (getSummary) { module.exports.getSummary = getSummary }
  if (getVehiclesCostInCreditsSumTotal) { module.exports.getVehiclesCostInCreditsSumTotal = getVehiclesCostInCreditsSumTotal }
  if (getStarshipPassengerAndCrewSumTotal) { module.exports.getStarshipPassengerAndCrewSumTotal = getStarshipPassengerAndCrewSumTotal }
  if (getNthFilm) { module.exports.getNthFilm = getNthFilm }
  if (getCargoCapacityTotal) { module.exports.getCargoCapacityTotal = getCargoCapacityTotal }
  if (getFastestStarshipName) { module.exports.getFastestStarshipName = getFastestStarshipName }
  if (getLargestCargoStarshipModelName) { module.exports.getLargestCargoStarshipModelName = getLargestCargoStarshipModelName }
  if (getSlowestVehicleOrStarshipName) { module.exports.getSlowestVehicleOrStarshipName = getSlowestVehicleOrStarshipName }
}
