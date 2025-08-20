// function bodyload() {
//     document.images[0].src = "public/Assest/debitosh11.jpg"; // fix img
//     document.forms[0].elements[1].value = "Register";        // fix form
//     document.forms[1].elements[1].value= "Login";
// }

function printpage(){

    flag = confirm("message \n delete button Clicked");

    // if(flag==true){
    //     document.querySelector("h2").innerText = "Record Deleted";

    // }else{
    //     document.querySelector("p").innerText = "delete failed";
    // }

    if(flag==true){
        document.write("<b><i><font color=red>record deleted</font><i><b>");
    }else{
        alert("you Canceled");
    }


}
