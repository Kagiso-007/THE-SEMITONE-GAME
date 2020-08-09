import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InstructionDialogComponent } from '../instruction-dialog/instruction-dialog.component';
import { generate } from 'rxjs';

@Component({
  selector: 'app-jam-buddy',
  templateUrl: './jam-buddy.component.html',
  styleUrls: ['./jam-buddy.component.css']
})
export class JamBuddyComponent implements OnInit {
  constructor(public dialog: MatDialog) {
    this.giveInstructions(); 
  }
  

  ngOnInit(): void {
  }

  giveInstructions(){
    this.dialog.open(InstructionDialogComponent)
  }

  notes: string[] = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];
  note1: string = '?';
  note2: string = '?';
  note1Index: number;
  note2Index: number;
  semitonesInBetween: number;
  message: string;

  returnSelectedNotes(){
    let max = this.notes.length;
    this.note1Index = Math.floor(Math.random()*(max-1));
    
    let min = this.note1Index+1;
    this.note2Index = Math.floor(Math.random()*(max-min))+min;

    this.note1 = this.notes[this.note1Index];
    this.note2 = this.notes[this.note2Index];
  }

  checkAnswer(semitonesInBetween):boolean{
    let actualStInBetween = (this.note2Index - this.note1Index);
    let isCorrect;
    if(semitonesInBetween == actualStInBetween){
      isCorrect = true;
      this.message = "that is correct!"
    }else{
      isCorrect = false;
      this.message = "that is incorrect, please try again"
    }
    this.returnSelectedNotes();
    return isCorrect;
  }
}