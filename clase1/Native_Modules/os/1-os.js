const os = require('node:os');
console.log("Información del sistema operativo");
console.log("_____________________________________");
console.log(`Nombre del sistema operativo: ${os.platform()}`);
console.log(`Versión del sistema operativo: ${os.version()}`);
console.log(`Arquitectura del sistema operativo: ${os.arch()}`);
const cpus = os.cpus();
console.log('CPUs:', cpus);
console.log(`Memoria libre: ${os.freemem / 1024 / 1024}Mb`);
//Se divide entre 1024 2 veces para pasarlo a megas
console.log(`Memoria Total: ${os.totalmem / 1024 / 1024}Mb`);
console.log(`Tiempo encendido: ${os.uptime() / 60 / 60}`) //Pasado a horas




