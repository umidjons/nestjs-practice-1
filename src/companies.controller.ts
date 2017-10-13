import { Controller, Get } from '@nestjs/common';
import { Company } from './company';

@Controller('companies')
export class CompaniesController {

  private companies = [
    new Company('Coke', 'Soda', 'Washington DC'),
    new Company('Apple', 'Computes', 'New York'),
    new Company('Tesla', 'Cars', 'Alabama')
  ];

  @Get()
  getCompanies() {
    return this.companies;
  }
}
