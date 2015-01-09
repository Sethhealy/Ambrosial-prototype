app.controller("HomeController",['$scope','$firebase',function($scope,$firebase){
    var ref = new Firebase("https://caterme.firebaseio.com/");

    var sync = $firebase(ref);

    $scope.data=sync.$asObject();
    console.log("my data: ", $scope.data);
}])
