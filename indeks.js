const btn = document.querySelector("button");
let number = 1;
btn.addEventListener('click', function () {
    console.log("click");
    // let number = 1;
    const newLiElement = document.createElement("li");
    newLiElement.textContent = number;
    document.body.appendChild(newLiElement);
    const list = document.querySelector("ul");
    list.appendChild(newLiElement);
    number += 2;
    if (number % 3 == 0) {
        newLiElement.classList.add("big");
    }
})