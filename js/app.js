'use strict'

var startCalculator = (function (){
    function showResult(result){
        alert('Result is: ' + result)
    }
    
    function getNumberFromUser(){
        var num = Number(prompt('Type number!'))
        if(Number.isNaN(num)){
           return getNumberFromUser()
        }else {
            return num
        }
    }
    
    function getOperatorFromUser(){
        var input = prompt('Type operator (+, -, *, /')
        switch(input){
            case '+':
                return input
            case '-':
                return input
            case '*':
                return input
            case '/':
                return input
            default:
                return getOperatorFromUser()
        }
    }
    
    function getConfirmationFromUser(){
        return confirm('Do you want to proceed?')
    }
    
    function getConfirmationFromUserAndProceed(result){
        var confirmation = getConfirmationFromUser()
    
        if(confirmation){
            mainLoop(result)
        }else{
            showResult(result)
        }
    }
    
    function calculate(operator, a, b){
        switch(operator){
            case '+':
                return a + b
            case '-':
                return a - b
            case '*':
                return a * b
            case '/':
                return a / b
        }
    }
    
    function mainLoop(result){
        var operator = getOperatorFromUser()
        var number = getNumberFromUser()
    
        var newResult = calculate(operator, result, number)
    
        getConfirmationFromUserAndProceed(newResult)
    }
    
    function start(){
        var result = getNumberFromUser()
        
        getConfirmationFromUserAndProceed(result)
    }
    return start
})()
