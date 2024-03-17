function hasUniqueChar(charString) {
   
    const uniqueChar = new Set();

    for (const char of charString) {
        if (uniqueChar.has(char)) {
            return false;
        }
        uniqueChar.add(char);
    }

    return true;
}

const Input = prompt("Ange en textsträng: ");
let userInput = Input.replace(/\s+/g, '');
if (hasUniqueChar(userInput)) {
    console.log("Textsträngen innehåller endast unika tecken!");
} else {
    console.log("Textsträngen innehåller upprepade tecken.");
}