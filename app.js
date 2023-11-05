// constants for Clicker
const countValue = document.getElementById("countValue");
const incrementCount = document.getElementById("incrementCount");

// constants for List
const textInput = document.getElementById("textInput");
const addItem = document.getElementById("addItem");
const itemList = document.getElementById("itemList"); 

// function for Clicker
if (incrementCount && countValue) {
    incrementCount.addEventListener("click", () => {
      countValue.innerHTML = Number(countValue.innerHTML) + 1;
    });
  }

// function for List
addItem.addEventListener("click", () => {
  const inputText = textInput.value.trim();

  if (inputText != "") {
    const listItem = document.createElement('li');
    listItem.textContent = inputText; 
    itemList.appendChild(listItem);
  }
})



