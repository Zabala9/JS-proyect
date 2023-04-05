import Game from "./scripts/game";
// import Character from "./scripts/character";

document.addEventListener("DOMContentLoaded", ()=> {
    const canvas = document.getElementById('mister-game');

    const divInfo = document.getElementById('div-info');
    const divButton = document.getElementById('div-button');
    const startButton = document.createElement('button');
    startButton.textContent = 'Start!'
    startButton.setAttribute('id', 'button1');
    divButton.append(startButton);

    const instructions = document.createElement('button');
    instructions.textContent = 'Instructions';
    instructions.setAttribute('id', 'button2');
    divButton.append(instructions);

    startButton.addEventListener('click', () => {
        let game = new Game(canvas);
        divButton.remove();
        divInfo.remove();

    });

    instructions.addEventListener('click', () => {
        console.log('done!')
    });
});

