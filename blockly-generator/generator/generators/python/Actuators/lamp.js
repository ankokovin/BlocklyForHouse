module.exports = function(Blockly) {
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
}
