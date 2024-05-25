//12main6_1
//Массивы JavaScript и их функции
//Массив - то же что и пере-нная,только больше значений(в квадратных скобках [])

let array = [45,true,6.92,"Hello",'R']; //может принимать любые значения
console.log(array);
//обратиться к массиву:
//можно переопределять значения

array[1] = false;
array[2] = "Hello";
array[3] += " World"; //добавляем к эл-ту еще что-то
array[0] += " World"; //если добавляем к числу строку,то на выходе получаем строку

console.log(array[0]);
console.log(array[4]);

array[5] = 5; //добавить к массиву эл-ты
//array[100] = 6; //можем добавлять эл-ты не по очереди
array[array.length] = 7; //добавить в конец списка значение


array.push("Bob","Alex",1); //добавляем в конец массива
array.pop(); //удаляет последний эл-нт в массиве
array.shift(); //удаляет 1й эл-нт в массиве
array.unshift("Bob","Alex",1) //добавляет в начало списка(сдвигает весь список вперед)

//array.length = 2; //МОЖЕМ УКАЗАТЬ ДЛИНУ МАССИВА
delete array[2];//удаляет знач. по индексу


console.log(array);

console.log(array.length); //кол-во эл-ов в массиве

// создание массива можно сделать с помощью класса array:
//указываем слово new(даем память под класс) далее пишем Array-название класса.
//И если ничего не указываем в (),то создается пустой массив

let arr = new Array();
console.log();