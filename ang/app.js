angular.module("simpleApp", ["validApp"])
    .controller("simpleCtrl", function ($scope, $http) {


        // текущее педставление
        $scope.currentView = "index";

        //получение всех данных о пользователях
        //использование promise
        $scope.getUsers = function () {
            var promise = $http.get("dataFolder/data.json");
            promise.then(fulfilled, rejected);
        };

        //используем если promise перейдёт в состояние fulfilled
        function fulfilled(response) {
            console.log("Status: " + response.status);
            console.log("Type: " + response.headers("content-type"));
            console.log("Length: " + response.headers("content-length"));

            $scope.users = response.data;
        }

        //используем если promise ерейдёт в состояние rejected
        function rejected(error) {
            console.error(error.status);
            console.error(error.statusText);
        }


        // создание нового элемента
        $scope.create = function (user) {
            $scope.users.push(user);
            $scope.currentView = "index";
        };


        // обновление элемента
        $scope.update = function (modifiedUser) {
            for (var i = 0; i < $scope.users.length; i++) {
                if ($scope.users[i].id == modifiedUser.id) {
                    $scope.users[i] = modifiedUser;
                    break;
                }
            }
            $scope.currentView = "index";
        };


        // удаление элемента из модели
        $scope.delete = function (user) {
            $scope.users.splice($scope.users.indexOf(user), 1);
        };


        // редеактирование существующего или создание нового элемента
        $scope.editOrCreate = function (user) {
            $scope.currentUser = user ? angular.copy(user) : {};

        };

        // сохранение изменений
        $scope.saveEdit = function (user) {
            if (angular.isDefined(user.id)) {
                $scope.update(user);
            } else {
                $scope.create(user);
            }
        };

        $scope.getUsers();

    });
