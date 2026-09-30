'use strict';

const phonebook = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Julius Caesar', phone: '+380991112233' },
    { name: 'Octavianus Augustus', phone: '+380992223344' }
];

const findPhoneByName = (name) => {
    for (const person of phonebook) {
        if (person.name === name) {
            return person.phone;
        }
    }
    return 'Not found';
};

console.dir(findPhoneByName('Marcus Aurelius'));