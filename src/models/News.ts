import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
class News {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    content: string

    @Column('date')
    created_at: Date
}

export default News
