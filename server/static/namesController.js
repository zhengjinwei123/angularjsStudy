var app = angular.module("myApp",[]);
app.service('$myFunc', function() {
    this.toHex = function (x) {
        return x.toString(16);
    }
});
app.filter('hex',['$myFunc', function($myFunc) {
    return function(x) {
        return $myFunc.toHex(x);
    };
}]);

app.controller('namesCtrl',function($scope,$location,$http,$timeout,$interval,$myFunc){
    $scope.names=[
        {name:"zjw",age:26},
        {name:"zjw1",age:25}
    ];
    $scope.myUrl = $location.absUrl();
    $http.get("zjw.txt").then(function (response) {
        $scope.zjw = response.data;
    });
    $scope.myHeader = "Hello World!";
    $timeout(function () {
        $scope.myHeader = "How are you today?";
    }, 2000);

    $scope.theTime = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.theTime = new Date().toLocaleTimeString();
    }, 1000);

    $scope.myData = $myFunc.toHex(255);
});
