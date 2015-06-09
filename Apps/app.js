

(function () {

    var app = angular.module('jsApp', ['ngAnimate']);

    // js-switch directive
    app.directive('jsSwitch', function () {
        return {
            restrict: 'E',
            templateUrl: './Templates/js-switch.html',
            scope:
                {
                    switchPosition: '=ngModel',
                    switchLabel: '@',
                    imageSource: '@',
                    onText: '@',
                    offText: '@'
                },
            controller: 'switchController',
            controllerAs: 'sc',
            bindToController: true,
        }
    });
    app.controller('switchController', function () {

        var scope = this;

        this.switchPosition;
        this.switchLabel = '';
        this.imageSource = '';
        this.onText = 'on';
        this.offText = 'off';

        this.changeSwitch = function () {
            scope.switchPosition = !scope.switchPosition;
        };
    });

    // js-drop directive
    app.directive('jsDrop', function () {
        return {
            restrict: 'E',
            templateUrl: './Templates/js-drop.html',
            scope: {
                dropData: '=',
                selectedItem: '=',
                dropHeader: '@',
                displayProperty: '@',
                imageSourceProperty: '@',
            },
            controller: 'dropController',
            controllerAs: 'dc',
            bindToController: true,
        }
    });
    app.controller('dropController', function () {

        var scope = this;

        this.dropData;
        this.dropHeader = 'Header 1';
        this.selectedItem = {};
        this.displayProperty;
        this.imageSourceProperty;

        this.selectItem = function (item) {
            scope.selectedItem = item;
        };

    });

    // js-select directive
    app.directive('jsSelect', function () {
        return {
            restrict: 'E',
            templateUrl: './Templates/js-select.html',
            scope: {
                selectData: '=',
                selectedItem: '=',
                sortableItems: '=?',
                displayProperty: '@',
                sortProperty: '@',
            },
            controller: 'selectController',
            controllerAs: 'sc',
            bindToController: true,
        }
    });
    app.controller('selectController', function () {

        var scope = this;

        this.sortableItems;
        this.selectedItem = {};
        this.displayProperty = '';
        this.sortBy;
        this.sortOpen = false;
        this.sortProperty = '';
        this.selectData;
        this.text = '';
        this.showItems = false;

        this.selectItem = function (item) {
            scope.selectedItem = item;
            scope.text = item[scope.displayProperty];
            scope.showItems = false;
        };

        this.changeSort = function (sort) {
            if (sort == scope.sortProperty)
                scope.sortProperty = "-" + sort;
            else
                scope.sortProperty = sort;
        };

    });


})();
