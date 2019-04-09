
goog.require('Blockly.Python');

Blockly.Python['door'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'door('+value_name+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['open_door'] = function(block) {
  var value_door = Blockly.Python.valueToCode(block, 'door', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_door+'.open()\n';
  return code;
};

Blockly.Python['close_door'] = function(block) {
  var value_door = Blockly.Python.valueToCode(block, 'door', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_door+'.close()\n';
  return code;
};

Blockly.Python['door_is_open'] = function(block) {
  var value_door = Blockly.Python.valueToCode(block, 'door', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_door + '.is_open()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['lamp'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'lamp('+value_name+')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['off_lamp'] = function(block) {
    var value_lamp = Blockly.Python.valueToCode(block, 'lamp', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_lamp+'.off()\n';
    return code;
  };
  
  Blockly.Python['on_lamp'] = function(block) {
    var value_lamp = Blockly.Python.valueToCode(block, 'lamp', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_lamp+'.on()\n';
    return code;
  };

  Blockly.Python['lamp_is_on'] = function(block) {
    var value_lamp = Blockly.Python.valueToCode(block, 'lamp', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_lamp + '.is_on()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

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

Blockly.Python['illuminance'] = function(block) {
    var number_value = block.getFieldValue('Value');
    // TODO: Assemble Python into code variable.
    var code = 'illuminance('+number_value+')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['il_sensor'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'il_sensor('+value_name+')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['il_get'] = function(block) {
    var value_il_sensor = Blockly.Python.valueToCode(block, 'il_sensor', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'il_get('+value_il_sensor+')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

Blockly.Python['tem_sensor'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'tem_sensor('+value_name+')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['tem_get'] = function(block) {
    var value_tem_sensor = Blockly.Python.valueToCode(block, 'tem_sensor', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'tem_get('+value_tem_sensor+')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['temperature'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'Value', Blockly.Python.ORDER_ATOMIC);
    var dropdown_unit = block.getFieldValue('Unit');
    // TODO: Assemble Python into code variable.
    var code = 'temperature('+value_value+',"'+dropdown_unit+'")';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
