
interface Props {
  text: string;
  picked: string;
}

export const сonjugateNoun = ({ text, picked }: Props): string => {

  if (text.toUpperCase().charAt(text.length - 1) == 'А') {
    switch (picked) {
      case '1':
        text = text.substring(0, text.length - 1) + 'А';
        return text.toUpperCase();
      case '2':
        text = text.substring(0, text.length - 1) + 'Ы';
        return text.toUpperCase();
      case '3':
        text = text.substring(0, text.length - 1) + 'Е';
        return text.toUpperCase();
      case '4':
        text = text.substring(0, text.length - 1) + 'У';
        return text.toUpperCase();
      case '5':
        text = text.substring(0, text.length - 1) + 'ОЙ';
        return text.toUpperCase();
      case '6':
        text = text.substring(0, text.length - 1) + 'Е';
        return text.toUpperCase();
      default:
        return text.toUpperCase();
    }
  }
  else if ((text.toUpperCase().charAt(text.length - 1) == 'Я')) {
    switch (picked) {
      case '1':
        text = text.substring(0, text.length - 1) + 'Я';
        return text.toUpperCase();
      case '2':
        text = text.substring(0, text.length - 1) + 'И';
        return text.toUpperCase();
      case '3':
        text = text.substring(0, text.length - 1) + 'Е';
        return text.toUpperCase();
      case '4':
        text = text.substring(0, text.length - 1) + 'Ю';
        return text.toUpperCase();
      case '5':
        text = text.substring(0, text.length - 1) + 'ЕЙ';
        return text.toUpperCase();
      case '6':
        text = text.substring(0, text.length - 1) + 'Е';
        return text.toUpperCase();
      default:
        return text.toUpperCase();
    }
  }
  else if ((text.toUpperCase().charAt(text.length - 1) == 'О')) {
    switch (picked) {
      case '1':
        text = text.substring(0, text.length - 1) + 'О';
        return text.toUpperCase();
      case '2':
        text = text.substring(0, text.length - 1) + 'А';
        return text.toUpperCase();
      case '3':
        text = text.substring(0, text.length - 1) + 'У';
        return text.toUpperCase();
      case '4':
        text = text.substring(0, text.length - 1) + 'О';
        return text.toUpperCase();
      case '5':
        text = text.substring(0, text.length - 1) + 'ОМ';
        return text.toUpperCase();
      case '6':
        text = text.substring(0, text.length - 1) + 'Е';
        return text.toUpperCase();
      default:
        return text.toUpperCase();
    }
  }
  else if ((text.toUpperCase().charAt(text.length - 1) == 'Е')) {
    switch (picked) {
      case '1':
        text = text.substring(0, text.length - 1) + 'Е';
        return text.toUpperCase();
      case '2':
        text = text.substring(0, text.length - 1) + 'Я';
        return text.toUpperCase();
      case '3':
        text = text.substring(0, text.length - 1) + 'Ю';
        return text.toUpperCase();
      case '4':
        text = text.substring(0, text.length - 1) + 'Е';
        return text.toUpperCase();
      case '5':
        text = text.substring(0, text.length - 1) + 'ЕМ';
        return text.toUpperCase();
      case '6':
        text = text.substring(0, text.length - 1) + 'Е';
        return text.toUpperCase();
      default:
        return text.toUpperCase();
    }
  }
  else if ((!'ЬАЕОЯ'.includes(text.toUpperCase().charAt(text.length - 1)) )) {
    console.log(text+'*');
    switch (picked) {
      case '1':
        text = text + '';
        return text.toUpperCase();
      case '2':
        text = text + 'А';
        return text.toUpperCase();
      case '3':
        text = text.substring(0, text.length - 1) + 'У';
        return text.toUpperCase();
      case '4':
        text = text.substring(0, text.length - 1) + '';
        return text.toUpperCase();
      case '5':
        text = text.substring(0, text.length - 1) + 'ОМ';
        return text.toUpperCase();
      case '6':
        text = text.substring(0, text.length - 1) + 'Е';
        return text.toUpperCase();
      default:
        return text.toUpperCase();
    }
  }
  else if ((text.toUpperCase().charAt(text.length - 1) == 'Ь')) {
    switch (picked) {
      case '1':
        text = text.substring(0, text.length - 1) + '';
        return text.toUpperCase();
      case '2':
        text = text.substring(0, text.length - 1) + 'И';
        return text.toUpperCase();
      case '3':
        text = text.substring(0, text.length - 1) + 'И';
        return text.toUpperCase();
      case '4':
        text = text.substring(0, text.length - 1) + '';
        return text.toUpperCase();
      case '5':
        text = text.substring(0, text.length - 1) + 'Ю';
        return text.toUpperCase();
      case '6':
        text = text.substring(0, text.length - 1) + 'И';
        return text.toUpperCase();
      default:
        return text.toUpperCase();
    }
  }
  else
    return text.toUpperCase();
}