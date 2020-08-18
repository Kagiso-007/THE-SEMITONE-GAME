import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JamBuddyComponent } from './jam-buddy/jam-buddy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog'
import { NgRedux, NgReduxModule } from '@angular-redux/store';

import { InstructionDialogComponent } from './instruction-dialog/instruction-dialog.component';
import { IAPPState, rootReducer, INITIAL_STATE } from './store';
import { ResultsDialogComponent } from './results-dialog/results-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    JamBuddyComponent,
    InstructionDialogComponent,
    ResultsDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor(ngRedux: NgRedux<IAPPState>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}