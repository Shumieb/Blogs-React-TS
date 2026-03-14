export interface blogType {
  blogId: number;
  title: string;
  description: string;
  content: string;
  image: string;
  featured: boolean;
  userId: number;
  userName: string;
  categoryId: number;
  categoryName: string;
  likes: number;
}

export interface userType {
  userId: number;
  name: string;
  userName: string;
  biography: string;
  image: string;
  type: string;
}

export interface categoryType {
  categoryId: number;
  name: string;
  description: string;
  image: string;
}
