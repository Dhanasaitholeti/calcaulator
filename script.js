//let us complete this today
//numbers buttons
allstr = "";


const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('thre');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seve');
const eight = document.getElementById('eigh');
const nine = document.getElementById('nine');
const zero = document.getElementById('numzero');
const dot = document.getElementById('deci');

//operators btns
const addition = document.getElementById('addi');
const subtract = document.getElementById('subt');
const multiply = document.getElementById('mult');
const divide = document.getElementById('divi');
const result = document.getElementById('result');

function getresult(equation){
    return (eval(equation));
}

//displaying to the screen

const displayText = document.getElementById('res');


one.addEventListener('click',()=>{
        allstr = allstr+'1';
        displayText.innerHTML = allstr;
});
two.addEventListener('click',()=>{
    allstr = allstr+'2';
    displayText.innerHTML = allstr;
});
three.addEventListener('click',()=>{
    allstr = allstr+'3';
    displayText.innerHTML = allstr;
});
four.addEventListener('click',()=>{
    allstr = allstr+'4';
    displayText.innerHTML = allstr;
});
five.addEventListener('click',()=>{
    allstr = allstr+'5';
    displayText.innerHTML = allstr;
});
six.addEventListener('click',()=>{
    allstr = allstr+'6';
    displayText.innerHTML = allstr;
});
seven.addEventListener('click',()=>{
    allstr = allstr+'7';
    displayText.innerHTML = allstr;
});
eight.addEventListener('click',()=>{
    allstr = allstr+'8';
    displayText.innerHTML = allstr;
});
nine.addEventListener('click',()=>{
    allstr+='9';
    displayText.innerHTML = allstr;
});
zero.addEventListener('click',()=>{
    allstr=allstr+'0';
    displayText.innerHTML = allstr;
});
addition.addEventListener('click',()=>{
    allstr = allstr + '+';
    displayText.innerHTML = allstr;
});
subtract.addEventListener('click',()=>{
    allstr+='-';
    displayText.innerHTML = allstr;
});
multiply.addEventListener('click',()=>{
    allstr+='*';
    displayText.innerHTML = allstr;
});
divide.addEventListener('click',()=>{
    allstr+='/';
    displayText.innerHTML = allstr;
});
dot.addEventListener('click',()=>{
    allstr = allstr+".";
    displayText.innerHTML = allstr;
});
result.addEventListener('click',()=>{
    displayText.innerHTML=getresult(allstr);

    allstr = "";

});

