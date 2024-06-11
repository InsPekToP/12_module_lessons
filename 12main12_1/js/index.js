//12main12_1
//Обьекты и классы

//Обьект - спец. тип данных,который позволяет нам описать реальный обьект из жизни

// let speed = 45;
// let fuel = 60;
//это не удобно,так как этих пер-ых будет много
//2й способ это создания массива
// let car = [300,46,60]//тоже не удобно т.к. только мы будем знать что это за цифры

//прописывать обьект ключ:значение намного лучше
let car = {
    marka:"Volvo",
    color:"Белый",
    type:"sedan",
    speed:250,
    fuel:50,
    isNew:true,
    passengers:["Alex","Bob","John"],//можно в качестве знач. устанавливать массив и обьект
    some:{sity:"Moscow",people:"1,5"}
}

console.log(car);

//вывести конкретное знач. из обьекта
console.log(car.type);//обратились к обьекту и ключу
console.log(car.passengers[1]);
//2й способ вывести знач из обьекта
console.log(car["fuel"]);

//Цикл для перебора обьектов
for(let key in car){
    console.log("Элемент по ключу - " + key + ": " + car[key])//к car[key] не можем обращаться через точку car.key
//т.к. key нет в обьекте
}


//Классы - спец. конструкции,кот. описывают реальный обьект из жизни

function Car(marka,color,type,speed){
    //теперь чтобы присвоить пар-тр marka к пер-ой marka(которая принадлежит к этому классу,
    //надо ис-ть ключевое слово this)
    this.marka = marka;
    this.color = color;
    this.type = type;
    this.speed = speed;
}
//чтобы создать обьект на основе класса:
let bmw = new Car("M3","Синий","Седан",270);
let volvo = new Car("Volvo","Белый","Седан",230);
console.log(bmw.type);
console.log(bmw.speed);
console.log(bmw.color);
console.log(volvo.color);

//классы стоить ис-ть,когда обьект большой
//обьект лучше исп-ть,когда есть только 1 обьект
