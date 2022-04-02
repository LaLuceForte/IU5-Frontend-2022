/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {

    const c = Math.floor((str.length)/2)
    flag = true;

   for (let i = 0; i<c;i++)
   {
    if(str.charAt(i) != str.charAt(str.length-i-1))
    {
        flag = false;
    }  
   }
   return flag;
}


module.exports = isPalindrome;

