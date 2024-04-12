import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { KYCService } from './kyc.service';
import { KYC } from './entities/kyc.entity';

@Controller('kyc')
export class KYCController {
  constructor(private kycService: KYCService) {}

  @Post('/submit')
  submitKYC(@Body() kycData: any): Promise<KYC> {
    return this.kycService.submitKYC(kycData.userId, kycData);
  }

  @Get('/status/:userId')
  checkKYCStatus(@Param('userId') userId: string): Promise<string> {
    return this.kycService.checkKYCStatus(userId);
  }
}
