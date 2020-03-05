function angkaPalindrome(num){
    // var newNum = ''
    while(num > 0){
        num++

        var temp = ""
        var strNum = num.toString()
        var len = strNum.length
        for (var i = len-1; i>=0; i--){
            temp += strNum[i]
        }
        if (strNum === temp){
            return num
        }
    }
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1303)); // 181
console.log(angkaPalindrome(1000)); // 1001
