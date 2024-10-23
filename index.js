// Code your solution in this file!

const hq = 42; 

function distanceFromHqInBlocks(customer) {
    return Math.abs(hq - customer); 
}

function distanceFromHqInFeet(customer){
    return (distanceFromHqInBlocks(customer) * 264)
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs(((start- destination) * 264))
  }
  function calculatesFarePrice(start, destination){
    const distance = ((Math.abs(destination -start) * 264))

  if (distance <= 400) {
      return 0;
  } else if (distance > 400 && distance <= 2000) {
      return (distance - 400 )* 0.02
  } else if (distance > 2000 && distance <= 2500) {
      return 25
  } else {
      return "cannot travel that far"; 
  }
}