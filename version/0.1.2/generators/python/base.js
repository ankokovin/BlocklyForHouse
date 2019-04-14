Blockly.Python['script'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var value_event = Blockly.Python.valueToCode(block, 'EVENT', Blockly.Python.ORDER_ATOMIC);
    var statements_body = Blockly.Python.statementToCode(block, 'BODY');
    
    if (!value_event)
        value_event = "False";
    
    if (!statements_body)
        statements_body = "    pass"

    var code = 'def event():\n'+
    '    return '+value_event+'\n'+
    'def body():\n'
    +statements_body+'\n'+
    'add_script('+value_name+', event, body)';
    return code;
  };