import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('alumnos')
export class AlumnosEntity {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string

    @Column({nullable: false, type: 'varchar', length: 50})
    nombre: string

    @Column({nullable: false, type: 'int'})
    edad: number

    @Column({nullable: false, type: 'date'})
    fecha_nacimiento: Date

    @Column({nullable: false, type: 'varchar', length: 255})
    direccion: string

    @Column({nullable: false, type: 'varchar', length: 20})
    telefono: string

    @Column({nullable: false, type: 'varchar', length: 255})
    email: string
}