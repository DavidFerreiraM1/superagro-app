/* eslint-disable radix */
/* eslint-disable no-useless-escape */
/* eslint-disable prettier/prettier */
export function isEmpty(value: string): boolean {
  let validate = true;
  if (value === '' || value === null) {
   return !validate;
  }
  return validate;
}

export function dateValidation(data: string): boolean {
  const reg = /[^\d\/\.]/gi;                  // Mascara = dd/mm/aaaa | dd.mm.aaaa
  let valida = data.replace(reg,'');    // aplica mascara e valida só numeros
  if (valida && valida.length === 10) {  // é válida, então ;)
    let ano = data.substr(6);
      let mes = data.substr(3,2);
      let dia = data.substr(0,2);
      let M30 = ['04','06','09','11'];
      let vmes = /(0[1-9])|(1[0-2])/.test(mes);
      let vano = /(19[1-9]\d)|(20\d\d)|2100/.test(ano);
      let rexpr = new RegExp(mes);
      let fev29 = parseInt(ano) % 4? 28: 29;

    if (vmes && vano) {
      if (mes === '02') return (parseInt(dia) >= 1 && parseInt(dia) <= fev29);
      if (rexpr.test(M30)) return /((0[1-9])|([1-2]\d)|30)/.test(dia);
      return /((0[1-9])|([1-2]\d)|3[0-1])/.test(dia);
    }
  }
  return false;
}

export function emailvalidation(value: string): boolean {
  const regex = /^\D[a-z0-9]*\@[a-z0-9]+\.\D[a-z]*\D[a-z]*$/

  if(value === '') return false;

  if (!regex.test(value)) return false;

  return true;
}