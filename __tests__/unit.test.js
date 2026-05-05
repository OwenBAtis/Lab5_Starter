// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Phone Number Tests
test('valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone number without dashes', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('invalid phone number with letters', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// Email Tests
test('valid email', () => {
  expect(isEmail('csstress@ucsd.edu')).toBe(true);
});

test('valid email with numbers', () => {
  expect(isEmail('csstress123@ucsd.edu')).toBe(true);
});

test('invalid email without @', () => {
  expect(isEmail('csstressucsd.edu')).toBe(false);
});

test('invalid email without .com', () => {
  expect(isEmail('csstress@ucsd')).toBe(false);
});

// Password Tests
test('valid password', () => {
  expect(isStrongPassword('Password123')).toBe(true);
});

test('valid password with underscore', () => {
  expect(isStrongPassword('Password_123')).toBe(true);
});

test('invalid password starting with number', () => {
  expect(isStrongPassword('1Password')).toBe(false);
}); 

test('invalid password with special characters', () => {
  expect(isStrongPassword('Password!')).toBe(false);
});

// Date Tests
test('valid date', () => {
  expect(isDate('12/31/2020')).toBe(true);
});

test('valid date with single digit month and day', () => {
  expect(isDate('1/1/2020')).toBe(true);
});

test('invalid date with wrong format', () => {
  expect(isDate('2020-12-31')).toBe(false);
});

test('invalid date with letters', () => {
  expect(isDate('December 31, 2020')).toBe(false);
});

// Hex Color Tests
test('valid hex color with #', () => {
  expect(isHexColor('#FFAABB')).toBe(true);
});

test('valid hex color without #', () => {
  expect(isHexColor('FFAABB')).toBe(true);
});

test('invalid hex color with wrong length', () => {
  expect(isHexColor('#FFAA')).toBe(false);
});

test('invalid hex color with non-hex characters', () => {
  expect(isHexColor('#GGHHII')).toBe(false);
});