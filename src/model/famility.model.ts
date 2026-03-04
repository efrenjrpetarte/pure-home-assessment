export interface Family {
  id: string; // UUID
  propertyId: string; // FK -> Property.id
  name: string;
  createdAt: Date;
}