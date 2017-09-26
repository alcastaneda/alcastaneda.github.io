$(".contact-me").hide();
$(".resume").hide();
$(".resources").hide();

$("nav li").on("click",function(){
	var className = $(this).attr("id");
	$("article").hide();
	$("."+className).show();
});