import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { AboutModule } from './about/about.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [AboutModule, BlogModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
