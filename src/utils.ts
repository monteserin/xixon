
export const getCurrentHour = () => {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  return `${hour}:${minutes}`;
}

export const getCurrentDay = () => {
  const date = new Date();
  const day = date.getDay();
  const days = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sábado'];
  return days[day];
}

export const timeToMinutes = (time) => {
  let [hours, minutes] = time.split(":").map(Number);
  if (hours === 24) hours = 0;  // Convertir "24:00" a "00:00"
  return hours * 60 + minutes;
}