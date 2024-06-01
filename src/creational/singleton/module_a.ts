import { MyDatabaseClassic } from './db/my-database-classic';
import { MyDatabaseFunction } from './db/my-database-function';
import { MyDatabaseModule } from './db/my-database-module';

const db = MyDatabaseClassic.instance;

db.add({ name: 'John', age: 23 });
db.add({ name: 'Sarah', age: 52 });
db.add({ name: 'Connor', age: 17 });

export { db };

MyDatabaseModule.add({ name: 'John', age: 23 });
MyDatabaseModule.add({ name: 'Sarah', age: 52 });
MyDatabaseModule.add({ name: 'Connor', age: 17 });

export { MyDatabaseModule };

MyDatabaseFunction.add({ name: 'John', age: 23 });
MyDatabaseFunction.add({ name: 'Sarah', age: 52 });
MyDatabaseFunction.add({ name: 'Connor', age: 17 });

export { MyDatabaseFunction };
