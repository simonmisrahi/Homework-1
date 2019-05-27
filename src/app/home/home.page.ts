import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    public myDateOfBirth: String;
  
    ionViewDidEnter() {
      this.myDateOfBirth = "1998-09-05";
    }
    pressMe() {
      alert("Thank You for looking at my resume");
    }
    Football() {
    alert("I am a huge Arsenal Fan and have been playing football my whole life");
    }
  basketball() {
    alert("I am unfortunately a Knicks fan and i love watching Basketball.");
    }
  Djing() {
    alert("I love music and DJ at my freinds parties and at clubs.");
  }
}