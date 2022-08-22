interface Observer {
  update(data: string): void;
}

interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

// ----

class ConcreteObserver implements Observer {
  update(data: string) {
    console.log(`Data received from a Subject: ${data}`);
  }
}

class ConcreteSubject implements Subject {
  observers: Array<Observer> = [];
  state: { message: string } = { message: '' }

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notify() {
    this.observers.forEach(observer => {
      observer.update(this.state.message);
    });
  }

  doSomeBusinessLogic() {
    // Doing something awesome here...
    this.state.message = 'ConcreteSubject state was updated';
    this.notify()
  }
}

// ---

const observer1 = new ConcreteObserver()
const observer2 = new ConcreteObserver()
const observer3 = new ConcreteObserver()
const observable = new ConcreteSubject()
observable.subscribe(observer1);
observable.subscribe(observer2);
observable.subscribe(observer3);

observable.doSomeBusinessLogic();
