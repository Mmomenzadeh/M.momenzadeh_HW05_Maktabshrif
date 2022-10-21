
let person =[
 {name:"john" , age:30},
 {name:"bob" , age:40},   
 {name:"mahsa" , age:23},   
 {name:"maryam" , age:25}   ,
 {name:"ali" , age:30}   ,
 {name:"ahmad" , age:30}   ,

 
]
  

// person.sort((a, b) => a.age - b.age);
// console.log(person);

//-------------------------------------------------



function bubbleSort(list){
    let length = person.length-1;
    for(let i = 0; i<length;i++){
        let swap =false;
        for(let j =0 ; j<length;j++){

            if(person[j].age > person[j+1].age){
                let temp = person[j].age;
                person[j].age = person[j+1].age;
                person[j+1].age=temp;
                swap=true;
            }
        }

        if(swap){
            break;
        }
    }

    console.log(person);
}

bubbleSort();