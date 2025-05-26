import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  getAppConfig(): any {
    return{
      version:'1.0.0',
      environment: 'production',
      appName: 'Arshad'
    };
  }
}
