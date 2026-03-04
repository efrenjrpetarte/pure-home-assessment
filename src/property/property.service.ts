import { Injectable, NotFoundException } from '@nestjs/common';
import { Property } from 'src/model/property.model';
import { PropertyAgentService } from 'src/property-agent/property-agent.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { randomUUID } from 'crypto';
import { UpdatePropertyDto } from './dto/update-property.dto';

@Injectable()
export class PropertyService {
    private properties: Property[] = [];

    constructor(private readonly propertyAgentService: PropertyAgentService) {}

    findAll(): Property[] {
        return this.properties;
    }

    create(createPropertyDto: CreatePropertyDto): Property {
        // Validate foreign key (Agent must exist)
        this.propertyAgentService.findOne(createPropertyDto.agentId);

        const newProperty: Property = {
            id: randomUUID(),
            ...createPropertyDto,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        this.properties.push(newProperty);
        return newProperty;
    }

    findOne(id: string): Property {
        const property = this.properties.find(p => p.id === id);
        if (!property) {
            throw new NotFoundException('Property not found');
        }
        return property;
    }

    update(id: string, dto: UpdatePropertyDto): Property {
        const property = this.findOne(id);

        // If agentId is being updated, validate it
        if (dto.agentId) {
            this.propertyAgentService.findOne(dto.agentId);
            property.agentId = dto.agentId;
        }

        if (dto.name) property.name = dto.name;
        if (dto.address) property.address = dto.address;

        property.updatedAt = new Date();

        return property;
    }

    remove(id: string): void {
        const index = this.properties.findIndex(p => p.id === id);

        if (index === -1) {
            throw new NotFoundException('Property not found');
        }

        this.properties.splice(index, 1);
    }
}
