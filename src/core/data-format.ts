export function dateFormat(date: string): string {
  console.log(date);
  const dia = date.substring(0, 2);
  const mes = date.substring(3, 5);
  const ano = date.substring(6, 10);

  return `${ano}-${mes}-${dia}`;
}
