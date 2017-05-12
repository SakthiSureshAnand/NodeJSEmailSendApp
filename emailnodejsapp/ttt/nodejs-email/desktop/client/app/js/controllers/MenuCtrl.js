app.controller("MenuCtrl", [ '$scope', '$location', '$window',
                    function($scope, $location, $window) {
    $scope.handle_url = function (url_name){
        var language = $window.navigator.language || $window.navigator.userLanguage;
        language_part1 = language.split("-")[0];
        $location.path(url_name + '-' + language_part1);
    }
}]);
