// function sum(){
//     let sum = 0;
//     for(i=0; i<arguments.length; i++){
//         sum += arguments[i];
//     }    
//     console.log(sum);
// }

// function sum2(...theArgs){
//         let sum = 0;
//         for(i=0; i<theArgs.length; i++){
//             sum += theArgs[i];
//         }    
//         console.log(sum);
//     }
// sum2(1,2,3) //=> 6
 

Function.prototype.myBind = function(){
    let fn = this;  
    let context = arguments[0]; // pavlov #context
    let bindArgs = Array.from(arguments).slice(1)  // BindTime variable
    
    return function(){ // returns a funcction
        let callArgs = Array.from(arguments) // CallTime variable
        fn.apply(context,bindArgs.concat(callArgs))    
    }
}
// markov.says("meow", "Ned");
//   // Markov says meow to Ned!
//   // true
  
//   // bind time args are "meow" and "Kush", no call time args
//   markov.says.myBind(pavlov, "meow", "Kush")();
//   // Pavlov says meow to Kush!
//   // true

// function myBind() {
//     let that = this;
//     return function () {
//     }

// }
// @@Yesterday MyBind@@
// Function.prototype.myBind = function(object) {
//     const fn = this;
//      return function() {
//         fn.call(object)
//      } 
//   }

// @@Example to Run@@
class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
  markov.says("meow", "Ned");
  // Markov says meow to Ned!
  // true
  
  // bind time args are "meow" and "Kush", no call time args
  markov.says.myBind(pavlov, "meow", "Kush")();
  // Pavlov says meow to Kush!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "a tree"
  markov.says.myBind(pavlov)("meow", "a tree"); 
  // Pavlov says meow to a tree!
  // true
  
  // bind time arg is "meow", call time arg is "Markov"
  markov.says.myBind(pavlov, "meow")("Markov");
  // Pavlov says meow to Markov!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "me"
  const notMarkovSays = markov.says.myBind(pavlov);
  notMarkovSays("meow", "me");
  // Pavlov says meow to me!
  // true

// // function curriedSum(number1, numbers2, etc){

// // }
// // // @@ example to run
// // // const sum = curriedSum(4);
// // // sum(5)(30)(20)(1); // => 56
// // Function.prototype.curry(number1, number2, etc){
    
// // }
