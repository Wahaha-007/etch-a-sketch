paintColor = 'black';
currentGrid = 40;

function createGrid(gSize) {

    let gWidth = Math.round(400 / (gSize + 3));

    // console.log(gWidth);

    const cContainer = document.querySelector(".container-box");

    for (let y = 1; y <= gSize; y++) {

        const cRow = document.createElement('div');
        cRow.classList.add('gRow');

        for (let i = 1; i <= gSize; i++) {
            const gCell = document.createElement('div');
            gCell.classList.add('gCell');
            gCell.style.width = gWidth + 'px';
            gCell.style.height = gWidth + 'px';
            cRow.appendChild(gCell);
        }
        cContainer.appendChild(cRow);
    }
}

function changeColor(e) {

    e.target.style.backgroundColor = paintColor;
}

function buttAction(e) {

    let mChoice = e.target.getAttribute('choice');

    mChoice = Number(mChoice);

    /* Case 1 : User click "change grid" button */

    if (mChoice < 100) {

        /* 1. First remove all chile from container box = delete the old grid */
        const myNode = document.querySelector(".container-box");;
        while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }

        /* 2. Create new grid */
        if(mChoice == 90) // Just clear
        {

        } 
        else{
            currentGrid = mChoice;
        }
        

        createGrid(currentGrid);


        /* 3. Create new Listener */

        const gCells = Array.from(document.querySelectorAll('.gCell'));
        gCells.forEach(key => key.addEventListener('mouseover', changeColor));


        const butts = Array.from(document.querySelectorAll('.bAction'));
        butts.forEach(key => key.addEventListener('click', buttAction));
    }

    /* Case 2 : User clicks color buton */
    if(mChoice == 200) paintColor = 'black';
    else if(mChoice == 201) paintColor = 'white';


    /* Case 3 :User clicks clear button */


}

createGrid(40);


const gCells = Array.from(document.querySelectorAll('.gCell'));
gCells.forEach(key => key.addEventListener('mouseover', changeColor));


const butts = Array.from(document.querySelectorAll('.bAction'));
butts.forEach(key => key.addEventListener('click', buttAction));