"use strict";
const red = [255, 0, 0];
const green = [0, 255, 0];
const blue = [0, 0, 255];
function createRGBColor(color) {
    const [red, green, blue] = color;
    return `rgb(${red}, ${green}, ${blue})`;
}
const preview = document.querySelector("#color-preview");
const redButton = document.querySelector("#red-button");
const greenButton = document.querySelector("#green-button");
const blueButton = document.querySelector("#blue-button");
redButton?.addEventListener("click", () => {
    if (!preview)
        return;
    preview.style.backgroundColor = createRGBColor(red);
});
greenButton?.addEventListener("click", () => {
    if (!preview)
        return;
    preview.style.backgroundColor = createRGBColor(green);
});
blueButton?.addEventListener("click", () => {
    if (!preview)
        return;
    preview.style.backgroundColor = createRGBColor(blue);
});
