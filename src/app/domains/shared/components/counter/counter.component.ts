import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  constructor() {
    // NO ASYNC
    // Before render
    // una vez
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    duration &&
      duration.previousValue !== duration.previousValue &&
      this.doSomething();
  }

  ngOnInit() {
    // after render
    // una vez
    // async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration: ', this.duration);
    console.log('message: ', this.message);
  }

  ngAfterViewInit() {
    // after render
    // hijos ya fueron pintados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngDestroy');
    console.log('-'.repeat(10));
  }

  doSomething() {
    console.log('change duration');
    // async
  }
}
