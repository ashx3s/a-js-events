"use strict";

/* ----- Example 1 ----- */

// select DOM nodes
const toggleBtn = document.getElementById("toggle-btn");
const toggleStatus = document.getElementById("toggle-status");

// create an event listener and attach it to the button
toggleBtn.addEventListener("click", () => {
  // toggle the class is active on the button
  const isActiveToggle = toggleBtn.classList.toggle("is-active");

  // access the text Content of the button and change it based on whether or not the is-active class is true/false
  toggleBtn.textContent = isActiveToggle ? "Active" : "Toggle me";

  // OPTION 1: template + innerHTML to render html and the expression
  toggleStatus.innerHTML = `Status: <strong>${isActiveToggle ? "active" : "inactive"}</strong>`;

  // OPTION 2: Change what the id is attached to and use textContent

  // toggleStatus.textContent = isActiveToggle ? "Active" : "Inactive";
});

/* ----- Example 2 ----- */

// select DOM Nodes
const characterForm = document.getElementById("character-form");
const characterInput = document.getElementById("character-input");
const characterListEl = document.getElementById("character-list");
const resetBtn = document.getElementById("reset-btn");

// create an initial list
const DEFAULT_CHARACTERS = ["Magnus Carleson", "Judit Polgar", "Mikhail Tal"];

// copy the default list into a "working list" using the "spread operator"
let characterList = [...DEFAULT_CHARACTERS];

// render list
function renderCharacterList() {
  // clear list elements in case there are some left over
  characterListEl.innerHTML = "";
  // iterate through array
  characterList.forEach((name) => {
    // for each item in the array create a list element
    const li = document.createElement("li");
    // add the text Content to the list element
    li.textContent = name;
    // append that element into the list
    characterListEl.appendChild(li);
  });
}
renderCharacterList();
// Event that accesses input field information and appends it to the list and re-renders that list to the DOM
characterForm.addEventListener("submit", (event) => {
  // prevent default refresh behavior
  event.preventDefault();
  // next extract the value from the input field and strip out leading and trailing spaces
  const inputValue = characterInput.value.trim();
  // guard against empty submission
  if (!inputValue) return;
  // push the new entry into the character list
  characterList.push(inputValue);
  // re-render the list
  renderCharacterList();
  // reset form field
  characterInput.value = "";
  // TODO: Evaluate if this enhances the page UX: characterInput.focus();
});

// reset button -> re-render the default list without user additions
function resetForm() {
  characterList = [...DEFAULT_CHARACTERS];
  renderCharacterList();
}

resetBtn.addEventListener("click", resetForm);
