import { Controller, Post, Get, Param, Body, Put, ValidationPipe } from '@nestjs/common';
import { DocumentService } from './document.service';
import { CreateDocumentDto, UpdateDocumentDto } from './dto/document.dto';
import { Document } from './entities/document.entity';

@Controller('documents')
export class DocumentController {
  constructor(private documentService: DocumentService) {}

  @Post()
  createDocument(
    @Body(new ValidationPipe({ transform: true }))
    createDocumentDto: CreateDocumentDto,
  ): Promise<Document> {
    return this.documentService.createDocument(createDocumentDto);
  }

  @Put(':id')
  updateDocument(
    @Param('id') id: string,
    @Body(new ValidationPipe({ transform: true, skipMissingProperties: true }))
    updateDocumentDto: UpdateDocumentDto,
  ): Promise<Document> {
    return this.documentService.updateDocument(id, updateDocumentDto);
  }

  @Get(':id')
  getDocumentById(@Param('id') id: string): Promise<Document> {
    return this.documentService.getDocumentById(id);
  }
}
