import * as Blockly from 'blockly/core';
import 'blockly/javascript';

Blockly.JavaScript['motion_gotoxy'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'this.goto(' + value_x + ', ' + value_y + ');\n';
  return code;
};

Blockly.JavaScript['motion_movesteps'] = function(block) {
  var value_steps = Blockly.JavaScript.valueToCode(block, 'STEPS', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'this.move(' + value_steps + ');\n';
  return code;
};

Blockly.JavaScript['motion_goto'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var x;
  var y;
  if (dropdown_name === "__RANDOM__") {
      x = 'this.random(-240, 240)';
      y = 'this.random(-180, 180)';
  } else if (dropdown_name === "__MOUSE__") {
      x = 'this.mouse.x';
      y = 'this.mouse.y';
  } else {
      x = 'this.sprites.' + dropdown_name + '.x';
      y = 'this.sprites.' + dropdown_name + '.y';
  }
  var code = 'this.goto(' + x + ', ' + y + ');\n';
  return code;
};

Blockly.JavaScript['motion_glideto'] = function(block) {
  var value_secs = Blockly.JavaScript.valueToCode(block, 'SECS', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_to = block.getFieldValue('TO');
  var x;
  var y;
  if (dropdown_to === "__RANDOM__") {
      x = 'this.random(-240, 240)';
      y = 'this.random(-180, 180))';
  } else if (dropdown_to === "__MOUSE__") {
      x = 'this.mouse.x';
      y = 'this.mouse.y';
  } else {
      x = 'this.sprites.' + dropdown_to + '.x';
      y = 'this.sprites.' + dropdown_to + '.y';
  }
  var code = 'yield* this.glide(' + value_secs + ', ' + x + ', ' + y + ');\n';
  return code;
};

Blockly.JavaScript['motion_pointindirection'] = function(block) {
  var value_direction = Blockly.JavaScript.valueToCode(block, 'DIRECTION', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'this.direction = ' + value_direction + ';\n';
  return code;
};

Blockly.JavaScript['motion_turnright'] = function(block) {
  var value_degrees = Blockly.JavaScript.valueToCode(block, 'DEGREES', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'this.direction += ' + value_degrees + ';\n';
  return code;
};

Blockly.JavaScript['motion_turnleft'] = function(block) {
  var value_degrees = Blockly.JavaScript.valueToCode(block, 'DEGREES', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'this.direction -= ' + value_degrees + ';\n';
  return code;
};

Blockly.JavaScript['motion_pointtowards'] = function(block) {
  var dropdown_sprite = block.getFieldValue('SPRITE');
  var target;
  if (dropdown_sprite === "__MOUSE__") {
      target = 'mouse';
  } else {
      target = 'sprites.' + dropdown_sprite;
  }
  var code = 'this.direction = this.radToScratch(Math.atan2(this.' + target + '.y - this.y, this.' + target + '.x - this.x));\n';
  return code;
};

Blockly.JavaScript['motion_glidesecstoxy'] = function(block) {
  var value_secs = Blockly.JavaScript.valueToCode(block, 'SECS', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'yield* this.glide(' + value_secs + ', ' + value_x + ', ' + value_y +');\n';
  return code;
};

Blockly.JavaScript['motion_changexby'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'this.x += ' + value_x + ';\n';
  return code;
};

Blockly.JavaScript['motion_setx'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'this.x = ' + value_x + ';\n';
  return code;
};

Blockly.JavaScript['motion_changeyby'] = function(block) {
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'this.y += ' + value_y + ';\n';
  return code;
};

Blockly.JavaScript['motion_sety'] = function(block) {
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'this.y = ' + value_y + ';\n';
  return code;
};

Blockly.JavaScript['motion_ifonedgebounce'] = function(block) {
  var code = '// If on edge bounce has no available translation\n';
  return code;
};

Blockly.JavaScript['motion_setrotationstyle'] = function(block) {
  var dropdown_style = block.getFieldValue('STYLE');
  var code = 'this.rotationStyle = Sprite.RotationStyle.' + dropdown_style + ';\n';
  return code;
};

Blockly.JavaScript['motion_xposition'] = function(block) {
  var code = 'this.x';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['motion_yposition'] = function(block) {
  var code = 'this.y';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['motion_direction'] = function(block) {
  var code = 'this.direction';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

  