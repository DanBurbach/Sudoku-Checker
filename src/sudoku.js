class Sudoku {
  constructor() {
    this.values = [];
    this.values.fill(0);
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
    return section.length == 9;
  }
}

export { Sudoku };
