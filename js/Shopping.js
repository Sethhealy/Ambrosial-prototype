angular.module("Caterme")

.service("CaterService", function () {
    //defining the newtasks
var newtasks=[

    ];
    this.getItems=function() {
        return newtasks;
    }

    this.addTask=function(pitem){
        //adding an item will automaticly make it unchecked
        newtasks.push(  {label:pitem, isChecked:false}  );
    }
    // this makes sure you only delete one item unless multiple are selected
    this.removeTasksAt=function(pIndex){
        newtasks.splice(pIndex,1);
    };
});

