import Character from './Character';

const c = new Character('');
console.log(c);
const e = c.energy;
e.amount -= 5;
console.log(c);