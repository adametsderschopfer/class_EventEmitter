# EventEmitter
> Event emitter class for further inheritance

```
class YourClass extends EventEmitter 
{ ... }
```

Use case : 
```
const cls = new YourClass();

cls.on('EventName', (str) => `My EventEmitter ${str}`);
cls.emit('EventName', 'for browser')
```
