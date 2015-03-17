define(['app'], function (app) {
	app.factory("testFactory",function($q, $http, $rootScope){
		var factory = {};
		factory.get = function(){
			var deferred = $q.defer();
			$http({
				method:'get',
				url:'/get'
			}).success(function(data){
				deferred.resolve(data)
			}).error(function(data){
				deferred.reject(data);
			});
			return deferred.promise;
		};urn factory;
	});
});