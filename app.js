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
            document.write("name matched <br />");
        }else{
            document.write("name not matched <br />")
        }
        if($scope.data.message == $scope.compmessage){
            document.write("message matched <br />");
        }else{
            document.write("message not matched <br />")
        }
    }
});

