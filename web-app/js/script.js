
var enterprise =  angular.module('enterprise',[]);

enterprise.config(['$routeProvider',
             function($routeProvider){
        $routeProvider
            .when("/login",{
                          templateUrl : 'partial/login.html',
                          controller:'loginController'
                       })

            .when("/signUp",{
                templateUrl : 'partial/signUp.html',
                controller:'signUpController'
            })
            .when("/list",{
                templateUrl : 'partial/list.html',
                controller:'listController'
            })
            .otherwise({
              redirectTo : '/signUp'
            })
    }])

    .service('loginService',[function($scope){
        var loginDetails=[];
    this.addLoginDetails = function(userName,password){


        loginDetails.push({
            userName  : userName,
            password : password
        });
        debugger;
        return loginDetails

    };
    this.getLoginDetails = function () {
        debugger;
        loginDetailsList = loginDetails;
        return loginDetailsList;
    };
}])


enterprise.controller('loginController',function($scope,loginService){
    $scope.save = function(){
        debugger;
        $scope.details = loginService.addLoginDetails($scope.userName,$scope.password);
        if($scope.details){
            $scope.userName = "";
            $scope.password = ""
        }
    }
});



enterprise.controller('signUpController',function($scope){
    $scope.save1 = function(){
        debugger;
        $scope.signUpDetails = [];
        $scope.signUpDetails.push ({
            username : $scope.name,
            password : $scope.surname,
            email : $scope.email,
            dob : $scope.dob
        });
        debugger;
        $scope.doBlank();

    };
    $scope.doBlank = function(){
        $scope.name = "";
        $scope.surname = "";
        $scope.email = "";
        $scope.contactNo = "";
        $scope.dob = ""
    }
});
enterprise.controller('listController',function($scope,loginService){
    debugger;
    debugger;
    $scope.loginDetailsList =loginService.getLoginDetails();
});

