import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePropertyAgentDto } from './dto/create-property-agent.dto';
import { randomUUID } from 'crypto';
import { UpdatePropertyAgentDto } from './dto/update-property-agend.dto';
import { PropertyAgent } from 'src/model/property-agent.model';

@Injectable()
export class PropertyAgentService {
  private propertyAgents: PropertyAgent[] = [];

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
