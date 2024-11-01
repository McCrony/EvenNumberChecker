const numberInput = document.querySelector('#number');
const checkButton = document.querySelector('#checkButton');
const evenResult = document.querySelector('.evenNumber');
const oddResult = document.querySelector('.oddNumber');


checkButton.addEventListener("click", checkEvenorOdd);

function checkEvenorOdd(){
    evenResult.style.display = "none";
    oddResult.style.display = "none";

    if(numberInput.value === ""){
        alert('Enter a number');
    }
    else if (numberInput.value %2 == 0) {
        evenResult.innerHTML = `${numberInput.value}  is an even number`;
        evenResult.style.display = "block";
    } 
    else {
        oddResult.innerHTML = `${numberInput.value}  is an odd number`;
       oddResult.style.display = 'block';  
    }
}