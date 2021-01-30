import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('examples')
class Example {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  message: string;
}

export default Example;
