function compute() {
  let principal = document.getElementById("principal").value;
  if (principal == 0 || principal < 0 ) {
    alert("Quantity cannot be 0 or < 0");
    //creating focus
    document.getElementById("principal").focus()
  } else {
    let rate = document.getElementById("rate").value;
    let years = Number.parseInt(document.getElementById("years").value);
    let interest = (principal * years * rate) / 100;
    let now = new Date().getFullYear();
    let actualDate = now + years;
    let result = document.getElementById("result");
    // print result
    result.innerHTML = "<br/> If you deposit " + principal + "<br/>";
    result.innerHTML += "At an interest rate of " + rate + "%" + "<br/>";
    result.innerHTML += "You will receive an amount of " + interest + "<br/>";
    result.innerHTML += "In the year " + actualDate + "<br/>";
  }
}
const range = () => {
    // set Interest
  let valueRange = document.getElementById("rate").value;
  document.getElementById("forRange").innerHTML = valueRange + "%";
};
