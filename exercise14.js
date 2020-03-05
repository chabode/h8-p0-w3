function mengelompokkanAngka(arr){
    var arrGenap = []
    var arrGanjil = []
    var arrTiga = []
    var len = arr.length
    for (var i = 0; i < len ; i++){
        if (arr[i]%3 === 0){
            arrTiga.push(arr[i])
        } else if (arr[i]%2 === 0){
            arrGenap.push(arr[i])
        } else if (arr[i]%2 !== 0){
            arrGanjil.push(arr[i])
        }
    }
    var result = [arrGenap,arrGanjil,arrTiga]
    return result
}

console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]