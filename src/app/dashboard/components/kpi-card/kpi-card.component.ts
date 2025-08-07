import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatBadgeModule, MatIconModule],
  template: `
    <mat-card class="h-full">
      <mat-card-header class="pb-2">
        <div class="flex items-center justify-between w-full">
          <mat-card-title class="text-sm font-medium text-muted-foreground">{{title}}</mat-card-title>
          <mat-icon *ngIf="icon" class="text-primary-70">{{icon}}</mat-icon>
        </div>
      </mat-card-header>
      <mat-card-content class="pt-0">
        <div class="text-3xl font-semibold tracking-tight">{{value}}</div>
        <p *ngIf="subtitle" class="text-sm text-muted-foreground mt-1">{{subtitle}}</p>
        <div *ngIf="trendLabel" class="mt-3">
          <span 
            class="inline-flex h-6 w-auto items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
            [class.bg-success-15]="trendPositive"
            [class.text-success]="trendPositive"
            [class.bg-destructive-15]="!trendPositive"
            [class.text-destructive]="!trendPositive">
            {{trendLabel}}
          </span>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .text-success {
      color: hsl(var(--success));
    }
    .text-destructive {
      color: hsl(var(--destructive));
    }
    .bg-success-15 {
      background-color: hsl(var(--success) / 0.15);
    }
    .bg-destructive-15 {
      background-color: hsl(var(--destructive) / 0.15);
    }
    .text-muted-foreground {
      color: hsl(var(--muted-foreground));
    }
    .text-primary-70 {
      color: hsl(var(--primary) / 0.7);
    }
  `]
})
export class KpiCardComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() subtitle?: string;
  @Input() trendLabel?: string;
  @Input() trendPositive: boolean = true;
  @Input() icon?: string;
}