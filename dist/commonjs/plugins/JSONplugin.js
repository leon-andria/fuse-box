"use strict";
class FuseBoxJSONPlugin {
    constructor() {
        this.test = /\.json$/;
    }
    init(context) {
        context.allowExtension(".json");
    }
    transform(file) {
        file.contents = `module.exports = ${file.contents || {}};`;
    }
}
exports.FuseBoxJSONPlugin = FuseBoxJSONPlugin;
;
exports.JSONPlugin = new FuseBoxJSONPlugin();
