//we create a project that generate random fun facts when user run the code multiple time

function generateRandomMessage() {
    const adjective = ['Amazing', 'Awesome', 'Fantastic', 'Incredible'];
    const nouns = ['day', 'experince', 'journey', 'Moment'];

    const randAdjectiveIndex = Math.floor(Math.random() * adjective.length);
    const randNounsIndex = Math.floor(Math.random() * nouns.length);


    return `${adjective[randAdjectiveIndex]} ${nouns[randNounsIndex]}`;
}

const random = generateRandomMessage();

console.log(random)