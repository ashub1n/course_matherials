function makeIterator(array){
    var nextIndex = 0;

    return {
       next: function(){
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    }
}

var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true





// function* test() {
//     yield 1;
//     yield 2;
//     yield 3;
// };

// const a = test();



/*class Polygon {
    constructor(...sides) {
      this.sides = sides;
    }
    // Method
    *getSides() {
      for(const side of this.sides){
        yield side;
      }
    }
  }
  
  const pentagon = new Polygon(1,2,3,4,5);
  
  console.log([...pentagon.getSides()]); // [1,2,3,4,5]

  */