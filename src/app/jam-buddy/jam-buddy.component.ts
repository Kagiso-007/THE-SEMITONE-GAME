import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InstructionDialogComponent } from '../instruction-dialog/instruction-dialog.component';
import { ResultsDialogComponent } from '../results-dialog/results-dialog.component';

import { NgRedux, select } from '@angular-redux/store';
import { IAPPState } from '../store';
import { GENERATE_NOTES, CHECK_ANSWER } from '../actions';

@Component({
  selector: 'app-jam-buddy',
  templateUrl: './jam-buddy.component.html',
  styleUrls: ['./jam-buddy.component.css']
})

export class JamBuddyComponent implements OnInit {
  @select() note1;
  @select() note2;

  constructor(public dialog: MatDialog, private ngRedux: NgRedux<IAPPState>) {
    this.giveInstructions(); 
  }
  
  ngOnInit(): void {
  }

  giveInstructions(){
    this.dialog.open(InstructionDialogComponent)
  }

  giveResults(){
    this.dialog.open(ResultsDialogComponent)
  }
  
  generateNotes(){
    this.ngRedux.dispatch({type: GENERATE_NOTES})
  }

  checkAnswer(inputValue: number){
    this.ngRedux.dispatch({type: CHECK_ANSWER, input: inputValue})
    
    if((inputValue == undefined) || (inputValue == 0)){
      return;
    }else{
      this.giveResults()
    }
  }
}