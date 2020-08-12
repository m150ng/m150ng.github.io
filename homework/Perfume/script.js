(function(){
    const mainMenuElem = document.querySelector(".main-menu");
    const gnbElem = document.querySelector('.gnb');
    const barElem = document.querySelector('.btnMenu');
    const showElem = document.querySelector(".container");
    //네비게이션 바를 클릭하면
    gnbElem.addEventListener("click",function(e){
        let target = e.target;
        let index = target.getAttribute("value");  
        index = parseInt(index);
        if( index>=0 || index<=2 ){
            // 메인메뉴가 회전되면서 안보이게
            mainMenuElem.classList.add("on");    
            //barMenu 보이게
            barElem.style.display="block"; 
            //container rotate     
            showElem.classList.remove("show"); 
            //container 에서 해당 이미지 보이기
            for(let item of showElem.children){
                item.classList.remove("item");
            }
            showElem.children[index].classList.add("item");
        }
    });
    barElem.addEventListener("click",function(){
        barElem.style.display="none"; 
        mainMenuElem.classList.remove("on");
        showElem.classList.add("show");
    });
})();
