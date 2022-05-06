

// Multiplication Table With Provided Term
if (userInput.length) {
  const inputs = userInput[0].split(" ");
  const num = Number(inputs[0]);
  const term = Number(inputs[1]);
if (Number.isInteger(num) && Number.isInteger(term)) {
    let output = [];
    for (let i = num; i <= num * term; i = i + num) {
      output.push(i);
    }
    console.log(output.join(" "));
  }
}
