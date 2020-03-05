function dataHandling2(input){
    
    input.splice(1,2,"Roman Alamsyah Elsharawy","Propinsi Bandar Lampung")
    input.splice(4,1,"Pria", "SMA Internasional Metro")
    console.log(input)
    
    var split1 = input[3].split("/")
    var bulan = Number(split1[1])
    switch(bulan) {
        case 01:{
            bulan = "Januari"
            break
        }
        case 02:{
            bulan = "Februari"
            break
        }
        case 03:{
            bulan = "Maret"
            break
        }
        case 04:{
            bulan = "April"
            break
        }
        case 05:{
            bulan = "Mei"
            break
        }
        case 06:{
            bulan = "Juni"
            break
        }
        case 07:{
            bulan = "Juli"
            break
        }
        case 08:{
            bulan = "Agustus"
            break
        }
        case 09:{
            bulan = "September"
            break
        }
        case 10:{
            bulan = "Oktober"
            break
        }
        case 11:{
            bulan = "November"
            break
        }
        case 12:{
            bulan = "Desember"
            break
        }
    }
    console.log(bulan)
    
    var split2 = input[3].split("/")
    // dengan function .sort
    var bulan = split2.sort(function(a,b) {return b-a})
    console.log(bulan)
    
    // untuk hasil menjadi number
    // var result = []
    // for (var i = 0 ; i < split2.length; i++){
    //     result.push(+split2[i])
    // }
    // for (var i = 0 ; i < result.length; i++){
    //     for (var j = 0 ; j < result.length; j++){
    //         if (result[j] < result[j+1]){
    //             var temp = result[j]
    //             result[j] = result[j+1]
    //             result[j+1] = temp
    //         }
    //     }
    // }
    // console.log(result)

    // untuk hasil tetap menjadi string
    // for (var i = 0 ; i < split2.length; i++){
    //     for (var j = 0 ; j < split2.length; j++){
    //         if (split2[j] < split2[j+1]){
    //             var temp = split2[j]
    //             split2[j] = split2[j+1]
    //             split2[j+1] = temp
    //         }
    //     }
    // }
    // console.log(split2)
    
    var split3 = input[3].split("/").join("-")
    console.log(split3)

    var char1 = input[1].slice(0,15)
    console.log(char1)
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"]
dataHandling2(input)