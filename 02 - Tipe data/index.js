let challenge = "30 hari bersama JavaScript"

console.log(challenge)
console.log(challenge.length)

let kapital = challenge.toUpperCase()
console.log(kapital)

let hurufKecil = challenge.toLowerCase()
console.log(hurufKecil)

let potong = challenge.substring(0, 7) //mengambil substring dari index 0 sampai 7
console.log(potong)

potong = challenge.slice(8, 25) // memotong dari index 8 sampai 25
console.log(potong)

console.log(challenge.includes("Script")) // mengecek apakah ada string yang dicari

let belah = challenge.split(" ") // memecah string menjadi array dengan pemisah spasi
console.log(belah)

console.log(challenge.replace("JavaScript", "Python")) // mengganti string yang dicari dengan string yang baru
console.log(challenge.charAt(17)) // mengambil karakter dari index ke 15
console.log(challenge.charCodeAt(17)) // mengambil kode dari karakter dari index ke 15
console.log(challenge.indexOf('a')) // mengambil index dari karakter yang dicari
console.log(challenge.lastIndexOf('a')) // mengambil index terakhir dari karakter yang dicari
console.log(challenge.trim()) // menghilangkan spasi pada awal dan akhir string
console.log(challenge.startsWith('30')) // mengecek apakah string diawali dengan string yang dicari
console.log(challenge.endsWith('JavaScript')) // mengecek apakah string diakhiri dengan string yang dicari
console.log(challenge.match('a')) // mengambil karakter yang dicari

let string1 = "30 hari bersama"
let string2 = "JavaScript"
console.log(string1.concat(string2)) // menggabungkan string
console.log(challenge.repeat(2)) // mengulang string

console.log()
perusahaan = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
namaPerusahaan = perusahaan.split(", ") // memecah string menjadi array dengan pemisah koma
console.log(namaPerusahaan)


let sentence = "You cannot end a sentence with because because because is a conjunction"
console.log(sentence.indexOf("because")) // mengambil index dari kata yang dicari
console.log(sentence.lastIndexOf("because")) // mengambil index terakhir dari karakter yang dicari
console.log(sentence.search("because")) // mencari string yang dicari
console.log(sentence.substr(sentence.indexOf("because"), 23)) // mengambil substring dari index because sampai 23
