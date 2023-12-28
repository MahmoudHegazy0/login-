var storedData = localStorage.getItem("ProudectStorage");
var indexuser = localStorage.getItem("indexuser");
var dataArray = JSON.parse(storedData);
var logout =document.getElementById("logout");
document.getElementById("contant").innerHTML = `Welcome ${dataArray[indexuser].name}`;
logout.addEventListener("click" ,function(){
    window.location.href = "index.html";
})