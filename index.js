const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newTutorial = tutorials.map(function(element){
      let tempArray = element.split(' ');
      tempArray = tempArray.map(function(element){
          return element.charAt(0).toUpperCase() + element.slice(1);
      })
      tempArray = tempArray.join(' ');
      return tempArray;
    })
  return newTutorial;
}

console.log(titleCased());