const ajvInstance = require('./ajv-instance');

const schema = {
    properties: {
        username: { type: "string" }
    },

}
module.exports = ajvInstance.compile(schema)
