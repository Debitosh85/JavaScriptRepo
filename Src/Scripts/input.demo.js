function RegisterClick() {
  document.getElementById("DetailsContainer").style.display = "block";
  document.getElementById("RegisterContainer").style.display = "none";

  document.getElementById("lblName").innerHTML =
    document.getElementById("Name").value;
  document.getElementById("lblPrice").innerHTML =
    document.getElementById("Price").value;
  document.getElementById("lblCity").innerHTML =
    document.getElementById("City").value;
  document.getElementById("lblMfd").innerHTML =
    document.getElementById("ManuFactured").value;
  stockStatus = "";
  stockCheckBox = document.getElementById("stock");
  if (stockCheckBox.checked) {
    stockStatus = "Available";
  } else {
    stockStatus = "Out of Stock";
  }

  document.getElementById("lblStock").innerHTML = stockStatus;
}

function EditClick() {
  document.getElementById("btnRegister").innerHTML = "Save";
  document.getElementById("btnRegister").className = "btn btn-info";
}
