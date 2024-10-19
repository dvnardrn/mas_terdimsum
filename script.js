let Count = 0;
console.log(Count);
Count=1000;
console.log(Count);
let maxCount = 3;
const imageSources=[
  "keranjang1.png",
  "keranjang2.png",
  "keranjang3.png",

]
const button = document.getElementById("tombol")
const paragraph = document.getElementById("paragraf")
const image = document.getElementById("gambar")
const alenia = document.getElementById("alenia")
const maksimum = document.getElementsByClassName("maksimal")
const score = 90
const maksimal = 10
let berhitung = 0
console.log(button)
console.log(paragraph)
console.log(image)
console.log(alenia)
image.src = imageSources[2]
function rubahAngka(){
  paragraph.textContent =1000
}
button.addEventListener('click',startcounting);
function rubahTulisan(){
  paragraph.textContent ="tulisan"
}
function rubahKalimat(){
  paragraph.textContent ="ini adalah kalimat"
}
function rubahalenia(){
  alenia.textContent ="Dimsum (Hanzi tradisional: 點心, Hanzi sederhana: 点心 Hanyu Pinyin: Diǎnxīn) adalah istilah dari bahasa Kanton yang berarti makanan kecil. Biasanya dimsum dimakan sebagai sarapan atau sarapan siang."
}
function rubahimage(){
  image.src="keranjang1.jpg"
}
function rubahnilai(){
  if(score>=90){
    console.log("congrats your grade is A")
  }
  else if(score>=80){
    console.log("congrats your grade is B")
  }
  else if(score>=70){
    console.log("your grade is C")
  }
  else if(score>=60){
    console.log("your grade is D, keep learning")
  }
  else if(score>=50){
    console.log("your grade is E, keep learning")
  }
}
function startcounting(){
  if(berhitung<=10){
    paragraph.textContent=berhitung;
    berhitung=berhitung +1;
    image.src=imageSources[berhitung-1];
  }
}
