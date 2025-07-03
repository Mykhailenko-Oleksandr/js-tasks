// Експорт і імпорт

// Експорт дефолтний

function add(a, b) {
    return a + b;
}

export default add;



/////////////////////////////////

// Iмпорт дефолтний

import add from './js'





////////////////////////////////////

// Іменований експорт

export const user = "Alice";

export function logger() {
    console.log('logger');
}


// Іменований імпорт


import { user as userName, logger } from './js'

// V //
// V //

import * as halper from './js' // імпортувати все з файла

