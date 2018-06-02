// Soal Pertama => Logic Challenge - Target Terdekat

var targetTerdekat = (arr) => {

	var jarakSpasi = 0
	var karakter = ""
	var simpan = 0
	for (var i = 0; i < arr.length; i++) {		
		
		if ((arr[i] == 'o' || arr[i] == 'x') && karakter == "") {
			karakter = arr[i]
		}else if ((karakter == 'o' || karakter == 'x') && arr[i] == " ") {
			jarakSpasi += 1
		}else if (karakter != arr[i] && arr[i] != " ") {
			jarakSpasi += 1
			if (jarakSpasi > simpan) {
				simpan = jarakSpasi
				jarakSpasi = 0	
				break
			}			
		}else if (karakter == arr[i]) {
			jarakSpasi = 0
		}

	}
	return simpan
}

console.log(`Soal Pertama => Logic Challenge - Target Terdekat`)
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log()

// Soal Kedua =>Logic Challenge - Mengelompokkan Angka

var mengelompokkanAngka = (arr) => {
	
	var array = [[],[],[]]

	for (var i = 0; i < arr.length; i++) {

		if ((arr[i] % 2 == 0) && (arr[i] % 3) > 0) {
			array[0].push(arr[i])
		}else if ((arr[i] % 2 > 0) && (arr[i] % 3) > 0) {
			array[1].push(arr[i])
		}else{
			array[2].push(arr[i])
		}

	}
	return array
} 

console.log(`Soal Kedua =>Logic Challenge - Mengelompokkan Angka`)
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
console.log()


// Soal Ketiga => Logic Challenge - Mengelompokkan Hewan

var groupAnimals = (animals) => {

	var array = []
	var karakter = ""
	var index = 0
	animals.sort();
	for (var i = 0; i < animals.length; i++) {

		if (i == 0) {
			karakter = animals[i][0]
			array.push([animals[i]])
		}else if (karakter == animals[i][0]) {
			array[index].push(animals[i])
		}else{
			karakter = animals[i][0]
			array.push([animals[i]])
			index += 1
		}			

	}
	return array
}

console.log(`Soal Ketiga => Logic Challenge - Mengelompokkan Hewan`)
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]