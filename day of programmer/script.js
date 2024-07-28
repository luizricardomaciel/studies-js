const year = 1984;

function dayOfProgrammer(year) {
  let day = 0;

  if (year < 1918) {
    if (year % 4 === 0) {
      day = 256 - 244;
    } else {
      day = 256 - 243;
    }
  } else if (year === 1918) {
    day = 256 - 230;
  } else {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      day = 256 - 244;
    } else {
      day = 256 - 243;
    }
  }

  return `${day}.09.${year}`;
}
