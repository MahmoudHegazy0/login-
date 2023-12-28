// ///////////////////Sign Up page//////////////////
var inputname = document.getElementById("name");
var inputemail = document.getElementById("email");
var inputpas = document.getElementById("pas");
var adduserbtn = document.getElementById("adduser");
var textreguared = document.getElementById("requared");
var textsucsess = document.getElementById("sucsess");
var textincoorect = document.getElementById("incoorect");
var listUser = [];

adduserbtn.addEventListener("click", function add() {
    var namevalue = inputname.value;
    var emailvalue = inputemail.value;
    var pasvalue = inputpas.value;

    let emailRe = /\w+@\w+\.(com|net)/gi;
    let passwordRE = /\d{6}$/gi;
    let VRE = emailRe.test(emailvalue);
    let VRP = passwordRE.test(pasvalue);

    if (namevalue == "" || emailvalue == "" || pasvalue == "") {
        textreguared.style.display = "flex";
        textsucsess.style.display = "none";
        textincoorect.style.display = "none";
    } else if (VRE === true && VRP === true) {
        if (!listUser.find((user) => user.email === emailvalue)) {
            var user = {
                name: namevalue,
                email: emailvalue,
                password: pasvalue,
            };
            listUser.push(user);
            localStorage.setItem("ProudectStorage", JSON.stringify(listUser));
            textreguared.style.display = "none";
            textsucsess.style.display = "flex";
            textincoorect.style.display = "none";
            clearForm();
            // console.log(listUser);
            } else {
            console.log("User already exists");
            }
    } 
    else{
        textreguared.style.display = "none";
        textsucsess.style.display = "none";
        textincoorect.style.display = "flex";
    }
});

function clearForm() {
    inputname.value = "";
    inputemail.value = "";
    inputpas.value = "";
}

