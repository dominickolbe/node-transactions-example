export interface User {
  id: number;
  first_name: string;
  ilast_named: string;
}

export interface Merchant {
  id: number;
  display_name: string;
  icon_url: string;
  funny_gif_url: string;
}

export interface Transaction {
  id: number;
  user_id: number;
  merchant_id: number;
  amount: number;
  description: string;
  date: string;
}
