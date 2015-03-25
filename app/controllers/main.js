var app = angular.module('odpv',['ngRoute']);

        
app.controller('testCtrl',['$scope','$http','$routeParams',
    function($scope,$http,$routeParams){

        var url = ['data/14459GETTONIDIPRESENZ.csv','data/14451GETTONIDIPRESENZ.csv'];
        console.log($routeParams);
        // Inizialiazzazione
        $scope.init = function(i){
            $scope.name = "";
            $scope.thead = null;
            $scope.tbody = null;
            $scope.tfoot = null;
            $scope.irap = null;
            $scope.tableTitle = null;
            // Carica i dati
            $http.get(url[i])
                .success($scope.parseData)
                .error(function(r,s){
                    console.log(r,s);
                });
        }
        
        // Filtra i risultati per nome
        $scope.filterByName = function(i){
            var _str = $scope.tbody[i][0];
            if(_str.toUpperCase().indexOf($scope.name.toUpperCase()) > -1){
                return true;
            }else{
                return false;
            }
        }
        
        $scope.parseData = function(r,s){
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
                v[0] = v[0].toLowerCase();
                console.log(_temp);
                // Sposta il totale nel footer della tabella
                if( v[0] === 'totale' || 
                   ((k === $scope.resp.data.length -1) && v[1]) ){ 
                    $scope.tfoot = $scope.resp.data.splice(k,1) 
                }
            });
            // Il rimanente viene spostato nel corpo della tabella
            $scope.tbody = $scope.resp.data;
            // Sposto i dati IRAP in un oggetto dedicato
            $scope.irap = [];
            $scope.irap[0] = $scope.thead[0].splice(($scope.thead[0].length - 2),2)
            $scope.irap[1] = $scope.tfoot[0].splice(($scope.tfoot[0].length - 2),2)
            window.irap = $scope.irap;
        }
        
        // Avvio
        var i;
        if(window.location.hash === ""){
            i = 0;
            window.location.hash = "#0";
        }else{
            i = parseInt(window.location.hash.substr(1));
        }
        $scope.init(i);

    }]);