let string1 = "3,6,9,12";
let string2 = "A;C;M;E";
let string3 = "space delimited string";
let string4 = "Comma-spaces, might, require, typing, caution";
let charsArr = [","," ",";"];
// let strcheck = []
stringArray = [string1, string2, string3, string4];

//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.



//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.



//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.



//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.



//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.



// Functions //
function getDelimiter(string, charsArr) {

  let delimsFound = ""
  for (let i = 0; i < charsArr.length; i++) {
    if (string.includes(charsArr[i])) {
      delimsFound += charsArr[i];
    }
  }
  return delimsFound;
}

function stringManipulator(string, charsArr) {  
  
  delimiter = getDelimiter(string, charsArr);

  if (delimiter === ",") {
    // split, reverse, join on the comma
    return string.split(",").reverse().join(",");
  } else if (delimiter === ";") {
    // split, alphabetize, join on the comma
    return string.split(";").sort().join(",");
  } else if (delimiter === " ") {
    // split, reverse alphabetize, join on the space
    return string.split(" ").sort().reverse().join(" ");
  } else if (delimiter === ", ") {
    // split, reverse, join on the comma 
    return string.split(", ").reverse().join(",");
  }
}


// PROGRAM START // 
for (let i = 0; i < stringArray.length; i++) {
    // Feed a string array into the manipulator method, then update the global string array with the new string
    stringArray[i] = stringManipulator(stringArray[i], charsArr);
}
console.log(stringArray);



/*
V4

for (let i = 0; i < string1.length; i++) {
  console.log(string1[i]);
  for (let j = 0; j < charsArr.length; j++) {
    // console.log(charsArr[j]);
    if (string1[i] === charsArr[j]) {
      console.log("Found" + charsArr[j]);
    }
  }
}


 V3

for (let i = 0; i < stringArray.length; i++) {
  console.log(string);

  // strings[i]
  let delimiter = getDelimiter(string);
  if (delimiter === ",") {
    //check for spaces
    if (hasSpaceCharacter(string)) {
      delimiter = ", ";
    }
  }
  console.log(`(${delimiter}) is found.`);
  
}

function hasSpaceCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      return true
    }
  }
}


// Gets the Delimiter type from a string
// // Might be good candidate for recursion
function getDelimiter(string) {
  let char;
  for (let i = 0; i < string.length; i++) {
    char = string[i];
    // console.log(string[i]);
    for (let j = 0; j < charsArr.length; j++) {
      if (char === charsArr[j]) {
        return char;
        // console.log(char);
      }
    }
  }
  // return: it's separated by this character!
}

// V2

for (let i = 0; i < strings.length; i++) {
  if (strings[i].includes(",") && !strings[i].includes(" ")) {
    strings[i] = strings[i].split(",").reverse().join(",");
  } else if (strings[i].includes(";")) {
    strings[i] = strings[i].split(";").sort().join(",");
  } else if (strings[i].includes(" ") && !strings.includes(",")){
    strings[i] = strings[i].split(" ").reverse().sort().join(" ");
  } else {
    strings[i] = strings[i].split(", ").reverse().join(",").trim();
  }
}

console.log(strings);

// V1
for (let i = 0; i < strings.length; i++) {
  console.log(checkString(strings[i]));
  char = checkString(strings[i]);
  if (char === ",") {
    strings[i] = strings[i].split(",").reverse().join(",");
  } else if (char === ";") {
    strings[i] = strings[i].split(";").sort().join(",");
  } else if (char === " ") {
    strings[i] = strings[i].split(" ").reverse().sort().join(" ");
  }
}
console.log(strings);

function checkString(str) {
  for (let i = 0; i < charsArr.length; i++) {
    if (str.includes(charsArr[i])) {
      // console.log("GOT IT" + charsArr[i]);
      return charsArr[i];
    }
    // console.log("check" + i);

  }
}
*/