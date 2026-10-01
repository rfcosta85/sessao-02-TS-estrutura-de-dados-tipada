// Atenção sempre ao tipo de retorno que determinou a sua função

function printNumber(numbers: number[]): number[] {
    let data: Array<number> = [];
    for(const item of numbers) {
        data.push(item);
    }
    return data;
}


let data = [1, 2, 3, 4, 5];

console.log(printNumber(data));

function higherNumber(numbers: Array<number>): number {
    return Math.max(...numbers);
};

console.log("Maior número da coleção: ", higherNumber(data))