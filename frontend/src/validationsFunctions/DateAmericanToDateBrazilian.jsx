
function DateAmericanToDateBrazilian(data) {
  const dataAmericana = data 
  const dataBrasileira = dataAmericana.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")
  return dataBrasileira
}

export default DateAmericanToDateBrazilian
