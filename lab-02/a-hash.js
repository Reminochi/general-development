'use strict';

const phonebook = {
    'Marcus Aurelius': '+380445554433',
    'Julius Caesar': '+380991112233',
    'Octavianus Augustus': '+380992223344'
};

const findPhoneByName = (name) => {
    return phonebook[name]; 
};

console.dir(findPhoneByName('Marcus Aurelius'));