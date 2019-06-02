const Counter = document.querySelector('.counter');
const AddCount = document.querySelector('#addCountBtn');
const LowerCount = document.querySelector('#lowerCountBtn');

let Count = 0;

AddCount.addEventListener('click',incrementCounter);
LowerCount.addEventListener('click',decrementCounter);

function incrementCounter() {
    Count++;
    Counter.innerHTML = Count;
    if(Counter.innerHTML>'0') {
        Counter.style.color = '#4caf50';
    } else if(Counter.innerHTML === '0') {
        Counter.style.color = 'white';
    }
    Counter.animate([
        {
            opacity: 0.2
        },
        {
            opacity: 1.0
        }
    ],
    {
        duration: 600,
        fill: 'forwards'
    }
    );  
} 
function decrementCounter() {
    Count--;
    Counter.innerHTML = Count;
    if (Counter.innerHTML<'0') {
        Counter.style.color = 'red';
    } else if (Counter.innerHTML === '0') {
        Counter.style.color = 'white';
    }    
    Counter.animate([
        {
            opacity: 0.2
        },
        {
            opacity: 1.0
        }
    ],
    {
        duration: 500,
        fill: 'forwards'
    }
    );
} 