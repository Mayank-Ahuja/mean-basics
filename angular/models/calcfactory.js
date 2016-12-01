module.factory('calcfactory', function(){
    var object = {
        add:function (firstNumber, secondNumber){
    return parseInt(firstNumber) + parseInt(secondNumber);
},

subtract:function (firstNumber, secondNumber){
    return parseInt(firstNumber) - parseInt(secondNumber);
},

multiply:function (firstNumber, secondNumber){
    return parseInt(firstNumber) * parseInt(secondNumber);
},

divide:function (firstNumber, secondNumber){
    return parseInt(firstNumber) / parseInt(secondNumber);
    }
};
    return object;
});