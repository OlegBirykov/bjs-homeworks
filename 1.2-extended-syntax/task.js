'use strict'

function getResult(a,b,c) {
  
  // Вычислить дискриминант
  let D = b * b - 4 * a * c;
  
  if (D < 0) return [];  
  if (D === 0) return [-b / (2 * a)];
  
  // Если ещё не вышли из функции, значит D > 0
  D = D ** 0.5; // Квадратный корень лучше вычислить один раз заранее, чем два раза потом
  return [(-b + D) / (2 * a), (-b - D) / (2 * a)];
}

function getAverageMark(marks) {
  
  // Определить число оценок
  let numberMarks = marks.length;

  // Если оценок нет, делать ничего не надо
  if (numberMarks === 0) return 0;
 
  // Если оценок больше пяти, взять пять первых оценок
  if (numberMarks > 5) {
    console.log(`Число оценок равно ${numberMarks}, будут учтены только первые пять оценок`);
    marks.splice(5); // Удалить все элементы, начиная с шестого
    numberMarks = 5;
  }

  // Вычислить среднюю оценку
  let averageMark = 0;
  for (let i = 0; i < numberMarks; i++) averageMark += marks[i];
  averageMark /= numberMarks; 
  return averageMark;
}

function askDrink(name,dateOfBirthday) {
  
  let age = new Date().getFullYear();
  age -= dateOfBirthday.getFullYear();
  
  if (age >= 18) return `Не желаете ли олд-фэшн, ${name}?`;
  
  // else использовать не обязательно, сюда попадём, только если предыдущее условие было равно false 
  return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
}