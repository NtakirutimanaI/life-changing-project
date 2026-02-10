import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('page_content')
export class PageContent {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    page: string; // e.g., 'home', 'about', 'contact'

    @Column()
    section: string; // e.g., 'hero', 'mission', 'contact_info'

    @Column()
    key: string; // e.g., 'title', 'subtitle', 'image_url'

    @Column('text')
    value: string;

    @Column({ default: 'text' })
    type: string; // 'text', 'image', 'html'

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
