import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { ProfiteStats } from '../../model/ProfiteStats';
import { CommonModule } from '@angular/common';
import { MinusSignToParens } from '../../pipes/minus-sign-to-parens';
import { ImportsModule } from '../imports';
import { ProfiteReportService } from '../../service/ProfiteStatsService';

@Component({
  selector: 'app-report-profit',
  imports: [ImportsModule, CommonModule, MinusSignToParens],
  templateUrl: './report-profit.html',
  styleUrl: './report-profit.css',
})
export class ReportProfit {
  profiteStatsList?: ProfiteStats[];

  InvestValueData: any;
  ProfitValueData: any;

  options: any;

  constructor(private cdr: ChangeDetectorRef, private profiteReportService: ProfiteReportService) { }
  display = true;
  ngOnInit() {
    this.onRefreshGridClieckd();
  }

  onRefreshGridClieckd() {
    this.display = false;
    this.profiteReportService.getProfiteReport().subscribe({
      next: (res) => {
        this.profiteStatsList = res;
        this.initChart();
        this.cdr.markForCheck();
      },
      error: err => {
        console.error('Observer got an error: ' + err);
      },
      complete: () => {
        setTimeout(() => {
          this.display = true;
          this.cdr.detectChanges();
        }, 100);
        console.log('Observer got a complete notification');
      },
    }
    );
  }
  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.InvestValueData = {
      labels: this.profiteStatsList!.map(s => s.INVEST_ASSET),
      datasets: [
        {
          label: 'Investment Value',
          data: this.profiteStatsList!.map(s => s.TOT_INVEST_VALUE),
          //backgroundColor: [documentStyle.getPropertyValue('--p-cyan-500'), documentStyle.getPropertyValue('--p-orange-500'), documentStyle.getPropertyValue('--p-gray-500')],
          //hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400'), documentStyle.getPropertyValue('--p-orange-400'), documentStyle.getPropertyValue('--p-gray-400')]
        }
      ]
    };

    this.ProfitValueData = {
      labels: this.profiteStatsList!.map(s => s.INVEST_ASSET),
      datasets: [
        {
          label: 'Profit Value',
          data: this.profiteStatsList!.map(s => s.TOT_PROFIT_VALUE),
          //backgroundColor: [documentStyle.getPropertyValue('--p-cyan-500'), documentStyle.getPropertyValue('--p-orange-500'), documentStyle.getPropertyValue('--p-gray-500')],
          //hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400'), documentStyle.getPropertyValue('--p-orange-400'), documentStyle.getPropertyValue('--p-gray-400')]
        }
      ]
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };
  }
  GetTotInvestAsset() {
    let tot = 0;
    if (this.profiteStatsList != undefined && this.profiteStatsList != null && this.profiteStatsList.length != 0) {
      this.profiteStatsList.forEach(s => {
        tot += s.TOT_INVEST_VALUE!;
      });
    }
    return Math.round(tot * 100) / 100;
  }
  GetTotCurrentValue() {
    let tot = 0;
    if (this.profiteStatsList != undefined && this.profiteStatsList != null && this.profiteStatsList.length != 0) {
      this.profiteStatsList.forEach(s => {
        tot += s.TOT_CURRENT_VALUE!;
      });
    }
    return Math.round(tot * 100) / 100;
  }
  GetTotProfitValue() {
    let tot = 0;
    if (this.profiteStatsList != undefined && this.profiteStatsList != null && this.profiteStatsList.length != 0) {
      this.profiteStatsList.forEach(s => {
        tot += s.TOT_PROFIT_VALUE!;
      });
    }
    return Math.round(tot * 100) / 100;
  }
  GetTotProfitPercent() {
    let tot = 0;
    if (this.profiteStatsList != undefined && this.profiteStatsList != null && this.profiteStatsList.length != 0) {
      let totInv = this.GetTotInvestAsset();
      let totProfit = this.GetTotProfitValue();
      tot = (totProfit / totInv) * 100
    }
    return Math.round(tot * 100) / 100;
  }
  GetTotZakahValue() {
    let tot = 0;
    if (this.profiteStatsList != undefined && this.profiteStatsList != null && this.profiteStatsList.length != 0) {
      this.profiteStatsList.forEach(s => {
        tot += s.TOT_ZAKAH_VALUE!;
      });
    }
    return Math.round(tot * 100) / 100;
  }
}
