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
    const document = this.documentRepository.findById(documentId);
    if (!document) throw new Error('Document not found');
    return document;
  }

  async getDocumentsByUserId(userId: string): Promise<Document[]> {
    if (!userId) throw new Error('User ID is required');
    const document = this.documentRepository.findByUserId(userId);
    if (!document) throw new Error('Document not found');
    return document;
  }

  private parseDocumentType(documentType: string): string {
    return documentType.toUpperCase();
  }
}
