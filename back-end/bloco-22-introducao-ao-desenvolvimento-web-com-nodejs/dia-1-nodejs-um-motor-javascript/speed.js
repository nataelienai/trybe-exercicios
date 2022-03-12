const readlineSync = require('readline-sync');

const distanceInMeters = readlineSync.questionInt('Distance (in meters): ');
const elapsedTimeInSeconds = readlineSync.questionInt('Elapsed time (in seconds): ');

const averageSpeed = distanceInMeters / elapsedTimeInSeconds;
console.log(`The average speed is ${averageSpeed.toFixed(2)} m/s`);
