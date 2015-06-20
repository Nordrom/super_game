var level = 1;
var points = 0;
var rules = new Rules;
function Init(){}
Init.prototype.start= function(){
    generator = new Generator();
    generator.run();
}