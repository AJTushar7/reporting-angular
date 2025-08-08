import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-heatmap-section',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, DropdownModule, TooltipModule],
  template: `
    <p-card>
      <ng-template pTemplate="header">
        <div class="flex items-center justify-between w-full p-4">
          <div class="flex items-center gap-2">
            <i class="pi pi-th-large text-pink-500"></i>
            <span class="font-semibold">Engagement Heatmap</span>
          </div>
          <div class="flex items-center gap-2">
            <p-dropdown [options]="viewOptions" [(ngModel)]="selectedView" 
                       placeholder="Select View" [style]="{'width': '120px'}">
            </p-dropdown>
            <p-button icon="pi pi-external-link" severity="secondary" size="small"></p-button>
          </div>
        </div>
      </ng-template>

      <ng-template pTemplate="content">
        <!-- Days header -->
        <div class="grid grid-cols-8 gap-1 mb-2">
          <div class="text-xs text-center font-medium text-gray-500">Time</div>
          <div 
            *ngFor="let day of days" 
            class="text-xs text-center font-medium text-gray-500">
            {{day}}
          </div>
        </div>

        <!-- Heatmap grid -->
        <div class="space-y-1">
          <div 
            *ngFor="let hour of hours; trackBy: trackByHour" 
            class="grid grid-cols-8 gap-1">
            <!-- Hour label -->
            <div class="text-xs text-right pr-2 py-1 text-gray-500 font-medium">
              {{hour}}
            </div>
            <!-- Heatmap cells for each day -->
            <div 
              *ngFor="let day of days; trackBy: trackByDay" 
              class="heatmap-cell"
              [ngClass]="getHeatmapClass(hour, day)"
              [pTooltip]="getTooltipText(hour, day)"
              tooltipPosition="top">
            </div>
          </div>
        </div>

        <!-- Legend -->
        <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
          <div class="flex items-center gap-2 text-xs text-gray-500">
            <span>Less</span>
            <div class="flex gap-1">
              <div class="heatmap-cell heatmap-low"></div>
              <div class="heatmap-cell heatmap-medium"></div>
              <div class="heatmap-cell heatmap-high"></div>
              <div class="heatmap-cell heatmap-very-high"></div>
            </div>
            <span>More</span>
          </div>
          <div class="text-xs text-gray-500">
            Peak: Tuesday 10 AM (68.5%)
          </div>
        </div>
      </ng-template>
    </p-card>
  `,
  styles: [`
    .text-pink-500 {
      color: #ec4899;
    }
    .text-gray-500 {
      color: #6b7280;
    }
    .heatmap-cell {
      aspect-ratio: 1 / 1;
      border-radius: 0.25rem;
      text-xs: true;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      transform: scale(1);
    }
    .heatmap-cell:hover {
      transform: scale(1.1);
    }
    .heatmap-low { background-color: #f3f4f6; } /* Light Gray */
    .heatmap-medium { background-color: #fef08a; } /* Light Yellow */
    .heatmap-high { background-color: #fdba74; } /* Light Orange */
    .heatmap-very-high { background-color: #f87171; } /* Light Red */
    .heatmap-extreme { background-color: #ef4444; } /* Red */
  `]
})
export class HeatmapSectionComponent {
  days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  hours = ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'];
  selectedView = 'engagement';

  viewOptions = [
    { label: 'Engagement', value: 'engagement' },
    { label: 'Volume', value: 'volume' },
    { label: 'Cost', value: 'cost' }
  ];

