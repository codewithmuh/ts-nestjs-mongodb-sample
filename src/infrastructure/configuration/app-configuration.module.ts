import { AppConfigurationService } from "./app-configuration.service";
import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";

@Module({
  exports: [AppConfigurationService],
  imports: [ConfigModule.forRoot()],
  providers: [AppConfigurationService]
})
export class AppConfigurationModule {}