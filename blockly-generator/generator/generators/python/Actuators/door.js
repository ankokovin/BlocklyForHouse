module.exports = function (Blockly) {
  Blockly.Python['door'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'door(' + value_name + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python['open_door'] = function (block) {
    var value_door = Blockly.Python.valueToCode(block, 'door', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_door + '.open()\n';
    return code;
  };

  Blockly.Python['close_door'] = function (block) {
    var value_door = Blockly.Python.valueToCode(block, 'door', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_door + '.close()\n';
    return code;
  };

  Blockly.Python['door_is_open'] = function (block) {
    var value_door = Blockly.Python.valueToCode(block, 'door', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_door + '.is_open()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
}

