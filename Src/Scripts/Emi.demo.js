function Amountchange() {
  document.getElementById("txtAmount").value =
    document.getElementById("rangeAmount").value;
}

function yearChange() {
  document.getElementById("txtYears").value =
    document.getElementById("rangeYears").value;
}

function Intrestchange() {
  document.getElementById("txtIntrest").value =
    document.getElementById("rangeIntrest").value;
}
function EmiCalculate() {
  var p = parseInt(document.getElementById("txtAmount").value);
  var r = parseFloat(document.getElementById("txtYears").value);
  var n = parseInt(document.getElementById("txtIntrest").value);
  var result = (p * r * Math.pow(1 + r, n)) / Math.pow(1 + r, n) - 1;

  document.getElementById("resultDisplayer").innerHTML =
    `your preferred emi amount for  ${p} in ${r} years including intrest ${n} is <span class="text-primary fw-bold">${result}</span>`;
}
