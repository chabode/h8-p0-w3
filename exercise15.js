function groupAnimals(animals) {
    // you can only write your code here!
    for (var i = 0 ; i < animals.length; i++){
        for (var j = 0 ; j < animals.length; j++){
            if (animals[j] > animals[j+1]){
                var temp = animals[j]
                animals[j] = animals[j+1]
                animals[j+1] = temp
            }
        }
    }
    var newArr = []
    var newAnimals = []
    for (var k = 0 ; k < animals.length-1; k++){
        if(animals[k][0] === animals[k+1][0]){
            newArr.push(animals[k],animals[k+1])
        } else {
            newAnimals.push(newArr)
            // newArr = []
        }
        // console.log(newArr)
    }
    console.log(newAnimals)
    
    return animals
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]