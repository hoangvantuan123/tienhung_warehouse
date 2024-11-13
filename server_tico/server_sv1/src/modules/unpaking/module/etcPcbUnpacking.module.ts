import { Module } from '@nestjs/common';
import { UnpackingController } from '../controller/etcPcbUnpacking.controller';
import { UnpackingService } from '../service/etcPcbUnpacking.service';
import { CreateService } from 'src/common/database/create.service';
import { FindService } from 'src/common/database/find.service';
import { UpdateService } from 'src/common/database/update.service';
import { DeleteService } from 'src/common/database/delete.service';
import { DatabaseService } from 'src/common/database/database.service';
import { CreatesImportService } from 'src/common/database/creates.service';

@Module({
  imports: [],
  providers: [
    UnpackingService,
    CreateService,
    FindService,
    UpdateService,
    DeleteService,
    DatabaseService,
    CreatesImportService
  ],
  controllers: [UnpackingController],
  exports: [UnpackingService],
})
export class UnpackingModule { }
