const User = requireUncached('../../src/models/User');

module.exports = {
    id: User.table.maxId + 1,
    name: null,
    age: null,
    created_at: Date.now(),
    updated_at: Date.now()
}

function requireUncached(module) {
    delete require.cache[require.resolve(module)];
    return require(module);
}