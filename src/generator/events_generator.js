import * as Blockly from 'blockly/core';
import 'blockly/javascript';

Blockly.JavaScript['events_whenflagclicked'] = function(block) {
  var statements_script = Blockly.JavaScript.statementToCode(block, 'SCRIPT');
  var code = '*whenGreenFlagClicked() {\n' + statements_script + '}\n';
  return code;
};

Blockly.JavaScript['events_whenkeypressed'] = function(block) {
  var dropdown_key = block.getFieldValue('KEY');
  var statements_script = Blockly.JavaScript.statementToCode(block, 'SCRIPT');
  var code = '*when' + dropdown_key + 'keypressed() {\n' + statements_script + '}\n';
  return code;
};

Blockly.JavaScript['events_whenspriteclicked'] = function(block) {
  var statements_script = Blockly.JavaScript.statementToCode(block, 'SCRIPT');
	var code = '*whenSpriteClicked() {\n' + statements_script + '}\n';
  return code;
};

Blockly.JavaScript['events_whenbackdropswitchesto'] = function(block) {
  // var dropdown_backdrop = block.getFieldValue('BACKDROP');
  var statements_script = Blockly.JavaScript.statementToCode(block, 'SCRIPT');
  var code = '/* no translation available\n' + statements_script + '*/\n';
  return code;
};

Blockly.JavaScript['events_whengreaterthan'] = function(block) {
  // var dropdown_value = block.getFieldValue('VALUE');
  // var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_script = Blockly.JavaScript.statementToCode(block, 'SCRIPT');
	var code = '/* no translation available\n' + statements_script + '*/\n';
  return code;
};

Blockly.JavaScript['events_whenmessagereceived'] = function(block) {
  var dropdown_message = block.getFieldValue('MESSAGE');
  var statements_script = Blockly.JavaScript.statementToCode(block, 'SCRIPT');
  var code = '*when' + dropdown_message + 'received() {\n' + statements_script + '}\n';
  return code;
};

Blockly.JavaScript['events_broadcastmessage'] = function(block) {
  var value_message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'this.broadcast(' + value_message + ');\n';
  return code;
};

Blockly.JavaScript['events_messagemenu'] = function(block) {
  var dropdown_message = block.getFieldValue('MESSAGE');
  var code = dropdown_message;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['events_broadcastmessageandwait'] = function(block) {
  var value_message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_ATOMIC);
	var code = 'yield* this.broadcastAndWait(' + value_message + ');\n';
  return code;
};