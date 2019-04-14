module.exports = function(Blockly) {
    require('./Sensors/humidity')(Blockly);
    require('./Sensors/illuminance')(Blockly);
    require('./Sensors/temperature')(Blockly);
}