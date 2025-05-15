import { Component, inject } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notification',
  imports: [],
  providers: [NotificationService],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  private notificationService = inject(NotificationService);
  notifications: string[] = [];
  private msgCount= 1;

  loadNotifications() {
    this.notifications = this.notificationService.
    getNotifications();
  }
  addNotification() {
    const msg = `New Notification ${this.msgCount}`;
    this.notificationService.addNotification(msg);
    this.loadNotifications();
    this.msgCount++;
  }
  clearNotifications() {
    this.notificationService.clearNotifications();
    this.loadNotifications();
  }
}
