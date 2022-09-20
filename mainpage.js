document.getElementById("login").addEventListener("click",function(){
    document.querySelector(".popup").style.display ="flex"
})
document.querySelector(".cancel").addEventListener("click",function(){
    document.querySelector(".popup").style.display="none"
})
document.getElementById("user-main").addEventListener("click",function(){
    document.querySelector(".user-popup").style.display ="flex"
})
document.querySelector(".cross").addEventListener("click",function(){
    document.querySelector(".user-popup").style.display="none"
})
document.getElementById("worker-main").addEventListener("click",function(){
    document.querySelector(".worker-popup").style.display ="flex"
})
document.querySelector(".cross2").addEventListener("click",function(){
    document.querySelector(".worker-popup").style.display="none"
})
