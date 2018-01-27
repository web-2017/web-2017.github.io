### Сладер на jQuery

# Разметка
<div class="slider">
  <div class="slider__list active">
  	<img src="images/slider/1.jpeg" alt="">
	</div>
	<div class="slider__list">
		<img src="images/slider/2.jpeg" alt="">
	</div>
	<div class="slider__list">
		<img src="images/slider/3.jpeg" alt="">
	</div>
	<div class="slider__list">
		<img src="images/slider/4.jpeg" alt="">
	</div>
	<div class="prev">&lang;</div>
	<div class="next">&rang;</div>
</div>

# jQuery
$(function(){
	var $item = $('.slider__list'),
		$prev = $('.prev'),
		$next = $('.next');
    
	//left btn
	$('.prev').on('click', function(){
		var index = $item.filter('.active').index();

		$item.eq(index - 1).addClass('active').siblings().removeClass('active');
	});
	
	//right btn
	$('.next').on('click', function(){
		var index = $item.filter('.active').index();
		
		if(index == $item.length - 1) {
      index = - 1 //false
		}
		
		$item.eq(index + 1).addClass('active').siblings().removeClass('active');
	});
});
