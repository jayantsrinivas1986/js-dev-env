import './index.css';

import numeral from 'numeral';

/*eslint-disable no-console*/
const cou=numeral(1000).format('$0,0.00');
//debugger;

console.log(`my numeral value ${cou}`);
