'use strict'

angular.module('MyApp.signup', ['ngRoute'])

.controller('signupCT', function($scope, account, $location) {
  $scope.data = {};
  $scope.signup = function(){
    account.signup($scope.data).then(function(data){
     console.log(data)
    
  })

  }
});
