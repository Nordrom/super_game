function Rules(){
    this.max_boxes = 10;
}
Rules.prototype.checkState = function(){
    var boxes_count = $('.hit-me').length;
    if (boxes_count>=this.max_boxes) {
        alert('GAME OVER');
        document.location.reload();
    }
}