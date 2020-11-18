export function maskDate(value: string): string {
  let result = value.replace(/\D/g, '');
  result = value.replace(/(\d{2})(\d)/, '$1/$2');
  result = value.replace(/(\d{2})(\d{4})/, '$1/$2');
  return result;
}
