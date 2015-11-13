angular.module("validApp", [])
    .controller("validCtrl", function ($scope) {

        $scope.getError = function (error) {
            if (angular.isDefined(error)) {
                if (error.required) {
                    return "Поле не должно быть пустым";
                } else if (error.email) {
                    return "Введите правильный email";

                } else if (error.pattern) {
                    return "Некорректный ввод"
                }
            }
        }
    });