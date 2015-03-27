app.factory('Dati',['$http',function($http){
    return {
        presenzaConsiglio: function(id){
            var _arr = [];
            _arr[14451] = 'data/14451GETTONIDIPRESENZ.csv';
            _arr[14459] = 'data/14459GETTONIDIPRESENZ.csv';
            return $http.get(_arr[id]);   
        }
    }
}]);