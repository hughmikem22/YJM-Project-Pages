

var i = 0;
var images = [];
var time = 3000;

images[0] = 'images/reading_shutterstock_289623677.jpg';
images[1] = 'images/evening-landscape-13530956185Aw.jpg';
images[2] = 'images/beachstock.jpg';

function changeImg() {
    document.carousel.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
    i = 0;

}

setTimeout("changeImg()", time);
}

window.onload = changeImg







