import Game from "./scripts/game";
// import Character from "./scripts/character";

document.addEventListener("DOMContentLoaded", ()=> {
    const canvas = document.getElementById('mister-game');

    const divButton = document.getElementById('div-button');
    const startButton = document.createElement('button');
    const prg = document.createElement('p');
    prg.textContent = "Created by: Steven Zabala";
    prg.setAttribute('id', 'info');
    startButton.textContent = 'Start!'
    startButton.setAttribute('id', 'button1');
    divButton.append(startButton);

    const instructions = document.createElement('button');
    instructions.textContent = 'Instructions';
    instructions.setAttribute('id', 'button2');
    divButton.append(instructions);
    divButton.append(prg);

    startButton.addEventListener('click', () => {
        let game = new Game(canvas);
        divButton.remove();
    });

    instructions.addEventListener('click', () => {
        const list = document.getElementById('list');

        const firts = document.createElement('li');
        firts.textContent = 'use the letters A and D to move to the sides';
        const second = document.createElement('li');
        second.textContent = 'user the spacebar to jump';

        list.append(firts);
        list.append(second);

        const divlist = document.getElementById('instruction-list');
        const backButton = document.createElement('button');
        backButton.textContent = 'close';
        backButton.setAttribute('id', 'button3')
        divlist.append(backButton);

        backButton.addEventListener('click', () => {
            list.removeChild(firts);
            list.removeChild(second);
            divlist.removeChild(backButton);
        });
    });
});

