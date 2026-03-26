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

// create an initial list

// render list

// Event that accesses input field information and appends it to the list and re-renders that list to the DOM

// reset button -> re-render the default list without user additions
