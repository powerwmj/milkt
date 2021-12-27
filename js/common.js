let pos = {y: 0, dy:0, state: true} // true : 스크롤 내릴때, false : 스크롤 올릴때
    window.onscroll = function(){
        pos.y = window.scrollY;
        pos.state = pos.y > pos.dy;
        pos.dy = pos.y;
            if(pos.state){
                $('.motion').each(function(i){
                    if($(this).offset().top - (window.innerHeight*0.7) < window.scrollY){
                        $(this).addClass('active');
                    }
                })
                
            } else {
                //console.log('스크롤 올림');
                //elScrl1.classList.remove('active');
            }

        //elScrl1_div.innerHTML = `스크롤 현재값(${pos.y})/스크롤 상태(${pos.state})/스크롤 전체 길이(${document.documentElement.scrollHeight})`;
        
    }