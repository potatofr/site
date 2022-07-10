// Select anchor element
let more = document.querySelector('.more');
//Return array
let audioArr = document.getElementsByTagName('audio');
console.log(audioArr);
// Add event listeners
more.addEventListener('mouseenter', ()=>{
    audioArr[0].play()
});