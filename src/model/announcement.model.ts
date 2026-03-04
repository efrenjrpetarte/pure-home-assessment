export interface Note {
  id: string; // UUID
  agentId: string; // FK -> PropertyAgent.id
  propertyId: string; // FK -> Property.id
  familyId: string //FK -> Family.id
  title: string;
  description: string;
  date: Date;
  createdAt: Date;
}