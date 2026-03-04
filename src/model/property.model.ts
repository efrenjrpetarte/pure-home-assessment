export interface Property {
  id: string; // UUID
  agentId: string; // FK -> PropertyAgent.id
  name: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}