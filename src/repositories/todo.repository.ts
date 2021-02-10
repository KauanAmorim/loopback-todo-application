import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Todo, TodoRelations} from '../models';

export class TodoRepository extends DefaultCrudRepository<Todo, typeof Todo.prototype.id, TodoRelations> { // extendo estrutura da model
  constructor(@inject('datasources.db') dataSource: DbDataSource,) { // inseção de dependências do datasource
    super(Todo, dataSource);
  }
}
