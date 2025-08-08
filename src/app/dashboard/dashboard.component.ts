
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { KpiCardComponent } from './components/kpi-card/kpi-card.component';
import { AlertsTickerComponent } from './components/alerts-ticker/alerts-ticker.component';
import { ChannelOverviewComponent } from './components/channel-overview/channel-overview.component';
import { BSPComparisonComponent } from './components/bsp-comparison/bsp-comparison.component';
import { BudgetPerformanceComponent } from './components/budget-performance/budget-performance.component';
import { RealTimeMonitoringComponent } from './components/real-time-monitoring/real-time-monitoring.component';
import { CampaignTableComponent } from './components/campaign-table/campaign-table.component';
import { CostOptimizationComponent } from './components/cost-optimization/cost-optimization.component';
import { FestivalTimelineComponent } from './components/festival-timeline/festival-timeline.component';
import { OrchestrationAnalysisComponent } from './components/orchestration-analysis/orchestration-analysis.component';

interface AlertItem {
  id: string;
  text: string;
  type: 'info' | 'success' | 'warning' | 'error';
  time?: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatBadgeModule,
    MatIconModule,
    KpiCardComponent,
    AlertsTickerComponent,
    ChannelOverviewComponent,
    BSPComparisonComponent,
    BudgetPerformanceComponent,
    RealTimeMonitoringComponent,
    CampaignTableComponent,
    CostOptimizationComponent,
    FestivalTimelineComponent,
    OrchestrationAnalysisComponent
  ],
  template: `
    <div class="min-h-screen bg-background p-6 space-y-6">
      <!-- Header -->
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-bold text-foreground">Total Campaigns: 128</h1>
          <div class="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
            <span>Active: 6</span>
            <span>Scheduled: 12</span>
            <span>Completed: 110</span>
            <span>Last 15 days window</span>
          </div>
          <p class="text-sm text-muted-foreground mt-1">Live Updates Active</p>
        </div>
        <div class="flex items-center gap-3">
          <button mat-stroked-button>
            <mat-icon>calendar_today</mat-icon>
            Calendar
          </button>
          <mat-select value="all-channels" class="min-w-[150px]">
            <mat-option value="all-channels">All Channels</mat-option>
            <mat-option value="whatsapp">WhatsApp</mat-option>
            <mat-option value="sms">SMS</mat-option>
            <mat-option value="email">Email</mat-option>
          </mat-select>
          <button mat-raised-button color="primary">
            <mat-icon>add</mat-icon>
            New Campaign
          </button>
        </div>
      </div>

      <!-- Alerts ticker -->
      <app-alerts-ticker [items]="alertItems"></app-alerts-ticker>

      <!-- KPI cards -->
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <app-kpi-card
          title="Total Revenue"
          value="₹50.5L"
          subtitle="vs last month"
          trendLabel="+18.5%"
          [trendPositive]="true"
          icon="trending_up"
        >
        </app-kpi-card>
        <app-kpi-card
          title="Campaign ROI"
          value="6.0x"
          subtitle="improvement"
          trendLabel="+2.1x"
          [trendPositive]="true"
        >
        </app-kpi-card>
        <app-kpi-card
          title="Messages Sent"
          value="4.8M"
          subtitle="Across all channels"
          trendLabel="+3.2%"
          [trendPositive]="true"
          icon="message"
        >
        </app-kpi-card>
        <app-kpi-card
          title="Avg Conversion Rate"
          value="10.7%"
          subtitle="from target"
          trendLabel="+3.2%"
          [trendPositive]="true"
        >
        </app-kpi-card>
      </div>

      <!-- AI-Powered Optimization Insights -->
      <mat-card>
        <mat-card-header class="pb-3">
          <mat-card-title class="flex items-center gap-2">
            <mat-icon class="text-blue-500">psychology</mat-icon>
            AI-Powered Optimization Insights
          </mat-card-title>
          <mat-card-subtitle>Smart recommendations to maximize campaign performance</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <div class="grid gap-4 md:grid-cols-3">
            <!-- Channel Mix Optimization -->
            <div class="p-4 border rounded-lg">
              <div class="flex items-center gap-2 mb-3">
                <mat-icon class="text-blue-500">analytics</mat-icon>
                <span class="text-sm font-medium">94% confidence</span>
              </div>
              <h4 class="font-semibold mb-2">Channel Mix Optimization</h4>
              <p class="text-sm text-muted-foreground mb-3">Switch 30% SMS traffic to WhatsApp</p>
              <div class="text-green-600 font-semibold mb-3">32% cost reduction</div>
              <button mat-stroked-button class="w-full">Apply Insight</button>
            </div>

            <!-- Timing Optimization -->
            <div class="p-4 border rounded-lg">
              <div class="flex items-center gap-2 mb-3">
                <mat-icon class="text-orange-500">schedule</mat-icon>
                <span class="text-sm font-medium">89% confidence</span>
              </div>
              <h4 class="font-semibold mb-2">Timing Optimization</h4>
              <p class="text-sm text-muted-foreground mb-3">Send campaigns during peak hours (6-8 PM)</p>
              <div class="text-green-600 font-semibold mb-3">28% engagement boost</div>
              <button mat-stroked-button class="w-full">Apply Insight</button>
            </div>

            <!-- Audience Segmentation -->
            <div class="p-4 border rounded-lg">
              <div class="flex items-center gap-2 mb-3">
                <mat-icon class="text-purple-500">people</mat-icon>
                <span class="text-sm font-medium">91% confidence</span>
              </div>
              <h4 class="font-semibold mb-2">Audience Segmentation</h4>
              <p class="text-sm text-muted-foreground mb-3">Create talent-based customer segments</p>
              <div class="text-green-600 font-semibold mb-3">45% conversion uplift</div>
              <button mat-stroked-button class="w-full">Apply Insight</button>
            </div>
          </div>

          <div class="grid gap-4 md:grid-cols-3 mt-4">
            <!-- Cross-Channel Strategy -->
            <div class="p-4 border rounded-lg">
              <div class="flex items-center gap-2 mb-3">
                <mat-icon class="text-indigo-500">trending_up</mat-icon>
                <span class="text-sm font-medium">87% confidence</span>
              </div>
              <h4 class="font-semibold mb-2">Cross-Channel Strategy</h4>
              <p class="text-sm text-muted-foreground mb-3">Use WhatsApp for warm leads; Email for nurturing</p>
              <div class="text-green-600 font-semibold mb-3">38% ROI improvement</div>
              <button mat-stroked-button class="w-full">Apply Insight</button>
            </div>

            <!-- Creative Optimization -->
            <div class="p-4 border rounded-lg">
              <div class="flex items-center gap-2 mb-3">
                <mat-icon class="text-yellow-500">lightbulb</mat-icon>
                <span class="text-sm font-medium">82% confidence</span>
              </div>
              <h4 class="font-semibold mb-2">Creative Optimization</h4>
              <p class="text-sm text-muted-foreground mb-3">A/B test RCS rich media vs standard messages</p>
              <div class="text-green-600 font-semibold mb-3">52% CTR increase</div>
              <button mat-stroked-button class="w-full">Apply Insight</button>
            </div>

            <!-- Inactive Customer Revival -->
            <div class="p-4 border rounded-lg">
              <div class="flex items-center gap-2 mb-3">
                <mat-icon class="text-teal-500">refresh</mat-icon>
                <span class="text-sm font-medium">76% confidence</span>
              </div>
              <h4 class="font-semibold mb-2">Inactive Customer Revival</h4>
              <p class="text-sm text-muted-foreground mb-3">Re-engage 2,847 dormant customers with personalized offers</p>
              <div class="text-green-600 font-semibold mb-3">₹1.2L potential revenue</div>
              <button mat-stroked-button class="w-full">Apply Insight</button>
            </div>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Channel Performance -->
      <div class="grid gap-6 lg:grid-cols-2">
        <app-channel-overview></app-channel-overview>
        <div>
          <!-- Peak Engagement Heatmap -->
          <mat-card class="h-full">
            <mat-card-header class="pb-3">
              <mat-card-title class="flex items-center gap-2">
                <mat-icon class="text-orange-500">whatshot</mat-icon>
                Peak Engagement Heatmap
              </mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <div class="grid gap-4 mb-4">
                <div class="grid grid-cols-2 gap-4">
                  <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 class="font-semibold">WhatsApp</h4>
                    <div class="text-2xl font-bold text-blue-600">68.5%</div>
                    <div class="text-sm text-muted-foreground">Peak: Tue at 10 AM</div>
                  </div>
                  <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 class="font-semibold">SMS</h4>
                    <div class="text-2xl font-bold text-green-600">54.2%</div>
                    <div class="text-sm text-muted-foreground">Peak: Wed at 11 AM</div>
                  </div>
                </div>
              </div>
              
              <h4 class="font-semibold mb-3">Engagement Heatmap by Time</h4>
              <div class="space-y-2">
                <div class="flex items-center justify-between text-sm">
                  <span class="w-12">12AM</span>
                  <span class="w-12">6AM</span>
                  <span class="w-12">12PM</span>
                  <span class="w-12">6PM</span>
                </div>
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="w-8 text-sm">Sun</span>
                    <div class="flex-1 h-6 bg-gradient-to-r from-yellow-200 via-orange-300 to-orange-400 rounded"></div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-8 text-sm">Mon</span>
                    <div class="flex-1 h-6 bg-gradient-to-r from-yellow-200 via-orange-400 to-red-400 rounded"></div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-8 text-sm">Tue</span>
                    <div class="flex-1 h-6 bg-gradient-to-r from-yellow-200 via-orange-400 to-red-500 rounded"></div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-8 text-sm">Wed</span>
                    <div class="flex-1 h-6 bg-gradient-to-r from-yellow-200 via-orange-400 to-red-400 rounded"></div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-8 text-sm">Thu</span>
                    <div class="flex-1 h-6 bg-gradient-to-r from-yellow-200 via-orange-300 to-orange-400 rounded"></div>
                  </div>
                </div>
                <div class="flex items-center justify-between text-xs mt-2">
                  <span class="flex items-center gap-1">
                    <div class="w-3 h-3 bg-yellow-200 rounded"></div>
                    Low
                  </span>
                  <span class="flex items-center gap-1">
                    <div class="w-3 h-3 bg-orange-400 rounded"></div>
                    Med
                  </span>
                  <span class="flex items-center gap-1">
                    <div class="w-3 h-3 bg-red-500 rounded"></div>
                    High
                  </span>
                </div>
              </div>

              <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <div class="flex items-center gap-2 text-sm">
                  <mat-icon class="text-blue-500 text-sm">info</mat-icon>
                  <span class="font-medium">Optimal Timing</span>
                </div>
                <div class="text-sm mt-1">
                  <span class="text-blue-600">Best:</span> Tue Thu 10-11 AM show 35% higher engage
                  <br>
                  <span class="text-red-600">Avoid:</span> 8-10 PM show 60% lower conversion rates
                </div>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
      </div>

      <!-- Real-time Campaign Monitoring -->
      <app-real-time-monitoring></app-real-time-monitoring>

      <!-- Cost Optimization Insights -->
      <app-cost-optimization></app-cost-optimization>

      <!-- Orchestration Analysis -->
      <app-orchestration-analysis></app-orchestration-analysis>

      <!-- Footer -->
      <mat-card>
        <mat-card-content class="py-4 text-sm text-muted-foreground">
          Tips: Use orchestration to set WhatsApp as primary with SMS fallback
          to reduce cost per conversion by up to 18%.
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .text-blue-500 { color: #3b82f6; }
    .text-orange-500 { color: #f97316; }
    .text-purple-500 { color: #a855f7; }
    .text-indigo-500 { color: #6366f1; }
    .text-yellow-500 { color: #eab308; }
    .text-teal-500 { color: #14b8a6; }
    .text-green-600 { color: #059669; }
    .text-red-600 { color: #dc2626; }
    .text-blue-600 { color: #2563eb; }
  `]
})
export class DashboardComponent {
  alertItems: AlertItem[] = [
    {
      id: '1',
      text: 'Service Reminder campaign is starting at 3:25 PM',
      type: 'info',
      time: 'in 10m',
    },
    {
      id: '2',
      text: 'Diwali Festival Sale just started execution',
      type: 'success',
      time: 'now',
    },
    {
      id: '3',
      text: 'RCS pilot paused due to high bounce rate. Review BSP.',
      type: 'warning',
    },
  ];
}
