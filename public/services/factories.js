define(['angular'], function (angular) {

	var app = angular.module('factories', []);

	app.factory('Cart', function () {
		var cartData = [];

		return {
			addProduct: function (goods) {
				var flag = false;
				cartData.forEach(function (gd, i) {
					if(gd._id === goods._id) {
						gd.count = (gd.count || 0) + 1;
						flag = true;
						return;
					}					
				});
				if(!flag) {
					goods.count = goods.count || 1;
					cartData.push(goods);
				}
			},
			removeProduct: function (goods) {
				// clear the goods
				cartData.forEach(function (gd, i) {
					if(gd._id === goods._id) {
						cartData.remove(gd);
						return;
					}
				})
			},
			decreaseProduct: function (goods) {
				// decrease goods count
				cartData.forEach(function (gd, i) {
					if(gd._id === goods._id) {
						gd.count = gd.count - 1;
						return;
					}
				})
			},
			getProducts: function () {
				return cartData;
			}
		}
	})

	return app;

});