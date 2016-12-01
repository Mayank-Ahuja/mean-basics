module.controller("calcController",function($scope,calcfactory){
    $scope.doOperation=function(event){

        var firstNumber = $scope.firstNo;
        var secondNumber = $scope.secondNo;
        $scope.result = calcfactory[event](firstNumber,secondNumber);
    }
    
})