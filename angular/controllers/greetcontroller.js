module.controller("greetcontrol",function($scope,greetfactory){
    $scope.greet=function(){
        var fName = $scope.firstName;
        var lName = $scope.lastName;
        $scope.result = "Welcome "+ greetfactory.initCap(fName)+" " + greetfactory.initCap(lName);
    }
    $scope.clear=function(){
        $scope.firstName="";
        $scope.lastName="";
        $scope.result="";
    }
    
})