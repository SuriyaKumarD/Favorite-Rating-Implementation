import { Component } from '@angular/core';
import { NewValue } from './test/test.component';
import { Console } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test';
  post: any = {
    title: 'Input Property test',
    isActive: true,
  };

  changeforApp(EventArgs: NewValue) {
    // Console.log("the star value is ",+EventArgs.newValue);
    alert('the star value is :' + EventArgs.newValue);
  }

  tweets: any = {
    body: 'here is the body of the tweet',
    isLiked: false,
    likesCount: 0,
  };
}
