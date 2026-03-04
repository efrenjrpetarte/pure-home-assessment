import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';

@Controller('announcement')
export class AnnouncementController {
  constructor(private readonly announcementService: AnnouncementService) {}

  @Get()
  findAll() {
    return this.announcementService.findAll();
  }

  @Post()
  create(@Body() createAnnouncementDto: CreateAnnouncementDto) {
    return this.announcementService.create(createAnnouncementDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.announcementService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAnnouncementDto: UpdateAnnouncementDto) {
    return this.announcementService.update(id, updateAnnouncementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.announcementService.remove(id);
    return { message: 'Note deleted successfully' };
  }

  // Filter endpoints
  @Get('agent/:agentId')
  findByAgent(@Param('agentId') agentId: string) {
    return this.announcementService.findByAgent(agentId);
  }

  @Get('property/:propertyId')
  findByProperty(@Param('propertyId') propertyId: string) {
    return this.announcementService.findByProperty(propertyId);
  }

  @Get('family/:familyId')
  findByFamily(@Param('familyId') familyId: string) {
    return this.announcementService.findByFamily(familyId);
  }
}
