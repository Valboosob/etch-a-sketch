
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
            alert("You inserted too small values. Please insert your values again.")
        } else if ( width > 0 && height > 0) {
            ++clickCount;
            gridSize();
        }
});


function gridSize() {
    const box = document.getElementById('box')
    let allSquares = width * height;
    box.style.width = `${width * 39}` + "px"; 
    box.style.height = `${height * 36.8}` + "px";

    if ( clickCount == 1) {
        for (let i = 0; i < allSquares; i++) {
            const div = document.createElement('div');
            div.setAttribute('class', 'square');
            box.appendChild(div);

            div.addEventListener('mouseover', function mouseOver() {
                div.setAttribute('class', 'mouseover');
            })
        }
    } else if ( clickCount > 1) {
        box.innerHTML = "";

        for (let i = 0; i < allSquares; i++) {
            const box = document.getElementById('box')
            const div = document.createElement('div');
            div.setAttribute('class', 'square');
            box.appendChild(div);

            div.addEventListener('mouseover', function mouseOver() {
                div.setAttribute('class', 'mouseover');
            })
        }
    }  
}

