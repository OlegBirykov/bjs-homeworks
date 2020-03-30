'use strict'

// ========== Задача №1 ==========

function getSolutions(a, b, c) {

  let D = (b * b) - (4 * a * c);
  // Если входные параметры некорректны или отсутствуют
  if (isNaN(D))
    return { D };
  
  if (D < 0) 
    return { D, roots: [] };
  
  let x1;
  if (D === 0) {
    x1 = -b / (2 * a);
    return { D, roots: [x1] };
  }
  
  // Если дошли сюда, D > 0
  x1 = (-b + D ** 0.5) / (2 * a);
  let x2 = (-b - D ** 0.5) / (2 * a);
  return { D, roots: [x1, x2] };  
}

function showSolutionsMessage(a, b, c) {
  
  let result = getSolutions(a, b, c);  
  if (isNaN(result.D)) {
    console.log(`a = ${a}, b = ${b}, c = ${c}\nОшибка: параметры a, b, c должны быть числами`);
    return;
  }
  
  console.log(`Вычисляем корни квадратного уравнения ${a}x\u00B2 + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`); 
  
  switch (result.roots.length) {
    case 0:
      console.log('Уравнение не имеет вещественных корней');
      break;
    case 1:
      console.log(`Уравнение имеет один корень X\u2081 = ${result.roots[0]}`);  
      break;
    default:
      console.log(`Уравнение имеет два корня. X\u2081 = ${result.roots[0]}, X\u2082 = ${result.roots[1]}`);
  }
  return; 
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);


// ========== Задача №2 ==========

function getAverageMark(marks) {

  // Если на входе нет данных
  if (marks === undefined)
    return 0;
  // Если на входе не массив или пустой массив
  if ((marks.length === undefined) || (marks.length === 0))
    return 0;
  
  let sum = 0;
  for (let i = 0; i < marks.length; i++)
    sum += marks[i];

  return sum / marks.length;  
}

function getAverageScore(data) {
  
  let result = { average: 0 };
  
  if (data === undefined) 
    return result;
  
  let sum = 0;
  let n = 0;
  for(let property in data) {
    result[property] = getAverageMark(data[property]);  
    sum += result[property];
    n++;
  } 

  if (n > 0)
    result.average = sum / n; 
  return result;
}

console.log(''); // Отступ от предыдущей задачи
console.log(getAverageScore({
  algebra: [2, 4, 5, 2, 3, 4],
  geometry: [2, 4, 5],
  russian: [3, 3, 4, 5],
  physics: [5, 5],
  music: [2, 2, 6],
  english: [4, 4, 3],
  poetry: [5, 3, 4],
  chemistry: [2],
  french: [4,4]
}));

// ========== Задача №3 ==========

function getDecodedValue(secret) {
  switch (secret) {
    case 0: 
      return 'Родриго';
    case 1:
      return 'Эмильо';
    default: 
      return '';
  }
}

function getPersonData(secretData) {  
  return {
    firstName: getDecodedValue(secretData.aaa),
    lastName: getDecodedValue(secretData.bbb)
  };
}

console.log(''); // Отступ от предыдущей задачи
console.log(getPersonData({
  aaa: 0, 
  bbb: 0
}));
console.log(getPersonData({
  aaa: 1, 
  bbb: 0
}));
console.log(getPersonData({
  aaa: 0, 
  bbb: 1
}));
console.log(getPersonData({
  aaa: 1, 
  bbb: 1
}));
