var app = angular.module('mobility', ['ngRoute','appRoute','ngAnimate']);
app.controller('StageController' , function() {
	var me = this;
	me.os=[{
		name:'Android',
		src:'../images/android.jpg',
		active:0
	},{
		name:'iOS',
		src:'../images/apple.jpg',
		active:0
	},{
		name:'Windows',
		src:'../images/window.jpg',
		active:0
	}];
	me.osImgClick = function(index) {
		me.os.forEach(function(os,i) {
			if(index != i)
				os.active = 0;
			else
				os.active = 1;
		});
	}
}).controller('FilterController' , function() {
	this.filters=[{
		name:'Price',
		src:'../images/price.png'
	},{
		name:'Brand',
		src:'../images/brand.png'
	},{
		name:'RAM',
		src:'../images/ram.png'
	},{
		name:'Screen',
		src:'../images/screen.png'
	},{
		name:'Features',
		src:'../images/features.png'
	}];
})
