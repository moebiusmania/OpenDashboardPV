app.factory('Dati',['$http',function($http){
    return {
        presenzeConsiglio: function(id){
            var _arr = [];
            _arr[14451] = 'data/14451GETTONIDIPRESENZ.csv';
            _arr[14459] = 'data/14459GETTONIDIPRESENZ.csv';
            return $http.get(_arr[id]);   
        },
        presenzeCommissioni: function(id){
            var _arr = [];
            return $http.get(_arr[id]);   
        },
        feed: function(id){
            var _arr = [];
            return $http.get(_arr[id]);   
        },
        mappe: function(){
            
        }
    }
}]);