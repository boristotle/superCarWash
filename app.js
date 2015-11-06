var app = angular.module('carApp', []);

app.controller('carWash', function($scope){
  $scope.newCar = {};
  $scope.polishingCar = {};
  $scope.washingCar = {};
  $scope.finishedCar = [];

  $scope.washCar = function() {
    $scope.washingCar = $scope.newCar
    $scope.newCar = {};
  }
  $scope.polishCar = function() {
    $scope.polishingCar = $scope.washingCar
    $scope.washingCar = {};
  }
   $scope.finishCar = function() {
    $scope.finishedCar.push($scope.polishingCar)
    $scope.polishingCar = {};
  }
})