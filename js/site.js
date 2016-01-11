




/*
     FILE ARCHIVED ON 14:01:28 ago 2, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:24:48 ene 11, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
$(document).ready(function(){

	//Scrolls slides
	$(".menulinks li:eq(0) a,.menulinks2 li:eq(0) a").on("click",function(e){
		e.preventDefault();
		$(window).scrollTo(1520,800);
	});
	$(".menulinks li:eq(1) a,.menulinks2 li:eq(1) a").on("click",function(e){
		e.preventDefault();
		$(window).scrollTo(570,800);
	});
	$(".menulinks li:eq(2),.menulinks2 li:eq(2) a").on("click",function(e){
		e.preventDefault();
		$(window).scrollTo(920,800);
	});
	$(".menulinks li:eq(4) a,.menulinks2 li:eq(4) a").on("click",function(e){
		e.preventDefault();
		$(window).scrollTo(2050,800);
	});

	$(".logo,.logofooter").on("click",function(){
		$(window).scrollTo($("body"),800);
	});



	//Fades Animation
	$(".html5").fadeIn(800);
	$(".css3").delay(800).fadeIn(500);
	$(".ruby").delay(1300).fadeIn(500);
	$(".js").delay(1800).fadeIn(500);
	$(".python").delay(2300).fadeIn(500);


	//Formulario
	$("#formsubmituser").validate({
         ignore: ":hidden",
         rules: {
             nombre: {
                 required: true,
                 minlength: 3
             },
             email: {
                 required: true,
                 email:true
             }
         },
         messages:{
         	nombre:"Ingresa tu nombre",
         	email:"Ingresa tu email"
         },
         submitHandler: function (form) {
             $.ajax({
                 type: "POST",
                 url: "saveuser.php",
                 data: $(form).serialize(),
                 success: function (data) {
                     $("#popup").fadeIn();
                     console.log(data);
                 }
             });
             return false; // required to block normal submit since you used ajax
         }
     });

	var heightwindow = $(window).height();
	var widthwindow = $(window).width();
	var heightpopup = $("#popup").height();
	var widthpopup = $("#popup").width();
	var difheights = heightwindow/2 - heightpopup/2;
	var difwidths = widthwindow/2 - widthpopup/2;

	$("#popup").css("top",difheights).css("left",difwidths);

	$(".salirpopup").click(function(e){
		e.preventDefault();
		$("#popup").fadeOut();
	});

	/*$('#popfrontend').on("click",function(){
		$(window).scrollTo($("body"),0);
		$('.popup-curso').show();
	});*/

	$('.btncerrar-popup').on("click",function(){
		$('.popup-curso').hide();
	});


});