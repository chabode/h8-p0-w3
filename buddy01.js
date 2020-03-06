function saleCoklat(list, money) {
    var result = []
    
    for (var i = 0; i < list.length; i++){
        for (var j = 0; j < list.length-1; j++){
            if(list[j][1] < list[j+1][1]){
                var temp = list[j]
                list[j] = list[j+1]
                list[j+1] = temp
            }
        }
    }
    // console.log(list)
    while (money >= list[list.length-1][1]){
        // var temp = []
        for (var i = 0; i < list.length ; i++){
            var flag = false;
            if (money >= list[i][1]){
                for (var j = 0; j < result.length ; j++){
                    if (result[j][0] === list[i][0]){
                        result[j][1]++
                        money -= list[i][1]
                        flag = true
                    }
                }
                if(!flag){
                    result[j]=[]
                    result[j].push(list[i][0],1)
                    money -= list[i][1]
                }
            }
        }
    }
    return result

}
console.log(
	saleCoklat(
		[
			['Ferrero Rocher', 25000],
			['Cadbury', 38000],
			['Hersheys', 53500],
			['Waltz', 36000],
			['Toblerone', 42000],
			['Guylian', 13000]
		],
		100000
	)
);
//[ [ 'Hersheys', 1 ], [ 'Toblerone', 1 ] ]
console.log(
	saleCoklat(
		[
			['Ferrero Rocher', 25000],
			['Cadbury', 38000],
			['Hersheys', 53500],
			['Waltz', 36000],
			['Toblerone', 42000],
			['Guylian', 13000]
		],
		200000
	)
);
// // /**
// //  * 
// //  * [
// //   [ 'Hersheys', 1 ],
// //   [ 'Toblerone', 1 ],
// //   [ 'Cadbury', 1 ],
// //   [ 'Waltz', 1 ],
// //   [ 'Ferrero Rocher', 1 ]
// // ]
// //  * 
// //  */
console.log(
	saleCoklat(
		[
			['Ferrero Rocher', 25000],
			['Cadbury', 38000],
			['Hersheys', 53500],
			['Waltz', 36000],
			['Toblerone', 42000],
			['Guylian', 13000]
		],
		500000
	)
);
// /**
//  *
// [
//   [ 'Hersheys', 3 ],
//   [ 'Toblerone', 2 ],
//   [ 'Cadbury', 2 ],
//   [ 'Waltz', 2 ],
//   [ 'Ferrero Rocher', 3 ],
//   [ 'Guylian', 2 ]
// ]
//  * 
//  */
console.log(
	saleCoklat(
		[
			['Waltz', 25000],
			['Lindt', 30000],
			['Toblerone', 20000]
		],
		100000
	)
);
// /**
//  * 
// [ [ 'Lindt', 1 ], [ 'Waltz', 2 ], [ 'Toblerone', 1 ] ]
//  * 
//  */