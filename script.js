// 1. Створити сутність "Людина".

// Властивості: імʼя; вік. Методи: конструктор, 
// який приймає два параметри: імʼя та вік; метод, 
// який виводить у консоль інформацію про людину.


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo () {
        return `Name: ${this.name} Age: ${this.age}`;
    }
}

// 2. Створити сутність "Автомобіль".

//     Властивості:
//     марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
//     власник.
//     Методи:
//     конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
//     присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, 
//      інакше виводити у консоль відповідне повідомлення
//     метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника

class Auto {
    constructor(mark, model, year, number) {
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.number = number;
    }
    CarOwner(owner) {
        if(owner.age < 18) {
            console.log('Вам менше 18 років!');
        } else {
            console.log(`${owner.name}, Вам ${owner.age} років`);
        }
    }
    AutoInfo(owner) {
        console.log(`Власник - ${owner.name}, ваше обране авто ${this.mark} ${this.model} ${this.year} року випуску з номером реєстрації ${this.number}`);
    }
}

// В якості демонстраціїї створити:

//     декілька екземплярів класу Людина;
//     декілька екземплярів класу Автомобіль;
//     присвоїти власників автомобілям.

let person1 = new Person ('Кирило', '26');
let person2 = new Person ('Владлена', '24');

let auto1 = new Auto('Daewoo', 'Lanos', '2006', 'AE7766AA');
let auto2 = new Auto('Mitsubishi', 'Lancer', '2009', 'AE9538AA');


auto1.CarOwner(person1);
auto2.CarOwner(person2);

auto1.AutoInfo(person1);
auto2.AutoInfo(person2);

