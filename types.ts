export interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
}

export interface Product {
    id: number;
    title: string;
    price: number;
    availability: boolean;
}

export interface Order {
    orderId: number;
    userId: number;
    products: Array<{ productId: number; quantity: number; }>; 
    totalAmount: number;
    orderDate: Date;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

export type UserListResponse = ApiResponse<User[]>;
export type ProductDetailResponse = ApiResponse<Product>;
export type OrderListResponse = ApiResponse<Order[]>;
