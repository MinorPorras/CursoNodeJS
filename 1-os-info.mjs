import { platform, version, arch, cpus as _cpus, freemem, totalmem, uptime } from 'node:os';
console.log("Información del sistema operativo");
console.log("_____________________________________");
console.log(`Nombre del sistema operativo: ${platform()}`);
console.log(`Versión del sistema operativo: ${version()}`);
console.log(`Arquitectura del sistema operativo: ${arch()}`);
const cpus = _cpus();
console.log('CPUs:', cpus);
console.log(`Memoria libre: ${freemem / 1024 / 1024}Mb`);
//Se divide entre 1024 2 veces para pasarlo a megas
console.log(`Memoria Total: ${totalmem / 1024 / 1024}Mb`);
console.log(`Tiempo encendido: ${uptime() / 60 / 60}`) //Pasado a horas




