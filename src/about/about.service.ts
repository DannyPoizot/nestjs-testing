import { Injectable } from '@nestjs/common';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { PrismaService } from '../prisma.service';
import { about, Prisma } from "@prisma/client";

@Injectable()
export class AboutService {
  constructor(private prisma: PrismaService) { }

  async about(aboutWhereUniqueInput: Prisma.aboutWhereUniqueInput): Promise<about | null> {
    return this.prisma.about.findUnique({
      where: aboutWhereUniqueInput,
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.aboutWhereUniqueInput;
    where?: Prisma.aboutWhereInput;
    orderBy?: Prisma.aboutOrderByWithRelationInput;
  }): Promise<about[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.about.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createAbout(data: Prisma.aboutCreateInput): Promise<about> {
    return this.prisma.about.create({
      data,
    });
  }

  async updateAbout(params: {
    where: Prisma.aboutWhereUniqueInput;
    data: Prisma.aboutUpdateInput;
  }): Promise<about> {
    const { where, data } = params;
    return this.prisma.about.update({
      data,
      where,
    });
  }

  async deleteAbout(where: Prisma.aboutWhereUniqueInput): Promise<about> {
    return this.prisma.about.delete({
      where,
    });
  }
  create(createAboutDto: CreateAboutDto) {
    return this.prisma.about.create({
      data: {
        title: createAboutDto.title,
        content: createAboutDto.content
      }
    });
  }

  async findAll(): Promise<about[]> {
   const x = await this.prisma.about.findMany();
    return x;
  }

  findOne(id: number) {
    return this.prisma.about.findUnique({
      where: {
        id
      }
    });
  }

  update(id: number, updateAboutDto: UpdateAboutDto) {
    return this.prisma.about.update({
      where: {
        id
      },

      data: {
        title: updateAboutDto.title,
        content: updateAboutDto.content
      }

    });
  }

  remove(id: number) {
    return this.prisma.about.delete({
      where: {
        id
      }
    });
  }
}
