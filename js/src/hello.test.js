var hello = require('./hello');

test('hello("jest") to be "Hello Jest!!"', function() {
  expect(hello('Jest')).toBe('Hello Jest!!');
});

test('hello("jest") not to be "Hello fukumasuya!!"', function() {
  expect(hello('Jest')).not.toBe('Hello fukumasuya!!');
});
