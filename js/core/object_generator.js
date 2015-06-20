var gen_context = new Generator();
function Generator(){
    this.game_field = $('#field');  
    this.base_spawn_speed = 1600; //beginning speed of box spawn
    this.step = 200; //base step (ms) for box spawn
    this.max_spawn_speed = 400 //max speed that spawn could reach;
    this.spawn_counter = 0;
    this.level_length = 10*1000; //miliseconds for new level   
}
//generating new box every n second
Generator.prototype.run=function(){
    var spawn_interwal = this.generate();
    this.level_counter();    
    return;
}
//generating new box every n second
Generator.prototype.generate=function(){
    var box = new Hit_box();
    spawn_interwal = setInterval(function(){
        rules.checkState();  
        var box_body = box.get_box();
        box_body.appendTo($('#field'));         
    },this.get_spawn_speed());
    box.insertPointsBlock();
    return spawn_interwal;
}
Generator.prototype.get_spawn_speed=function(){
    current_spawn_speed = this.base_spawn_speed - (this.step*level-this.step);
    console.log(current_spawn_speed+'_spawn_speed');
    return current_spawn_speed;
}
Generator.prototype.level_counter=function(){
    var level_interwal = setInterval(function(){
        level++;
        console.log(level+'_lvl');
        clearInterval(spawn_interwal);
        gen_context.generate();
    },this.level_length);
    return;
}