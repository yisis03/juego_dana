(function(window) {
Símbolo_2_instancia_1 = function() {
	this.initialize();
}
Símbolo_2_instancia_1._SpriteSheet = new createjs.SpriteSheet({images: ["hada.png"], frames: [[0,0,88,94,0,0,0],[88,0,88,94,0,0,0],[0,94,88,94,0,0,0]]});
var Símbolo_2_instancia_1_p = Símbolo_2_instancia_1.prototype = new createjs.Sprite();
Símbolo_2_instancia_1_p.Sprite_initialize = Símbolo_2_instancia_1_p.initialize;
Símbolo_2_instancia_1_p.initialize = function() {
	this.Sprite_initialize(Símbolo_2_instancia_1._SpriteSheet);
	this.paused = false;
}
window.Símbolo_2_instancia_1 = Símbolo_2_instancia_1;
}(window));

