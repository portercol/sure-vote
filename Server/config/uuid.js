const { v4: newUuid, validate: uuidValidate } = require("uuid");

function generateUuid() {
    const uuid = newUuid();
    return uuid;
}

const v4Uuid = '0ae90a97-8eac-46e6-8938-6d0b375b3662';

console.log(generateUuid());
console.log(uuidValidate(v4Uuid));

module.exports = generateUuid;