function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

const multipleArray = {
  signInfo: ['star', 'moon', 'sun', 'comet'],
  fortuneOutput: ['terrable luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
  advice: ['go out and eat', 'not read this', 'play more', 'trust on one'],
}

let personalWisdom = [];

for(let prop in multipleArray) {
  let optionIndex = generateRandomNumber(multipleArray[prop].length);

  switch(prop) {
      case 'signInfo':
          personalWisdom.push(`Your sign right now is a ${multipleArray[prop][optionIndex]}.`)
          break;
      case 'fortuneOutput':
          personalWisdom.push(`You are having ${multipleArray[prop][optionIndex]}`)
          break;
      case 'advice':
          personalWisdom.push(`You shoud ${multipleArray[prop][optionIndex]}`)
          break;
      default:
          personalWisdom.push('There is not enought info');
  }
}

function formateArray(wisdom) {
  const formetted = personalWisdom.join('\n');
  console.log(formetted);
}

formateArray(personalWisdom);