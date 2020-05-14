// 画像スライド　//////////////
$(function () {
	function toggleChangeBtn() {
		var slideIndex = $('.slide').index($('.active'));
		$('.change-btn').show();
		if (slideIndex == 0) {
			$('.prev-btn').hide();
			// 「3」の部分を、lengthメソッドを用いて書き換えてください
		} else if (slideIndex == $('.slide').length - 1) {
			$('.next-btn').hide();
		}
	}
	$('.change-btn').click(function () {
		var $displaySlide = $('.active');
		$displaySlide.removeClass('active');
		if ($(this).hasClass('next-btn')) {
			$displaySlide.next().addClass('active');
		} else {
			$displaySlide.prev().addClass('active');
		}
		toggleChangeBtn();

	});
});

// スムーズスクロール　////////////

$(function () {
	$('a[href^=#]').click(function () {
		var adjust = 0;
		var speed = 400;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top + adjust;
		$('body,html').animate({ scrollTop: position }, speed, 'swing');
		return false;
	});
});