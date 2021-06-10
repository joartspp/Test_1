// Add percent function
const addPercentage = (many) => {
    var oldPencen = checkValue(); //Receive now value from element
    var percent = oldPencen + many; // New percent
    if (percent >= 100) { // Condition when new percent more than 100. I fixed it
        percent = 100
    }
    var newPencen = (628 - ((628 * percent)/100)); // Formula for change percent to px
    changeText(percent); //Change text
    document.querySelector('#processor:nth-child(2)').style.strokeDashoffset = newPencen // Change percent to new percent
}

// Remove percent function
const removePercentage = (many) => {
    var oldPencen = checkValue(); //Receive now value from element
    var percent = oldPencen - many; // New percent
    if (percent <= 0) { // Condition when new percent more than 0. I fixed it
        percent = 0
    }
    var newPencen = (628 - ((628 * percent)/100)); // Formula for change percent to px
    changeText(percent); //Change text
    document.querySelector('#processor:nth-child(2)').style.strokeDashoffset = newPencen // Change percent to new percent
}

// Check now percent function
const checkValue = () => {
    var el = document.querySelector('#processor:nth-child(2)'); //Get element property
    var rawValue = getComputedStyle(el).strokeDashoffset; // get all style computed from this element
    var changeInt = parseInt(rawValue) // Convert PX to Int
    var calculate = Math.floor(((changeInt - 628) * 100)/(-628)) // Formula for change px to percent
    return (calculate); // Return percent
};

// Change text function
const changeText = (percent) => {
    var el = document.getElementById('num-prog'); //get element
    el.innerText = `${percent}%`;// set text in this element
}