//stack == primitive

// let user = "Rutuja Rubde"
// let user1 = user
// user1="Shraddha Navghare"
// console.log(user)
// console.log(user1)


//Heap == Nonprimitive
let obj = {
    email : "rutujarubde@gmail.com",
    upi:"rutuja@ybl"
}

let obj1 = obj
obj1.email = "rsr@gmail.com"
console.log(obj)
console.log(obj1)