import { MyDatabaseClassic } from './db/my-database-classic';
import { MyDatabaseModule } from './db/my-database-module';
import { MyDatabaseFunction } from './db/my-database-function';
import {
  db as MyDatabaseClassicFromModuleA,
  MyDatabaseFunction as MyDatabaseFunctionFromModuleA,
  MyDatabaseModule as MyDatabaseModuleFromModuleA,
} from './module_a';
const db = MyDatabaseClassic.instance;

db.add({ name: 'Arti', age: 23 });
db.add({ name: 'Johne', age: 52 });
db.add({ name: 'Cash', age: 17 });
db.show();
console.log(MyDatabaseClassicFromModuleA === db);

console.log(MyDatabaseModuleFromModuleA === MyDatabaseModule);

console.log(MyDatabaseFunctionFromModuleA === MyDatabaseFunction);
