/* eslint-disable prettier/prettier */
//form.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

const config = [
  {
    name: 'name',
    label: 'Nome',
    required: true,
    type: 'varchar',
  },
  {
    name: 'age',
    label: 'Idade',
    required: true,
    type: 'integer',
  },
];

@Entity({ name: 'form_data' })
export class FormDataEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  constructor(config: any) {
    this.id = uuid();

    config.forEach((column) => {
      // Create a property for each column
      Object.defineProperty(this, column.name, {
        writable: true,
        enumerable: true,
        value: '',
      });

      Column({
        name: column.name,
        type: column.type,
        nullable: !column.required,
      })(this, column.name);
    });
  }
}

export const FormData = new FormDataEntity(config);
