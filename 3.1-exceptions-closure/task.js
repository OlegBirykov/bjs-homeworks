'use strict';

// ========== Задача №1 ==========

function parseCount(count) {
  const result = Number.parseInt(count);
  if (isNaN(result))
    throw new Error('Невалидное значение');  
  return result;
}

function validateCount(count) {
  try {
      return parseCount(count);
  } catch(error) {
      return error;      
  }
}

// ========== Задача №2 ==========

class Triangle { 
  constructor(a, b, c) {
    this.a = Number.parseFloat(a);
    this.b = Number.parseFloat(b);
    this.c = Number.parseFloat(c);
    if ((isNaN(this.a)) || (isNaN(this.b)) || (isNaN(this.c)) || 
        (this.a <= 0) || (this.b <= 0) || (this.c <= 0) || 
        (this.a + this.b <= this.c) || 
        (this.a + this.c <= this.b) || 
        (this.b + this.c <= this.a))
      throw new Error('Треугольник с такими сторонами не существует'); 
  }

  getPerimeter() {
    return Number.parseFloat((this.a + this.b + this.c).toFixed(3)); // Тест проходит и так, но лучше округлить, как площадь (см.ниже)
  }
 
  getArea() {
    const p = (this.a + this.b + this.c) / 2;
    return Number.parseFloat(((p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5).toFixed(3)); // Без округления не проходит тест
  } 
}


function getTriangle(a, b, c) {
  try {
      return new Triangle(a, b, c);
  } catch(error) {
      if (error.message === 'Треугольник с такими сторонами не существует') {
        const errorText = 'Ошибка! Неправильный треугольник';
        return { getArea: () => errorText, getPerimeter: () => errorText };  
      }
      return error; // Если ошибка другого типа, передать вызывающей функции
  }
}




