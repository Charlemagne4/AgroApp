import z from 'zod';

// Register Form Schema
export const registerSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters.')
    .max(20, 'Username must be at most 20 characters.')
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      'Username can only contain letters, numbers, underscores, and hyphens.',
    ),

  email: z
    .string()
    .email('Please enter a valid email address.')
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Email must be a real address (e.g. you@example.com).',
    )
    .refine((email) => {
      const disposableDomains = [
        'mailinator.com',
        'tempmail.com',
        'guerrillamail.com',
        '10minutemail.com',
        'yopmail.com',
      ];
      const domain = email.split('@')[1]?.toLowerCase();
      return !disposableDomains.includes(domain ?? '');
    }, 'Disposable email addresses are not allowed.'),

  password: z
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .max(64, 'Password must be at most 64 characters.')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .regex(/[0-9]/, 'Password must contain at least one number.')
    .regex(/[^a-zA-Z0-9]/, 'Password must contain at least one special character.'),
});

export const registerFormSchema = registerSchema
  .extend({
    confirmPassword: z.string().min(1, 'Please confirm your password.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });

// Login Form Schema
export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),

  password: z.string().min(1, 'Password is required.'),
});
