//   Масив об'єктів

// - Перебор масива
// - Пошук об'єкта за значенням властивості
// - Колекція значень властивості

// const friends = [{
//     name: "Ross", online: false
// }, {
//     name: "Andre", online: false
// },
// {
//     name: "Alice", online: true
// },
// {
//     name: "Rachel", online: false
// },
// {
//     name: "Joey", online: true
// },
// {
//     name: "Monica", online: true
// }]


// Пошук друга за іменем

// function findByName(arr, userName) {
//     for (const item of arr) {
//         if (item.name.toLowerCase() === userName.toLowerCase()) {
//             return item;
//         }
//     }
//     return "Not found";
// }
// console.log(findByName(friends, 'Joey'));


// Отримуємо імена всіх друзів

// function getAllNames(arr) {
//     const names = [];
//     for (const item of arr) {
//         names.push(item.name);
//     }
//     return names;
// }
// console.log(getAllNames(friends));


// Отримуємо імена тільки тих друзів які зараз онлайн

// function getOnline(arr) {
//     const online = [];
//     for (const item of arr) {
//         if (item.online === true) {
//             online.push(item)
//         }
//     }
//     return online;
// }
// console.log(getOnline(friends));



// - Методи об'єкту
// - Доступ дор властивостейоб'єкта через this
// - Зміна за посиланням

// const playlist = {
//     name: "My playlist",
//     raiting: 5,
//     tracks: ["track-1", "track-2", "track-3"],
//     changeName(newName) {
//         this.name = newName;
//     },
//     addTrack(newTrack) {
//         this.tracks.push(newTrack);
//     },
//     getName() {
//         return this.name;
//     }
// }
// playlist.changeName("New playlist");


// const playlist2 = {
//     name: "Sport playlist",
//     rating: 4,
//     tracks: ["track-4", "track-5"],
// }
// playlist2.changeName = playlist.changeName;
// playlist2.addTrack = playlist.addTrack;




//   Синтаксис spread i rest

// - Залишкові параметри
// - Збір частини аргументів
// - Входження параметрів
// - Створення масиву
// - Створення об'єкта


// function foo(a, b, ...rest) {
// }

// foo(1, 2, 3);
// foo(1, 2, 3, 4, 5);



// const numbers = [
//     1000,
//     ...[1, 2, 3,],
//     2000,
//     ...[4, 5, 6,],
//     3000
// ]


// Створення масиву і тип за посиланням

// const a = [1, 2, 3];
// const b = [...a];



// Створення об'єкта

// const objA = { x: 1, y: 2 };
// const objB = { x: 0, q: 3 };
// const objC = {
//     ...objA,
//     x: 10,
//     ...objB,
//     y: 20
// }




// ------------------------------------ 4

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
  };
  
  
  
  
  
  /*
   * Кожна транзакція це об'єкт із властивостями: id, type та amount
   */
  
  const account = {
    // Поточний баланс рахунку
    balance: 0,
  
    // Історія транзакцій
    transactions: [],
  
  
  
    /*
     * Метод створює та повертає об'єкт транзакції.
     * Приймає суму та тип транзакції.
     */
    createTransaction(amount, type) {
      const obj = { id: amount, amount, type };
      return obj;
    },
  
  
  
  
  
    /*
     * Метод, що відповідає за додавання суми до балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його до історії транзакцій
     */
    deposit(amount) {
      this.balance += amount;
      const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
      this.transactions.push(transaction);
    },
  
  
  
  
  
    /*
     * Метод, що відповідає за зняття суми з балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його до історії транзакцій.
     *
     * Якщо amount більше ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливе, недостатньо коштів.
     */
    withdraw(amount) {
      if(this.balance < amount) {
        console.log("Недостатньок коштів");
        return;
      }
  
      this.balance -= amount;
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(transaction);
    },
  
  
  
  
  
    /*
     * Метод повертає поточний баланс
     */
    getBalance() {
      return this.balance;
    },
  
  
  
  
  
    /*
     * Метод шукає та повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {
      // const this = account
      for(const item of this.transactions) {
        if(item.id === id) {
          return item;
        }
      }
      return "Not found";
    },
  
  
  
  
  
    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {
      let sum = 0;
      for(const item of this.transactions) {
        if(item.type === type) {
          sum += item.amount;
        }
      }
  
      return sum;
    },
  };
  
    
  account.deposit(200);
  account.deposit(400);
  
  account.withdraw(100);
  
  // console.log(account.getTransactionDetails(100))
  
  // console.log(account.getBalance());
  // console.log(account.getTransactionTotal(Transaction.WITHDRAW));
  
  // console.log(account);
