app.controller("LoginController",['$scope','$rootScope','$location','$firebaseAuth','$firebase',function($scope,$rootScope,$location,$firebaseAuth,$firebase){
    var url = "https://caterme.firebaseio.com/";
    var ref = new Firebase(url);
    var sync = $firebase(ref);

    $scope.data=sync.$asArray();
    console.log("my data: ", $scope.data);

    $scope.loginSubmit = function(){
    var url = "https://caterme.firebaseio.com/";
    var ref = new Firebase(url);

    $scope.authObj = $firebaseAuth(ref);
    $scope.login = function(){
        $scope.authObj.$authWithPassword({
            email: $scope.user.email,
            password: $scope.user.pass
        }).then(function(authData){
            $rootScope.authData = authData;
            $location.path('/');
        }).catch(function(error){
            console.log(error);
            $scope.user.pass = "";
        })
    }
    // login ends
    $scope.login();

    }

    // signup starts

    $scope.signupSubmit = function(){
    var url = "https://caterme.firebaseio.com/";
    var ref = new Firebase(url);

    $scope.authObj = $firebaseAuth(ref);

    $scope.signup = function(){
    $scope.authObj.$createUser({ email: $scope.user.email, password: $scope.user.pass
    }).then(function(userData) {
      return $scope.authObj.$authWithPassword({
        email: $scope.user.email,
        password: $scope.user.pass
      });
    }).then(function(authData) {
      console.log("Logged in as:", authData.uid);
      $location.path('/');
    }).catch(function(error) {
      console.error("Error: ", error);
    });
    // signup ends
    $scope.signup();

    }
}
}])
