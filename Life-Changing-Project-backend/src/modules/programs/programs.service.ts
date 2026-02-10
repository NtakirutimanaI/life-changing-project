import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Program } from './entities/program.entity';

@Injectable()
export class ProgramsService {
    constructor(
        @InjectRepository(Program)
        private programRepository: Repository<Program>,
    ) { }

    async findAll() {
        return this.programRepository.find();
    }

    async findOne(id: string) {
        return this.programRepository.findOne({ where: { id } });
    }

    async create(program: Partial<Program>) {
        const newProgram = this.programRepository.create(program);
        return this.programRepository.save(newProgram);
    }

    async update(id: string, program: Partial<Program>) {
        await this.programRepository.update(id, program);
        return this.findOne(id);
    }

    async remove(id: string) {
        return this.programRepository.delete(id);
    }
}
