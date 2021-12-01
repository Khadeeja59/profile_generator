const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let paragraph = "";
rl.question('What\'s your name? Nicknames are also acceptable :) \t ', (answer) => {
  paragraph += `My name is ${answer}. `
  rl.question('What\'s an activity you like doing? \t' , (answer) => {
    paragraph += `I like ${answer} `;
    rl.question('What do you listen to while doing that? \t' , (answer) => {
      paragraph += `and I like to listen to ${answer}. `;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) \t' , (answer) => {
        paragraph += `My favorite meal of the day is ${answer} `;
        rl.question('What\'s your favourite thing to eat for that meal?) \t' , (answer) => {
          paragraph += `and I can have ${answer} almost everyday. `;
          rl.question('Which sport is your absolute favourite? \t' , (answer) => {
            paragraph += `I love ${answer}. `;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! \t' , (answer) => {
              paragraph += `${answer}. `;

    console.log(paragraph);
    rl.close();
            });
          });
        });
      });
    });
  });
});
