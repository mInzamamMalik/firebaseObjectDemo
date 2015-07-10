/**
 * Created by 192.168.3.50 on 7/10/2015.
 */
var app = angular.module("app",['firebase']);
app.controller("AppController",function ($scope,$firebaseObject){

    var ref = new Firebase("https://syncobject.firebaseio.com");

    var syncObject = $firebaseObject(ref);

    syncObject.$bindTo($scope,"data");

    $scope.compare = function(){
        if($scope.data.name == $scope.compname){
            $scope.report = "name matched and"
        }else{
            $scope.report = "name not matched and"
        }
        if($scope.data.message == $scope.compmessage){
            $scope.report += " message matched"
        }else{
            $scope.report += " message not matched"
        }
    };

    $scope.changefirebasedata = function(){

      $scope.show = $scope.show !== true;
    }
});

