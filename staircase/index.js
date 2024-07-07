function staircase(n) {
    // Write your code here
    for(let nL = 1; nL <= n; nL++) {
        let space = ""
        for(nL2 = nL; nL2 < n; nL2++) {
            space += " "
        }
        for(nL3 = 1; nL3 <= nL; nL3++) {
            space += "#"
        }
        console.log(space)
    }
};

staircase(6)