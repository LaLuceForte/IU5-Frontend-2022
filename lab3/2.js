/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
    let num_arr = []
     sum = ''
      p = 0
      flag = true;
      
    for (let k = 0; k<str.length ;k++)
    {
        console.log('sum = ', sum);
        if (isNaN(str.charAt(k)) == false&& str.charAt(k)!=' ' )
        {
            
            //console.log(parseInt(str.charAt(k)));
            sum+= parseInt(str.charAt(k));
           
          
            if (isNaN(str.charAt(k+1)) == true || str.charAt(k+1)==' ' || ((k+1) == str.length))
            {
                
                if(str.charAt(k - sum.length) == '-')
                {
                        sum*=(-1)
                }
              
                    
               
                if (str.charAt(k-sum.length) == '.')
                {
                    num_arr[p-1] +='.'
                    num_arr[p-1]+=sum
                    sum = num_arr[p-1]
                }
                num_arr[p] = sum
                p+=1
                
                sum = ''
            }

        }
        
    }

    min = Number.MAX_SAFE_INTEGER
    max = -Number.MAX_SAFE_INTEGER
    for (let u = 0; u<num_arr.length;u++)
    {
        if (Number.parseFloat(num_arr[u]) < min)
        {
            min = Number.parseFloat(num_arr[u]);
        }
        if (Number.parseFloat(num_arr[u]) > max)
        {
            max = Number.parseFloat(num_arr[u])
        }
    }

    
    return {min: min, max: max}
}







module.exports = getMinMax;




