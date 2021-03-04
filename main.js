function numberDoubler(num) {
    // Your code here
    while(num <= 100){
        num = num * 2
    }
return num
}

function stringRepeater(str) {
    // Your code here
    let original = str
    while(str.length < 10){
        str = str + original
    }
    return str
}

function makeDivisible(x, y) {
    // Your code here
    while (x%y !== 0){
            x = x + 1
    }
    return x

}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};