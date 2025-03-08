'use strict';

import LampemagasinetSignal = require('../../lib/LampemagasinetSignal');

const { RFDriver } = require('homey-rfdriver');

class LampemagasinetDriver extends RFDriver {

  static SIGNAL = LampemagasinetSignal;

  async sendCommand({ commandId }: { commandId: string }) {
    const signal = await this.getRFSignal();
    await signal.cmd(commandId);
  }

  async onRFInit() {
    await super.onRFInit();

    this.homey.flow.getActionCard(`${this.id}:send_cmd`)
      .registerRunListener(this.runListener())
      .getArgument('cmd')
      .registerAutocompleteListener(this.autocompleteListener());
  }

  private runListener() {
    return async ({
      device,
      cmd,
    }: { device: LampemagasinetDriver, cmd: { cmd: string } }) => {
      return this.sendCommand({ commandId: cmd.cmd });
    };
  }

  private autocompleteListener() {
    return async (query: string) => {
      const signal = await this.getRFSignal();

      return Object.keys(signal.manifest.cmds)
        .map((commandId) => {
          return {
            name: this.homey.__(`commands.${commandId}`) || commandId,
            cmd: commandId,
          };
        })
        .filter((command) => {
          return command.name.toLowerCase()
            .includes(query.toLowerCase());
        });
    };
  }

}

module.exports = LampemagasinetDriver;
