import { Component, signal } from '@angular/core';
// import { filter, map, Observable, range } from 'rxjs';
import { MyHttpService } from './my-http-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App {
  constructor(private appService: MyHttpService) {}

  testHttpService(): void {
    this.appService.getData('https://dummyjson.com/test').subscribe({
      next: (data) => {
        console.log('Data fetched successfully:', data);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
      complete: () => {
        console.log('Data fetching completed');
      },
    });
  }

  getTitle(): void {
    //Simple observable example
    // const simpleObservable = new Observable((t) => {
    //   t.next('Hello, angularRxJsDemo');
    //   t.next('Welcome to the world of RxJS');
    //   t.next('Enjoy building reactive applications!');
    //   t.next(2);

    //   t.next('This message will not be logged due to the error');
    //   t.complete();
    // });

    // simpleObservable.subscribe({
    //   next: (a) => {
    //     console.log(a);
    //   },
    //   error: () => {
    //     console.error('Error occurred in simpleObservable');
    //   },
    //   complete: () => {
    //     console.log('simpleObservable completed');
    //   },
    // });
  }
}
