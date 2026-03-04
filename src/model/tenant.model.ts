export interface Tenant {
  id: string; // UUID
  familyId: string; // FK -> Family.id
  firstName: string;
  lastName: string;
  contactNumber: string;
  createdAt: Date;
}