export class Course {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    code: string;
    duration: number;
    rating: number;
    releaseDate: string;
    description: string;

    constructor(id: number, name: string, imageUrl: string, price: number, code: string, duration: number, rating: number, releaseDate: string, description: string) {
        this.id = 0,
        this.name = '',
        this.imageUrl = '',
        this.price = 0,
        this.code = '',
        this.duration = 0,
        this.duration = 0,
        this.rating = 0,
        this.releaseDate = '',
        this.description = ''
    }
}