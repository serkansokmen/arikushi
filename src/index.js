import { shuffle } from 'knuth-shuffle';
import { mapping } from './mapping.json';

export default {
  convert: (str) => {
    if (str === null || (str != null && typeof str !== 'string')) {
      return '';
    }
    let result = '';
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i).toUpperCase();
      if (mapping.hasOwnProperty(char)) {
        result += mapping[char];
      }
    }
    return result;
  },

  random: (size = 1) => {

    let arr = [];
    let result = '';

    Object.keys(mapping).forEach((key) => {
      const val = mapping[key];
      arr.push({
        key: key,
        value: val
      });
    });
    const shuffled = shuffle(arr);

    for (let i=0; i<size; i++) {
      result += shuffled[i].value;
    }
    return result.trim();
  },

  mapping
}
