### Сладер на jQuery

# Разметка
<style>
  * {
  margin: 0;
  padding: 0; }

.slider {
  position: relative;
  height: 650px;
  width: 100%; }
  .slider img {
    width: 100%;
    z-index: 1; }

header {
  overflow: hidden; }

.slider__list {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 650px;
  overflow: hidden;
  opacity: 0;
  -webkit-transition: 0.6s;
  -o-transition: 0.6s;
  transition: 0.6s;
  overflow: hidden; }
  .slider__list.active {
    opacity: 1; }

.prev,
.next {
  position: absolute;
  font-size: 2em;
  top: 50%;
  z-index: 10;
  height: 50px;
  width: 100px;
  text-align: center;
  font-weight: bold;
  color: #e35;
  font-size: 4em;
  cursor: pointer; }

.prev {
  left: 0; }

.next {
  right: 0; }

/*# sourceMappingURL=style.css.map */
</style>

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
<script>
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
</script>

