let user={
    name : "john", // propertyname : value ------- keyname: value
    age : 30,

}

user.sayhello= function sayhello(){
    return "Hello"+" " +this.name
}

console.log(user.sayhello())  