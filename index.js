// JAN 01 1970. (UTC)
//2022-04-13T15:10:17.314Z

const date = new Date();
date.setUTCDate(1);
date.setUTCFullYear(2000);
date.setUTCMonth(0);
date.setUTCHours(0);
date.setUTCMinutes(0);
date.setUTCSeconds(0);
date.setUTCMilliseconds(0);
// 04-12-2022
const date2 =new Date(946684800000);
const date3 =new Date(2000,0,1,2,0,0,0);
console.log(date.toISOString(), date2.toISOString(), date.getTime() === date2.getTime() );


console.log(date.toLocaleDateString('ua'));
