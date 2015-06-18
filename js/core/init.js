var level = 1;
var rules = new Rules;
function Init(){
    
}

//Старт игры
Init.prototype.start= function(){
    generator = new Generator();
    generator.run();
}