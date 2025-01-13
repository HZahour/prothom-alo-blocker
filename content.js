// Select the first div element with the class 'container'
var outerContainer = document.querySelector('div#outercontainer');
var bottomContainer = document.querySelector('div.bottom-container');

// Remove the selected element if it exists
if (outerContainer) {
    outerContainer.remove();
}

// Remove the selected element if it exists
if (bottomContainer) {
    bottomContainer.remove();
}