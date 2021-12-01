import { Column, DataType, PrimaryKey, Table, Model } from 'sequelize-typescript';


@Table({
  tableName: 'recursos',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Recurso extends Model {
  
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
      type: DataType.STRING,
      allowNull: false,
  })
  nome: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  cpf: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  cargo: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  dataAlocacao: Date;
}
