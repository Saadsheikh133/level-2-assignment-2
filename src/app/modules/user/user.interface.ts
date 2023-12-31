export type Address = {
    street: string;
    city: string;
    country: string
};

export type Order = {
    productName: string;
    price: number;
    quantity: number
};

export type User = {
    userId: number;
    userName: string;
    password: string;
    fullName: {
        firstName: string;
        lastName: string;
    };
    age: number;
    email: string;
    isActive: boolean;
    hobbies: string[];
    address: Address;
    orders?: Order[];
}