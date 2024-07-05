

function checkSpeed(speed) {
  const speedLimit = 70;
  const speedPerPoint = 5;

  if (speed < speedLimit + speedPerPoint) {
    console.log("Ok");
    return;
  }

  const points = Math.floor((speed - speedLimit) / speedPerPoint);
  if (points >= 12) console.log("License suspended");
  else console.log("Points", points);
}

//enter spped value in place of "speed" below
checkSpeed(speed);