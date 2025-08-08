import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  imports: [CommonModule, CardModule],
  template: `
    <p-card class="h-full">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <h3 class="text-sm font-medium text-gray-600 mb-2">{{title}}</h3>
          <div class="text-2xl font-bold text-gray-900 mb-1">{{value}}</div>
          <div class="flex items-center">
            <span class="text-xs font-medium"
                  [ngClass]="changeType === 'positive' ? 'text-green-600' : 'text-red-600'">
              {{change}}
            </span>
            <span class="text-xs text-gray-500 ml-1">vs last period</span>
          </div>
        </div>
        <div class="flex-shrink-0">
          <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
            <i [class]="'pi ' + icon + ' text-blue-600 text-lg'"></i>
          </div>
        </div>
      </div>
    </p-card>
  `
})
export class KpiCardComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() change: string = '';
  @Input() changeType: 'positive' | 'negative' = 'positive';
  @Input() icon: string = 'pi-chart-line';
}