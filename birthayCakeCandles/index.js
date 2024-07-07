let array = [3,2,1,3]

function birthayCakeCandles(candles) {
    let height = 0;
    let heightSum = 0;
    
    for(let i of candles) {
        if(height < i) {
            height = i;
        };
    };
    for(let i of candles) {
        if(height === i) {
          heightSum += 1  
        };
    };
    return console.log(heightSum);
};

birthayCakeCandles(array)
