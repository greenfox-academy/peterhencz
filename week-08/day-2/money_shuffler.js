const Panama = {
  cash: 0,
  name: 'Panama',
  tax: '1%',
  deposit: function(amt) {
  }
};

const Cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: '5%',
  deposit: function(amt) {
  }
};

const Shuffler = {
  selector: 0,
  cash: 10000,
  pick: function() {
    if (this.selector === 0) {
      Cyprus.cash += 1000;        
      console.log(`${Cyprus.name} got 1000`);
      this.selector ++;
  } else {
      Panama.cash += 1000;        
      console.log(`${Panama.name} got 1000`);
      this.selector = 0;
    }
  }
};


Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000
Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000

console.log(Panama.cash); // 2000 
console.log(Cyprus.cash); // 2000 