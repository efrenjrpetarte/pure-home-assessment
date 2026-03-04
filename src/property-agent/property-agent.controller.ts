import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PropertyAgentService } from './property-agent.service';
import { CreatePropertyAgentDto } from './dto/create-property-agent.dto';
import { UpdatePropertyAgentDto } from './dto/update-property-agend.dto';

@Controller('property-agent')
export class PropertyAgentController {
    constructor(private readonly propertyAgentService: PropertyAgentService) {}

    @Get()
    findAll() {
        return this.propertyAgentService.findAll()
    }

    @Post()
    create(@Body() createPropertyAgentDto: CreatePropertyAgentDto) {
        return this.propertyAgentService.create(createPropertyAgentDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.propertyAgentService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatePropertyAgentDto: UpdatePropertyAgentDto) {
        return this.propertyAgentService.update(id, updatePropertyAgentDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        this.propertyAgentService.remove(id);
        return { message: 'Property agent deleted successfully' };
    }
}
