'use strict';
(function () {
  // function sayThis() {
  //   console.log('THIS:', this);
  // }
  const sayThis = () => {
    console.log('THIS:', this);
  }
  const profile = {
    firstName: '',
    lastName: '',
    setName: function(name) {
      const splitName = (name) => {
        const nameArray = name.split(' ');
        this.firstName = nameArray[0];
        this.lastName = nameArray[1];
        console.log('this2:', this);
      };
      console.log('this1:', this);    
      splitName(name);
    },
    // whoami: () => {
    //   console.log('this inside whoami function:', this);
    // },
    // whoami: function() {
    //   console.log('this inside whoami function:', this);
    // },
    whoami: function() { return sayThis.bind(this)() }
  };

  profile.setName('Jhon Doe');
  console.log(profile.firstName);
  profile.whoami();
})();
