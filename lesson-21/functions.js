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

//   const numericValues = mixed
//       .map(item => Number(item))
//        .filter(item => !isNaN(item));

//   if (numericValues.length === 0) return 0;

// const sum = numericValues.reduce((acc, curr) => acc + curr, 0);
//   return sum / numericValues.length;
//}