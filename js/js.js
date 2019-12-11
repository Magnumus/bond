$(function() {
	
		$(".nav").addClass("animated");
		$(".headImgAnim").addClass("animated-fade");
		$(".bis").addClass("animated-Up");
		$(".bond").addClass("animated-Up");
		
		$(".fp").css("-webkit-animation-play-state", "running");
		$(".tp").css("-webkit-animation-play-state", "running");
		$(".sp").css("-webkit-animation-play-state", "running");
		$(".qp").css("-webkit-animation-play-state", "running");
		
		$(".ms").css("-webkit-animation-play-state", "paused");
		$(".diagram").css("-webkit-animation-play-state", "paused");
		$(".tg").css("-webkit-animation-play-state", "paused");
		$(".inp").css("-webkit-animation-play-state", "paused");
		$(window).on("scroll", function() {
			if ( $(this).scrollTop()>500 ) {
				$(".ms").css("-webkit-animation-play-state", "running");
				$(".diagram").css("-webkit-animation-play-state", "running");
			}
			if ( $(this).scrollTop()>2300 ) {
				$(".tg").css("-webkit-animation-play-state", "running");
			}
			if ( $(this).scrollTop()>3100 ) {
				$(".inp").css("-webkit-animation-play-state", "running");
			}
		});
		
		
		
		$(".nav a").on("click", function(e) {
			e.preventDefault();
			var	h = $($(this).attr("href"));
			$("html, body").animate({
				scrollTop: h.offset().top
			}, 500);
		});
		$(".tg").click(function(){
			$(this).attr('href','http://address.com');
		});
		new Slider({
			img: ".img_slide1 img",
			auto: true,
			speed: 4000
		});
		new Slider({
			img: ".img_slide2 img",
			auto: true,
			speed: 6000
		});
		new Slider({
			img: ".img_slide3 img",
			auto: true,
			speed: 5000
		});
		new Slider({
			img: ".img_slide4 img",
			auto: true,
			speed: 6000
		});
		new Slider({
			img: ".img_slide5 img",
			auto: true,
			speed: 4000
		});
});



function Slider(slider_op) {
	var i = 0;
	var slider = this;
	
	this.rate = slider_op.speed || 1000;
	this.auto = slider_op.auto;
	this.next = $(slider_op.next);
	this.prev = $(slider_op.prev);
	this.img = $(slider_op.img);
	
	this.next.on("click", function() {
		move(1);
	});
	this.prev.on("click", function() {
		move(-1);
	});
	
	function move(direction) {
		if (direction==1) {
			slider.img.eq(i).removeClass("showed");
			i++;
			if (i>=slider.img.length) {
				i = 0;
			}
			slider.img.eq(i).addClass("showed");
		}
	}
	
	if (slider.auto) {
		setInterval(function() {
			move(1);
		},slider.rate);
		slider.next.prop( "disabled", true );
		slider.prev.prop( "disabled", true );
	}
}