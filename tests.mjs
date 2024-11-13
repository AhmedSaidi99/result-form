// tests.mjs
import assert from 'node:assert';
import test from 'node:test';
import fields from './fields.js';


test('field 1 = field 8', () => {
  assert.strictEqual(fields.field1, fields.field8);
});

test('field 2 = field 9', () => {
  assert.strictEqual(fields.field2, fields.field9);
});

test('field 7 = field 13', () => {
  assert.strictEqual(fields.field7, fields.field13);
});

