var square = document.createElement('div');
//var randomColor = Math.floor(Math.rendom()*16777215).toString(16);
square.style.width = '11.1%';
square.style.paddingBottom = '11.1%';
square.style.backgroundColor = 'blue';
square.style.float = 'left'


let body = document.querySelector('body')


for (let i = 0; i < 81; i++) {

    let color = '#' + Math.floor(Math.random() * 16777215).toString(16)
    square.style.backgroundColor = color;
    // if(i%2 ===0) {
    //     square.style.backgroundColor = 'red'
    // } else {
    //     square.style.backgroundColor = 'black'
    //        }
    body.appendChild(square.cloneNode())
}


