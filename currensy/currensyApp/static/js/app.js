//основні елементи
const c1 = document.getElementById("currency-input");
const c2 = document.getElementById("currency-output");
const amount1 = document.getElementById("amount-one");
const amount2 = document.getElementById("amount-two");
const swap = document.getElementById("swap");
const theRate = document.getElementById("rate");

//обчислення
function calculate() {
  const curr1 = c1.value;
  const curr2 = c2.value;
  fetch(
    `https://v6.exchangerate-api.com/v6/07c7436812f210f455d48d84/latest/${curr1}`
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.conversion_rates)
      const rate = data.conversion_rates[curr2];
      theRate.innerText = `Convertion rate: ${rate}`;
      amount2.value = (amount1.value * rate).toFixed(2);
    });
}

//при будь якій зміні елементів одразу оновлюється вивід
c1.addEventListener("change", calculate);
amount1.addEventListener("input", calculate);
c2.addEventListener("change", calculate);
amount2.addEventListener("input", calculate);
swap.addEventListener("click", () => {
  const flash = c1.value;
  c1.value = c2.value;
  c2.value = flash;
  calculate();
});