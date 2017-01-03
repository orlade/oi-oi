var assert = require('assert'),
  oi = require('@oi/oi'),
  pluginFn = require('../index');

const host = {
  version: '0.1.1',
  log: require('winston'),
};

describe("Oi development module", () => {

  it("can be loaded", () => {
    var plugin = pluginFn(null, host, null);
    assert.equal(plugin.command, 'oi');
  });

  it("can be loaded as a module", () => {
    var plugin = pluginFn(null, host, null);
    var module = new oi.Module(plugin);
    assert.equal(module.command, 'oi');
  });

});
