import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import { PageContent } from './entities/page-content.entity';
import { Story } from './entities/story.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PageContent, Story])],
  controllers: [ContentController],
  providers: [ContentService],
  exports: [ContentService]
})
export class ContentModule { }
