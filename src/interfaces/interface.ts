import { ApiProperty } from "@nestjs/swagger";

export class Atualizarcadastro{
    @ApiProperty()
    id:number;

    @ApiProperty()
    nome:string;

    @ApiProperty()
    cpf:number;

    

}