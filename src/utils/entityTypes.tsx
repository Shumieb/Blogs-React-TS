export interface blogType {
  blogId: number;
  title: string;
  description: string;
  blogText: string;
  image: string;
  featured: number;
  userId: number;
  categoryId: number;
}

export interface userType {
  userId: number;
  name: string;
  userName: string;
  biography: string;
  image: string;
  type: string;
}
