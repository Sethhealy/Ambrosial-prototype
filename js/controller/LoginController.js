app.controller("LoginController",['$scope','$rootScope','$location','$firebaseAuth','$firebase',function($scope,$rootScope,$location,$firebaseAuth,$firebase){
    var url = "https://caterme.firebaseio.com/";
    var ref = new Firebase(url);
    var sync = $firebase(ref);

    var userRef = new Firebase(url+"users");
    $scope.syncUser = $firebase(userRef);
    $scope.newUser = $scope.syncUser.$asObject();

    $scope.data=sync.$asArray();
    console.log("my data: ", $scope.data);

    $scope.authObj = $firebaseAuth(ref);

    $scope.loginSubmit = function(){
    $scope.login = function(){
        $scope.authObj.$authWithPassword({
            email: $scope.user.email,
            password: $scope.user.pass
        }).then(function(authData){
            $rootScope.authData = authData;
            console.log("Logged in as:", authData.uid);
            $location.path('/home');
        }).catch(function(error){
            console.log(error);
            $scope.user.pass = "";
        })
    }
    // login ends

    }

    // signup starts

    var userRef = new Firebase(url+"users");
    $scope.syncUser = $firebase(userRef);
    $scope.newUser = $scope.syncUser.$asObject();

    $scope.signupSubmit = function(){

    $scope.signup = function(){
    $scope.authObj.$createUser({ email: $scope.user.email, password: $scope.user.pass
    }).then(function(userData) {
      return $scope.authObj.$authWithPassword({
        email: $scope.user.email,
        password: $scope.user.pass
      });
    }).then(function(authData) {
      console.log("Signed up as:", authData.uid);
      $scope.syncUser.$set(
            authData.uid, {
                uid: authData.uid,
                firstname: $scope.user.name,
                email: $scope.user.email,
                password: $scope.user.pass,
                usertype: "user"
            }
        );
      $location.path('/home');
    }).catch(function(error) {
      console.error("Error: ", error);
    });
    // signup ends

    }
}
}])
