const sum = require('./Jest/javascript')
test('adds 1 + 2 to equal to 3', () => {
    expect(sum(1,2)).toBe(3);
});