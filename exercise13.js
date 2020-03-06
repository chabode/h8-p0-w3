function targetTerdekat(arr) {
    var posO = ''
    var posX = []
    for (var i = 0; i< arr.length ; i++){
        if (arr[i] === "o"){
            posO = i
        } else if (arr[i] === 'x' ){
            posX.push(i)
        }
    }
    for (var j = 0; j < posX.length ; j++){
        posX[j] = Math.abs(posX[j] - posO)
    }
    if (posX.length === 0){
        return 0
    }
    for (var k = 0 ; k < posX.length; k++){
        for (var l = 0 ; l < posX.length; l++){
            if (posX[l] > posX[l+1]){
                var temp = posX[l]
                posX[l] = posX[l+1]
                posX[l+1] = temp
            }
        }
    }
    // console.log(posO, posX)
    return posX[0]
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2