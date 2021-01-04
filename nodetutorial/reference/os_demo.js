const os = require('os');

console.log(os.platform());
// win32

console.log(os.release());

// 10.0.18363

console.log(os.cpus());
/*
[
  {
    model: 'Intel(R) Core(TM) i5-4440 CPU @ 3.10GHz',
    speed: 3093,
    times: {
      user: 1362906,
      nice: 0,
      sys: 1566500,
      idle: 79844765,
      irq: 277125
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-4440 CPU @ 3.10GHz',
    speed: 3093,
    times: {
      user: 2023000,
      nice: 0,
      sys: 1122671,
      idle: 79628265,
      irq: 21140
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-4440 CPU @ 3.10GHz',
    speed: 3093,
    times: {
      user: 1676953,
      nice: 0,
      sys: 1279984,
      idle: 79817000,
      irq: 20265
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-4440 CPU @ 3.10GHz',
    speed: 3093,
    times: {
      user: 1543578,
      nice: 0,
      sys: 1000078,
      idle: 80230281,
      irq: 17703
    }
  }
]
*/

console.log(os.freemem());

// 2503512064

console.log(os.totalmem());

// 8390193152

console.log(os.homedir());

// C:\Users\richard

console.log(os.arch());

// x64

console.log(os.uptime());

// 85071