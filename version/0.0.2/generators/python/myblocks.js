Blockly.Python['door'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'get_door('+text_name+')\n';
  return code;
};

Blockly.Python['open_door'] = function(block) {
  var value_door = Blockly.Python.valueToCode(block, 'DOOR', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_door.slice(0,value_door.length-1) + '.open\n';
  return code;
};

Blockly.Python['close_door'] = function(block) {
  var value_door = Blockly.Python.valueToCode(block, 'DOOR', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};