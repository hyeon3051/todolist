const body = document.querySelector("body")

const IMG_NUMBER = 3

function painToimage(num) {
    const image = new Image();
    image.src = `images/${num+1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function getRandom() {
    const num = Math.floor(Math.random() * IMG_NUMBER);
    return num;
}

function init() {
    const num = getRandom();
    painToimage(num)
}


init();