  // Mock engagement data (0-100) for sample
  private heatmapData: Record<string, Record<number, number>> = {
    'Mon': { 0: 15, 1: 12, 2: 8, 3: 10, 4: 18, 5: 25, 6: 35, 7: 45, 8: 58, 9: 72, 10: 78, 11: 75, 12: 68, 13: 62, 14: 58, 15: 55, 16: 52, 17: 48, 18: 42, 19: 38, 20: 32, 21: 28, 22: 22, 23: 18 },
    'Tue': { 0: 12, 1: 8, 2: 6, 3: 8, 4: 15, 5: 22, 6: 38, 7: 52, 8: 68, 9: 78, 10: 84, 11: 82, 12: 75, 13: 68, 14: 62, 15: 58, 16: 55, 17: 52, 18: 45, 19: 38, 20: 32, 21: 25, 22: 18, 23: 15 },
    'Wed': { 0: 10, 1: 8, 2: 5, 3: 6, 4: 12, 5: 20, 6: 36, 7: 48, 8: 65, 9: 75, 10: 81, 11: 78, 12: 72, 13: 65, 14: 58, 15: 55, 16: 52, 17: 48, 18: 42, 19: 35, 20: 28, 21: 22, 22: 16, 23: 12 },
    'Thu': { 0: 8, 1: 6, 2: 4, 3: 5, 4: 10, 5: 18, 6: 32, 7: 45, 8: 62, 9: 72, 10: 79, 11: 76, 12: 68, 13: 62, 14: 55, 15: 52, 16: 48, 17: 45, 18: 38, 19: 32, 20: 25, 21: 20, 22: 15, 23: 10 },
    'Fri': { 0: 12, 1: 10, 2: 8, 3: 10, 4: 15, 5: 22, 6: 35, 7: 48, 8: 62, 9: 68, 10: 72, 11: 70, 12: 65, 13: 58, 14: 52, 15: 48, 16: 45, 17: 42, 18: 38, 19: 35, 20: 32, 21: 28, 22: 25, 23: 20 },
    'Sat': { 0: 18, 1: 15, 2: 12, 3: 15, 4: 20, 5: 25, 6: 30, 7: 35, 8: 42, 9: 48, 10: 52, 11: 55, 12: 58, 13: 62, 14: 65, 15: 68, 16: 65, 17: 62, 18: 58, 19: 55, 20: 52, 21: 48, 22: 42, 23: 35 },
    'Sun': { 0: 25, 1: 22, 2: 18, 3: 20, 4: 25, 5: 28, 6: 32, 7: 35, 8: 38, 9: 42, 10: 45, 11: 48, 12: 52, 13: 55, 14: 58, 15: 62, 16: 65, 17: 62, 18: 58, 19: 55, 20: 52, 21: 48, 22: 42, 23: 35 }
  };

  trackByHour(index: number, hour: number): number {
    return hour;
  }

  trackByDay(index: number, day: string): string {
    return day;
  }

  formatHour(hour: number): string {
    if (hour === 0) return '12AM';
    if (hour === 12) return '12PM';
    if (hour < 12) return `${hour} AM`;
    return `${hour - 12} PM`;
  }

  getEngagementValue(day: string, hour: number): string {
    const value = this.heatmapData[day]?.[hour] || 0;
    return value.toString();
  }

  getHeatmapColor(day: string, hour: number): string {
    const value = this.heatmapData[day]?.[hour] || 0;
    
    if (value < 20) return '#f3f4f6';      // Very light gray
    if (value < 40) return '#fbbf24';      // Yellow
    if (value < 60) return '#f97316';      // Orange
    if (value < 80) return '#dc2626';      // Red
    return '#7c2d12';                      // Dark red
  }

  getTextColor(day: string, hour: number): string {
    const value = this.heatmapData[day]?.[hour] || 0;
    return value > 60 ? '#ffffff' : '#000000';
  }

  getTooltip(day: string, hour: number): string {
    const value = this.heatmapData[day]?.[hour] || 0;
    return `${day} ${this.formatHour(hour)}: ${value}% engagement`;
  }

  getHeatmapClass(hour: string, day: string): string {
    const hourNum = parseInt(hour); // Convert hour string to number for data lookup
    const value = this.heatmapData[day]?.[hourNum] || 0;
    
    if (value >= 80) return 'heatmap-extreme';
    if (value >= 60) return 'heatmap-very-high';
    if (value >= 40) return 'heatmap-high';  
    if (value >= 20) return 'heatmap-medium';
    return 'heatmap-low';
  }

  getTooltipText(hour: string, day: string): string {
    const hourNum = parseInt(hour); // Convert hour string to number for data lookup
    const value = this.heatmapData[day]?.[hourNum] || 0;
    return `${day} ${hour}: ${(value).toFixed(1)}% engagement`;
  }
}