function palindrome(kata){
    var len = kata.length
    for(var i = 0; i < len/2 ; i++){
        if (kata[i] !== kata[len - 1 -i]){
            return false
        }
    }
    return true
}
function palindrome2(kata){
    var len = kata.length
    var char = ""
    for (var i = kata.length-1; i>=0; i--){
        char += kata[i]
    }
    // return char
    // console.log(char)
    if (kata !== char){
        return false
    }else{
        return true
    }
    
}

console.log(palindrome2('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome2('civic')); // true
console.log(palindrome2('kasur rusak')); // true
console.log(palindrome('mister')); // false