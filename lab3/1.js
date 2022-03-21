/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */

 function capitalize(str) {
    let output = str
    let arr = []
    for (let i = 0; i<output.length; i++)
       {
          arr[i] = output.charAt(i);     
       }
       
       if (output[0] != ' ')
	   {
		   arr[0] = output.charAt(0).toUpperCase();
	   }
      
      for (let i = 0; i < output.length - 1; i++)
	  {
		if (output.charAt(i) == ' ' && output.charAt(i+1) != ' ')
		{
			arr[i+1] = output.charAt(i+1).toUpperCase();
		}
	 }
      let out = ''
      for (let i = 0; i<output.length;i++)
       {
          out+=arr[i]
       }
            
      return out;
}

module.exports = capitalize;


