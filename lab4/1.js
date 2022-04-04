/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */

function getAnagramms(arr) {
    let line = [];
    let lines = [];
   let flag;
   let flag2 = true;
    let add;
    for (let i = 0; i<arr.length - 1;i++)
    {
        flag2 = true;
        for (let j = i+1; j<arr.length;j++)
        {
            flag = true;
      
            for (let r = 0;r<arr[j].length; r++)
            {
                if((arr[i].includes( arr[j].charAt(r))) || (arr[i].includes( arr[j].charAt(r).toUpperCase())) || (arr[i].includes( arr[j].charAt(r).toLowerCase()) ))
                {
                } else {flag = false;
                        add = arr[j];}
               
            }
            if (flag == true)
            {
                if (flag2 === true)
                {
                    if (line.includes(arr[i]) == false)
                    {
                
                line.push(arr[i]);
                    }

                flag = false;
                }
         
            line.push(arr[j]);
            arr.splice(j, 1);
                
            }
          
        }

            lines.push([...line]);
         
            line.splice(0,line.length);
    }

    
    if (add != undefined)
    {
        line.push(add);
        lines.push(line);
    }
    if (lines.length>0)
    {
    if (lines[0].length == 0 )
    {
     lines.shift();

    mas = [];
    mas.push(arr[0]);
    lines.unshift(mas);
    }
}
    return lines;
}




module.exports = getAnagramms;
