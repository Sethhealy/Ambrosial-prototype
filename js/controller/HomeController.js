app.controller("HomeController",['$scope','$firebase',function($scope,$firebase){
    var url = "https://caterme.firebaseio.com/";
    var ref = new Firebase(url);

    var sync = $firebase(ref);

    $scope.data=sync.$asArray();
    console.log("my data: ", $scope.data);

    $scope.addTask = function (){
        sync.$push({ name: $scope.taskInput});
        $scope.taskInput = "";
    };

    $scope.deleteTask = function (id){
        var removeRef = new Firebase(url + id);
        removeRef.remove();
    };

    $scope.updateTask = function (){
        console.log("the Object: ", obj);
        var updateRef = new Firebase(url + id);
        $scope.data.$save(id);
    }
}])
