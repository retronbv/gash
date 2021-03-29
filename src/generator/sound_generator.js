import * as Blockly from 'blockly/core';
import 'blockly/javascript';

Blockly.JavaScript['sound_playuntildone'] = function(block) {
  var value_sound = Blockly.JavaScript.valueToCode(block, 'SOUND', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'yield* this.playSoundUntilDone("' + value_sound + '");\n';
  return code;
};

Blockly.JavaScript['sound_playsound'] = function(block) {
  var value_sound = Blockly.JavaScript.valueToCode(block, 'SOUND', Blockly.JavaScript.ORDER_ATOMIC);
	var code = 'yield* this.startSound("' + value_sound + '");\n';
  return code;
};

Blockly.JavaScript['sound_stopallsounds'] = function(block) {
  var code = 'this.stopAllSounds();\n';
  return code;
};

Blockly.JavaScript['sound_changeeffectby'] = function(block) {
  var dropdown_effect = block.getFieldValue('EFFECT');
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'this.audioEffects.' + dropdown_effect + ' += ' + value_value + ';\n';
  return code;
};

Blockly.JavaScript['sound_seteffectto'] = function(block) {
  var dropdown_effect = block.getFieldValue('EFFECT');
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'this.audioEffects.' + dropdown_effect + ' = ' + value_value + ';\n';
  return code;
};

Blockly.JavaScript['sound_clearsoundeffects'] = function(block) {
  var code = 'this.audioEffects.clear();\n';
  return code;
};

Blockly.JavaScript['sound_changevolumeby'] = function(block) {
  var value_volume = Blockly.JavaScript.valueToCode(block, 'VOLUME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'this.audioEffects.volume += ' + value_volume + ';\n';
  return code;
};

Blockly.JavaScript['sound_setvolume'] = function(block) {
  var value_volume = Blockly.JavaScript.valueToCode(block, 'VOLUME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'this.audioEffects.volume = ' + value_volume + ';\n';
  return code;
};

Blockly.JavaScript['sound_volume'] = function(block) {
  var code = 'this.audioEffects.volume';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sound_soundmenu'] = function(block) {
  var dropdown_sound = block.getFieldValue('SOUND');
  var code = dropdown_sound;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};