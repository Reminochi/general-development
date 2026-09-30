'use strict';

const fn = () => {
    const objConst = { name: 'Mao Zedong' };
    let objLet = { name: 'Karl Marx' };

    objConst.name = 'Marcus Aurelius';
    objLet.name = 'Julius Caesar';
    
    // objConst = { name: 'Joseph Stalin' }; 
    // Error: const doesn't allow reassignment of the variable

    objLet = { name: 'Vladimir Lenin' }; 
    // It works because objLet is declared with let, which allows reassignment of the variable.

    console.dir({ objConst, objLet });
};

fn();