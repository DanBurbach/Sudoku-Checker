class Sudoku {
  constructor() {
    this.values = [];
    this.values.length = 81;
    this.values.fill(0);
  }

  generateValues() {
    let isValid = false;
    let puzzleCount = 0;

    while(!isValid && (puzzleCount < 10000)) {
      this.values.fill(0);
      let hasFailed = false;

      for(let i = 0; i < 81; i++) {
        let rowIndex = parseInt(i / 9);
        let columnIndex = parseInt(i % 9);
        let boxIndex = (3 * parseInt(i / 27)) + parseInt(parseInt(i / 3) % 3);
        let row = this.getRow(rowIndex);
        let column = this.getColumn(columnIndex);
        let box = this.getBox(boxIndex);
        let done = false;
        let count = 0;

        while(!done & (count < 100)) {
          let value = 1 + (Math.floor(Math.random() * 9));
          if(!row.includes(value) && !column.includes(value) && !box.includes(value)) {
            this.values[i] = value;
            done = true;
          }
          count++;
        }

        if(!done) {
          hasFailed = true;
        }
      }

      if(hasFailed) {
        puzzleCount++;
      } else {
        isValid = true;
      }
    }
    if(isValid) {
      console.log("DONE, tried " + puzzleCount + " times");
    } else {
      console.log("FAIL, tried " + puzzleCount + " times");
    }
  }

  setValues(values) {
    this.values = values;
  }

  getRow(index) {
    if(index >= 0 && index <= 8) {
      return this.values.slice(9 * index, 9 * (index + 1));
    }
  }

  getColumn(index) {
    return this.values.filter((value, i) => i % 9 === index);
  }

  getBox(index) {
    const topLefts = [0, 3, 6, 27, 30, 33, 54, 57, 60];
    let values = [];
    let rowIndex = topLefts[index];
    for(let i = 0; i < 3; i++) {
      values = values.concat(this.values.slice(rowIndex, rowIndex + 3));
      rowIndex += 9;
    }
    return values;
  }

  verifySection(section) {
    if(section.length === 9) {
      section.sort((a,b) => a - b);
      let isValid = true;
      for (let i = 0; i < section.length; i++) {
        if (section[i] != i + 1) {
          isValid = false; }
      }
      return isValid;
    }
    return false;
  }
}

export { Sudoku };
