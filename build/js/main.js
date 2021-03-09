if(document.getElementById('bonusSlider')){
    var slider = tns({
        //mode:"gallery",
        container: '#bonusSlider',
        items: 4,
        startIndex: 0,
        slideBy: 'page',
        autoplay: false,
        prevButton: '.bonus-btn_prev',
        nextButton: '.bonus-btn_next',
        nav: false,
        loop: true,
        swipeAngle: true,
      });
}