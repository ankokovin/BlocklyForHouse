module.exports = function (Blockly) {
  Blockly.Python['tem_sensor'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'tem_sensor(' + value_name + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python['tem_get'] = function (block) {
    var value_tem_sensor = Blockly.Python.valueToCode(block, 'tem_sensor', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'tem_get(' + value_tem_sensor + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python['temperature'] = function (block) {
    var value_value = Blockly.Python.valueToCode(block, 'Value', Blockly.Python.ORDER_ATOMIC);
    var dropdown_unit = block.getFieldValue('Unit');
    // TODO: Assemble Python into code variable.
    var code = 'temperature(' + value_value + ',"' + dropdown_unit + '")';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
}