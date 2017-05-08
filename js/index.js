// JS only for the switch
$(function(){
	$("#switch-view").click(function(){
		$(this).find("button").toggleClass("active");
		$(".article-wrapper").toggleClass("bloc col-xs-12 col-xs-4");
	});



	var lists = [
	{title:'实用网站收集',image:'images/website.png',des:'这里收集了开发过程中遇到的实用网站和一些有趣的网站'},
	{title:'实用网站收集',image:'images/website.png',des:'这里收集了开发过程中遇到的实用网站和一些有趣的网站'},
	{title:'实用网站收集',image:'images/website.png',des:'这里收集了开发过程中遇到的实用网站和一些有趣的网站'},
	{title:'实用网站收集',image:'images/website.png',des:'这里收集了开发过程中遇到的实用网站和一些有趣的网站'},
	{title:'实用网站收集',image:'images/website.png',des:'这里收集了开发过程中遇到的实用网站和一些有趣的网站'},
	{title:'实用网站收集',image:'images/website.png',des:'这里收集了开发过程中遇到的实用网站和一些有趣的网站'},
	{title:'实用网站收集',image:'images/website.png',des:'这里收集了开发过程中遇到的实用网站和一些有趣的网站'},
	{title:'实用网站收集',image:'images/website.png',des:'这里收集了开发过程中遇到的实用网站和一些有趣的网站'},
	{title:'实用网站收集',image:'images/website.png',des:'这里收集了开发过程中遇到的实用网站和一些有趣的网站'},
	]

	var app_header = new Vue({
		el:'#header',
		data:{
			title:'待花谢花开'
		}
	})
	var app_list = new Vue({
		el : '#list',
		data : {
			lists : lists
		},
		methods : {
			clickEvent : function(item) {
				console.log(item)
			}
		}
	});
});