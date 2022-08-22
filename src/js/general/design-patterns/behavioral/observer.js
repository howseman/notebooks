function Subject() {
  this.observers = [];
};
Subject.prototype.subscribeObserver = function(observer) {
  this.observers.push(observer);
};
Subject.prototype.unsubscribeObserver = function(observer) {
  const index = this.observers.indexOf(observer);
  if(index > -1) {
    this.observers.splice(index, 1);
  }
};
Subject.prototype.notifyObserver = function(observer) {
  const index = this.observers.indexOf(observer);
  if(index > -1) {
    this.observers[index].notify(index);
  }
};
Subject.prototype.notifyAllObservers = function() {
  for(var i = 0; i < this.observers.length; i++){
    this.observers[i].notify(i);
  };
};
Subject.prototype.doSomeBusinessLogic = function() {
  // this.notifyObserver();
  this.notifyAllObservers();
};

function Observer() {}
Observer.prototype.notify = function(index) {
  console.log("Observer " + index + " is notified!");
};

// ---

const observer1 = new Observer();
const observer2 = new Observer();
const observer3 = new Observer();
const observer4 = new Observer();

const subject = new Subject();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);
subject.doSomeBusinessLogic();
// Observer 0 is notified!
// Observer 1 is notified!
// Observer 2 is notified!
// Observer 3 is notified!