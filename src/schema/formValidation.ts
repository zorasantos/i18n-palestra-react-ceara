import { z } from 'zod';

export const formSchema = z.object({
  first_name: z.string({ required_error: 'Please enter your first name'}),
  last_name: z.string({ required_error: 'Please enter your last name'}),
  address: z.string({ required_error: 'Please enter your address'}),
  phone: z.string({ required_error: 'Please enter your phone number'}),
  city: z.string({ required_error: 'Please enter your city'}),
  email: z.string({ required_error: 'Please enter your email'}).email('Please enter a valid email').trim(),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  confirm_password: z.string({ required_error: 'Please confirm your password'}),
}).refine((data) => data.password === data.confirm_password, {
  message: "Passwords don't match",
  path: ["confirm_password"],
})