window.addEventListener("DOMContentLoaded", async () => {

  // when the page loads
  // request all of the toppings
  const response = await fetch("/toppings");
  const toppings = await response.json();
  const toppingsListItems = toppings.map((topping) => {
    return `<li>${topping.name}</li>`
  }).join("");
  const list = document.getElementById("toppings-list");
  list.innerHTML = toppingsListItems;

  const button = document.getElementById("add-topping");
  button.onclick = async () => {
    const topping = document.getElementById("topping").value;
    console.log(topping);
    const response = await fetch('/toppings', {
      method: "POST",
      body: JSON.stringify({ "topping": topping }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const toppings = await response.json();
    const list = document.getElementById("toppings-list");
    const toppingsListItems = toppings.pizzaToppings.map((topping) => {
      return `<li>${topping}</li>`
    }).join("");
    console.log(toppingsListItems);
    list.innerHTML = toppingsListItems;

  }
});