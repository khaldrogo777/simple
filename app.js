var menuBox = document.getElementById('topmenu');

function myFunction(){
    menuBox.classList.toggle('d-block');
}
// slider///////////////////////////////
const slides =document.querySelectorAll('.first')
var counter = 0;
console.log(counter);
console.log(slides.length);
slides.forEach ( 
    (first,index) => {
        first.style.top= `${index * 100}%`
    
} );
if(slides.length < counter){
const goNext = () => {
    counter++
    slideImage()
    console.log(counter);
}
}else{
const goNext = () => {
    counter== 0
    slideImage()
    console.log(counter);
}
}
const goPrevious = () => {
    counter--
    slideImage();
    console.log(counter);
}

const slideImage = () => {
    slides.forEach (
        (first) => {
            first.style.transform =`translateY(${counter * 100}%)`
        }
    )
}