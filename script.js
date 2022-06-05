let imgs = document.images,
    len = imgs.length,
    counter = 0,
    loadingCover = $(".loading"),
    closebtn = document.getElementById("close-btn"),
    imgShower = $(".image-shower"),
    proflie = $("#profile"),
    container = $(".images");
  
  [].forEach.call( imgs, function( img ) {
	  if(img.complete)
		  incrementCounter();
	  else
		  img.addEventListener( 'load', incrementCounter, false );
  } );
  
  function incrementCounter() {
	  counter++;
	  if ( counter === len ) {
	  
		 $("#loading_text").text("Loaded");
		 
		  loadingCover.fadeOut(500, () => {
			  $("#profile").css("display","flex");
		  });
		  
		  console.log( 'All images loaded!' );
 	 }
  }

 
$(".images img").click(function() {
	let src = $(this).attr("src");
	$(".image-shower img").attr("src", src);
	
	imgShower.fadeIn(500, () => { 
		imgShower.css("display", "flex");
		$(profile).css({
			"filter" : "blur(8px)",
			"-webkit-filter" : "blur(8px)"
		});
		$(container).css({
			"filter" : "blur(8px)",
			"-webkit-filter" : "blur(8px)"
		});
		$(".footer").css({
		"filter" : "blur(8px)",
		"-webkit-filter" : "blur(8px)"
		});
	});
});
 
$(closebtn).on("click", () => {
	imgShower.fadeOut(500, () => {
		$(profile).css(
			"animation","removeblur 50ms ease-out"
		).css({
			"filter" : "blur(0px)",
			"-webkit-filter" : "blur(0px)"
		});
		
		$(".footer").css(
			"animation","removeblur 50ms ease-out"
		).css({
			"filter" : "blur(0px)",
			"-webkit-filter" : "blur(0px)"
		});
		
		container.css(
			"animation","removeblur 50ms"
		).css({
			"filter" : "blur(0px)",
			"-webkit-filter" : "blur(0px)"
		})
	});
})

$("#profile-text").on("animationend", () => {
	container.css("display" , "grid");
})

$(".container .images img").on("animationend", () => {
	$(".footer").css("display","block");
});