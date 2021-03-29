import * as Blockly from 'blockly/core';
import 'blockly/javascript';

Blockly.JavaScript['input_secs'] = function(block) {
	var number_secs = block.getFieldValue('SECS');
	var code = number_secs;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['input_direction'] = function(block) {
	var number_direction = block.getFieldValue('DIRECTION');
	var code = number_direction;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['input_color'] = function(block) {
  var number_hue = block.getFieldValue('HUE');
  var number_saturation = block.getFieldValue('SATURATION');
  var number_value = block.getFieldValue('VALUE');
	var code = 'Color.hsv(' + number_hue + ', ' + number_saturation + ', ' + number_value + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};