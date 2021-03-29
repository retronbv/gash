import * as Blockly from 'blockly/core';
import 'blockly/javascript';

Blockly.JavaScript['control_wait'] = function(block) {
  var value_secs = Blockly.JavaScript.valueToCode(block, 'SECS', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'yield* this.wait(' + value_secs + ');\n';
  return code;
};

Blockly.JavaScript['control_forever'] = function(block) {
  var statements_script = Blockly.JavaScript.statementToCode(block, 'SCRIPT');
  var code = 'while (true) {\n' + statements_script + '  yield;\n}\n';
  return code;
};

Blockly.JavaScript['control_waituntil'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'while (!(' + value_condition + ')) { yield; }\n';
  return code;
};

Blockly.JavaScript['control_repeatuntil'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_script = Blockly.JavaScript.statementToCode(block, 'SCRIPT');
	var code = 'while (!(' + value_condition + ')) {\n' + statements_script + '  yield;\n}\n';
  return code;
};

Blockly.JavaScript['control_stop'] = function(block) {
  var dropdown_stop = block.getFieldValue('STOP');
	var code;
	if (dropdown_stop === "THIS_SCRIPT") {
		code = 'return;\n'
	} else {
		code = '// no translation available'
	}
  return code;
};

Blockly.JavaScript['control_whenistartasaclone'] = function(block) {
  var statements_script = Blockly.JavaScript.statementToCode(block, 'SCRIPT');
  var code = '*whenIStartAsAClone() {\n' + statements_script + '}\n';
  return code;
};

Blockly.JavaScript['control_createclone'] = function(block) {
  var dropdown_sprite = block.getFieldValue('SPRITE');
	var target;
	if (dropdown_sprite === "__MYSELF__") {
		target = '';
	} else {
		target = '.sprites.' + dropdown_sprite
	}
  var code = 'this' + target + '.createClone();\n';
  return code;
};

Blockly.JavaScript['control_deletethisclone'] = function(block) {
  var code = 'this.deleteThisClone();\n';
  return code;
};