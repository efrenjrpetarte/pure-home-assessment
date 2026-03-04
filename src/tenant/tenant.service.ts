import { Injectable, NotFoundException } from '@nestjs/common';
import { FamilyService } from 'src/family/family.service';
import { Tenant } from 'src/model/tenant.model';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { randomUUID } from 'crypto';
import { UpdateTenantDto } from './dto/update-tenant.dto';

@Injectable()
export class TenantService {
    private tenants: Tenant[] = [];

    constructor(private readonly familyService: FamilyService) {}

    findAll(): Tenant[] {
            return this.tenants;
    }

    create(createTenantDto: CreateTenantDto): Tenant {
        // Validate FK: Family must exist
        this.familyService.findOne(createTenantDto.familyId);

        const newTenant: Tenant = {
            id: randomUUID(),
            ...createTenantDto,
            createdAt: new Date(),
        };

        this.tenants.push(newTenant);
        return newTenant;
    }

    findOne(id: string): Tenant {
        const tenant = this.tenants.find(t => t.id === id);
        if (!tenant) throw new NotFoundException('Tenant not found');
        return tenant;
    }

    update(id: string, updateTenantDto: UpdateTenantDto): Tenant {
        const tenant = this.findOne(id);

        if (updateTenantDto.familyId) {
        this.familyService.findOne(updateTenantDto.familyId); // validate FK
        tenant.familyId = updateTenantDto.familyId;
        }

        tenant.firstName = updateTenantDto.firstName ?? tenant.firstName;
        tenant.lastName = updateTenantDto.lastName ?? tenant.lastName;
        tenant.contactNumber = updateTenantDto.contactNumber ?? tenant.contactNumber;

        return tenant;
    }

    remove(id: string): void {
        const index = this.tenants.findIndex(t => t.id === id);
        if (index === -1) throw new NotFoundException('Tenant not found');

        this.tenants.splice(index, 1);
    }

    
    /**
     * Get tenants by family id
     * @param familyId 
     * @returns 
     */
    findByFamily(familyId: string): Tenant[] {
        return this.tenants.filter(t => t.familyId === familyId);
    }

}
