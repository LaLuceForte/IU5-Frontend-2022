/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    let arr = [];
    let output = [];
    let p = 0;
    let k = 1;
    let s = '';

    for (let i = 0; i<str.length; i++)
       {
          arr[i] = str.charAt(i);     
       }
   
       for (let i = 0; i<arr.length;i++)
       {
          if (arr[i+1] != arr[i] && (k>1))
          {
         
             output[p] = arr[i-1];
             p++;
             output[p] = k;
             p++;
             k = 0;
          }
          if ((arr[i] != arr[i+1]) && (arr[i] != arr[i-1]))
          {
             output[p] = arr[i];
             p++
          }
          else{
          k++;
          }
       }
       s = output.join('');
   
  return s;
}


module.exports = rle;
