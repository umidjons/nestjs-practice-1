import { Module } from '@nestjs/common';
import { CompaniesController } from './companies.controller';

@Module({
  modules: [],
  controllers: [CompaniesController]
})
export class ApplicationModule { }
