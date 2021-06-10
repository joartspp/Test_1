const addPercentage = (many) => {
    var oldPencen = checkValue();
    var percent = oldPencen + many;
    if (percent >= 100) {
        percent = 100
    }
    var newPencen = (628 - ((628 * percent)/100));
    changeText(percent);
    document.querySelector('#processor:nth-child(2)').style.strokeDashoffset = newPencen
}


const removePercentage = (many) => {
    var oldPencen = checkValue();
    var percent = oldPencen - many;
    if (percent <= 0) {
        percent = 0
    }
    var newPencen = (628 - ((628 * percent)/100));
    changeText(percent);
    document.querySelector('#processor:nth-child(2)').style.strokeDashoffset = newPencen
}


const checkValue = () => {
    var el = document.querySelector('#processor:nth-child(2)');
    var rawValue = getComputedStyle(el).strokeDashoffset;
    var changeInt = parseInt(rawValue)
    var calculate = Math.floor(((changeInt - 628) * 100)/(-628))
    return (calculate);
};

const changeText = (percent) => {
    var el = document.getElementById('num-prog');
    el.innerText = `${percent}%`;
}