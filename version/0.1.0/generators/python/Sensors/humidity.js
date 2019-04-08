Blockly.Python['humidity'] = function(block) {
    var number_value = block.getFieldValue('Value');
    // TODO: Assemble Python into code variable.
    var code = 'humidity('+number_value+')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['hum_sensor'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'hum_sensor('+value_name+')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['hum_get'] = function(block) {
    var value_hum_sensor = Blockly.Python.valueToCode(block, 'hum_sensor', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'hum_get('+value_hum_sensor+')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };