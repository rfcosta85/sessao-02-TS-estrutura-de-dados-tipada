const user: [name:string, age: number, profession: string] = ['Ozzy', 76, "Músico"];

console.log(user[2]);

const red: [number, number, number] = [255, 0, 0];
const green: [number, number, number] = [0, 255, 0];
const blue: [number, number, number] = [0, 0, 255];

function createRGBColor(color: [number, number, number]): string {

    const [red, green, blue] = color;

    return `rgb(${red}, ${green}, ${blue})`;
}

console.log(createRGBColor(red));
console.log(createRGBColor(green));
console.log(createRGBColor(blue));