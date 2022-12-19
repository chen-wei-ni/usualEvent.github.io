/*語言切換選單*/
$('.switch-list').hide()
$('.language-pack').click(function(e){
    e.stopPropagation();
    $('.switch-list').toggle(300, 'linear')
})
$("body").click(function(){
    $('.switch-list').hide()
})
$('.switch-list').click(function(e){
    e.stopPropagation();
})

/*語言圖示hover變色*/
$('.language-pack').hover(function(){
	$('.switch-icon').attr("src","images/language/icon_language_hover.svg");
},
function(){
	$('.switch-icon').attr("src","images/language/icon_language.svg");

});

/*滑動至最上方*/
$('.top_btn').hide();
		$(window).scroll(function() {
			var sh = $(window).scrollTop();
			
			if(sh > 300) {
				$('.top_btn').show(500, 'swing');
			}else {
				$('.top_btn').hide(500, 'swing');
			}
		});
		
		$('.top_btn').click(function() {
			$('html,body').animate({
				scrollTop : 0 //到最上面  
			}, 500);
		return false;
		});

/*獎金跳動動畫每2.5秒一次*/
const animate = document.querySelector('.award');
animate.classList.add('fuyofuyo');
animate.addEventListener('animationend', () => {
animate.classList.remove('fuyofuyo');  
setTimeout(function(){
animate.classList.add('fuyofuyo');
},2500)
})

/*標題跳動動畫每2.5秒一次*/
/*const animateTitle = document.querySelector('.bnTitle');
animateTitle.classList.add('effect');
animateTitle.addEventListener('animationend', () => {
animateTitle.classList.remove('effect');  
setTimeout(function(){
animateTitle.classList.add('effect');
},3000)
})*/

const lightArea = document.querySelector('.bg_decorate');
(function shineBall(){
	let light ='';
	for(let i = 0; i<30; i++){
		let ball = `<img src="images/events/shineBall.svg">`
		light+=`<div class="lightBall_${i+1}">${ball}</div>`
	}	
	lightArea.innerHTML = light
}())

const sloganA = document.querySelector('.bnTitle');

anime({
	targets: sloganA,
	translateY: [-200,0],
	rotateY: '1turn',
	duration: 2500,
	// easing: 'spring(1, 80, 10, 0)',
	complete: function () {
		animationDone = true;
		animateAdd();
	}   
})
function animateAdd(){
	sloganA.classList.add('slogan_animate');
}
