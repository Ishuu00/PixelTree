const baseURL = "https://api.frankfurter.dev/v1/latest?";

let dropdowns = document.querySelectorAll(".select-currency select");

for (let select of dropdowns) {
  for (let code of Object.keys(countryList)) {
    let newOption = document.createElement("option");
    newOption.innerText = code;
    newOption.value = code;
    select.append(newOption);

    if (select.name === "from" && code === "USD") {
      newOption.selected = true;
    } else if (select.name === "to" && code === "INR") {
      newOption.selected = true;
    }
  }
}

let btn = document.querySelector("#submit-button");

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  let amount = document.querySelector(".head-user-choice input");
  let amountval = amount.value;

  if (amountval === "" || amountval < 1) {
    amount.value = 1;
  }

  let from_currency = document.querySelector(".from-currency");
  let to_currency = document.querySelector(".to-currency");

  //api format https://api.frankfurter.dev/v1/latest?amount=100&from=USD&to=INR

  const URl = `${baseURL}amount=${amountval}&from=${from_currency.value}&to=${to_currency.value}`;
  let response = await fetch(URl);
  let data = await response.json();
  console.log(data);

  let userResult = document.querySelector(".user-result");
  userResult.innerText = `${amountval}${from_currency.value} = ${
    data.rates[to_currency.value]
  } ${to_currency.value}`;
});
