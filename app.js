
var app = angular.module('diaryApp', ['ngRoute']);
 
app.run(function($rootScope) {
	$rootScope.selectedMenu = 0;
	$rootScope.menus = [
		{
			id:0,
			name:'Home',
			link:'#/home'
		},
		{
			id:1,
			name:'All',
			link:'#/all'
		},
		{
			id:2,
			name:'Category',
			link:'#/category'
		}
	];
	
	$rootScope.entries = [
		{	
			title:'Sad day',
			content:'Donno why so sad ~ haiz...'
		},
		{
			title:'Sicked',
			content:'Donno why sicked...TT'
		},
		{
			title:'Tired ~',
			content:'Why everyday so tired ? LOL '
		}
	];
});
 
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home.html',
        controller: 'MainController'
    })
	$routeProvider.when('/all', {
        templateUrl: 'all_entry.html',
        controller: 'AllEntryController'
    })
	$routeProvider.when('/category', {
        templateUrl: 'category.html',
        controller: 'CategoryController'
    })
	$routeProvider.when('/new', {
        templateUrl: 'new_entry.html',
        controller: 'NewEntryController'
      })
	 
}]);
 
 
app.controller('MainController', function($rootScope,$scope) {
    $rootScope.selectedMenu = 0;
    $scope.message = 'A diary app written in AngularJS which is simple, quick and responsive.. xD';
     
}); 
 
app.controller('AllEntryController', function($rootScope,$scope) {
    $rootScope.selectedMenu = 1;
    $scope.message = 'This is all entry screen';
	
    $scope.remove = function(entry) {
		var index = $rootScope.entries.indexOf(entry);
		$rootScope.entries.splice(index,1);
		
	};
});

 app.controller('CategoryController', function($rootScope,$scope) {
    $rootScope.selectedMenu = 2;
    $scope.message = 'This is all category';
     
});
 
app.controller('NewEntryController', function($rootScope,$scope) {
	$rootScope.selectedMenu = 3;
    $scope.message = 'This is new entry screen';
 
	$rootScope.newEntry = {};
	$scope.addEntry = function() {
		$rootScope.entries.push($rootScope.newEntry);
		$rootScope.newEntry = {};
		alert('Success add new entry xDD');
	};
});

app.directive( 'goClick', function ( $location ) {
  return function ( scope, element, attrs ) {
    var path;

    attrs.$observe( 'goClick', function (val) {
      path = val;
    });

    element.bind( 'click', function () {
      scope.$apply( function () {
        $location.path( path );
      });
    });
  };
});