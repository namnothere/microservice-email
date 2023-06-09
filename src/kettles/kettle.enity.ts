import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'; 
@Entity()
class Kettle {
  @PrimaryGeneratedColumn()
  public id: number;
 
  @Column()
  public count: number;

  @CreateDateColumn({type: 'timestamp'})
  public createdAt: Date;

  @UpdateDateColumn({type: 'timestamp'})
  public updatedAt: Date;
}
 
export default Kettle;
