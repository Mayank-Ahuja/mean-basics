app.controller("mobileController",function($scope,mobileFactory){
    $scope.mobiles = mobileFactory.getMobiles();
})