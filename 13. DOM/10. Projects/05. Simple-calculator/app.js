document.getElementById("btn").addEventListener("click", () => {
  // Get elements from the DOM
  let num1 = document.querySelector(".num1").value;
  let num2 = document.querySelector(".num2").value;
  let res = document.querySelector(".result");
  let op = document.getElementById("selectOp").value;

  switch (op) {
    case "plus":
      res.innerHTML = +num1 + +num2;
      break;
    case "min":
      res.innerHTML = +num1 - +num2;
      break;
    case "dev":
      res.innerHTML = +num1 / +num2;
      break;
    case "multi":
      res.innerHTML = +num1 * +num2;
      break;
  }
});
