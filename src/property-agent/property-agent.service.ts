import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePropertyAgentDto } from './dto/create-property-agent.dto';
import { randomUUID } from 'crypto';
import { UpdatePropertyAgentDto } from './dto/update-property-agend.dto';
import { PropertyAgent } from 'src/model/property-agent.model';

@Injectable()
export class PropertyAgentService {
  private propertyAgents: PropertyAgent[] = [
    {
      id: "4b2e9190-d8da-42c6-9b37-2a8c4f773fdb",
      firstName: "Efren Jr",
      lastName: "Petarte",
      email: "petarte.572@gmail.com",
      mobileNumber: "sds",
      createdAt: new Date("2026-03-05T06:26:00.630Z"),
      updatedAt: new Date("2026-03-05T06:26:00.630Z")
    }
  ];

  findAll(): PropertyAgent[] {
    return this.propertyAgents;
  }

  create(createPropertyAgentDto: CreatePropertyAgentDto): PropertyAgent {
    const newPropertyAgent: PropertyAgent = {
        id: randomUUID(),
        ...createPropertyAgentDto,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    this.propertyAgents.push(newPropertyAgent);
    return newPropertyAgent;
  }

  findOne(id: string): PropertyAgent {
    const propertyAgent = this.propertyAgents.find(agent => agent.id === id)
    if(!propertyAgent) throw new NotFoundException('Agent not found');
    return propertyAgent;
  }

  update(id: string, updatePropertyAgentDto: UpdatePropertyAgentDto): PropertyAgent {
    const propertyAgent = this.findOne(id);

    Object.assign(propertyAgent, updatePropertyAgentDto)
    propertyAgent.updatedAt = new Date()

    return propertyAgent;
  }

  remove(id: string): void {
    const index = this.propertyAgents.findIndex(propertyAgent => propertyAgent.id === id);
    if (index === -1) throw new NotFoundException('Agent not found');

    this.propertyAgents.splice(index, 1);
  }
}
