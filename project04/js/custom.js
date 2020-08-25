$(document).ready(function(){
	
	//페이지 로딩 시 제일 상단으로 스크롤 이동
	$("body,html").stop().animate({"scrollTop":0},1500,"swing");	

	$(window).scroll(function(){
		
		//변수 scroll에 현재 화면을 스크롤한 거리의 수치를 저장
		var scroll = $(this).scrollTop();		
					
		for(var i=0; i<5; i++){
			//스크롤값과 박스의 z축 연동	
			$("section>article").eq(i).css({"transform":"translateZ("   + parseInt((-5000*i)+scroll)   +  "px)"});	
			//특정 스크롤 구간에서 스크롤 네비게이션과 박스 활성화
			if(scroll>=i*5000&&scroll<(i+1)*5000){
				$(".scrollNavi li").removeClass();
				$(".scrollNavi li").eq(i).addClass("on");
				$("article").removeClass();				
				$("article").eq(i).addClass("on");
			};
		};	
		
	});
	
	
	//스크롤 네비게이션 클릭 시 스크롤 이동
	$(".scrollNavi li").on("click",function(){
		var a = $(this).index();	
		$("body,html").stop().animate({"scrollTop":5000*a},1500,"swing");		
	});		
	
	//화면에서 마우스 무브 시 박스안의 콘텐츠 움직이기
	$("body").on("mousemove",function(e){
		var posX = e.pageX/100;
		var posY = e.pageY/150;		
		
		
		$(".obj13").css({"left":-1+posX , "bottom":0-posY });

		$(".obj22").css({"right":-1+posX , "bottom":0-posY });
	
		$(".obj32").css({"left":1+posX , "bottom":70-posY });
		
		$(".obj43").css({"right":-100+posX , "bottom":-120+posY });
		
		$(".obj53").css({"left":-30+posX , "bottom":-130+posY });		
	});
	

});















