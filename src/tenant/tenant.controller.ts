import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';

@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Get()
  findAll() {
    return this.tenantService.findAll();
  }

  @Post()
  create(@Body() createTenantDto: CreateTenantDto) {
    return this.tenantService.create(createTenantDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tenantService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTenantDto: UpdateTenantDto) {
    return this.tenantService.update(id, updateTenantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.tenantService.remove(id);
    return { message: 'Tenant deleted successfully' };
  }

  // GET BY FAMILY
  @Get('family/:familyId')
  findByFamily(@Param('familyId') familyId: string) {
    return this.tenantService.findByFamily(familyId);
  }
}
