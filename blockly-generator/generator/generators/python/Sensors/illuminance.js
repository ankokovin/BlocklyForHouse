module.exports = function (Blockly) {
  Blockly.Python['illuminance'] = function (block) {
    var number_value = block.getFieldValue('Value');
    // TODO: Assemble Python into code variable.
    var code = 'illuminance(' + number_value + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python['il_sensor'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'il_sensor(' + value_name + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python['il_get'] = function (block) {
    var value_il_sensor = Blockly.Python.valueToCode(block, 'il_sensor', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'il_get(' + value_il_sensor + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
}