import api from './api';

export interface Program {
    id: string;
    name: { en: string; rw: string };
    description: { en: string; rw: string };
    coverImage?: string;
    fundsAllocated: number;
    fundsUtilized: number;
    budget: number;
    status: string;
    metadata?: any;
    createdAt?: string;
    updatedAt?: string;
}

export const ProgramsService = {
    getAll: async () => {
        const response = await api.get<Program[]>('/programs');
        return response.data;
    },

    getOne: async (id: string) => {
        const response = await api.get<Program>(`/programs/${id}`);
        return response.data;
    },

    create: async (data: Partial<Program>) => {
        const response = await api.post<Program>('/programs', data);
        return response.data;
    },

    update: async (id: string, data: Partial<Program>) => {
        const response = await api.put<Program>(`/programs/${id}`, data);
        return response.data;
    },

    delete: async (id: string) => {
        return api.delete(`/programs/${id}`);
    }
};
