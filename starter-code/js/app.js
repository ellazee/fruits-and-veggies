/* setup your angular app here */
// splice and push, use indexof to find if its in an array (test if index = -1)
var app = angular.module("FruitVeggieList", []);

app.controller("ListCtrl", ['$scope', function($scope) {
	$scope.poolItem = '';
	var poolList = fruit.concat(vegetables);
	$scope.leftList = [];
	$scope.rightList = [];
	$scope.shufflePool = shuffle(poolList);
	$scope.winCount = 0;
	$scope.class = "neutral";
 
	
	$scope.clickLeft = function (idx) {
		$scope.leftList.push($scope.shufflePool[idx]);
		$scope.shufflePool.splice(idx, 1);	
		
		console.log($scope.shufflePool.length);
		$scope.checkWin();
		console.log($scope.checkWin());
	}	

	$scope.clickRight = function (idx) {
		$scope.rightList.push($scope.shufflePool[idx]);
		$scope.shufflePool.splice(idx, 1);
		console.log($scope.shufflePool.length);
		$scope.checkWin();
		console.log($scope.checkWin());

	}

	$scope.moveBackLeft = function (idx) {
		$scope.shufflePool.push($scope.rightList[idx]);
		$scope.rightList.splice(idx, 1);
		console.log($scope.shufflePool.length);
		$scope.checkWin();
	}

	$scope.moveBackRight = function (idx) {
		$scope.shufflePool.push($scope.leftList[idx]);
		$scope.leftList.splice(idx, 1);
		console.log($scope.shufflePool.length);
		$scope.checkWin();
	}

	$scope.checkWin = function() {
	if ($scope.shufflePool.length == 0) {
			for (var i = 0; i<$scope.leftList.length; i++) {
				if(fruit.indexOf($scope.leftList[i]) == -1) {
					console.log(fruit.indexOf(1));
					$scope.class = "veggie";
					
				} else {
					$scope.class = "fruit";
				}
			}
				for (var i = 0; i<$scope.rightList.length; i++) {
				if(vegetables.indexOf($scope.rightList[i]) == -1) {
					console.log(fruit.indexOf($scope.rightList[i]));
					$scope.class = "fruit";
				} else { 
					$scope.class = "veggie";
				}
			}
		} 
	}

  // $scope.random = function() {
  //       return 0.5 - Math.random();
  // };
	function shuffle(array) {
	  var m = array.length, t, i;

	  // While there remain elements to shuffle…
	  while (m) {

	    // Pick a remaining element…
	    i = Math.floor(Math.random() * m--);

	    // And swap it with the current element.
	    t = array[m];
	    array[m] = array[i];
	    array[i] = t;
	  }

	  return array;
	}


}])

//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);