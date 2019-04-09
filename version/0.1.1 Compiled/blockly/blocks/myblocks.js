goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([{
  "type": "door",
  "message0": "Door Named: %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    }
  ],
  "output": "door",
  "colour": 230,
  "tooltip": "create a door",
  "helpUrl": ""
},
{
  "type": "open_door",
  "message0": "Open door %1",
  "args0": [
    {
      "type": "input_value",
      "name": "door",
      "check": "door"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "open a door",
  "helpUrl": ""
},
{
  "type": "close_door",
  "message0": "Close door %1",
  "args0": [
    {
      "type": "input_value",
      "name": "door",
      "check": "door"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "close a door",
  "helpUrl": ""
},
{
  "type": "door_is_open",
  "message0": "Is open %1",
  "args0": [
    {
      "type": "input_value",
      "name": "door",
      "check": "door",
      "align": "CENTRE"
    }
  ],
  "output": "Boolean",
  "colour": 230,
  "tooltip": "check if door is open",
  "helpUrl": ""
},
{
  "type": "lamp",
  "message0": "Lamp Named: %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    }
  ],
  "output": "lamp",
  "colour": 230,
  "tooltip": "create a lamp",
  "helpUrl": ""
},
{
  "type": "off_lamp",
  "message0": "turn off %1",
  "args0": [
    {
      "type": "input_value",
      "name": "lamp",
      "check": "lamp"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "turn off a lamp",
  "helpUrl": ""
},
{
  "type": "on_lamp",
  "message0": "turn on %1",
  "args0": [
    {
      "type": "input_value",
      "name": "lamp",
      "check": "lamp"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "turn on a lamp",
  "helpUrl": ""
},
{
  "type": "lamp_is_on",
  "message0": "is on %1",
  "args0": [
    {
      "type": "input_value",
      "name": "lamp",
      "check": "lamp"
    }
  ],
  "output": "Boolean",
  "colour": 230,
  "tooltip": "check if lamp is on",
  "helpUrl": ""
},
{
  "type": "tem_sensor",
  "message0": "Temperature sensor %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    }
  ],
  "output": "tem_sensor",
  "colour": 230,
  "tooltip": "create temperature sensor",
  "helpUrl": ""
},
{
  "type": "tem_get",
  "message0": "get temperature %1",
  "args0": [
    {
      "type": "input_value",
      "name": "tem_sensor",
      "check": "tem_sensor"
    }
  ],
  "output": "temperature",
  "colour": 230,
  "tooltip": "get temperature from sensor",
  "helpUrl": ""
},
{
  "type": "temperature",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "Value",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "Unit",
      "options": [
        [
          "°C",
          "Celsius"
        ],
        [
          "°F",
          "Fahrenheit"
        ],
        [
          "K",
          "Kelvin"
        ]
      ]
    }
  ],
  "output": "temperature",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "humidity",
  "message0": "Humidity %1 %%",
  "args0": [
    {
      "type": "field_number",
      "name": "Value",
      "value": 0,
      "min": 0,
      "max": 100
    }
  ],
  "output": "humidity",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "hum_sensor",
  "message0": "Humidity sensor %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    }
  ],
  "output": "hum_sensor",
  "colour": 230,
  "tooltip": "Create humidity sensor",
  "helpUrl": ""
},
{
  "type": "hum_get",
  "message0": "get humidity %1",
  "args0": [
    {
      "type": "input_value",
      "name": "hum_sensor",
      "check": "hum_sensor"
    }
  ],
  "output": "humidity",
  "colour": 230,
  "tooltip": "get humidity from sensor",
  "helpUrl": ""
},
{
  "type": "illuminance",
  "message0": "illuminance %1 lux",
  "args0": [
    {
      "type": "field_number",
      "name": "Value",
      "value": 0,
      "min": 0,
      "precision": 3
    }
  ],
  "output": "illuminance",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "il_sensor",
  "message0": "Illuminance sensor %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    }
  ],
  "output": "il_sensor",
  "colour": 230,
  "tooltip": "create illuminance sensor",
  "helpUrl": ""
},
{
  "type": "il_get",
  "message0": "get illuminance %1",
  "args0": [
    {
      "type": "input_value",
      "name": "il_sensor",
      "check": "il_sensor"
    }
  ],
  "output": "illuminance",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]);
