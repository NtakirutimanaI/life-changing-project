import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PageContent } from './entities/page-content.entity';
import { Story } from './entities/story.entity';

@Injectable()
export class ContentService {
    constructor(
        @InjectRepository(PageContent)
        private pageContentRepository: Repository<PageContent>,
        @InjectRepository(Story)
        private storyRepository: Repository<Story>,
    ) { }

    // Page Content Methods
    async getPageContent(page: string) {
        return this.pageContentRepository.find({ where: { page } });
    }

    async getPageSection(page: string, section: string) {
        return this.pageContentRepository.find({ where: { page, section } });
    }

    async updateContent(page: string, section: string, key: string, value: string) {
        let content = await this.pageContentRepository.findOne({ where: { page, section, key } });
        if (!content) {
            content = this.pageContentRepository.create({ page, section, key, value });
        } else {
            content.value = value;
        }
        return this.pageContentRepository.save(content);
    }

    // Story Methods
    async getStories(type: string = 'story') {
        return this.storyRepository.find({ where: { type }, order: { createdAt: 'DESC' } });
    }

    async createStory(storyData: Partial<Story>) {
        const story = this.storyRepository.create(storyData);
        return this.storyRepository.save(story);
    }

    async updateStory(id: string, storyData: Partial<Story>) {
        await this.storyRepository.update(id, storyData);
        return this.storyRepository.findOne({ where: { id } });
    }

    async deleteStory(id: string) {
        return this.storyRepository.delete(id);
    }
}
