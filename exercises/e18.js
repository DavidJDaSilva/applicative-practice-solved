/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let maxBy = function(array, cb) {
    let maxValue = -Infinity;
    let maxElement;

  for (let element of array) {
    const value = cb(element);
    if (value > maxValue) {
      maxValue = value;
      maxElement = element;
    }
  }

  return maxElement;
  };

  const asteroidsByYear = data.asteroids.reduce((acc, asteroid) => {
    const year = asteroid.discoveryYear;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(asteroid);
    return acc;
  }, {});

  const yearWithMaxDiscoveries = maxBy(Object.entries(asteroidsByYear), ([year, asteroids]) => asteroids.length);

  return parseInt(yearWithMaxDiscoveries[0]);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
