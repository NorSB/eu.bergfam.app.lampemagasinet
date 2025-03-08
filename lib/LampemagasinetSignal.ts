'use strict';

const { RFSignal } = require('homey-rfdriver');

module.exports = class LampemagasinetSignal extends RFSignal {

  static FREQUENCY = 'ir';
  static ID = 'lampemagasinet_prontohex';

};
