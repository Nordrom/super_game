function Resize(){
    this.field = $('#field');
}
Resize.prototype.resizeGameField=function(){
    clientWidth = window.innerWidth;
    clientHeight = window.innerHeight;    
    this.field.css({width:clientWidth-20,height:clientHeight-20});
}
Resize.prototype.start=function(){
    this.resizeGameField();
    var resize=this;   
    $(window).resize(function(){
        resize.resizeGameField();           
    });
}
