function dataHandling(arr){
    var id = ""
    var nama = ""
    var tempat = ""
    var tanggal = ""
    var hobi = ""
    for (var i = 0; i<arr.length; i++){
        id = arr[i][0]
        nama = arr[i][1]
        tempat = arr[i][2]
        tanggal = arr[i][3]
        hobi = arr[i][4]
        console.log(` Nomor ID : ${id} \n Nama Lengkap : ${nama} \n TTL : ${tempat} ${tanggal} \n Hobi : ${hobi} \n`)    
    }
    // console.log(`Nomor ID : ${id} \n Nama Lengkap : ${nama} \n TTL : ${tempat} ${tanggal} \n Hobi : ${hobi}`)
}

var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

dataHandling(input)