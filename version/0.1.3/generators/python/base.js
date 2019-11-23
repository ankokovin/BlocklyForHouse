Blockly.Python['script'] = function(block) {
    var statements_body = Blockly.Python.statementToCode(block, 'BODY');
    var code = 'def script():'
      + (statements_body.length>0?'\n'+statements_body:'\n    pass')
      +'\n'
      +'script()';
    return code;
  };