import { appSchema } from '@nozbe/watermelondb';
import { userSchema } from './schema_user';

//estamos concentrando nossos esquemas
const schemas = appSchema({
  version: 1,
  tables: [userSchema],
});

export { schemas };
