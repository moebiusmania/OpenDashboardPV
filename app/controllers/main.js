var app = angular.module('odpv',[]);

        
app.controller('testCtrl',['$scope','$http',
    function($scope,$http){

//                var url = 'http://servizi1.epavia.it/bandionline/csv.php?it';
        var url = 'data/14459GETTONIDIPRESENZ.csv';
        
        $scope.name = "";
        
        // Filtra i risultati per nome
        $scope.filterByName = function(i){
            if($scope.tbody[i][0].indexOf($scope.name.toUpperCase()) > -1){
                return true;
            }else{
                return false;
            }
        }

        $http.get(url)
            .success(function(r,s){
                // Converte il CSV in JSON
                $scope.resp = Papa.parse(r,{
                    skipEmptyLines: true,
                });
                // Sposta la prima riga nell'intestazione della tabella
                $scope.thead = $scope.resp.data.splice(0,1);
                $scope.tableTitle = $scope.thead[0][0];
                $scope.thead[0][0] = 'Nome';
                console.log($scope.thead);
                angular.forEach($scope.resp.data,function(v,k){
                    //console.log(v,k);
                    var _temp = JSON.stringify(v);
                    
                    console.log(_temp);
                    // Sposta il totale nel footer della tabella
                    if(v[0] === 'Totale'){ $scope.tfoot = $scope.resp.data.splice(k,1) }
                });
                // Il rimanente viene spostato nel corpo della tabella
                $scope.tbody = $scope.resp.data;
                // Sposto i dati IRAP in un oggetto dedicato
                $scope.irap = [];
                $scope.irap[0] = $scope.thead[0].splice(($scope.thead[0].length - 2),2)
                $scope.irap[1] = $scope.tfoot[0].splice(($scope.tfoot[0].length - 2),2)
                window.irap = $scope.irap;
            })
            .error(function(r,s){
                console.log(r,s);
            });

    }]);