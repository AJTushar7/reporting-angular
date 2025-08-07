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
import { HeatmapSectionComponent } from './components/heatmap-section/heatmap-section.component';
import { type AlertItem } from '../models/campaign.interface';

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
    OrchestrationAnalysisComponent,
    HeatmapSectionComponent,
  ],
  template: `
    <div class="min-h-screen w-full bg-background">
      <div
        class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8"
      >
        <!-- Header -->
        <div
          class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h1 class="text-3xl font-bold tracking-tight">
              Total Campaigns: 128
            </h1>
            <div class="mt-2 flex flex-wrap items-center gap-2 text-sm">
              <span
                class="inline-flex h-6 w-auto items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                >Active: 6</span
              >
              <span
                class="inline-flex h-6 w-auto items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                >Scheduled: 12</span
              >
              <span
                class="inline-flex h-6 w-auto items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                >Completed: 112</span
              >
              <span class="text-muted-foreground">Last 15 days window</span>
            </div>
            <div class="mt-2 inline-flex items-center gap-2 text-sm">
              <span
                class="inline-flex h-2 w-2 rounded-full bg-success"
                aria-hidden
              ></span>
              <span class="text-muted-foreground">Live Updates Active</span>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <button mat-stroked-button class="text-sm">
              <mat-icon class="mr-2">calendar_today</mat-icon>
              Calendar
            </button>
            <mat-select value="all" class="w-[180px]">
              <mat-option value="all">All Channels</mat-option>
              <mat-option value="wa">WhatsApp</mat-option>
              <mat-option value="sms">SMS</mat-option>
              <mat-option value="email">Email</mat-option>
              <mat-option value="push">Push</mat-option>
              <mat-option value="rcs">RCS</mat-option>
            </mat-select>
            <button mat-raised-button color="primary">
              <mat-icon class="mr-2">add</mat-icon>
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

        <!-- Channel Performance -->
        <div class="grid gap-6 lg:grid-cols-2">
          <app-channel-overview></app-channel-overview>
          <app-bsp-comparison></app-bsp-comparison>
        </div>

        <!-- Budget and Real-time Monitoring -->
        <div class="grid gap-6 lg:grid-cols-2">
          <app-budget-performance></app-budget-performance>
          <app-real-time-monitoring></app-real-time-monitoring>
        </div>

        <!-- Campaign Management -->
        <div class="grid gap-6 lg:grid-cols-3">
          <div class="lg:col-span-2">
            <app-campaign-table></app-campaign-table>
          </div>
          <div>
            <app-cost-optimization></app-cost-optimization>
          </div>
        </div>

        <!-- Advanced Analytics -->
        <div class="grid gap-6 lg:grid-cols-2">
          <app-heatmap-section></app-heatmap-section>
          <app-festival-timeline></app-festival-timeline>
        </div>

        <!-- Orchestration Analysis -->
        <app-orchestration-analysis></app-orchestration-analysis>

        <!-- Footer -->
        <mat-card>
          <mat-card-content class="py-4 text-sm text-muted-foreground">
            Tips: Use orchestration to set WhatsApp as primary with SMS fallback
            to reduce cost per conversion by up to 18%.
          </mat-card-content>
        </mat-card>

        <div class="border-t border-border"></div>
        <p class="text-center text-xs text-muted-foreground">
          Designed for large-scale automotive campaigns • Accessible •
          Keyboard-friendly
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      .mat-mdc-select {
        width: 180px;
      }
    `,
  ],
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
