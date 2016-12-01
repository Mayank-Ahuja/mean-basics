app.controller("friendController",function($scope,friendFactory){
    $scope.friends  = friendFactory.getFriends();
})