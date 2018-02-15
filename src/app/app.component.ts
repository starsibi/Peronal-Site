import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    words:string[] = ["PRITHIVI", "UI DEVELOPER", "CAMERA", "PHOTOGRAPHY", "WEBSITE", "CSS", "HTML", "JAVASCRIPT", "JQUERY", "ANGULAR", "FRONTEND", "GIGYA", "BOOTSTRAP"];

    //function for generating random value.
     getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //function for changing the word
    changeWord(a) {
		a.style.opacity = '0.1';
		a.innerHTML = this.words[this.getRandomInt(0, this.words.length - 1)];
		setTimeout(function() {
				a.style.opacity = '1';
        }, 425);
        setTimeout(()=>{    //<<<---    using ()=> syntax
            this.changeWord(a);
       },this.getRandomInt(500, 800));
    }

    ngAfterViewInit() {
       var randoms= window.document.getElementsByClassName("randoms");
        for (var i = 0; i < randoms.length; i++)
                this.changeWord(randoms[i]);

    }
}