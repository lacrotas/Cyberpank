let slideCounter = -100;
const sliderArr = document.querySelectorAll('.container_image-slider');
let counter = 1;
function Slide() {
    console.log(sliderArr);

    for (let i = 0; i < sliderArr.length; i++) {
        if (i == counter) {
            sliderArr[i].style.opacity = 1;
        } else {
            sliderArr[i].style.opacity = 0;
        }
    }
    counter++;
    if (counter == 3) {
        counter = 0;
    }
}
setInterval(() => { Slide() }, 4000);