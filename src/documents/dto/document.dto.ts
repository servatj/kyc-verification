import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateDocumentDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  kycId: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsOptional()
  @IsString()
  issuedCountry: string;

  @IsNotEmpty()
  @IsUrl()
  url: string;
}

export class UpdateDocumentDto {
  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsUrl()
  url?: string;
}
