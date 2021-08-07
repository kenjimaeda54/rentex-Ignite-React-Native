import { Database } from '@nozbe/watermelondb';
import SqliteAdaptar from '@nozbe/watermelondb/adapters/sqlite';
import { schemas } from './schema';
import { User } from './model/user';

const adapter = new SqliteAdaptar({
  schema: schemas,
});

export const dataBase = new Database({
  adapter,
  modelClasses: [User],
});
