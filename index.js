const nums = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const total = [...nums, ...operators];
console.log(total);


// we have two elements, really.
// the number input, which inputs a number that will be added to our second
// element, the operand chain, which is a series of functions to execute 
// in the correct mathematical fashion.

// lets work on making an operand first.
// and operand is either a number, or an operator and two operands.
// an operator is one of a few potential characters: '+','-','/','*'.
// We will add exponents, parenthesis later. 

// examples: Operand (+, 2 2) equates to four.
let past_inp = 0;
let cur_inp = "";

function refresh() {
    document.getElementById("input").innerHTML=cur_inp;
}

// lets define solve(operand):
function solve(operand) {
    if ("atomic" in operand) return operand.atomic;
    switch (operand.operator) {
        case '+':
            return (solve(operand.one) + solve(operand.two));
        case '-':
            return (solve(operand.one) - solve(operand.two));
        case '/':
            return (solve(operand.one) / solve(operand.two));
        case '*':
            return (solve(operand.one) * solve(operand.two));
        default:
            break;
    }
    return "Error! Invalid Operator."
}

total.forEach(el => {
    el.addEventListener("mousedown", ()=>{
        el.classList.add("pressed");
        console.log(el.getAttribute("data-key"));
    });

    el.addEventListener("mouseup", ()=>{
        el.classList.remove("pressed");
    });
});


window.addEventListener("keydown", (event) => {
    let key = document.querySelector(`div[data-key="${event.key}"]`);
    if (key == null || key.classList.contains("pressed")) return;
    else key.classList.add("pressed");
});


window.addEventListener("keyup", (event) => {
    let key = document.querySelector(`div[data-key="${event.key}"]`);
    if (key == null || !key.classList.contains("pressed")) return;
    else key.classList.remove("pressed");

    if (key.classList.contains("num")) {
        cur_inp = cur_inp + event.key;
    }

    refresh();
});


console.log(total[0].classList);