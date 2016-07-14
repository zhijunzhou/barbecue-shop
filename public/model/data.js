define(function (require) {

	var goodTypes = [
		{
			_id: '1',
			name: 'Type 1',
			goods: [
				{
					_id: '10001',
					name: 'Shan xi Rice',
					price: 3.25,
					reserve: 100,
					sold:0,
					piece:'kg',
					description: "优质的大米，只为优质的生活！",
					pics:['images/food-example.jpeg']					
				}, {
					_id: '10002',
					name: 'Shuan Yang rou',
					price: 23.25,
					reserve: 100,
					sold:0,
					piece:'kg',
					description: "经典涮羊肉，满足你的味蕾！",
					pics:[]
				}, {
					_id: '10003',
					name: 'Zhou Hey Ya',
					price: 21.5,
					reserve: 100,
					sold:0,
					piece:'袋',
					description: "周黑鸭-武汉老字号，百年传承，中国武汉的符号！",
					pics:['images/food-example.jpeg']
				}
			]
		}, {
			_id: '2',
			name: 'Type 2',
			goods: []
		}, {
			_id: '3',
			name: 'Type 3',
			goods: []
		}
	];

	var hotCities = [
		{
			id: "1",
			name: "上海"
		}, {
			id: "2",
			name: "北京"
		}, {
			id: "3",
			name: "广州"
		}, {
			id: "4",
			name: "深圳"
		}, {
			id: "5",
			name: "武汉"
		}, {
			id: "6",
			name: "杭州"
		}, {
			id: "7",
			name: "成都"
		}, {
			id: "8",
			name: "厦门"
		}
	];

	var tabs = [
		{
			name:'菜单',
			state: true
		}, {
			name:'评价',
			state: false
		}, {
			name: '商家',
			state: false
		}
	];

	return {
		goodTypes: goodTypes,
		hotCities:hotCities,
		tabs:tabs,
	};

});


