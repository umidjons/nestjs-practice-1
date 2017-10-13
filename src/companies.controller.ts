import { Controller, Get, Post, Body } from '@nestjs/common';
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

  @Post()
  createCompany(@Body() company: Company) {
    this.companies.push(company);
  }
}
