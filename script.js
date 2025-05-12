// Function to change the text and style
document.getElementById("changeTextButton").addEventListener("click", function() {
    // Change text content
    document.getElementById("textContent").textContent = "The text has been changed!";

    // Modify the style
    document.getElementById("textContent").style.color = "blue";
    document.getElementById("textContent").style.fontSize = "20px";
});

// Function to add a new element to the page
document.getElementById("addElementButton").addEventListener("click", function() {
    // Create a new paragraph element
    let newElement = document.createElement("p");

    // Set the text content of the new element
    newElement.textContent = "This is a new dynamically added paragraph!";

    // Add a class to style the new element
    newElement.classList.add("new-element");

    // Append the new element to the body or any other container
    document.body.appendChild(newElement);
});
