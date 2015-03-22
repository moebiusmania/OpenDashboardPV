var app = angular.module('odpv',[]);
        
app.controller('testCtrl',['$scope','$http',
    function($scope,$http){

//                var url = 'http://servizi1.epavia.it/bandionline/csv.php?it';
        var url = 'data/14459GETTONIDIPRESENZ.csv';

        $http.get(url)
            .success(function(r,s){
                // Converte il CSV in JSON
                $scope.resp = Papa.parse(r);
                // Sposta la prima riga nell'intestazione della tabella
                $scope.thead = $scope.resp.data.splice(0,1);
                angular.forEach($scope.resp.data,function(v,k){
                    //console.log(v,k);
                    
                    // Sposta il totale nel footer della tabella
                    if(v[0] === 'Totale'){ $scope.tfoot = $scope.resp.data.splice(k,1) }
                });
                // Il rimanente viene spostato nel corpo della tabella
                $scope.tbody = $scope.resp.data;
                //console.log($scope.tbody);
            })
            .error(function(r,s){
                console.log(r,s);
            });

    }]);