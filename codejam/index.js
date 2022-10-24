const container = document.createElement('div')
container.setAttribute('class', 'container')


const div = document.createElement('div')
div.setAttribute('class', 'div') 


// создаем кнопки


const button1 = document.createElement('button')
button1.setAttribute('class', 'button1')
button1.innerText = 'Shuffle and start'

const button2 = document.createElement('button')
button2.setAttribute('class', 'button2')
button2.innerText = 'Stop'
button2.addEventListener('click', () => {
    location.reload()
});

const button3 = document.createElement('button')
button3.setAttribute('class', 'button3')
button3.innerText = 'Save'

const button4 = document.createElement('button')
button4.setAttribute('class', 'button4')
button4.innerText = 'Results'


button1.addEventListener('click', () =>{
random(empty);  

});

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// numbers.sort(() => Math.random() - 0.5);


const max = 100;

function random(m){
    let x = null;
    let timer;
    let shuffleCount = 0;
    clearInterval(timer);
    if(shuffleCount === 0){
        timer = setInterval(() => { 
    let valid = [];
   for(let i = 0; i < cells.length; i ++){
    if(i !== x){
    const celll = cells[i];
    const leftDiff = Math.abs(empty.left - celll.left);
    const topDiff = Math.abs(empty.top - celll.top);

    if(leftDiff + topDiff === 1){
        valid.push(i);
    }
   }

}

    const swap = valid[
        Math.floor(Math.random() * valid.length)
    ]
    x = swap;
   console.log(x);
   
            change(swap);
            // console.log(swap);
            shuffleCount += 1;
            if(shuffleCount >= max){
                clearInterval(timer);
            }
        }, 30)
    }
}



// const movesTime = document.createElement('div')
// movesTime.setAttribute('class' ,'movesTime')


// поле

const field = document.createElement('div')
field.setAttribute('class', 'field')

const cellSize = 25;
const empty = {
    value: 0,
    left: 0,
    top: 0
};

const cells = [];
cells.push(empty);


function change(n){
        const cell = cells[n];
    const leftDiff = Math.abs(empty.left - cell.left);
    const topDiff = Math.abs(empty.top - cell.top);

    if(leftDiff + topDiff > 1){
        return;
    }


    cell.element.style.left = `${empty.left * cellSize}%`;
    cell.element.style.top = `${empty.top * cellSize}%`;

    const emptyLeft = empty.left;
    const emptyTop = empty.top;
    empty.left = cell.left;
    empty.top = cell.top;
    cell.left = emptyLeft;
    cell.top = emptyTop;

    const finish = cells.every(cell => { 
        console.log(cell.value, cell.left, cell.top);
        return cell.value === cell.left + cell.top * 4;
    });

    if(finish){
        alert('You won');
    };
}   
for (let i = 1; i <= 15; i++){
    const cell = document.createElement('div');
    const value = i;
    cell.className = 'cell';
    cell.innerHTML = value;
    const left = i % 4;
    const top = (i - left) / 4;
    cells.push({
        value: value,
        left: left,
        top: top,
        element: cell
    })
   
    
    cell.style.left = `${left * cellSize}%`;
    cell.style.top = `${top * cellSize}%`;
    
    field.append(cell); 

    cell.addEventListener('click', () => {
       change(i);

    });

}





const body = document.querySelector('body');





// структура

body.appendChild(container);
container.appendChild(div);
container.appendChild(field);
div.appendChild(button1);
div.appendChild(button2);
div.appendChild(button3);
div.appendChild(button4);
