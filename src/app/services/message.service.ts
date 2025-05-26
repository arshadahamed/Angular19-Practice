import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  msg(): string {
    return "This is a greeting message";
  }
}
