import { Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';
import { DocumentRepository } from './adapters/repositories/document.repository';

@Module({
  controllers: [DocumentController],
  providers: [DocumentService, DocumentRepository],
})
export class DocumentModule {}
