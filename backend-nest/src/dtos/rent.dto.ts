import { ApiProperty } from "@nestjs/swagger";

export class RentDTO {
    @ApiProperty({ type: String, required: true, default: "" })
    URI: string;
    @ApiProperty({ type: String, required: true, default: [] })
    metadata: string[];
    @ApiProperty({ type: Number, required: true, default: 0 })
    expires: number;
}