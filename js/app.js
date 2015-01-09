var app = angular.module("Caterme", ['firebase'])

    app.config(['$routeProvider', function($routeProvider){

        $routeProvider
        .when('/',{
            templateUrl:'Views/home.html',
            controller: 'HomeController'
        });
    }]);
    //calling the controller function
app.controller("CaterController", function ($scope, CaterService) {

    $scope.newtasks = CaterService.getItems();


    $scope.taskInput = '';
    $scope.addTask =function(){
    $scope.errorMsg="";


    if($scope.taskInput.length == 0){


             $scope.errorMsg = "You have to fill all fields por favor";
             return;

             console.log("bluh");
         } else {

             CaterService.addTask($scope.taskInput);
             $scope.taskInput = '';
         }

     }

        //removing the checked item(s)
     $scope.removeCheckedTask = function(){
        for(var i = $scope.newtasks.length-1; i >=0; i--){
            if($scope.newtasks[i].isChecked){
                $scope.removenewtasks(i);
            }
        }
    }

        //Removing at the pindex
    $scope.removeTasks = function(pIndex){
    CaterService.removeTasksAt(pIndex);
}



});
