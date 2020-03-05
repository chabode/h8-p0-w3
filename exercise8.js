function pasanganTerbesar(num){
    var strNum = num.toString()
    var len = strNum.length
    var arrayNum = []
    var temp = ""
    for (var i = 0; i < len -1 ; i++){
        temp = strNum[i] + strNum[i+1]
        arrayNum.push(temp)
        temp = ""
    }
    for (var j = 0 ; j < arrayNum.length; j++){
        for (var k = 0 ; k < arrayNum.length; k++){
            if (arrayNum[k] < arrayNum[k+1]){
                var temp2 = arrayNum[k]
                arrayNum[k] = arrayNum[k+1]
                arrayNum[k+1] = temp
            }
        }
    }
    // console.log(arrayNum)
    return arrayNum[0]
}

console.log(pasanganTerbesar(1234))
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99