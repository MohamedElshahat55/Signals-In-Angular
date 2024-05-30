import { Component, computed, effect, signal } from "@angular/core";

@Component({
  selector: "app-signals",
  templateUrl: "./signals.component.html",
  styleUrls: ["./signals.component.css"],
})
export class SignalsComponent {
  counter = signal(0);

  message = signal<string[]>([]);

  doubleNumber = computed(() => this.counter() * 2);

  constructor() {
    effect(() => {
      console.log("do something after signal change", this.counter());
    });
  }

  increment() {
    // this.counter.set(this.counter() + 1);
    this.counter.update((prevValue) => prevValue + 1);
    this.message.mutate((prevMessage) =>
      prevMessage.push("CURRENT VALUE OF COUNTER IS : " + this.doubleNumber())
    );
  }

  decrement() {
    this.counter.update((prevValue) => prevValue - 1);
    this.message.mutate((prevMessage) => prevMessage.pop());
  }
}
