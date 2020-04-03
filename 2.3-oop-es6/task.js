'use strict';

// ========== Задача №1 ==========

// Описание класса

class Weapon { 
  
  constructor({name, attack, durability, range} = {name: 'Рука', attack: 1, durability: Infinity, range: 1}) {
    this.name = name;
    this.attack = attack;
    this.maxDurability = durability; // Исходная (максимальная) прочность
    this.durability = durability; // Текущая прочность
    this.range = range;
  }

  takeDamage(damage) {
    this.durability -= damage;
    if (this.durability < 0) 
      this.durability = 0;
  }
 
  getDamage() {
    let k = this.durability / this.maxDurability;
    if (k >= 0.3) 
      return this.attack;
    if (k > 0) 
      return this.attack / 2;
    return 0;
  }

  isBroken() {
    return this.durability <= 0;
  }
 
}

// Примеры из описания задачи

console.log('Задача №1');

const sword = new Weapon({
  name: 'Старый меч',
  attack: 20,
  durability: 10,
  range: 1
});

sword.takeDamage(5);
console.log(sword.durability); // 5

sword.takeDamage(50);
console.log(sword.durability); // 0

const arm = new Weapon({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1
});

arm.takeDamage(20);
console.log(arm.durability); // Infinity

const bow = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3
});

bow.takeDamage(20);
console.log(bow.durability); // 180

bow.takeDamage(200);
console.log(bow.durability); // 0

console.log(bow.durability); // 0
console.log(bow.isBroken()); // true

console.log(arm.durability); // Infinity
console.log(arm.isBroken()); // false

// Конечное состояние оружия из примеров

console.log(sword);
console.log(arm);
console.log(bow);

// Примеры всех видов оружия из таблицы

const arm1 = new Weapon({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1
});
console.log(arm1);

const bow1 = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3 
});
console.log(bow1);

const sword1 = new Weapon({
  name: 'Меч',
  attack: 25,
  durability: 500,
  range: 1
});
console.log(sword1);

const knife1 = new Weapon({
  name: 'Нож',
  attack: 5,
  durability: 300,
  range: 1
});
console.log(knife1);

const staff1 = new Weapon({
  name: 'Посох',
  attack: 8,
  durability: 300,
  range: 2 
});
console.log(staff1);
 
const longBow1 = new Weapon({
  name: 'Длинный лук',
  attack: 15,
  durability: 200,
  range: 4
});
console.log(longBow1);

const axe1 = new Weapon({
  name: 'Секира',
  attack: 27,
  durability: 800,
  range: 1
});
console.log(axe1);

const stormStaff1 = new Weapon({
  name: 'Посох Бури',
  attack: 10,
  durability: 300,
  range: 3
});
console.log(stormStaff1);

// Оружие по умолчанию

const defaultWeapon = new Weapon();
console.log(defaultWeapon);

// ========== Задача №2 ==========

// Описания классов

class Arm extends Weapon {
  constructor() {
    super({
      name: 'Рука',
      attack: 1,
      durability: Infinity,
      range: 1      
    });
  }
}

class Bow extends Weapon {
  constructor() {
    super({
      name: 'Лук',
      attack: 10,
      durability: 200,
      range: 3       
    });
  }
}

class Sword extends Weapon {
  constructor() {
    super({
      name: 'Меч',
      attack: 25,
      durability: 500,
      range: 1
    });
  }  
}

class Knife extends Weapon {
  constructor() {
    super({
      name: 'Нож',
      attack: 5,
      durability: 300,
      range: 1
    });
  }  
}

class Staff extends Weapon {
  constructor() {
    super({
      name: 'Посох',
      attack: 8,
      durability: 300,
      range: 2 
    });
  }  
}

class LongBow extends Bow {
  constructor() {
    super();
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;  
  }
}

class Axe extends Sword {
  constructor() {
    super();
    this.name = 'Секира';
    this.attack = 27;
    this.maxDurability = 800;
    this.durability = 800;
  }  
} 

class StormStaff extends Staff {
  constructor() {
    super();  
    this.name = 'Посох Бури';
    this.attack = 10;
    this.range = 3;      
  }
}

// Примеры объектов

console.log(`\nЗадача №2`);

const arm2 = new Arm();
console.log(arm2);

const bow2 = new Bow();
console.log(bow2);

const sword2 = new Sword();
console.log(sword2);

const knife2 = new Knife();
console.log(knife2);

const staff2 = new Staff();
console.log(staff2);

const longBow2 = new LongBow();
console.log(longBow2);

const axe2 = new Axe();
console.log(axe2);

const stormStaff2 = new StormStaff();
console.log(stormStaff2);

// ========== Задача №3 ==========

// Описание класса

class StudentLog {
  
  constructor(name = 'Аноним') {
    this.name = name;
    this.marks = {};
  }
  
  getName() {
    return this.name;
  }

  addGrade(grade, subject = 'noname') {
    // Если нет массива оценок по данному предмету, создать
    if (!(subject in this.marks))
      this.marks[subject] = [];
    let mark = Number.parseInt(grade);
    if ((isNaN(mark)) || (mark < 1) || (mark > 5)) 
      console.log(`Вы пытались поставить оценку \"${grade}\" по предмету \"${subject}\". Допускаются только числа от 1 до 5.`);
    else
      this.marks[subject].push(mark);
    return this.marks[subject].length;
  }
  
  getAverageBySubject(subject) {
    if (!(subject in this.marks))
      return 0;
    
    let sum = 0;
    for (let i = 0; i < this.marks[subject].length; i++)
      sum += this.marks[subject][i];
    return sum / this.marks[subject].length;
  } 
  
  getTotalAverage() {
    let sum = 0;
    let n = 0;
    for (let subject in this.marks)
      for (let i = 0; i < this.marks[subject].length; i++) {
        sum += this.marks[subject][i];
        n++;
      }
    if (n === 0) 
      return 0;
    return sum / n;
  } 
  
  //Очистка всех оценок по всем предметам. В задании не указано, добавил для удобства тестирования
  clear() { 
    this.marks = {};
  }
  
}

// Примеры из описания задачи

console.log(`\nЗадача №3`);

const log = new StudentLog('Олег Никифоров');

console.log(log.getName()); // Олег Никифоров

console.log(log.addGrade(3, 'algebra'));
// 1
console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0
console.log(log.addGrade(4, 'algebra'));
// 2
console.log(log.addGrade(5, 'geometry'));
// 1
console.log(log.addGrade(25, 'geometry'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1

log.clear();
log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0

console.log(log.getTotalAverage()); // 3,75
