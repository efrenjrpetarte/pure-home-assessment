export interface Family {
  id: string; // UUID
  propertyId: string; // FK -> Property.id
  familyName: string;
  createdAt: Date;
}