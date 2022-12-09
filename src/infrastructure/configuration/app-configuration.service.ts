
import { ConfigService } from "@nestjs/config";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppConfigurationService {
  private readonly _connectionString!: string;
  
  get connectionString(): string {
    return this._connectionString;
  }
  
  constructor(private readonly _configService: ConfigService) {
    this._connectionString = this._getConnectionStringFromEnvFile();
  }

  private _getConnectionStringFromEnvFile(): string {
    const connectionString = this._configService.get<string>('MONGODB_DB_URI');
    if (!connectionString) {
      throw new Error('No connection string has been provided in the .env file.');
    }

    return connectionString;
  }
}