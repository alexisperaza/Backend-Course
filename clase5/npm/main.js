
function getRandomArbitrary (min, max) {
    return Math.random() * (max - min) + min;
}

const valor = getRandomArbitrary(1,20)

console.log(Math.floor(valor))
