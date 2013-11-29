function IMCCtrl($scope) {
	$scope.calcIMC = function() {
		var altura2 = $scope.yourHeight * $scope.yourHeight;
		$scope.imc = $scope.yourWeight / altura2;
		$scope.obesidade = new Array();
		$scope.obesidade[0] = $scope.imc < 17;
		$scope.obesidade[1] = $scope.imc >= 17 && $scope.imc < 18.5;
		$scope.obesidade[2] = $scope.imc >= 18.5 && $scope.imc < 25;
		$scope.obesidade[3] = $scope.imc >= 25 && $scope.imc < 30;
		$scope.obesidade[4] = $scope.imc >= 30 && $scope.imc < 35;
		$scope.obesidade[5] = $scope.imc >= 35 && $scope.imc < 40;
		$scope.obesidade[6] = $scope.imc > 40;

		$scope.normal = {
			'minimo': 18.5 * altura2,
			'maximo': 24.99 * altura2
		};
	}
}