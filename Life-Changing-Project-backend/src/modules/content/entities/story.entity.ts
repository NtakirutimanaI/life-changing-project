import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('stories')
export class Story {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  slug: string; // for url

  @Column('text')
  content: string; // html content

  @Column({ nullable: true })
  image_url: string;

  @Column({ default: 'story' }) // 'story', 'blog', 'news'
  type: string;

  @Column({ nullable: true })
  author: string;

  @Column({ default: false })
  is_published: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}