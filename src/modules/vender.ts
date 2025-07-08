import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import "reflect-metadata"


@Entity()
export class Vendor extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column({ default: false })
  is_approved: boolean
}
