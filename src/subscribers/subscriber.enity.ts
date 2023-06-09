import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'; 
@Entity()
class Subscriber {
  @PrimaryGeneratedColumn()
  public id: number;
 
  @Column({ unique: true })
  public email: string;
}
 
export default Subscriber;
