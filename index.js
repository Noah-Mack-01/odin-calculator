const nums = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const total = [...nums, ...operators];
console.log(total);


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
});


console.log(total[0].classList);