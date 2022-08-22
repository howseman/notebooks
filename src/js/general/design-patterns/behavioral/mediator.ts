// TODO: Complete this...

interface Colleague {
  mediator: Mediator;
}

interface Mediator {
  notify(colleague: Colleague): void;
}
// ---
class Button implements Colleague {
  mediator: Mediator;

  constructor() {}
}

class Input implements Colleague {
  mediator: Mediator;

  constructor() {}
}

class Form implements Mediator {
  notify(colleague: Colleague) {}

}

const button = new Button();
const input1 = new Input();
const input2 = new Input();

const concreteMediator1 = new Form();
