import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
    constructor(private readonly contentService: ContentService) { }

    // Page Content
    @Get('page/:page')
    async getPageContent(@Param('page') page: string) {
        return this.contentService.getPageContent(page);
    }

    @Get('page/:page/:section')
    async getPageSection(@Param('page') page: string, @Param('section') section: string) {
        return this.contentService.getPageSection(page, section);
    }

    @Put('page/:page/:section/:key')
    async updateContent(
        @Param('page') page: string,
        @Param('section') section: string,
        @Param('key') key: string,
        @Body('value') value: string,
    ) {
        return this.contentService.updateContent(page, section, key, value);
    }

    // Stories
    @Get('stories')
    async getStories(@Query('type') type: string) {
        return this.contentService.getStories(type);
    }

    @Post('stories')
    async createStory(@Body() storyData: any) {
        return this.contentService.createStory(storyData);
    }

    @Put('stories/:id')
    async updateStory(@Param('id') id: string, @Body() storyData: any) {
        return this.contentService.updateStory(id, storyData);
    }

    @Delete('stories/:id')
    async deleteStory(@Param('id') id: string) {
        return this.contentService.deleteStory(id);
    }
}
