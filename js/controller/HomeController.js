app.controller("HomeController",['$scope','$rootScope','$location','$firebaseAuth','$firebase',function($scope,$rootScope,$location,$firebaseAuth,$firebase){
    var url = "https://caterme.firebaseio.com/";
    var ref = new Firebase(url+"tasks");
    var sync = $firebase(ref);

    $scope.data=sync.$asArray();
    // console.log("my data: ", $scope.data);
    // console.log("username", $rootScope.user);
    $scope.addTask = function (){
        console.log($scope.task);
        sync.$push($scope.task);
        $scope.task = {};
    };

    $scope.update = function(data){
        // console.log("This", data)
        data.status = "Taken";
        $scope.data.$save(data);
    }

    $scope.authObj = $firebaseAuth(ref);
    $scope.authObj.$onAuth(function(authData){
        if(authData){
            var userRef = new Firebase(url+"users/"+authData.uid);
            var sync = $firebase(userRef);
            $scope.user = sync.$asObject();
            // console.log($scope.user);
        }else{
            $location.path('/')
        }

    })

    $scope.selected = true;
    $scope.none = true;


      $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
}]);
