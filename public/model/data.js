define(function (require) {

	var goodType = [
		{
			_id: '1',
			name: 'Type 1',
			goods: [
				{
					_id: '10001',
					name: 'Shan xi Rice',
					price: 3.25,					
				}, {
					_id: '10002',
					name: 'Shuan Yang rou',
					price: 23.25,		
				}, {
					_id: '10003',
					name: 'Zhou Hey Ya',
					price: 21.5,		
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
		goodType: goodType,
		hotCities:hotCities,
		tabs:tabs,
	};

});


