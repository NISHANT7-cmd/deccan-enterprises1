export interface Customer {
  id?: string;

  customer_code?: string;

  business_name: string;

  contact_person?: string;

  phone: string;

  email?: string;

  gstin?: string;

  billing_address?: string;

  shipping_address?: string;

  city?: string;

  state?: string;

  pincode?: string;

  created_at?: string;
}