import { Component } from '@angular/core';
import {
  BehaviorSubject,
  interval,
  Observable,
  of,
  pipe,
  ReplaySubject,
  Subject,
} from 'rxjs';

@Component({
  selector: 'app-rx-subject-type-demo',
  standalone: false,
  templateUrl: './rx-subject-type-demo.html',
  styleUrl: './rx-subject-type-demo.scss',
})
export class RxSubjectTypeDemo {
  onClick(): void {
    //this.createObservable();
    //this.createSubject();
    //this.createBehaviorSubject();
    //this.createReplaySubject();
    //this.ofDemo();

    this.promiseVsObservable();
  }

  private promiseVsObservable() {
    var testPromise = new Promise((resolve, reject) => {
     // resolve([10,20,30,40,50]);
      reject('Error in Promise');
    });

    testPromise
      .then((value) => {
        console.log(value);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  private ofDemo() {
    var ofOb = of('Hello', 'World', 'from', 'RxJS');
    var intervalOb = of(
      new Promise((resolve) => {
        setTimeout(() => {
          resolve('Promise resolved after 2 seconds');
        }, 2000);
      })
    );

    intervalOb.subscribe({
      next: (value) => console.log('Interval Observable value:', value),
      error: (err) => console.error(err),
      complete: () => console.log('Interval Observable completed'),
    });
  }

  private createReplaySubject() {
    // Create a ReplaySubject that will buffer the last 3 emitted values
    console.clear();
    var replaySubject = new ReplaySubject(3);

    // Emit some values
    replaySubject.next('Value 1');
    replaySubject.next('Value 2');
    replaySubject.next('Value 3');
    replaySubject.next('Value 4');

    // Subscribe to the ReplaySubject
    replaySubject.subscribe({
      next: (value) => console.log('ReplaySubject value sub 1:', value),
      error: (err) => console.error(err),
      complete: () => console.log('ReplaySubject completed sub 1'),
    });

    // Emit more values
    replaySubject.next('Value 5');
    replaySubject.next('Value 6');
    replaySubject.next('Value 7');
    replaySubject.next('Value 8');
    replaySubject.next('Value 9');

    // Subscribe again to see the buffered values
    replaySubject.subscribe({
      next: (value) => console.log('ReplaySubject value sub 2:', value),
      error: (err) => console.error(err),
      complete: () => console.log('ReplaySubject completed sub 2'),
    });

    // Emit more values
    replaySubject.next('Value 10');
    replaySubject.next('Value 11');
    replaySubject.complete();

    // This will not log anything since the ReplaySubject is completed
    //replaySubject.next('This will not be logged because the ReplaySubject is completed');
  }

  //if before subscription -  It will accepct initial value if multiple value emitted including initial value then it will emit the last value to all subscribers
  // all emitted values after subscription will be logged
  private createBehaviorSubject() {
    // Create a BehaviorSubject with an initial value
    console.clear();
    // BehaviorSubject will emit the initial value to all subscribers
    var behaviorSubject = new BehaviorSubject([10]);

    behaviorSubject.next([40, 50, 60, 70, 80]);
    behaviorSubject.next([30, 40, 50, 60, 70]); // Emit this values

    // Subscribe to the BehaviorSubject
    behaviorSubject.subscribe({
      next: (value) => console.log('BehaviorSubject value sub 1:', value),
      error: (err) => console.error(err),
      complete: () => console.log('BehaviorSubject completed sub 1'),
    });

    behaviorSubject.next([60, 70, 80, 90, 100]);
    behaviorSubject.next([100, 110, 120, 130, 140]);

    //emit last value and further values to all subscribers
    behaviorSubject.subscribe({
      next: (value) => console.log('BehaviorSubject value sub2:', value),
      error: (err) => console.error(err),
      complete: () => console.log('BehaviorSubject completed sub2'),
    });

    // If first subscriber will emit valus and then second subscriber will emit same values. sequence of values will be consider as per subscription
    behaviorSubject.next([110, 120, 130, 140, 150]);
    behaviorSubject.next([150, 160, 170, 180, 190]);

    behaviorSubject.complete();

    //behaviorSubject.next([110, 120, 130, 140, 150]); // This will not log anything since the BehaviorSubject is completed
    // BehaviorSubject will emit the last value to all subscribers

    // It will emit the initial value to all subscribers
  }

  //only emit value after subscription
  // It will not emit any value until subscribed to observable
  private createSubject() {
    //create an subject
    var subject = new Subject();
    // It will not emit any value until subscribed to objservalble
    subject.next('Hello from Subject');
    subject.next('Another value from Subject - 1');
    // Subscribe to the subject
    subject.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.error(err),
      complete: () => console.log('Subject completed'),
    });
    // above value will be logged
    subject.next('Another value from Subject - 2');
    // this will end of objservable
    subject.complete();
    // this value will not be logged because the subject is completed
    subject.next('This will not be logged because the subject is completed'); // This will not log anything since the subject is completed
  }

  private createObservable() {
    //Create an observable that emits a deafult value
    var testObservable = new Observable((observer) => {
      observer.next('Hello from Observable');
      observer.complete();
    });
    //Subscribe to the observable
    testObservable.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.error(err),
      complete: () => console.log('Observable completed'),
    });
    // Create an observable that emits a value after a delay
    var delayedObservable = new Observable((observer) => {
      setInterval(() => {
        observer.next('Delayed value from Observable');
        observer.complete();
      }, 100);
    });
    // Subscribe to the delayed observable
    delayedObservable.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.error(err),
      complete: () => console.log('Delayed Observable completed'),
    });
  }
}
