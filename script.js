
const button = document.querySelector('.button');
let width = "0";
let height = "0";
let clickCount = "0";

button.addEventListener('click', function buttonClicked() {
        width = prompt("Width:", " ");
        height = prompt("Height:", " ");
        
        if ( width > 100 || height > 100) {
            alert("100 is limit for the grid size. Please insert lower values.");
        } else if ( width <= 0 || height <= 0) {
            alert("0 is too small of a value. Please insert your values again.")
        } else if ( width > 0 && height > 0) {
            ++clickCount;
            gridSize();
        }
});


function gridSize() {
    let allSquares = width * height;
    box.style.width = `${width * 39}` + "px"; 
    box.style.height = `${height * 36.8}` + "px";

    if ( clickCount == 1) {
        for (let i = 0; i < allSquares; i++) {
            const box = document.getElementById('box')
            const div = document.createElement('div');
            div.setAttribute('class', 'square');
            box.appendChild(div);
        }
    } else if ( clickCount > 1) {
        const box = document.getElementById('box');
        box.innerHTML = "";

        for (let i = 0; i < allSquares; i++) {
            const box = document.getElementById('box')
            const div = document.createElement('div');
            div.setAttribute('class', 'square');
            box.appendChild(div);
        }  
    }

}
