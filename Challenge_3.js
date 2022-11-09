/*Question 3:
Write a function that converts HEX to RGB.
Then Make that function auto-detect the formats so that 
if you enter HEX color format it returns RGB 
and if you enter RGB color format it returns HEX.*/

let colorChecker = (color) => {
    if (color[0] === '(') {
        color = color.replace('(','').replace(')','');
        let colorArray = color.split(' ');
        let num1 = +colorArray[0];
        let num2 = +colorArray[1];
        let num3 = +colorArray[2];
        if(colorArray.length === 3 
            && typeof num1 === 'number'
            && num1 >= 0 && num1 < 256
            && typeof num2 === 'number'
            && num2 >= 0 && num2 < 256
            && typeof num3 === 'number'
            && num3 >= 0 && num3 < 256)
            return 'RGB';
    }

    else if (color[0] === '#') {
        color = color.replace('#', '');
        if(color.length === 6) {
            for(digit of color) {
                if(!((+digit >= 0 && +digit<10) || 
                   digit === 'a' || digit === 'A' ||
                   digit === 'b' || digit === 'B' ||
                   digit === 'c' || digit === 'C' ||
                   digit === 'd' || digit === 'D' ||
                   digit === 'e' || digit === 'E' ||
                   digit === 'f' || digit === 'F')) {
                    return 'error';
                   }
            }
            return 'HEX';
        }
    }
    
    return 'error';
}

let HEXtoRGB = (color) => {
    color = color.replace('#', '');
    let num1 = color.substr(0, 2);
    let num2 = color.substr(2, 2);
    let num3 = color.substr(4, 2);
    num1 = HEXtoDEC(num1);
    num2 = HEXtoDEC(num2);
    num3 = HEXtoDEC(num3);
    return `(${num1} ${num2} ${num3})`;

}

let RGBtoHEX = (color) => {
    color = color.replace('(','').replace(')','');
    let colorArray = color.split(' ');
    let num1 = +colorArray[0];
    let num2 = +colorArray[1];
    let num3 = +colorArray[2];
    num1 = DECtoHEX(num1);
    num2 = DECtoHEX(num2);
    num3 = DECtoHEX(num3);
    return `#${num1}${num2}${num3}`;
}

let HEXtoDEC = (hexNumber) => {
    return parseInt(hexNumber, 16);
}

let DECtoHEX = (decNumber) => {
    let hexNumber = decNumber.toString(16);
    if(hexNumber.length === 1)
        hexNumber = '0' + hexNumber;
    return hexNumber;
}


let flag = 1;
while(flag) {

    alert("Color converter!");
    alert("You can enter a color in RGB value or in HEX value.");
    alert("If you want to enter the color in RGB value then write it in this format: (17 30 15)");
    alert("If you want to enter the color in HEX value then write it in this fromat #ff4512");
    alert('');
    let color = prompt("Enter your color:");

    if (colorChecker(color) === 'RGB') {
        let hexColor = RGBtoHEX(color);
        alert(`changing ${color} to ${hexColor}`);
        flag = 0;
    }

    else if (colorChecker(color) === 'HEX') {
        let rgbColor = HEXtoRGB(color);
        alert(`changing ${color} to ${rgbColor}`);
        flag = 0;
    }
    else {
        alert("You didn't enter the color in the right format, try again!");
    }
}

