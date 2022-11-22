const nums = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const total = [...nums, ...operators];

import * as events from "./events.js";


function refresh() {
    (events.calc.input.atomic < 0) ? document.getElementById("input").innerHTML = `${Math.abs(events.calc.input.atomic)}-`
    : document.getElementById("input").innerHTML=`${events.calc.input.atomic}`;
}

total.forEach(el => {
    el.addEventListener("mousedown", ()=>{
        el.classList.add("pressed");
    });

    el.addEventListener("mouseup", ()=>{
        el.classList.remove("pressed");
    });
});

window.addEventListener("keydown", (event) => {
    let key = document.querySelector(`div[data-key="${event.key}"]`);
    if (key == null || key.classList.contains("pressed")) return;
    else key.classList.add("pressed");
    refresh();
});

window.addEventListener("keyup", (event) => {

    let key = document.querySelector(`div[data-key="${event.key}"]`);
    if (key == null || !key.classList.contains("pressed")) return;
    else key.classList.remove("pressed")

    if (key.classList.contains("num")) {
        events.onNumber(event.key);
        refresh();
    }

    if (key.classList.contains("operator")) {
        events.onOperator(event.key);
        refresh();
    }

    if (key.id=="back") {
        events.onBackSpace();
    }

    if (key.id=="eq") {
        events.onSolve();
    }

    refresh();
});




