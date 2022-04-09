mapMy(123123);
//void
const data =  [
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "brad",
        "last": "gibson"
      }
    },  
    {
        "gender": "male",
        "name": {
          "title": "mr",
          "first": "brad",
          "last": "gibson2"
        }
      }, 
      {
        "gender": "male",
        "name": {
          "title": "mr",
          "first": "brad",
          "last": "gibson3"
        }
      }, 
      {
        "gender": "male",
        "name": {
          "title": "mr",
          "first": "brad",
          "last": "gibson4"
        }
      }, 
      {
        "gender": "male",
        "name": {
          "title": "mr",
          "first": "brad",
          "last": "gibson5"
        }
      }
  ];
   

  const str = 'asd' + 'asdasd';
  const list = data.map((value)=>`${value.name.title} ${value.name.first} ${value.name.last} - ${value.gender}`)
  //console.log(str, data.map((value) => value.name.first));
//const aa = () => ()=> 1; 
//console.log(aa()())


if (null || undefined || NaN || false) {
    console.log('null || undefined || Nan');
} 



// function bl(value) {
//     return value + 11231; 
// } 

// const a = bl(123)
// const b = bl(124)
// const c = bl(124)
// console.log(a, b, c);


console.log(data);

function mapMy (data){
    console.log(data);
  }
  
