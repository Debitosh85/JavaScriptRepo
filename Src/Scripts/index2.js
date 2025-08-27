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