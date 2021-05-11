import { FormatPhone } from './formatPhone';

test('Function should return format phone', () => {
  expect(FormatPhone('89005553535')).toBe('8 (900) 555-35-35');
  expect(FormatPhone('+79005553535')).toBe('+7 (900) 555-35-35');
  expect(FormatPhone('9005553535')).toBe('+7 (900) 555-35-35');
  expect(FormatPhone('+19005553535')).not.toBe('+1 (900) 555-35-35');
});
