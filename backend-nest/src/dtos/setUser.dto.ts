import { ApiProperty } from "@nestjs/swagger";

export class SetUserDTO {
    @ApiProperty({ type: Number, required: true, default: 0 })
    tokenID: number;
    @ApiProperty({ type: String, required: true, default: "0x0000000000000000000000000000000000000000" })
    user: string;
    @ApiProperty({ type: Number, required: true, default: 0 })
    expires: number;
    @ApiProperty({ type: Boolean, required: true, default: false })
    receipt_: boolean;
}