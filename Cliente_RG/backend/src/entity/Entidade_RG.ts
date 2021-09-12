import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('Entidade_RG')
export class Entidade_RG {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    nome_mae: string

    @Column()
    nome_pai: string

    @Column()
    cpf: string

    @Column()
    cidade: string

    @Column()
    cep: string

    @Column({
        default: false
    })
    solteiro: boolean

    @Column()
    data_nasc: string

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    updated_at: Date

}