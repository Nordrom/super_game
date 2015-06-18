$().ready(function(){
    //ресайз игрового поля
    resize = new Resize();
    resize.start();
    
    //старт игры
    game=new Init();
    game.start();
})
