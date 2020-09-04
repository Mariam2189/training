function plus() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);//преобразует в число, если введется текст, если 5ю1 то до цнлого
    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 + num2;
    //innerHTML
    document.getElementById('out').innerHTML = result;
    console.log(result);
}

function minus() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 - num2;
    
    document.getElementById('out').innerHTML = result;
    console.log(result);
}