import ConvertNumber from '../ConvertNumber';


test('convertNumberToRoman em números simples', () => {;
  const converter = new ConvertNumber(1);
  expect(converter.convertNumberToRoman()).toBe('I');

  const converter2 = new ConvertNumber(5);
  expect(converter2.convertNumberToRoman()).toBe('V');

  const converter3 = new ConvertNumber(10);
  expect(converter3.convertNumberToRoman()).toBe('X');
});

test('convertNumberToRoman em strings combinadas', () => {
  const converter = new ConvertNumber(4);
  expect(converter.convertNumberToRoman()).toBe('IV');

  const converter2 = new ConvertNumber(9);
  expect(converter2.convertNumberToRoman()).toBe('IX');

  const converter3 = new ConvertNumber(14);
  expect(converter3.convertNumberToRoman()).toBe('XIV');
});

test('convertNumberToRoman em números grandes', () => {
  const converter = new ConvertNumber(40);
  expect(converter.convertNumberToRoman()).toBe('XL');

  const converter2 = new ConvertNumber(90);
  expect(converter2.convertNumberToRoman()).toBe('XC');

  const converter3 = new ConvertNumber(400);
  expect(converter3.convertNumberToRoman()).toBe('CD');

  const converter4 = new ConvertNumber(900);
  expect(converter4.convertNumberToRoman()).toBe('CM');
});

test('convertNumberToRoman como vai fazer a tratativa de erros', () => {
  const converter = new ConvertNumber(0);
  expect(converter.convertNumberToRoman()).toBe('');

  const converter2 = new ConvertNumber(-1);
  expect(converter2.convertNumberToRoman()).toBe('');
});
