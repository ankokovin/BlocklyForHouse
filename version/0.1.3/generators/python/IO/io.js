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