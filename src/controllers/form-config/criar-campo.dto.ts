import { IsNotEmptyString } from "@nestjsi/class-validator/is/is-not-empty-string";

export class CriarCampoDto {
  @IsNotEmptyString()
  name: string;

  @IsNotEmptyString()
  label: string;

  required: boolean;

  @IsNotEmptyString()
  type: string;
}