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
    let sum = 2, value = 2, previousValue = 1;

    while (value + previousValue < 4000000) {
      const a = value;
      value = value + previousValue;
      previousValue = a;

      console.log(value.toString());

      if (value % 2 == 0) sum += value;
    }

    this.scriptResult = sum.toString();
  }
}
