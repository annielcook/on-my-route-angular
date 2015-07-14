angular.module('MainApp', [])
  .controller('MapCtrl', function($scope) {})
  .controller('FormCtrl', function($scope) {
    $scope.getRoute = function() {
      var start = $scope.start.address;
      var end = $scope.end.address;
      var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING
      };
      directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
        }
      });
    }
  })