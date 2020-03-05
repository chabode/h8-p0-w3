function balikKata(str){
    var char =""
    for (var i = str.length-1; i>=0; i--){
        char += str[i]
    }
    return char
}

console.log(balikKata('hello world'))