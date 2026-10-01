const red: [number, number, number] = [255, 0, 0];

const green: [number, number, number] = [0, 255, 0];

const blue: [number, number, number] = [0, 0, 255];


function createRGBColor(color: [number, number, number]): string {

    const [red, green, blue] = color;

    return `rgb(${red}, ${green}, ${blue})`;
}


const preview = document.querySelector<HTMLDivElement>("#color-preview");

const redButton = document.querySelector<HTMLButtonElement>("#red-button");

const greenButton = document.querySelector<HTMLButtonElement>("#green-button");

const blueButton = document.querySelector<HTMLButtonElement>("#blue-button");


redButton?.addEventListener("click", () => {

    if (!preview) return;

    preview.style.backgroundColor = createRGBColor(red);

});


greenButton?.addEventListener("click", () => {

    if (!preview) return;

    preview.style.backgroundColor = createRGBColor(green);

});


blueButton?.addEventListener("click", () => {

    if (!preview) return;

    preview.style.backgroundColor = createRGBColor(blue);

});