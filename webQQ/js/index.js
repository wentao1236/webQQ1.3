$(function(){
	
	$(".down").click(function(){
		$("#downcaidan").show();
	});

	$("#close").click(function(){
		$("#mainright").hide();
	});
	$("#foot1").click(function(){
		$("#hide2").hide();
		$("#hide3").hide();
		$("#hide4").hide();
		$("#hide1").show();
	});
	$("#foot2").click(function(){
		$("#hide1").hide();
		$("#hide3").hide();
		$("#hide4").hide();
		$("#hide2").show();
	});
	$("#foot3").click(function(){
		$("#hide1").hide();
		$("#hide2").hide();
		$("#hide4").hide();
		$("#hide3").show();
	});
	$("#foot4").click(function(){
		$("#hide1").hide();
		$("#hide2").hide();
		$("#hide3").hide();
		$("#hide4").show();
	});

});