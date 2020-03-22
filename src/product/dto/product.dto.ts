export class CreateProductDTO {
    readonly name: string;
    readonly description: string;
    readonly imageURL: string;
    readonly price: number;
    readonly user_id: string;
    readonly createdAt: Date;
}