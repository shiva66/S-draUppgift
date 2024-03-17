function harUnikaTecken(textstrang) {
    // Skapa en uppsättning (set) för att hålla reda på unika tecken
    const unikaTecken = new Set();

    // Gå igenom varje tecken i strängen
    for (const tecken of textstrang) {
        // Om tecknet redan finns i uppsättningen, är det inte unikt
        if (unikaTecken.has(tecken)) {
            return false;
        }
        // Annars lägg till det i uppsättningen
        unikaTecken.add(tecken);
    }

    // Om vi har kommit hit, är alla tecken unika
    return true;
}

// Exempel
const användarInmatning = prompt("Ange en textsträng: ");
if (harUnikaTecken(användarInmatning)) {
    console.log("Textsträngen innehåller endast unika tecken!");
} else {
    console.log("Textsträngen innehåller upprepade tecken.");
}