import * as Blockly from 'blockly/core';
import 'blockly/javascript';

Blockly.JavaScript['sensing_touching'] = function(block) {
  var value_sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_ATOMIC);
  var code;
	if (value_sprite === "__MOUSE__") {
		code = 'this.touching("mouse")';
	} else if (value_sprite === "__EDGE__") {
		code = 'false /* translation not available */';
	} else {
		code = 'this.touching(this.sprites.' + value_sprite + '.andClones())';
	}
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensing_touchingmenu'] = function(block) {
  var dropdown_sprite = block.getFieldValue('SPRITE');
  var code = dropdown_sprite;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensing_touchingcolor'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'COLOR', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'this.touching(' + value_color + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensing_coloristouchingcolor'] = function(block) {
  var value_color1 = Blockly.JavaScript.valueToCode(block, 'COLOR1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color2 = Blockly.JavaScript.valueToCode(block, 'COLOR2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'this.colorTouching(' + value_color1 + ', ' + value_color2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensing_distanceto'] = function(block) {
  var value_sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_ATOMIC);
  var target;
	if (value_sprite === "__MOUSE__") {
		target = "mouse";
	} else {
		target = 'sprites.' + value_sprite;
	}
  var code = 'Math.hypot(this.' + target + 'x - this.x, this.' + target + 'y - this.y)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensing_distancetomenu'] = function(block) {
  var dropdown_sprite = block.getFieldValue('SPRITE');
  var code = dropdown_sprite;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensing_askandwait'] = function(block) {
  var value_question = Blockly.JavaScript.valueToCode(block, 'QUESTION', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'yield* this.askAndWait(' + value_question + ');\n';
  return code;
};

Blockly.JavaScript['sensing_answer'] = function(block) {
  var code = 'this.answer';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensing_keypressed'] = function(block) {
  var value_key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'this.keyPressed(' + value_key + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensing_keypressedmenu'] = function(block) {
  var dropdown_key = block.getFieldValue('KEY');
  var code = dropdown_key;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensing_mousedown'] = function(block) {
  var code = 'this.mouse.down';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensing_mousex'] = function(block) {
  var code = 'this.mouse.x';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensing_mousey'] = function(block) {
  var code = 'this.mouse.y';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensing_setdragmode'] = function(block) {
  // var dropdown_draggable = block.getFieldValue('DRAGGABLE');
  var code = '// no translation available\n';
  return code;
};

Blockly.JavaScript['sensing_loudness'] = function(block) {
  var code = '0 /* no translation available */';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensing_timer'] = function(block) {
  var code = 'this.timer';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensing_resettimer'] = function(block) {
  var code = 'this.restartTime();\n';
  return code;
};

Blockly.JavaScript['sensing_of'] = function(block) {
  var dropdown_property = block.getFieldValue('PROPERTY');
  var value_sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'this.sprites.' + value_sprite + '.' + dropdown_property;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensing_ofmenu'] = function(block) {
  var dropdown_sprite = block.getFieldValue('SPRITE');
  var code = dropdown_sprite;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensing_current'] = function(block) {
  var dropdown_unit = block.getFieldValue('UNIT');
  // TODO: Assemble JavaScript into code variable.
	var code;
	if (dropdown_unit === "Day") {
		code = 'new Date().getDay() + 1';
	} else {
		code = 'new Date().get' + dropdown_unit + '()';
	}
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensing_dayssince2000'] = function(block) {
  var code = '((new Date().getTime() - new Date(2000, 0, 1)) / 1000 / 60 + new Date().getTimezoneOffset()) / 60 / 24';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensing_username'] = function(block) {
  var code = '"" /* no translation available */';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};