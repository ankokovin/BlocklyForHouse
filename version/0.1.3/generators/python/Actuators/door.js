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
 Blockly.Python['input'] = function(block) {
  var measurement = Blockly.Python.valueToCode(block, 'Input', Blockly.Python.ORDER_ATOMIC).replace(/\'/g, '');
  var table = Blockly.Python.valueToCode(block, 'input2', Blockly.Python.ORDER_ATOMIC).replace(/\'/g, '');
  var query  = `float(list(client.query('SELECT ${measurement} FROM "${table}" order by desc limit 1;'))[0][0]['${measurement}'])`;

  return [query, Blockly.Python.ORDER_NONE];
};
Blockly.Python['output'] = function(block) {
  var query = Blockly.Python.valueToCode(block, 'query', Blockly.Python.ORDER_ATOMIC);
  var json = Blockly.Python.valueToCode(block, 'json', Blockly.Python.ORDER_ATOMIC);
  var code = `mqttc.publish(${query}, ${json})`;
  return code;
};