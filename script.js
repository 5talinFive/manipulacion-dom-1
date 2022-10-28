const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid')
const input = document.querySelector('input');

console.log(input.value);
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerText = '5talinFive <br> Dev5';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');

input.value = '666';

const img = document.createElement('img');
img.setAttribute('src', 'https://www.gamewallpapers.com/wallpapers_slechte_compressie/01wallpapers/wallpaper_diablo_4_fan_art_01_1920x1080.jpg');

console.log(img);
pid.innerHTML = "";
// pid.innerHTML = "";
pid.append(img);

