import { ApiProperty } from "@nestjs/swagger";

export class MintBookDTO {
    @ApiProperty({ type: String, required: true, default: "Empty URI" })
    URI: string;
    @ApiProperty({ type: String, required: true, default: "Empty Metadata" })
    metadata: string[];
    @ApiProperty({ type: Boolean, required: true, default: false })
    receipt_: boolean;
}