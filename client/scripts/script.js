var app = angular.module("app", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");

  $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
    .state("home", {
      url: "/",
      templateUrl: "partials/home.html"
    })
    .state("address", {
      url: "/address",
      templateUrl: "partials/address.html"
    })
    .state("zipcode", {
      url: "/zipcode",
      templateUrl: "partials/zipcode.html"
    });
});
app.controller("addressCtrl", function($scope, $http) {
  $http.get("getCountries").then(function(response) {
    $scope.countries = response.data;
  });
  $scope.getStates = function() {
    if ($scope.selectedCountry == "") {
      return alert("Please Select Valid Country");
    }
    $http.get("getStates/" + $scope.selectedCountry).then(function(response) {
      $scope.states = response.data;
      $scope.cities = [];
      delete $scope.selectedState;
      delete $scope.selectedCity;
      delete $scope.zipcode;
    });
  };
  $scope.getCities = function() {
    if ($scope.selectedState == "") {
      return alert("Please Select Valid State");
    }
    $http
      .get("getCities/" + $scope.selectedCountry + "/" + $scope.selectedState)
      .then(function(response) {
        delete $scope.selectedCity;
        delete $scope.zipcode;
        $scope.cities = response.data;
      });
  };
  $scope.getZipcode = function() {
    if ($scope.selectedCity == "") {
      return alert("Please Select Valid City");
    }
    $http
      .get(
        "getZipcode/" +
          $scope.selectedCountry +
          "/" +
          $scope.selectedState +
          "/" +
          $scope.selectedCity
      )
      .then(function(response) {
        $scope.zipcode = response.data;
      });
  };
});
app.controller("zipcodeCtrl", function($scope, $http) {
  $scope.getAddress = function() {
    if ($scope.zipcode == "") {
      return alert("Please enter valid zipcode!");
    }
    $http.get("getAddress/" + $scope.zipcode).then(function(response) {
      $scope.address = response.data;
    });
  };
});
