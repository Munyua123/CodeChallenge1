// Speed Detector and points counter.
// speedLimit(70)


function speedDetector(speed) {
    //This ts the statement decalring the variable points and in it is the calculation to get the points.
    // 5 in the equation below represents the 5km/s that is used in calculation of the points.
    const points = (`${speed}`-70) / 5 
    if (speed > 70) {
        console.log(`points: ${points}`)
     } if(points > 12 ) {
       console.log(`License suspended`)
    } else{
        console.log("Ok")
    }
}

//This is represents us calling the function above, 159 was used as an example
speedDetector(159)