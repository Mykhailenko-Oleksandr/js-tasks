/*
 *  Метод set.timeOut(callback, delay, args)
 */
// console.log('before');

// setTimeout(() => {
//     console.log('timer');

// }, 2000);

// console.log('after');  // // before, after, timer


///////////////////////////////////////////////////////////


// console.log('before');

// setTimeout(() => {
//     console.log('timer');

// }, 2000);

// setTimeout(() => {
//     console.log('timer 2');

// }, 1500);

// console.log('after'); // // before, after, timer 2, timer


///////////////////////////////////////////////////////////


// setTimeout(() => {
//     console.log('timer');

// }, 2000);

// setTimeout(() => {
//     console.log('timer 2');

// }, 2000); // //  timer, timer 2




/*
 * Очищення таймаута за допомогою clearTimeout(timeouyId)
 */


// const logger = (time) => {
//     console.log(`logger, ${time}`);
// }

// const timerId = setTimeout(logger, 2000, '2s')

// clearTimeout(timerId)





/*
 *  Метод setInterval(callback, delay, args)
 */


// setInterval((time) => {
//     console.log('timer', time);
// }, 2000, '2s');





/*
 * Очищення таймаута за допомогою clearInterval(intervalId)
 */


// const timerId = setInterval(() => {
//     console.log('timer');
// }, 2000)

// clearInterval(timerId)





/*
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */


// const NOTIFICATION_DELAY = 3000;

// const nitification = document.querySelector('.js-alert');
// let timerId = null;

// nitification.addEventListener('click', onNotificationClick)

// showNotification();

// function onNotificationClick() {
//     hideNotification();
//     clearTimeout(timerId);
// }

// function showNotification() {
//     hideNotification();

//   timerId = setTimeout(() => {
//         console.log('hidden');

//         nitification.classList.remove('is-visible')
//     }, NOTIFICATION_DELAY)
// }

// function hideNotification() {
//     nitification.classList.add('is-visible');
// }




//////////   Date and time

/*
- Створення
- Unix-час
- Методи
- Різниця часу
- Date.now()
*/


// const currentDate = new Date(3780897);

// console.dir(currentDate);

// const day = currentDate.getDay();
// const date = currentDate.getDate();
// const month = currentDate.getMonth();
// const year = currentDate.getFullYear();

// currentDate.setFullYear(2007);

// console.log(currentDate.getTime());


// console.log(Date.now());



// const startTime = Date.now();

// setTimeout(() => {
//     const currentTime = Date.now();

//     console.log(currentTime - startTime);
// }, 2000)



/*
* Напишемо клас Timer, який буде
* запускати і зупиняти відлік чісу
*/


const startBtn = document.querySelector('button[data-action-start]')
const stopBtn = document.querySelector('button[data-action-stop]')
const clockface = document.querySelector('.clockface');

class Timer {

    constructor({ onTick }) {
        this.onTick = onTick;
        this.isActive = false;
        this.intervalId = null;

        this.init();
    }

    init() {
        const time = this.getTimeComponent(0);
        this.onTick(time);
    }

    start() {
        if (this.isActive) {
            return;
        }

        this.isActive = true;
        const startTime = Date.now();

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const time = this.getTimeComponent(deltaTime);

            this.onTick(time);
        }, 1000)
    }

    stop() {
        clearInterval(this.intervalId);
        this.init();
        this.isActive = false;
    }

    getTimeComponent(time) {
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { hours, mins, secs }
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }

}


const time = new Timer({ onTick: updateClockface });

startBtn.addEventListener('click', time.start.bind(time))
stopBtn.addEventListener('click', time.stop.bind(time))

function updateClockface({ hours, mins, secs }) {
    clockface.textContent = `${hours}:${mins}:${secs}`;
}
