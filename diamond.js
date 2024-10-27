function diamondPattern(floor) {
  let space = floor - 1;

  for (let q = 1; q <= floor; q++) {
    let line = "";
    for (let w = 1; w <= space; w++) {
      line += " ";
    }
    space--;

    for (let w = 1; w <= 2 * q - 1; w++) {
      line += "*";
    }

    console.log(line);
  }

  space = 1;
  for (let q = floor - 1; q >= 1; q--) {
    let line = "";
    for (let w = 1; w <= space; w++) {
      line += " ";
    }
    space++;

    for (let w = 1; w <= 2 * q - 1; w++) {
      line += "*";
    }

    console.log(line);
  }
}

const floor = parseInt(prompt("number of floor you wish to enter :"));
diamondPattern(floor);
