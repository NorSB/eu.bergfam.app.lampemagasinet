'use strict';

const { RFDevice } = require('homey-rfdriver');

module.exports = class RFDeviceLampemagasinet extends RFDevice {

  static CAPABILITIES = {
    kelvin_3k: 'KELVIN_3K',
	kelvin_4k: 'KELVIN_4K',
	kelvin_6k: 'KELVIN_6K',
	kelvin_down: 'KELVIN_DOWN',
	kelvin_up: 'KELVIN_UP',
	light_20_percent: 'LIGHT_20_PERCENT',
	light_50_percent: 'LIGHT_50_PERCENT',
	light_100_percent: 'LIGHT_100_PERCENT',
	light_down: 'LIGHT_DOWN',
	light_up: 'LIGHT_UP',
	light_preset_night: 'LIGHT_PRESET_NIGHT',
	power_on_off: 'POWER_ON_OFF'
  };

};
