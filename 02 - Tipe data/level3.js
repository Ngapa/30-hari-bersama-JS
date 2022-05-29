let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let sentence2 = "You cannot end a sentence with because because because is a conjunction"
const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let sentence4 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let num = sentence4.match(/\d+/g) // mengambil angka dari string
num = num.map(Number) // mengubah string menjadi angka
let hitungLove = sentence.match(/love/gi)
console.log(hitungLove.length)
console.log(sentence2.match(/because/gi).length)
console.log(sentence3.replace(/[/!#/&$%/@;]/gi, ''))
console.log(num.reduce((a, b) => a + b)) // menjumlahkan angka