let array = [1,2,3,4,5];

function miniMaxSum(array) {
    let arrayOrganized = array.sort((a,b) => a-b);
    let miniSum = 0;
    let maxSum = 0;

    for(let i = 0; i < arrayOrganized.length - 1; i++) {
        miniSum += arrayOrganized[i]
    }
    for(let i = arrayOrganized.length - 1; i > 0; i--) {
        maxSum += arrayOrganized[i]
    }
    console.log(miniSum+" "+maxSum)
};

miniMaxSum(array);