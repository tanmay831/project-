function calculate(){
    let num1 =parseInt(document.getElementById("num1").value)
    let num2 =parseInt(document.getElementById("num1").value)
    let operator=document.getElementById("operator").value

    let result

    if(operator==='+'){
        result=num1+num2
    }else if(operator ==='-'){
        result=num1-num2
    }else if(operator ==='*'){
        result=num1*num2
    }else if(operator==='/'){
        if(num2==='0'){
            result="error: division by zero"
        }else{
            result=num1/num2
        }
    }else{
        result="invaild operator"
    }
    document.getElementById("result").textContent="result"+result
}