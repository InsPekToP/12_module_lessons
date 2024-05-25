//12main5_1
//Условные операторы - проверяет работает ли условие

let x = 20;
let y = 20;

let hasCar = true;

// if (x==y) { //если х равен у
//     console.log("Числа равны")
// }
//if (x!=y) { //если х не равен у
    //console.log("Числа не равны"); // ; надо писать,но если не писать ошибки не будет
//так же можно проверять на < > <= >=
//}
//else{
    //console.log("Числа равны");
//можно пропуcкать фигурные скобки,если писать только одну строчку кода
//}


//оператор else if - не является обязательным пар-ом
if (x>y){
    console.log("Число Х больше чем чило У");
    console.log("Проверка");
}else if (x==y){
    console.log("Числа равные");

    if(x != 25){ // также можно прописывать проверку в проверке
        console.log("Число Х не равно 25");
    }
    //&& - и
    // || - или
    // hasCar == true и hasCar - одно и тоже
    // hasCar == false и !hasCar - тоже самое
    if(x != 24 || (hasCar == true && y == 24)){
        console.log("Число Х не равно 24");
    }
}else if (x==20){
    console.log("Число Х равно 20");
}else if (x==26){
    console.log("Числа Х равно 26");
}
else{
    console.log("Числа не равны");
}

//Операторы switch - case - проверка на опр-ые условия
//фигурные скобки обязательны
//break - тоже надо писать,чтобы выходить из итерации
//defol - тоже,что и else - выполняется,если прошлые комманды не были выполнены(можно
//не ставить break,т.к. этот оператор пишется в конце,но лучше ставить


//let str = "George";
let str = "Petr";
switch(str){
    case "John":
        console.log("Имя John")
        break;
    case "Bob":
        console.log("Имя Bob");
        break;
    case "George":
        console.log("Имя George");
        break;
    case "Alex":
        console.log("Имя Alex");
        break;
    default:
        console.log("Нам не известно имя");
        break;
    }