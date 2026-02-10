import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProgramsService } from './programs.service';

@Controller('programs')
export class ProgramsController {
    constructor(private readonly programsService: ProgramsService) { }

    @Get()
    findAll() {
        return this.programsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.programsService.findOne(id);
    }

    @Post()
    create(@Body() createProgramDto: any) {
        return this.programsService.create(createProgramDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateProgramDto: any) {
        return this.programsService.update(id, updateProgramDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.programsService.remove(id);
    }
}
