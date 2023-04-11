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
//     присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
//     метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника

class Auto {
    constructor(mark, model, year, number) {
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.number = number;
    }
}