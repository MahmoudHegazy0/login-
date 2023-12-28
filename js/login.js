var inputemaillog = document.getElementById("logemail");
var inputpaslog = document.getElementById("logpas");
var btnlog = document.getElementById("btnlog");
var incoorect = document.getElementById("incoorect");
btnlog.addEventListener('click',function(){
    var emailvalue = inputemaillog.value;
    var pasvalue = inputpaslog.value;
    var storedData = localStorage.getItem("ProudectStorage");
    if (storedData) {
        var dataArray = JSON.parse(storedData);
        for (let index = 0; index < dataArray.length; index++) {
            if (dataArray[index].email === emailvalue &&dataArray[index].password === pasvalue) {
                localStorage.setItem("indexuser", index);
                window.location.href = "page.html";
            } else {
                incoorect.style.display="flex"
            }
        }
    } 
})