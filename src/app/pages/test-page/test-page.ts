import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './test-page.html'
})
export class TestPage {
  scriptDescription : string = "This is a generic script, doesn't really do anything right now.";
  scriptResult = "";

  get result() {
    return this.scriptResult;
  }

  runScript() {
    let arr = [3, 6];



    this.scriptResult = arr.toString();
  }
}
