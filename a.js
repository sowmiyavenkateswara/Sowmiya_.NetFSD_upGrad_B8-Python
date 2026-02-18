let submit = document.getElementById("submit")
submit.addEventListener("click",function(){
let username = document.getElementById("name").value 
let password = document.getElementById("pass").value
let message =document.getElementById("message")
if(username==Admin&& password==1234){
    window.location.href="indexcss.html"
    return false
}
else{
message.textContent="Invalid Id or Password"
}
})

// let submit1 = document.getElementById("submit")
// submit.addEventListener("click",function(){
// let name = document.getElementById("name").value 
// let Email = document.getElementById("email").value
// let message =document.getElementById("message1")
// if(name==Admin&& email==1234){
//     window.location.href="indexcss.html"
//     return false
// }
// else{
// message.textContent="Already registered"
// }
// })
