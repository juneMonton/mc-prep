function calculateMean(list) {
    // add all numbers together
    let total = 0;
    for (let i = 0; i < list.length; i++) {
        total = total + list[i];
    }

    // divide by how many numbers there are
    return total / list.length;
}

module.exports=calculateMean;