import { Sudoku } from './../src/sudoku';

describe('Sudoku sections', function() {
  let sudoku;
  beforeEach(function() {
    sudoku = new Sudoku();
    sudoku.setValues(Array.from(Array(81), (val, index) => index + 1));
  });

  it('should return a row', function() {
    expect(sudoku.getRow(5)).toEqual([46,47,48,49,50,51,52,53,54]);
  });
  it('should return a column', function() {
    expect(sudoku.getColumn(3)).toEqual([4,13,22,31,40,49,58,67,76]);
  });
  it('should return a box', function() {
    expect(sudoku.getBox(4)).toEqual([31,32,33,40,41,42,49,50,51]);
  });
});

describe('Sudoku values', function() {
  let sudoku;
  beforeEach(function() {
    sudoku = new Sudoku();
  sudoku.setValues([8,2,5,4,7,1,3,9,6,1,9,4,3,2,6,5,7,8,3,7,6,9,8,5,2,4,1,5,1,9,7,4,3,8,6,2,6,3,2,5,9,8,4,1,7,4,8,7,6,1,2,9,3,5,2,6,3,1,5,9,7,8,4,9,4,8,2,6,7,1,5,3,7,5,1,8,3,4,6,2,9]);
  });

  it('should return a row', function() {
    expect(sudoku.verifySection(sudoku.getRow(5))).toEqual(true);
  });
  it('should return a column', function() {
    expect(sudoku.verifySection(sudoku.getColumn(3))).toEqual(true);
  });
  it('should return a box', function() {
    expect(sudoku.verifySection(sudoku.getBox(4))).toEqual(true);
  });
});
