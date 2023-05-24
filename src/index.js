import Game from "./scripts/game";
// import Character from "./scripts/character";

document.addEventListener("DOMContentLoaded", ()=> {
    const canvas = document.getElementById('mister-game');
    const buttonInstructionsInside = document.createElement('button');
    buttonInstructionsInside.setAttribute('id', 'button-instructions');
    buttonInstructionsInside.textContent= "?";
    const divCanvas = document.getElementById('div-canvas');

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
        divCanvas.prepend(buttonInstructionsInside);
        let game = new Game(canvas);
        divButton.remove();
    });

    instructions.addEventListener('click', () => {
        // const list = document.getElementById('list');
        const containerList = document.createElement('div');
        containerList.setAttribute('id', 'instruction-list');
        const list = document.createElement('ul');

        const firts = document.createElement('li');
        firts.textContent = "use the letters 'A' and 'D' to move to the sides";
        const second = document.createElement('li');
        second.textContent = "user the 'spacebar' to jump";
        const third = document.createElement('li');
        third.textContent = "use the letter 'c' + 'd' or 'c' + 'a' to destroy the red walls";
        const fourth = document.createElement('li');
        fourth.textContent = "You can pause the game with the letter 'p'";

        list.append(firts);
        list.append(second);
        list.append(third);
        list.append(fourth);
        containerList.append(list);

        const divContainerList = document.getElementById('container-instructions');
        const backButton = document.createElement('button');
        backButton.textContent = 'close';
        backButton.setAttribute('id', 'button3')
        containerList.append(backButton);
        divContainerList.append(containerList);

        backButton.addEventListener('click', () => {
            divContainerList.removeChild(containerList);
        });
    });

    // buttonInstructionsInside.addEventListener('click', () => {
    //     // const list = document.getElementById('list');
    //     const containerList = document.createElement('div');
    //     containerList.setAttribute('id', 'instruction-list');
    //     const list = document.createElement('ul');

    //     const firts = document.createElement('li');
    //     firts.textContent = "use the letters 'A' and 'D' to move to the sides";
    //     const second = document.createElement('li');
    //     second.textContent = "user the 'spacebar' to jump";
    //     const third = document.createElement('li');
    //     third.textContent = "use the letter 'c' to destroy the red walls";
    //     const fourth = document.createElement('li');
    //     fourth.textContent = "You can pause the game with the letter 'p'";

    //     list.append(firts);
    //     list.append(second);
    //     list.append(third);
    //     list.append(fourth);
    //     containerList.append(list);

    //     const divContainerList = document.getElementById('container-instructions');
    //     const backButton = document.createElement('button');
    //     backButton.textContent = 'close';
    //     backButton.setAttribute('id', 'button3')
    //     containerList.append(backButton);
    //     divContainerList.append(containerList);

    //     backButton.addEventListener('click', () => {
    //         // list.removeChild(firts);
    //         // list.removeChild(second);
    //         // list.removeChild(third);
    //         // list.removeChild(fourth);
    //         divContainerList.removeChild(containerList);
    //     });
    // });
});

