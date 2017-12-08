$(document).ready(function(){
	openModal();
	closeModal();
	scrollPage();
});

function openModal(){
	$(".links-winners a").on("click", function(){
		$(this.hash).slideDown(500);
		$(".img-link").animate({
			opacity: '0'
		});
	})
}

function closeModal(){
	$(".close-modal").on("click", function(){
		$(this).parent().slideUp(500);
		$(this).parent().parent().find(".img-link").animate({
			opacity: '1'
		})
	})
}

function scrollPage(){
	$(".menu-list a").click(function(event){
		$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
	});
}
