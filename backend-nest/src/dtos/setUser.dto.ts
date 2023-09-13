import { ApiProperty } from "@nestjs/swagger";

export class SetUserDTO {
    @ApiProperty({ type: Number, required: true, default: "0" })
    tokenID: number;
    @ApiProperty({ type: String, required: true, default: "Zero Address" })
    user: string;
    @ApiProperty({ type: Number, required: true, default: "0" })
    expires: number;
}