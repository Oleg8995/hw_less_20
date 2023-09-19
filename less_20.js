// *********************************** LESS 20 ******************************************

// # 1 Create arr method 

const obj = {
  from: 8,
  to: 17,
};

const createArr = () => {

  let res = [];

  for( let i = obj.from; i < obj.to; i++ ) {

    res.push(i);
  }

  return obj.arr = res;

};

createArr();

console.log(obj.arr)

obj.arr;
[1, 2, 3, 4, 5, 6, 7, 8, 9];

// ****************** VAR 2 .bind() ******************

const obj = {
  from: 8,
  to: 17,
};

const createArr = function () {

  let res = [];

  for( let i = this.from; i < this.to; i++ ) {

    res.push(i);
  }

  return this.arr = res;

};

const bindCreateArr = createArr.bind(obj);

bindCreateArr();

console.log(obj.arr);

// ****************** VAR 3 .call() ******************

const obj = {
  from: 7,
  to: 23,
};

const createArr = function () {

  let res = [];

  for( let i = this.from; i < this.to; i++ ) {

    res.push(i);
  }

  return this.arr = res;

};

createArr.call(obj);

console.log(obj.arr);

// ===============================================================================================================

// # 2 Calculator

const calculator = {

  result: 0,

  sum: function (num) { 
    this.result += num;
    return this; 
   },
  sub: function (num) { 
    this.result -= num;
    return this; 
   },
  mul: function (num) { 
    this.result *= num;
    return this; 
   },
  div: function (num) { 
    this.result /= num;
    return this; 
  },

};

calculator.sum(6).mul(2).div(4);

console.log(calculator.result);

// ===============================================================================================================

// # 3 Constructor Function

function Car(model, color, age, speed, gasTank, started) {
  
  const obj = {
    model: model,
    color: color,
    age: age,
    speed: speed,
    gasTank: gasTank,
    started: started,

    startEngine: function () {

      if (this.gasTank > 0 ) {
        this.started = true
        this.gasTank -= 5;
      }
      return this;
    },

    Drive: function () {

      if ( this.started && this.gasTank !== 0 ) {
        this.speed = 30;
      }
      return this;

    },

    Stop: function () {

      this.started = false;
      this.speed = 0;
      return this;

    },

    SpeedUp: function (arg) {

      if ( this.speed > 0 && this.speed <= 200 ) {

        this.speed += arg;
        this.gasTank -= 5;
      } else {
        this.speed = 200;
      }
      return this;

    },

    SlowDown: function (arg) {

      if ( this.speed > 0 && this.speed <= 200 ) {

        this.speed -= arg;

      } else {
        this.speed = 0;
      }

      return this;
    },

    AddGas: function (gas) {

      if ( this.gasTank > 0 && this.gasTank <= 20 ) {

        this.gasTank += gas;
      } else {
        this.gasTank = 20;
      }
      return this;
    },
  }

  return obj;

}

const vaz = new Car('vaz-2101', 'blue', 45, 20, 15, false);

vaz.Drive().startEngine().SpeedUp(5);

