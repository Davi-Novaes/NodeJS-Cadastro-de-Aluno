import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('controller_cadas')
export  class cadastro{


 
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:100})
    name: string;
  
    @Column({length: 100})
    ra: string;

    @Column({length: 100})
    endereco: string;

    @Column({length: 100})
    idade: string;

    @Column({
        default: false
    })
    matricula: boolean

    @CreateDateColumn()
    dt_nasc: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

