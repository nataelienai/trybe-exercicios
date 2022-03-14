const readlineSync = require('readline-sync');

function calculateAverageSpeed(distance, elapsedTime) {
  return distance / elapsedTime;
}

function main() {
  const distanceInMeters = readlineSync.questionInt('Distance (in meters): ');
  const elapsedTimeInSeconds = readlineSync.questionInt('Elapsed time (in seconds): ');

  const averageSpeed = calculateAverageSpeed(distanceInMeters, elapsedTimeInSeconds);
  console.log(`The average speed is ${averageSpeed.toFixed(2)} m/s`);
}

main();
