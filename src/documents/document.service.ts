import { Injectable } from '@nestjs/common';
import { DocumentRepository } from './adapters/repositories/document.repository';
import { Document } from './entities/document.entity';
import { CreateDocumentDto } from './dto/document.dto';

@Injectable()
export class DocumentService {
  constructor(private documentRepository: DocumentRepository) {}

  async createDocument(document: CreateDocumentDto): Promise<Document> {
    if (!document) throw new Error('Document is required');
    const parseDocumentToDb = new Document();
    parseDocumentToDb.userId = document.userId;
    parseDocumentToDb.url = document.url;
    parseDocumentToDb.kycId = document.kycId;
    parseDocumentToDb.type = document.type;
    parseDocumentToDb.createdAt = new Date();
    return this.documentRepository.create(parseDocumentToDb);
  }

  async getDocumentById(documentId: string): Promise<Document> {
    return this.documentRepository.findById(documentId);
  }

  async getDocumentsByUserId(userId: string): Promise<Document[]> {
    return this.documentRepository.findByUserId(userId);
  }

  private parseDocumentType(documentType: string): string {
    return documentType.toUpperCase();
  }
}
