import './index.css';

import numeral from 'numeral';

const coursevalue = numeral(1000).format('$0,0.00');
debugger;
console.log(`I would pay ${coursevalue} for this awesome course!`);
