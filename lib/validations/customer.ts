import { z } from "zod";

export const customerSchema = z.object({
  business_name: z
    .string()
    .min(2, "Business name is required"),

  contact_person: z.string().optional(),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits"),

  email: z
    .string()
    .email("Invalid email")
    .optional()
    .or(z.literal("")),

  gstin: z.string().optional(),

  billing_address: z.string().optional(),

  shipping_address: z.string().optional(),

  city: z.string().optional(),

  state: z.string().optional(),

  pincode: z.string().optional(),
});

export type CustomerFormValues = z.infer<typeof customerSchema>;