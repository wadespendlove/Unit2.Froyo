let froyoFlavors = prompt(
  `What are your favorite flavors? please separate each with a comma`
);
console.log(froyoFlavors);

let froyoArray = froyoFlavors.split(`,`);

console.log(froyoArray);

// let uniqueFroyo = [...new Set(froyoArray)];
// console.log(uniqueFroyo);

// for (let i = 0; i < froyoArray.length; i++) {
//   let froyoQuantities = froyoArray[i];
//   console.log(froyoQuantities);
// }

let froyoCount = {};

froyoArray.forEach((froyo) => {
  if (froyoCount[froyo]) {
    froyoCount[froyo]++;
  } else {
    froyoCount[froyo] = 1;
  }
});

console.log(froyoCount);

// let froyoObject = {
//   flavorOne: `${uniqueFroyo[0]}`,
//   flavorTwo: `${uniqueFroyo[1]}`,
//   flavorThree: `${uniqueFroyo[2]}`,
//   flavorFour: `${uniqueFroyo[3]}`,
//   flavorFive: `${uniqueFroyo[4]}`,
//   flavorSix: `${uniqueFroyo[5]}`,
// };

// console.log(froyoObject);
