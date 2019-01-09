'use strict';

import { Sudoku } from './sudoku';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  let sudoku = new Sudoku();
  sudoku.generateValues();
  for(let i = 0; i < 9; i++) {
    const row = sudoku.getRow(i);
    console.log("row" + i + "  " + row);
  }

  // sudoku.setValues([8,2,5,4,7,1,3,9,6,1,9,4,3,2,6,5,7,8,3,7,6,9,8,5,2,4,1,5,1,9,7,4,3,8,6,2,6,3,2,5,9,8,4,1,7,4,8,7,6,1,2,9,3,5,2,6,3,1,5,9,7,8,4,9,4,8,2,6,7,1,5,3,7,5,1,8,3,4,6,2,9]);
  // for(let index = 0; index < 9; index++) {
  //   const row = sudoku.getRow(index);
  //   console.log(`row${index} = ${row} valid=${sudoku.verifySection(row)}`);
  // }
  // for(let index = 0; index < 9; index++) {
  //   const column = sudoku.getColumn(index);
  //   console.log(`col${index} = ${column} valid=${sudoku.verifySection(column)}`);
  // }
  // for(let index = 0; index < 9; index++) {
  //   const box = sudoku.getBox(index);
  //   console.log(`box${index} = ${box} valid=${sudoku.verifySection(box)}`);
  // }
});
