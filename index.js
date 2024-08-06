let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let imgcomp = document.getElementById('imgcomp')
let imgyou = document.getElementById('imgyou')
let pyou = document.getElementById('pyou')
let pcomp = document.getElementById('pcomp')
let youscore = document.getElementById('youscore')
let compscore = document.getElementById('compscore')
let result = document.getElementById('result')
let reset = document.getElementById('reset')
let name = window.prompt("Enter your name: ")
let youscores = 0;
let compscores = 0;

youscore.textContent = `${name}: 0`

if (name == "" || name == null) {
    name = `You`
}
youscore.textContent = `${name}: 0`

one.onclick = function () {
    imgcomp.textContent = ``
    pyou.textContent = `${name}`
    pcomp.textContent = `Player 2`
    let random = Math.round(Math.random() * 8) + 1
    let image = document.createElement('img')
    image.src = `${random}.png`
    image.width = 100
    image.border = 1

    imgcomp.appendChild(image);

    if (imgyou.querySelector('img')) {
        imgyou.textContent = ``
    }
    let image1 = document.createElement(`img`)
    image1.src = `1.png`
    image1.width = 150

    imgyou.appendChild(image1);



    if ((random == 1 && one.onclick) || (random == 4 && one.onclick) || (random == 7 && one.onclick)) {
        result.textContent = `Draw!`
    }
    else if ((random == 2 && one.onclick) || (random == 5 && one.onclick) || (random == 8 && one.onclick)) {
        result.textContent = `You Lose!`
        compscores++
        youscore.textContent = `${name}: ${youscores}`
        compscore.textContent = `Player 2: ${compscores}`
    }
    else {
        result.textContent = `You Win!`
        youscores++
        youscore.textContent = `${name}: ${youscores}`
        compscore.textContent = `Player 2: ${compscores}`
    }
}

two.onclick = function () {
    imgcomp.textContent = ``
    pyou.textContent = `${name}`
    pcomp.textContent = `Player 2`
    let random = Math.round(Math.random() * 2) + 1
    let image = document.createElement('img')
    image.src = `${random}.png`
    image.width = 100
    image.style.border = `1px solid black`

    imgcomp.appendChild(image);

    if (imgyou.querySelector('img')) {
        imgyou.textContent = ``
    }
    let image2 = document.createElement(`img`)
    image2.src = `2.png`
    image2.width = 150

    imgyou.appendChild(image2);



    if ((random == 2 && two.onclick) || (random == 5 && two.onclick) || (random == 8 && two.onclick)) {
        result.textContent = `Draw!`
    }
    else if ((random == 3 && two.onclick) || (random == 6 && two.onclick) || (random == 9 && two.onclick)) {
        result.textContent = `You Lose!`
        compscores++
        youscore.textContent = `${name}: ${youscores}`
        compscore.textContent = `Player 2: ${compscores}`
    }
    else {
        result.textContent = `You Win!`
        youscores++
        youscore.textContent = `${name}: ${youscores}`
        compscore.textContent = `Player 2: ${compscores}`
    }
}

three.onclick = function () {
    imgcomp.textContent = ``
    pyou.textContent = `${name}`
    pcomp.textContent = `Player 2`
    let random = Math.round(Math.random() * 2) + 1
    let image = document.createElement('img')
    image.src = `${random}.png`
    image.width = 100
    image.border = 1

    imgcomp.appendChild(image);



    if (imgyou.querySelector('img')) {
        imgyou.textContent = ``
    }
    let image3 = document.createElement(`img`)
    image3.src = `3.png`
    image3.width = 150

    imgyou.appendChild(image3);

    if ((random == 3 && three.onclick) || (random == 6 && three.onclick) || (random == 9 && three.onclick)) {
        result.textContent = `Draw!`
    }
    else if ((random == 1 && three.onclick) || (random == 4 && three.onclick) || (random == 7 && three.onclick)) {
        compscores++
        result.textContent = `You Lose!`
        youscore.textContent = `${name}: ${youscores}`
        compscore.textContent = `Player 2: ${compscores}`
    }
    else {
        result.textContent = `You Win!`
        youscores++
        youscore.textContent = `${name}: ${youscores}`
        compscore.textContent = `Player 2: ${compscores}`
    }
}

reset.onclick = function resetgame() {
    name = prompt("Enter your name: ")
    if (name == "" || name == null) {
        name = `You`
    }
    result.textContent = ``
    compscores = 0
    youscores = 0
    compscore.textContent = `Computer: 0`
    youscore.textContent = `${name}: 0`
    imgcomp.textContent = ``
    imgyou.textContent = ``
    pcomp.textContent = ``
    pyou.textContent = ``
}