import { tableSchema } from '@nozbe/watermelondb';

//em model construimos objeto que vai ser passado entre aplicação e o banco de dados.
//aqui construimos literalmente as colunas do banco de dados
const userSchema = tableSchema({
  name: 'users',
  columns: [
    {
      name: 'user_id',
      type: 'string',
    },
    {
      name: 'email',
      type: 'string',
    },
    {
      name: 'avatar',
      type: 'string',
    },
    {
      name: 'token',
      type: 'string',
    },
    {
      name: 'driver_license',
      type: 'string',
    },
    {
      name: 'name',
      type: 'string',
    },
  ],
});

export { userSchema };
