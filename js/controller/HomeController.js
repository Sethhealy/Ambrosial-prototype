//I'm calling my Home controller.
app.controller("HomeController",['$scope','$rootScope','$location','$firebaseAuth','$firebase',function($scope,$rootScope,$location,$firebaseAuth,$firebase){
    //url is named to shorten and make my process of calling my firebase easier.
    var url = "https://caterme.firebaseio.com/";
    // Calling ref here as url + tasks so that firebase will make a new place for all my tasks.
    var ref = new Firebase(url+"tasks");
    // Here I'm using sync as the new call for everything involving my tasks.
    var sync = $firebase(ref);

    // scope is allowing my data to be called as an array so I can pull from it.
    $scope.data=sync.$asArray();

    // I'm consoling my data to make sure it is working.
    // console.log("my data: ", $scope.data);

    // Here I'm making a function allowing the admin to create new tasks.
    $scope.addTask = function (){
        //console.log($scope.task);
        sync.$push($scope.task);
        $scope.task = {};
    };

    // Here I'm making a function to update the status of the tasks so that other users can see what is being worked on.
    $scope.update = function(data){
        // console.log("This", data)
        data.status = "Taken";
        $scope.data.$save(data);
    }

    // I'm setting up authorization so the user can be called and displayed.
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
    // Here I'm using selected as a choice for the drop down for status to default to none.
    $scope.selected = true;
    $scope.none = true;

  // This is my accordian where i can drop down the clients and hide the ones I'm not looking at.
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
