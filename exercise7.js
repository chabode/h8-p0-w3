function hitungJumlahKata (kata){
    var arr = []
    var temp = ""
    var len = kata.length
    for (var i= 0 ; i<len ; i++){
        if(kata[i]===" "){
            arr.push(temp)
            temp = ""
        } else {
            temp += kata[i]
        }
    }
    if (temp){
        arr.push(temp)
    }
    return arr.length
}

console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
