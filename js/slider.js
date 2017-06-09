$(function(){
	
	var $item = $('.slider__list'),
		$prev = $('.prev'),
		$next = $('.next');
    
	//left btn
	$('.prev').on('click', function(){
		var index = $item.filter('.active').index();
		console.log(index);

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

