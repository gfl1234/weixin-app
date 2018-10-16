$(function(){

	new App();

})
var App = function(){
	this.$first = $('.ll_box');
	this.init()
};
App.prototype = {
	init:function(){
		this.renderFirst();
	},
	// 	
	renderFirst:function(){
		var that = this;
		$.ajax({
			type:'get',
			url:'http://localhost:3004/message',
			data:'',
			success:function(data){
				console.log(data)
				that.$first.html(template('first',{list:data}))
			}
		})
	}
}
