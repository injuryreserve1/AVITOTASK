export type Status = "pending" | "approved" | "rejected";
export type Priority = "urgent" | "normal";

export interface Data {
  ads: Advert[];
  pagination: PaginationData;
}

interface PaginationData {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface Advert {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  date: string;
  priority: Priority;
  status: Status;
  createdAt: string;
}
