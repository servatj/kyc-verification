import { Document } from '../../entities/document.entity';

export class DocumentRepository {
  private documents: Document[] = [];
  async create(document: Document): Promise<Document> {
    this.documents.push(document);
    return document;
  }

  async findById(documentId: string): Promise<Document> {
    return this.documents.find((doc) => doc.id === documentId);
  }

  async findByUserId(userId: string): Promise<Document[]> {
    return this.documents.filter((doc) => doc.userId === userId);
  }
}
