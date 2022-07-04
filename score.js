const btn1 = document.querySelector('#p1button')
const btn2 = document.querySelector('#p2button')
const p1disp = document.querySelector('#p1score')
const p2disp = document.querySelector('#p2score')
const resetbtn = document.querySelector('#reset');
const winto = document.querySelector('#playto');
let p1s = 0;
let p2s = 0;
let winningscore = 3;
let gameover = false;
btn1.addEventListener('click', function () {
    if (!gameover) {
        p1s += 1

        if (p1s === winningscore) {
            gameover = true;
            p1disp.classList.add('winner')
            p2disp.classList.add('loser')

            btn1.disabled = true;
            btn2.disabled = true;

        }
        p1disp.textContent = p1s;
    }
})
btn2.addEventListener('click', function () {
    if (!gameover) {
        p2s += 1
        if (p2s === winningscore) {
            gameover = true;
            p2disp.classList.add('winner')
            p1disp.classList.add('loser')
            btn1.disabled = true;
            btn2.disabled = true;

        }
        p2disp.textContent = p2s;
    }
})
//change event is used in input types ,select types tags to alter the value according to options
winto.addEventListener('change', function () {
    winningscore = parseInt(this.value);
    reset();
    //this .value is a string to make it integer use parse int
})
resetbtn.addEventListener('click', reset);

function reset() {
    gameover = false;
    p1s = 0;
    p2s = 0;
    p1disp.textContent = 0;
    p2disp.textContent = 0;
    p1disp.classList.remove('winner', 'loser')
    p2disp.classList.remove('loser', 'winner')
    btn1.disabled = false;
    btn2.disabled = false;
}