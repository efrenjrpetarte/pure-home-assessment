export interface Tenant {
  id: string; // UUID
  familyId: string; // FK -> Family.id
  firstName: string;
  lastName: string;
  age: number;
}