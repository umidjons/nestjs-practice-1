import { Controller, Get } from '@nestjs/common';

@Controller('companies')
export class CompaniesController {

  @Get()
  getCompanies() {
    return ['Coke', 'Apple', 'Tesla'];
  }
}
