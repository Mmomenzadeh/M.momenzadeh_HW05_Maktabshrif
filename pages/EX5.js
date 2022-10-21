
// let ask = () =>{
//     if(confirm("Do you agree?"))
//     {
//         alert("you agreed.")
//     }else{
//         alert("You canceled the execution.");
//     }
// }
// ask();

// -------------------------------------------------------------------------
// function ask() {
//     if (confirm("Do you agree?")) 
//     {
//         let yes = () => alert("you agreed")
//         return yes();
//     }
//     else{   let no = () => alert("you canceled the execution")
//       return no();
//      }
     
//   }
  
//   ask();
  

//------------------------------------------------------------------------------
// function ask(question,yes,no){
//     if(confirm(question)) yes();
//     else no();
// }

// ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.")

// )

// ------------------------------------------------------------------------------

let ask =() =>{
    let reasult = (confirm("Do you agree?")) ? alert("You agreed.") : alert("You canceled the execution.")
}
ask();


