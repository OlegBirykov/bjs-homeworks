'use strict';

class AlarmClock {
  
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }
  
  addClock(time, callback, id) {
    if (id === undefined) {
      console.error('Не задан идентификатор таймера');
      return;
    }
    if (this.alarmCollection.some(item => item.id === id)) {
      console.error('Таймер с заданным идентификатором уже существует');
      return;
    }
    this.alarmCollection.push({ id, time, callback });
  }

  removeClock(id) {
    const oldLength = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
    return this.alarmCollection.length !== oldLength;
  }

  getCurrentFormattedTime(min = 0) {
    return new Date(Date.now() + min * 60000).toLocaleTimeString().substr(0,5);
  }
  
  start() { 
 
    const checkClock = ({ id, time, callback }) => {
      if (time === this.getCurrentFormattedTime()) //this внутри function не определён, поэтому нужна стрелочная функция
        callback();
    }
    
    if (this.timerId === null)
      this.timerId = setInterval(() => this.alarmCollection.forEach(item => checkClock(item)), 1000);
  }
 
  stop() {
    if (this.timerID !== null) {
      clearInterval(this.timerID);
      this.timerId = null;
    }
  }
 
  printAlarms() {
    console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
    this.alarmCollection.forEach(item => console.log(`Будильник №${item.id} заведён на ${item.time}`));
  }
  
  clearAlarms() {
    this.stop;
    this.alarmCollection = [];
  }
  
}

function testCase() {
  const phoneAlarm = new AlarmClock;    
  
  phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log('Скоро спать'), 1);
  phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(1), 
                      () => { console.log('Пора готовиться ко сну'); 
                              phoneAlarm.removeClock(2); 
                            }, 
                      2);
  phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(1), () => console.log('Иди умываться!'));    
  phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(2), 
                      () => { console.log('Иди спать, завтра рано на работу!'); 
                              phoneAlarm.clearAlarms(); 
                              phoneAlarm.printAlarms(); 
                            }, 
                      3);  
  phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(2), () => console.log('Иди спать, завтра рано на работу!'), 1);  
  
  phoneAlarm.printAlarms();
  
  phoneAlarm.start();
}

testCase();
