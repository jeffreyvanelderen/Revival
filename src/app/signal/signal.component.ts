import {Component, computed, OnInit, signal} from '@angular/core';
import {SpongebobPipe} from '../../pipes/spongebob/spongebob.pipe';

const spongebobify = new SpongebobPipe().transform;

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
})
export class SignalComponent implements OnInit {
  /*
  In Angular, you use signals to create and manage state. A signal is a lightweight wrapper around a value.
  */
  nameSignal = signal<string>('Unknown name');

  /*
  A computed is a signal that produces its value based on other signals.
  A computed signal is READ-ONLY; it does not have a set or an update method. 
  Instead, the VALUE of the computed signal automatically changes when ANY of the SIGNALS it reads CHANGE
  (kind of like a useEffect/useCallback/useMemo with dependencies in React)
  */
  nameComputed = computed<string>(() => spongebobify(this.nameSignal()));

  /*
    Practical example
  */
  isTrial = signal(false);
  isTrialExpired = signal(true);
  showBuyLicence = computed<boolean>(
    () => this.isTrial() && this.isTrialExpired(),
  );

  ngOnInit(): void {
    // Read value
    console.log(`Name = ${this.nameSignal()}`); // Unknown name

    // Update value
    // either by update() callback
    this.nameSignal.update(previousName => previousName.toUpperCase());
    console.log(`Name = ${this.nameSignal()}`); // UNKNOWN NAME

    // or by set()
    this.nameSignal.set('Known name');
    console.log(`Name = ${this.nameSignal()}`); // Known name

    // By setting nameSignal, nameComputed will always update as a side effect since it has nameSignal as a 'dependency'
    console.log(`nameComputed = ${this.nameComputed()}`); // KnOwN NaMe
  }
}
