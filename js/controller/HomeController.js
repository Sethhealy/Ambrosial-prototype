app.controller("HomeController",['$scope','$firebase',function($scope,$firebase){
    var url = "https://caterme.firebaseio.com/";
    var ref = new Firebase(url);

    var sync = $firebase(ref);

    $scope.data=sync.$asArray();
    console.log("my data: ", $scope.data);

    $scope.addTask = function (){
        sync.$push($scope.task);
        $scope.task = {};
    };
    $scope.selected = true;
    $scope.none = true;
}])
app.controller('AccordionCtrl', function ($scope) {
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
});
