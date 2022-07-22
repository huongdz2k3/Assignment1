const ajvInstance = require('./ajv-instance');

const schema = {
    properties: {
        name: { type: "string" }
    },

}
module.exports = ajvInstance.compile(schema)
