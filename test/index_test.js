var assert = require('assert'),
    oi = require('@oi/oi'),
    pluginFn = require('../index');

describe("Oi development module", () => {
  it("can be loaded", () => {
    var plugin = pluginFn(null, null, null);
    assert.equal(plugin.command, 'oi');
  });

  it("can be loaded as a module", () => {
    var plugin = pluginFn();
    var module = new oi.Module(plugin);
    assert.equal(module.command, 'oi');
  });
});
