import { Injectable, NotFoundException } from '@nestjs/common';
import { FamilyService } from 'src/family/family.service';
import { Announcement } from 'src/model/announcement.model';
import { PropertyAgentService } from 'src/property-agent/property-agent.service';
import { PropertyService } from 'src/property/property.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { randomUUID } from 'crypto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';

@Injectable()
export class AnnouncementService {
  private announcements: Announcement[] = [];

  constructor(
    private readonly agentService: PropertyAgentService,
    private readonly propertyService: PropertyService,
    private readonly familyService: FamilyService,
  ) {}

  findAll(): Announcement[] {
    return this.announcements;
  }

  create(createAnnouncementDto: CreateAnnouncementDto): Announcement {
    // Validate FKs
    this.agentService.findOne(createAnnouncementDto.agentId);
    this.propertyService.findOne(createAnnouncementDto.propertyId);
    if (createAnnouncementDto.familyId) {
      this.familyService.findOne(createAnnouncementDto.familyId);
    }

    const newAnnouncement: Announcement = {
      id: randomUUID(),
      agentId: createAnnouncementDto.agentId,
      propertyId: createAnnouncementDto.propertyId,
      familyId: createAnnouncementDto.familyId,
      title: createAnnouncementDto.title,
      description: createAnnouncementDto.description,
      date: new Date(createAnnouncementDto.date),
      createdAt: new Date(),
    };

    this.announcements.push(newAnnouncement);
    return newAnnouncement;
  }

  findOne(id: string): Announcement {
    const note = this.announcements.find(n => n.id === id);
    if (!note) throw new NotFoundException('Note not found');
    return note;
  }

  update(id: string, updateAnnouncementDto: UpdateAnnouncementDto): Announcement {
    const note = this.findOne(id);

    if (updateAnnouncementDto.agentId) this.agentService.findOne(updateAnnouncementDto.agentId) && (note.agentId = updateAnnouncementDto.agentId);
    if (updateAnnouncementDto.propertyId) this.propertyService.findOne(updateAnnouncementDto.propertyId) && (note.propertyId = updateAnnouncementDto.propertyId);
    if (updateAnnouncementDto.familyId) this.familyService.findOne(updateAnnouncementDto.familyId) && (note.familyId = updateAnnouncementDto.familyId);

    if (updateAnnouncementDto.title) note.title = updateAnnouncementDto.title;
    if (updateAnnouncementDto.description) note.description = updateAnnouncementDto.description;
    if (updateAnnouncementDto.date) note.date = new Date(updateAnnouncementDto.date);

    return note;
  }

  remove(id: string): void {
    const index = this.announcements.findIndex(n => n.id === id);
    if (index === -1) throw new NotFoundException('Note not found');

    this.announcements.splice(index, 1);
  }

  // Optional: Find announcements by Agent / Property / Family
  findByAgent(agentId: string): Announcement[] {
    return this.announcements.filter(n => n.agentId === agentId);
  }

  findByProperty(propertyId: string): Announcement[] {
    return this.announcements.filter(n => n.propertyId === propertyId);
  }

  findByFamily(familyId: string): Announcement[] {
    return this.announcements.filter(n => n.familyId === familyId);
  }
}
