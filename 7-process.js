//process

//argumentos de entrada
console.log(process.argv); // [ 'node', 'ruta del archivo', 'argumento1', 'argumento2' ]

//Controlar el proceso y su salida
//process.exit(0); // 0 = sin errores, 1 = con errores

//controlar eventos del proceso
process.on("exit", (code) => {
  console.log(`El proceso se ha cerrado con el código ${code}`);
});

console.log(process.pid); // id del proceso
console.log(process.versions); // version de node, v8, v10, etc
console.log(process.platform); // plataforma en la que se esta ejecutando el proceso (win32, linux, etc)
console.log(process.arch); // arquitectura del procesador (x64, x32, etc)
console.log(process.memoryUsage()); // uso de memoria del proceso (rss, heapTotal, heapUsed, external)
console.log(process.uptime()); // tiempo de actividad del proceso en segundos

//current working directory
console.log(process.cwd()); // directorio de trabajo actual

//variables de entorno
console.log(process.env.NODE_ENV); // variables de entorno del sistema operativo