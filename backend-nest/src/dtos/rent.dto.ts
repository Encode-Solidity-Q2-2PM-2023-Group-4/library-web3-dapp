import { ApiProperty } from "@nestjs/swagger";

export class RentDTO {
    @ApiProperty({ type: String, required: true, default: "Empty URI" })
    URI: string;
    @ApiProperty({ type: String, required: true, default: "Empty Metadata" })
    metadata: string[];
    @ApiProperty({ type: String, required: true, default: "0x0000000000000000000000000000000000000000" })
    user: string;
    @ApiProperty({ type: Number, required: true, default: 0 })
    expires: number;
}