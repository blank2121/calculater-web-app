const OPERATORS = ["-","+","*","!","/"];
const ON_RIGHT = ['1','2','3','4','5','6','7','8','9','0','(','s','l','c','t','M'];
//called to evaluate maths
const ans = () => {
    var result_bar = document.getElementById("result");

    result_bar.value=result_bar.value.replace(/\^/g,"**");
    result_bar.value=result_bar.value.replace(/%/g, "*(1/100)");
    result_bar.value=result_bar.value.replace(/sqrt/g, "Math.sqrt");
    result_bar.value=result_bar.value.replace(/√/g, "Math.sqrt");
 
    // not evaluating math if there is nothing to evaluate
    if (result_bar.value == "") {
        console.log("empty");
    }
    else {
        
        console.log(result_bar.value);
        document.getElementById("result").value = eval(result_bar.value);
    }
    
}

//key event handler
document.onkeydown = function(e) {
    if (e.code == "Enter") {
        ans();
        for(let i = 0; i != dont_enter.length; i++) {
            dont_enter[i].blur();
        }
    }
}


//math functions and variables

π=Math.PI
e=Math.E

const factorial = (num) => {
    if (num < 0) {
        return -1;
    }
    else if (num == 0) {
        return 1;
    }
    else {
        return (num*factorial(num-1));
    }
}

const log = (num) => {return (Math.log10(num));}

//trig functions
const RADIANS_TO_DEGREES = Math.PI/180;
const sin = (num) => {return (Math.sin(num*(RADIANS_TO_DEGREES)));}
const cos = (num) => {return (Math.cos(num*(RADIANS_TO_DEGREES)));}
const tan = (num) => {return (Math.tan(num*(RADIANS_TO_DEGREES)));}