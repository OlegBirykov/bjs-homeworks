'use strict';

function getAnimalSound(animal) {
  if (animal === undefined)
    return null;
  let sound = animal.sound;
  return sound;
}

function getAverageMark(marks) {
  if (marks === undefined) 
    return;
  if (marks.length === undefined)
    return;
  if (marks.length === 0)
    return 0;
  
  let average = 0;
  for (let i = 0; i < marks.length; i++)
    average += Number.parseInt(marks[i]);
  average /= marks.length;

  let roundedAverage = Math.round(average);
  return roundedAverage;
}

function checkBirthday(birthday) {

  let now = Date.now();
  birthday = new Date(birthday).getTime(); // В задании сказано "записать в переменную birthday"
  let diff = now - birthday;
  let age = diff / 31557600000; // 1000 * 60 * 60 * 24 * 365,25
  return age > 18;
}