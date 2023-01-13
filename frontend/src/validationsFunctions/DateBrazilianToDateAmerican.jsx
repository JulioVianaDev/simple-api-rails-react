function DateBrazilianToDateAmerican(data) {
  const dataBrasilera = data;
  const dateLista = dataBrasilera.split("/");
  const dateAmericana = dateLista[2] + "-" + dateLista[1] + "-" + dateLista[0];
  return dateAmericana
}

export default DateBrazilianToDateAmerican