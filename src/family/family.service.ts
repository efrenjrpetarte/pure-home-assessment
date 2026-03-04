import { Injectable, NotFoundException } from '@nestjs/common';
import { Family } from 'src/model/famility.model';
import { PropertyService } from 'src/property/property.service';
import { CreateFamilyDto } from './dto/create-family.dto';
import { randomUUID } from 'crypto';
import { UpdateFamilyDto } from './dto/update-family.dto';

@Injectable()
export class FamilyService {
  private families: Family[] = [];

  constructor(private readonly propertyService: PropertyService) {}

  findAll(): Family[] {
    return this.families;
  }

  create(createFamilyDto: CreateFamilyDto): Family {
    // Validate FK (Property must exist)
    this.propertyService.findOne(createFamilyDto.propertyId);

    const newFamily: Family = {
      id: randomUUID(),
      ...createFamilyDto,
      createdAt: new Date(),
    };

    this.families.push(newFamily);
    return newFamily;
  }

  findOne(id: string): Family {
    const family = this.families.find(f => f.id === id);
    if (!family) throw new NotFoundException('Family not found');
    return family;
  }

  update(id: string, updateFamilyDto: UpdateFamilyDto): Family {
    const family = this.findOne(id);

    if (updateFamilyDto.propertyId) {
      this.propertyService.findOne(updateFamilyDto.propertyId); // validate FK
      family.propertyId = updateFamilyDto.propertyId;
    }

    if (updateFamilyDto.name) family.name = updateFamilyDto.name;

    return family;
  }

  remove(id: string): void {
    const index = this.families.findIndex(f => f.id === id);
    if (index === -1) throw new NotFoundException('Family not found');

    this.families.splice(index, 1);
  }

  /**
   * Get families by property
   * @param propertyId 
   * @returns 
   */
  findByProperty(propertyId: string): Family[] {
    return this.families.filter(f => f.propertyId === propertyId);
  }
}
