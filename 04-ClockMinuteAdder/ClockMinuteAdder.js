function clockMinuteAdder(time, minutesToAdd) {
  // Tu código aquí
  // //* Separo y convierto a formato numérico todos los datos de entrada
  // let minutes = Number(time.split(':')[1]);
  // let hours = Number(time.split(':')[0]);
  // minutesToAdd = Number(minutesToAdd);
  // //* Obtengo las horas a agregar
  // const hoursToAdd = Math.floor((minutesToAdd + minutes) / 60);
  // //*Obtengo los minutos resultantes de la hora
  // minutes = (minutes + minutesToAdd) % 60;
  // //* Obtengo las horas resultantes en formato de 12 horas
  // hours = (hours + hoursToAdd) % 12;
  // //* Si los minutos son de un solo dígito, agrego un cero a la izquierda
  // if (minutes < 10) minutes = '0' + minutes.toString();
  // //* No existen las 0 horas, en su lugar existen las 12 horas
  // if (hours === 0) hours = '12';
  // //* Si las horas son de un solo dígito, agrego un cero a la izquierda
  // if (hours < 10) hours = '0' + hours.toString();

  // return `${hours}:${minutes}`;

  //! Propuesta Sebastian Massaguer
  const [hours, minutes] = time.split(':');
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setMinutes(date.getMinutes() + minutesToAdd);
  // console.log(date);
  const newHours =
  date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const newMinutes = date.getMinutes();
  const formattedTime = `${newHours < 10 ? '0' + newHours : newHours}:${
    newMinutes < 10 ? '0' : ''
  }${newMinutes}`;
  return formattedTime;
}

clockMinuteAdder('01:05',56)

module.exports = clockMinuteAdder;
