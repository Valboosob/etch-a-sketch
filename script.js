const box = document.getElementById('box');

for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'square');

    box.append(div);
}

