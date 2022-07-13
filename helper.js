const ExpressError = require('./expressError')

// Validate all elements in the array are actually numbers.
function validateArray(splitNums){
    for(let i=0; i<splitNums.length; i++){
        if(isNaN(splitNums[i])) {
		return false;
    }
    }
	return true;
}


function mean(array){
    if(array.length === 0){
        return 0;
    }
    return array.reduce((a, b) => Number(a) + Number(b)) / array.length;
}

function median(values){
    if(values.length ===0) throw new ExpressError("No inputs", 400);

    let newVal = values.map(i=>Number(i))


    newVal.sort(function(a,b){
      return a-b;
    });
  
    let half = Math.floor(newVal.length / 2);
    
    if (newVal.length % 2 === 0){
      return (newVal[half - 1] + newVal[half]) / 2.0;
    }

    return newVal[half];
    
    
  }

  function mode(values){
    let max =0;
    let counts = {};
    let count = 0;

    let newVal = values.map(i=>Number(i))

    for (let i = 0; i < newVal.length; i++) {
        counts[newVal[i]] = (counts[newVal[i]] || 0) + 1;

        if(count < counts[newVal[i]]){
          max = newVal[i];
          count = counts[newVal[i]]
        }
    }
    return max;
  }

module.exports = {
    validateArray,
    mean,
    median,
    mode
};