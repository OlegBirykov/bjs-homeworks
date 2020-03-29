'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
  
  /*
    При вызове функции из файла main.js данный параметр уже преобразован в число (или NaN).
    На случай, если эта функция будет использоваться кем-то ещё, кто не заботится
    о корректности входных данных, для этого и других параметров просто выполним 
    здесь такое же преобразование.
  */
  percent = Number.parseInt(percent);
  /*
    В задании указана процентная ставка от 0 до 1 (0-100%). При нулевой ставке в формуле
    получается деление 0/0, при близкой к 0 возможны большие погрешности или даже округление до 0
    при делении на 100 и 12. Тут надо обсуждать с заказчиком, но вряд ли ставка по ипотеке 
    может быть меньше 1%, из этого и будем исходить.
  */
  if (isNaN(percent) || (percent < 1) || (percent > 100)) {
    console.log(`Параметр \"процентная ставка\" содержит неправильное значение ${percent}\nДопустимый диапазон - число от 1 до 100`);  
    return;
  }
  let P = percent / 1200; // 1/12 процентной ставки, преобразованной из процентов в непосредственный коэффицент (1 соответствует 100%)
  
  contribution = Number.parseInt(contribution);
  /*
    Начальный взнос может быть и нулевым, но уж точно не отрицательным. 
    Для отладки допустим, что и начальный взнос, и общая стоимость могут находиться в диапазоне 0..10 млн.рублей 
  */
  if (isNaN(contribution) || (contribution < 0) || (contribution > 1e7)) {
    console.log(`Параметр \"начальный взнос\" содержит неправильное значение ${contribution}\nДопустимый диапазон - число от 0 до 10000000`);
    return;
  }

  amount = Number.parseInt(amount);
  if (isNaN(amount) || (amount < 0) || (amount > 1e7)) {
    console.log(`Параметр \"общая стоимость\" содержит неправильное значение ${amount}\nДопустимый диапазон - число от 0 до 10000000`); 
    return;
  }
  let S = amount - contribution;
  if (S < 0) {
    console.log('Ошибка ввода параметров, общая стоимость не должна превышать начальный взнос');
    return;
  }
  
  if (isNaN(date.getTime()) || (date.getFullYear() > 2100)) {
    console.log(`Параметр \"срок ипотеки\" содержит неправильное значение ${date}\nДопустимое значение - до 31.12.2100 включительно`);  
    return;
  }
  let yesterday = new Date();
  let n = (date.getFullYear() - yesterday.getFullYear()) * 12 + date.getMonth() - yesterday.getMonth();
  if (n < 1) {
    console.log(`Параметр \"срок ипотеки\" содержит неправильное значение ${date}\nМинимально допустимое значение - первое число месяца после сегодняшней даты ${yesterday}`);  
    return;    
  }

  // Ежемесячный платёж
  let totalAmount = S * (P + P / (((1 + P) ** n) - 1));
  // Общая сумма, которую придётся заплатить клиенту
  totalAmount *= n;
  totalAmount = totalAmount.toFixed(2); // здесь преобразование к типу string
  console.log(`Общая сумма, которую придётся заплатить: ${totalAmount}`);
  return Number.parseFloat(totalAmount); // результат должен быть дробным числом
}


function getGreeting(name) {
  let greeting = ((typeof(name) === 'string') && (name !== '')) ? name : 'Аноним';
  greeting = `Привет, мир! Меня зовут ${greeting}`;
  console.log(greeting);
  return greeting;
}