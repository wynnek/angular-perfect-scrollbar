var app = angular.module("app", ['rzModule','mb-scrollbar'])

app.controller('mainCtrl', function($scope){
    $scope.items = [];

    for(var i = 0; i < 100; i++) {
        $scope.items.push({
            id: i
        });
    }

    var config = {};
    $scope.scrollbar = function(direction, autoResize, show) {
        config.direction = direction;
        config.autoResize = autoResize;
        config.scrollbar = {
            show: !!show
        };
        return config;
    }

    $scope.priceSlider = {
        min: 100,
        max: 180,
        ceil: 500,
        floor: 0
    };
})

