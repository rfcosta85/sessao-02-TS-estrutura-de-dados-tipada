function printUserName(name: string | null): void {

    if (typeof name === "string") {
        console.log(`Utilizador: ${name}`);
    } else {
        console.log("Utilizador não encontrado.");
    }
}

printUserName("Rodrigo Costa");