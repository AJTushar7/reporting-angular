import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

interface HeatmapData {
  day: string;
  hour: number;
  engagement: number;
  volume: number;
  cost: number;
}

@Component({
  selector: 'app-heatmap-section',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatSelectModule],
  template: `
    <mat-card>
      <mat-card-header class="pb-3">
        <div class="flex items-center justify-between w-full">
          <mat-card-title class="flex items-center gap-2">
            <mat-icon class="text-pink-500">grid_view</mat-icon>
            Engagement Heatmap
          </mat-card-title>
          <div class="flex items-center gap-2">
            <mat-select value="engagement" class="w-32">
              <mat-option value="engagement">Engagement</mat-option>
              <mat-option value="volume">Volume</mat-option>
              <mat-option value="cost">Cost</mat-option>
            </mat-select>
            <button mat-button class="text-sm">
              <mat-icon>fullscreen</mat-icon>
            </button>
          </div>
        </div>
      </mat-card-header>
      <mat-card-content>
        <!-- Days header -->
        <div class="grid grid-cols-8 gap-1 mb-2">
          <div class="text-xs text-center font-medium text-muted-foreground">Time</div>
          <div 
            *ngFor="let day of days" 
            class="text-xs text-center font-medium text-muted-foreground">
            {{day}}
          </div>
        </div>
        
        <!-- Heatmap grid -->
        <div class="space-y-1">
          <div 
            *ngFor="let hour of hours; trackBy: trackByHour" 
            class="grid grid-cols-8 gap-1">
            
            <!-- Hour label -->
            <div class="text-xs text-center font-medium text-muted-foreground py-1">
              {{formatHour(hour)}}
            </div>
            
            <!-- Day cells -->
            <div 
              *ngFor="let day of days; trackBy: trackByDay" 
              class="aspect-square rounded text-xs flex items-center justify-center font-medium cursor-pointer transition-all hover:scale-110"
              [style.background-color]="getHeatmapColor(day, hour)"
              [style.color]="getTextColor(day, hour)"
              [title]="getTooltip(day, hour)">
              {{getEngagementValue(day, hour)}}
            </div>
          </div>
        </div>

        <!-- Legend -->
        <div class="mt-4 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-sm text-muted-foreground">Low</span>
            <div class="flex gap-1">
              <div class="w-4 h-4 rounded" style="background-color: #f3f4f6;"></div>
              <div class="w-4 h-4 rounded" style="background-color: #fbbf24;"></div>
              <div class="w-4 h-4 rounded" style="background-color: #f97316;"></div>
              <div class="w-4 h-4 rounded" style="background-color: #dc2626;"></div>
              <div class="w-4 h-4 rounded" style="background-color: #7c2d12;"></div>
            </div>
            <span class="text-sm text-muted-foreground">High</span>
          </div>
          <div class="text-xs text-muted-foreground">
            Best time: Tue-Thu, 10-11 AM
          </div>
        </div>

        <!-- Insights -->
        <div class="mt-4 grid grid-cols-2 gap-3">
          <div class="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg text-sm">
            <div class="font-medium text-green-700 dark:text-green-400 mb-1">Peak Engagement</div>
            <div class="text-green-600">Tuesday 10-11 AM (82.4%)</div>
          </div>
          <div class="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg text-sm">
            <div class="font-medium text-red-700 dark:text-red-400 mb-1">Low Engagement</div>
            <div class="text-red-600">Sunday 1-3 AM (12.3%)</div>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .text-pink-500 {
      color: #ec4899;
    }
    .text-muted-foreground {
      color: hsl(var(--muted-foreground));
    }
  `]
})
export class HeatmapSectionComponent {
  days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  hours = Array.from({ length: 24 }, (_, i) => i);
  
  // Sample engagement data (0-100)
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
    if (hour === 0) return '12 AM';
    if (hour === 12) return '12 PM';
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
}