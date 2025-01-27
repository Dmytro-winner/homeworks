export function generateKey(keyLength, symbols) {
    let key = '';
    for (let i = 0; i < keyLength; i++) {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        key += symbols[randomIndex];
    }
    return key;
}

export function average(mixed) {
    const numericValues = mixed
        .map(item => {
            const number = Number(item);
            return !isNaN(number) ? number : 0;
        })
        .filter(item => item !== 0);

    if (numericValues.length === 0) return 0;

    const sum = numericValues.reduce((acc, curr) => acc + curr, 0);
    return sum / numericValues.length;
}

// ============================================

//export function average(mixed) {
//    // Перетворюємо елементи масиву на числа, якщо це можливо (якщо елемент можна перетворити в число)
//    const numericValues = mixed
//        .map(item => Number(item)) // перетворюємо кожен елемент на число
//        .filter(item => !isNaN(item)); // фільтруємо нечислові значення (NaN)
//
//    if (numericValues.length === 0) return 0; // якщо немає числових значень, повертаємо 0

//  const sum = numericValues.reduce((acc, curr) => acc + curr, 0);
//    return sum / numericValues.length;
//}