import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { KpiCardComponent } from './components/kpi-card/kpi-card.component';
import { AlertsTickerComponent } from './components/alerts-ticker/alerts-ticker.component';
import { ChannelOverviewComponent } from './components/channel-overview/channel-overview.component';
import { CampaignTableComponent } from './components/campaign-table/campaign-table.component';
import { BSPComparisonComponent } from './components/bsp-comparison/bsp-comparison.component';
import { RealTimeMonitoringComponent } from './components/real-time-monitoring/real-time-monitoring.component';
import { HeatmapSectionComponent } from './components/heatmap-section/heatmap-section.component';
import { BudgetPerformanceComponent } from './components/budget-performance/budget-performance.component';
import { CostOptimizationComponent } from './components/cost-optimization/cost-optimization.component';
import { FestivalTimelineComponent } from './components/festival-timeline/festival-timeline.component';
import { OrchestrationAnalysisComponent } from './components/orchestration-analysis/orchestration-analysis.component';
import { AlertItem } from '../models/campaign.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    ChipModule,
    TableModule,
    TagModule,
    ProgressBarModule,
    TooltipModule,
    DropdownModule,
    KpiCardComponent,
    AlertsTickerComponent,
    ChannelOverviewComponent,
    CampaignTableComponent,
    BSPComparisonComponent,
    RealTimeMonitoringComponent,
    HeatmapSectionComponent,
    BudgetPerformanceComponent,
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
          <button pButton pRipple type="button" label="Calendar" icon="pi pi-calendar" class="p-button-outlined"></button>
          <p-dropdown [options]="channelOptions" [(ngModel)]="selectedChannel" placeholder="All Channels" class="min-w-[150px]"></p-dropdown>
          <button pButton type="button" label="New Campaign" icon="pi pi-plus"></button>
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
      <p-card>
        <ng-template pTemplate="header">
          <div class="flex items-center gap-2 pb-3">
            <span class="text-blue-500 pi pi-psychology"></span>
            <h5 class="font-semibold text-lg">AI-Powered Optimization Insights</h5>
          </div>
          <p class="text-sm text-muted-foreground">Smart recommendations to maximize campaign performance</p>
        </ng-template>
        <ng-template pTemplate="content">
          <div class="grid gap-4 md:grid-cols-3">
            <!-- Channel Mix Optimization -->
            <div class="p-4 border rounded-lg">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-blue-500 pi pi-chart-line"></span>
                <span class="text-sm font-medium">94% confidence</span>
              </div>
              <h4 class="font-semibold mb-2">Channel Mix Optimization</h4>
              <p class="text-sm text-muted-foreground mb-3">Switch 30% SMS traffic to WhatsApp</p>
              <div class="text-green-600 font-semibold mb-3">32% cost reduction</div>
              <p-button label="Apply Insight" styleClass="p-button-outlined w-full"></p-button>
            </div>

            <!-- Timing Optimization -->
            <div class="p-4 border rounded-lg">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-orange-500 pi pi-clock"></span>
                <span class="text-sm font-medium">89% confidence</span>
              </div>
              <h4 class="font-semibold mb-2">Timing Optimization</h4>
              <p class="text-sm text-muted-foreground mb-3">Send campaigns during peak hours (6-8 PM)</p>
              <div class="text-green-600 font-semibold mb-3">28% engagement boost</div>
              <p-button label="Apply Insight" styleClass="p-button-outlined w-full"></p-button>
            </div>

            <!-- Audience Segmentation -->
            <div class="p-4 border rounded-lg">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-purple-500 pi pi-users"></span>
                <span class="text-sm font-medium">91% confidence</span>
              </div>
              <h4 class="font-semibold mb-2">Audience Segmentation</h4>
              <p class="text-sm text-muted-foreground mb-3">Create talent-based customer segments</p>
              <div class="text-green-600 font-semibold mb-3">45% conversion uplift</div>
              <p-button label="Apply Insight" styleClass="p-button-outlined w-full"></p-button>
            </div>
          </div>

          <div class="grid gap-4 md:grid-cols-3 mt-4">
            <!-- Cross-Channel Strategy -->
            <div class="p-4 border rounded-lg">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-indigo-500 pi pi-arrow-growth"></span>
                <span class="text-sm font-medium">87% confidence</span>
              </div>
              <h4 class="font-semibold mb-2">Cross-Channel Strategy</h4>
              <p class="text-sm text-muted-foreground mb-3">Use WhatsApp for warm leads; Email for nurturing</p>
              <div class="text-green-600 font-semibold mb-3">38% ROI improvement</div>
              <p-button label="Apply Insight" styleClass="p-button-outlined w-full"></p-button>
            </div>

            <!-- Creative Optimization -->
            <div class="p-4 border rounded-lg">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-yellow-500 pi pi-lightbulb"></span>
                <span class="text-sm font-medium">82% confidence</span>
              </div>
              <h4 class="font-semibold mb-2">Creative Optimization</h4>
              <p class="text-sm text-muted-foreground mb-3">A/B test RCS rich media vs standard messages</p>
              <div class="text-green-600 font-semibold mb-3">52% CTR increase</div>
              <p-button label="Apply Insight" styleClass="p-button-outlined w-full"></p-button>
            </div>

            <!-- Inactive Customer Revival -->
            <div class="p-4 border rounded-lg">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-teal-500 pi pi-refresh"></span>
                <span class="text-sm font-medium">76% confidence</span>
              </div>
              <h4 class="font-semibold mb-2">Inactive Customer Revival</h4>
              <p class="text-sm text-muted-foreground mb-3">Re-engage 2,847 dormant customers with personalized offers</p>
              <div class="text-green-600 font-semibold mb-3">₹1.2L potential revenue</div>
              <p-button label="Apply Insight" styleClass="p-button-outlined w-full"></p-button>
            </div>
          </div>
        </ng-template>
      </p-card>

      <!-- Channel Performance -->
      <div class="grid gap-6 lg:grid-cols-2">
        <app-channel-overview></app-channel-overview>
        <div>
          <!-- Peak Engagement Heatmap -->
          <p-card class="h-full">
            <ng-template pTemplate="header">
              <div class="flex items-center gap-2 pb-3">
                <span class="text-orange-500 pi pi-fire"></span>
                <h5 class="font-semibold text-lg">Peak Engagement Heatmap</h5>
              </div>
            </ng-template>
            <ng-template pTemplate="content">
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
                  <span class="text-blue-500 pi pi-info-circle text-sm"></span>
                  <span class="font-medium">Optimal Timing</span>
                </div>
                <div class="text-sm mt-1">
                  <span class="text-blue-600">Best:</span> Tue Thu 10-11 AM show 35% higher engage
                  <br>
                  <span class="text-red-600">Avoid:</span> 8-10 PM show 60% lower conversion rates
                </div>
              </div>
            </ng-template>
          </p-card>
        </div>
      </div>

      <!-- Real-time Campaign Monitoring -->
      <app-real-time-monitoring></app-real-time-monitoring>

      <!-- Cost Optimization Insights -->
      <app-cost-optimization></app-cost-optimization>

      <!-- Orchestration Analysis -->
      <app-orchestration-analysis></app-orchestration-analysis>

      <!-- Footer -->
      <p-card>
        <ng-template pTemplate="content">
          <div class="py-4 text-sm text-muted-foreground">
            Tips: Use orchestration to set WhatsApp as primary with SMS fallback
            to reduce cost per conversion by up to 18%.
          </div>
        </ng-template>
      </p-card>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 1.5rem; /* p-6 */
      min-height: 100vh;
      background-color: #f4f4f5; /* Default background */
      gap: 1.5rem; /* space-y-6 */
      display: flex;
      flex-direction: column;
    }

    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem; /* mb-6 */
    }

    .dashboard-title {
      font-size: 1.5rem; /* text-2xl */
      font-weight: bold; /* font-bold */
      color: #171717; /* foreground */
    }

    .dashboard-subtitle {
      font-size: 0.875rem; /* text-sm */
      color: #52525b; /* muted-foreground */
      margin-top: 0.5rem; /* mt-2 */
    }

    .p-dropdown {
      min-width: 150px;
    }

    /* Utility classes for Tailwind CSS emulation */
    .flex { display: flex; }
    .items-center { align-items: center; }
    .justify-between { justify-content: space-between; }
    .gap-2 { gap: 0.5rem; } /* Gap between header elements */
    .gap-3 { gap: 0.75rem; } /* Gap between header buttons */
    .gap-4 { gap: 1rem; } /* Gap for KPI cards, etc. */
    .gap-6 { gap: 1.5rem; } /* Gap for main grid sections */
    .gap-4 > * { margin-bottom: 1rem; } /* Tailwind's gap for rows */
    .gap-6 > * { margin-bottom: 1.5rem; } /* Tailwind's gap for rows */

    .text-foreground { color: #171717; } /* Tailwind's foreground */
    .text-muted-foreground { color: #525252; } /* Tailwind's muted-foreground */
    .text-sm { font-size: 0.875rem; }
    .text-lg { font-size: 1.125rem; }
    .text-2xl { font-size: 1.5rem; }
    .font-bold { font-weight: bold; }
    .font-semibold { font-weight: 600; }
    .font-medium { font-weight: 500; }
    .bg-background { background-color: #f4f4f5; } /* Tailwind's background */
    .bg-gray-50 { background-color: #fafafa; }
    .bg-gray-800 { background-color: #27272a; }
    .bg-blue-50 { background-color: #eff6ff; }
    .bg-blue-950\/20 { background-color: rgba(21, 37, 73, 0.2); } /* Tailwind's blue-950/20 */
    .dark\:bg-gray-800 { background-color: #27272a; } /* Dark mode */
    .dark\:bg-blue-950\/20 { background-color: rgba(21, 37, 73, 0.2); } /* Dark mode */
    .border { border-width: 1px; border-color: #e5e5e5; border-radius: 0.5rem; padding: 1rem; } /* Tail-tailored border style */
    .rounded-lg { border-radius: 0.5rem; }
    .grid { display: grid; }
    .grid-cols-1 { grid-template-columns: 1fr; }
    .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    .lg\:grid-cols-2 { '@media (min-width: 1024px)': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }; }
    .lg\:grid-cols-3 { '@media (min-width: 1024px)': { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }; }
    .lg\:grid-cols-4 { '@media (min-width: 1024px)': { gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }; }
    .md\:grid-cols-2 { '@media (min-width: 768px)': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }; }
    .md\:grid-cols-3 { '@media (min-width: 768px)': { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }; }
    .xl\:grid-cols-3 { '@media (min-width: 1280px)': { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }; }
    .lg\:col-span-2 { '@media (min-width: 1024px)': { gridColumn: 'span 2 / span 2' }; }
    .space-y-1 > * { margin-top: 0.25rem; }
    .space-y-2 > * { margin-top: 0.5rem; }
    .space-y-6 > * { margin-top: 1.5rem; }
    .mt-1 { margin-top: 0.25rem; }
    .mt-2 { margin-top: 0.5rem; }
    .mt-4 { margin-top: 1rem; }
    .mt-6 { margin-top: 1.5rem; }
    .mb-3 { margin-bottom: 0.75rem; }
    .mb-4 { margin-bottom: 1rem; }
    .mb-6 { margin-bottom: 1.5rem; }
    .pb-3 { padding-bottom: 0.75rem; }
    .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
    .p-3 { padding: 0.75rem; }
    .p-4 { padding: 1rem; }
    .p-6 { padding: 1.5rem; }
    .w-full { width: 100%; }
    .w-3 { width: 0.75rem; }
    .w-8 { width: 2rem; }
    .w-12 { width: 3rem; }
    .h-6 { height: 1.5rem; }
    .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
    .from-yellow-200 { --tw-gradient-from: #fef08a; }
    .via-orange-300 { --tw-gradient-via: #fdba74; }
    .to-orange-400 { --tw-gradient-to: #fb923c; }
    .to-red-400 { --tw-gradient-to: #ef4444; }
    .to-red-500 { --tw-gradient-to: #ef4444; }
    .text-green-600 { color: #059669; }
    .text-red-600 { color: #dc2626; }
    .text-blue-600 { color: #2563eb; }
    .text-orange-500 { color: #f97316; }
    .text-purple-500 { color: #a855f7; }
    .text-indigo-500 { color: #6366f1; }
    .text-yellow-500 { color: #eab308; }
    .text-teal-500 { color: #14b8a6; }
    .bg-gradient-to-r {
      background-image: linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to));
    }
    .from-yellow-200 { --tw-gradient-from: #fef08a; }
    .via-orange-300 { --tw-gradient-via: #fdba74; }
    .to-orange-400 { --tw-gradient-to: #fb923c; }
    .to-red-400 { --tw-gradient-to: #ef4444; }
    .to-red-500 { --tw-gradient-to: #ef4444; }
    .from-yellow-200, .via-orange-300, .to-orange-400, .to-red-400, .to-red-500 {
      background-repeat: no-repeat;
    }
    .p-button-outlined {
      background-color: transparent;
      border: 1px solid;
    }
    .p-button-secondary {
      background-color: #606061;
      border-color: #606061;
    }
    .p-button-secondary:hover {
      background-color: #757576;
      border-color: #757576;
    }
    .p-button.p-button-secondary {
      color: #ffffff;
    }
    .p-dropdown.p-component {
      min-width: 150px;
    }
    /* Specific styles for PrimeNG components if needed */
    ::ng-deep .p-card .p-card-header {
      padding-bottom: 0.75rem;
    }
    ::ng-deep .p-card .p-card-content {
      padding: 1rem;
    }
    ::ng-deep .p-dropdown .p-dropdown-label {
      color: #525252; /* muted-foreground */
    }
    ::ng-deep .p-buttonset .p-button {
      margin-right: -1px;
    }
    ::ng-deep .p-buttonset .p-button:last-child {
      margin-right: 0;
    }
  `]
})
export class DashboardComponent {
  alertItems: AlertItem[] = [
    {
      id: '1',
      text: 'WhatsApp API rate limit approaching - 85% capacity',
      type: 'warning',
      time: '2 min ago'
    },
    {
      id: '2',
      text: 'Festival campaign scheduled for tomorrow - 2.3M messages queued',
      type: 'info',
      time: '5 min ago'
    },
    {
      id: '3',
      text: 'SMS delivery failed for Airtel - investigating issue',
      type: 'error',
      time: '8 min ago'
    },
    {
      id: '4',
      text: 'Cost optimization saved ₹45,000 this week',
      type: 'success',
      time: '1 hour ago'
    }
  ];

  channelOptions = [
    {label: 'All Channels', value: 'all-channels'},
    {label: 'WhatsApp', value: 'whatsapp'},
    {label: 'SMS', value: 'sms'},
    {label: 'Email', value: 'email'}
  ];
  selectedChannel: string = 'all-channels';
}