angular.module('myApp', [])
	.controller('myAppCtrl', function($scope) {

		$scope.atividades = [
			{'titulo':'Levantamento de Requisitos.', 'concluida':false}
		];
		$scope.adicionarAtividade = function() {
			$scope.atividades.push(
			{
				'titulo':$scope.novaAtividade, 'concluida':false
			})
			$scope.novaAtividade = '';
		}
		$scope.removerAtividade = function() {
			$scope.atividades = $scope.atividades.filter(function(item) {
				return !item.concluida;
			})
		}
	});