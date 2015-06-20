function Hit_box(){
    this.hit_box = '<div class="hit-me"><div class="box"></div></div>';
    this.hit_side = Math.ceil(clientWidth*0.04);
    this.min_offset = 200;
    this.max_offset = 500;
    this.min_left = 0,
    this.max_left = clientWidth-(this.hit_side+20-1),
    this.min_top = 0,
    this.max_top = clientHeight-(this.hit_side+20-1);
}
//return box with css and events, that depends of level
Hit_box.prototype.get_box = function(){
    var box = $(this.hit_box).clone();
    box.css(this.get_box_css());
    this.get_box_events(box);
    this.add_box_move(box);
    return box;
}
Hit_box.prototype.get_box_css = function(){
    var left =  random(this.min_left,this.max_left);
    var top = random(this.min_top,this.max_top);
    return {'left':left+'px','top':top+'px'};
}
Hit_box.prototype.get_box_events = function(box){
    var this_context = this;  
    box.on('mousedown',function(){
        this_context.hit(box);
    })
}
Hit_box.prototype.add_box_move = function(box){   
    var this_context = this;
    this.box_move(box);      
    setInterval(function(){
        this_context.box_move(box);   
    }, 1500); 
}
Hit_box.prototype.box_move = function(box){
    var this_context = this;
    var box_left = parseInt(box.css('left'));
    var box_top = parseInt(box.css('top'));
    var offsetTop = box_top + random(this_context.min_offset, this_context.max_offset) * non_zero_random(-1, 1);
    var offsetLeft = box_left + random(this_context.min_offset, this_context.max_offset) * non_zero_random(-1, 1);
    if (offsetTop<this_context.min_top){
        offsetTop = this_context.min_top+300;    
    }else if (offsetTop>this_context.max_top) {
        offsetTop = this_context.max_top-300;
    }
    if (offsetLeft<this_context.min_left) {
        offsetLeft = this_context.min_left+500;   
    }else if (offsetLeft>this_context.max_left) {
        offsetLeft = this_context.max_left-500;
    }
    box.animate({'top': offsetTop + 'px', 'left': offsetLeft + 'px'}, 1500);     
}
Hit_box.prototype.increasePoints = function(){
    points++;
};
Hit_box.prototype.insertPointsBlock = function(){
    if($('.points').length == 0)
        $('#field').append('<div class="points"></div>');
};
Hit_box.prototype.insertPoints = function(){
    $('.points').text('Your points is: ' + points);
};
Hit_box.prototype.hit = function(box){
    box.remove();
    this.increasePoints();
    this.insertPoints();
}