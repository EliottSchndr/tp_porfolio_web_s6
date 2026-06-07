import { z } from 'zod';

export const contactSchema = z.object({
    name: z
        .string()
        .min(2, 'Le nom doit contenir au moins 2 caractères.')
        .max(50, 'Le nom ne peut pas dépasser 50 caractères.'),
    email: z
        .string()
        .email('Adresse email invalide.'),
    message: z
        .string()
        .min(10, 'Le message doit contenir au moins 10 caractères.')
        .max(500, 'Le message ne peut pas dépasser 500 caractères.'),
});
