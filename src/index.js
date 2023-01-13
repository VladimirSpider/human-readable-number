module.exports = function toReadable (number) {
  const textOfNambers = {
      '0': 'zero',
      '1': 'one',
      '2': 'two',
      '3': 'three',
      '4': 'four',
      '5': 'five',
      '6': 'six',
      '7': 'seven',
      '8': 'eight',
      '9': 'nine',
      '10': 'ten',
      '11': 'eleven',
      '12': 'twelve',
      '13': 'thirteen',
      '14': 'fourteen',
      '15': 'fifteen',
      '16': 'sixteen',
      '17': 'seventeen',
      '18': 'eighteen',
      '19': 'nineteen',
      '20ty': 'twenty',
      '30ty': 'thirty',
      '40ty': 'forty',
      '50ty': 'fifty',
      '60ty': 'sixty',
      '70ty': 'seventy',
      '80ty': 'eighty',
      '90ty': 'ninety',
      'hundred': 'hundred',
  };

  const getSimpleNumber = (number) => {
      return textOfNambers[String(number)];
  }

  const helperTwoDigitNumber = (number, text) => {
      return String(number)[1] === '0' ? textOfNambers[text] : textOfNambers[text] + ' ' + textOfNambers[String(number)[1]];
  }

  const getTwoDigitNumber = (number) => {
      if(number < 30) return helperTwoDigitNumber(number, '20ty');
      if(number < 40) return helperTwoDigitNumber(number, '30ty');
      if(number < 50) return helperTwoDigitNumber(number, '40ty');
      if(number < 60) return helperTwoDigitNumber(number, '50ty');
      if(number < 70) return helperTwoDigitNumber(number, '60ty');
      if(number < 80) return helperTwoDigitNumber(number, '70ty');
      if(number < 90) return helperTwoDigitNumber(number, '80ty');
      if(number < 100) return helperTwoDigitNumber(number, '90ty');
  }

  const getThreeDigitNumber = (number) => {
      const answer = String(number)[1] === '0' && String(number)[2] === '0'
          ? textOfNambers[String(number)[0]] + ' ' + textOfNambers['hundred']
          : Number(String(number).slice(1)) <= 19
              ? textOfNambers[String(number)[0]] + ' ' + textOfNambers['hundred'] + ' ' + getSimpleNumber(Number(String(number).slice(1)))
              : textOfNambers[String(number)[0]] + ' ' + textOfNambers['hundred'] + ' ' + getTwoDigitNumber(Number(String(number).slice(1)));
      return answer;
  }

  if (number <= 19) {
      return getSimpleNumber(number);
  } else if ( number > 19 && number < 100) {
      return getTwoDigitNumber(number);
  } else if (number >= 100) {
      return getThreeDigitNumber(number);
  }
}
