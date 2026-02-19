import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinusSignToParens } from '../../pipes/minus-sign-to-parens';
import { StockProfiteService } from '../../service/StockProfiteService';
import { ImportsModule } from '../imports';
import { Router } from '@angular/router';
import { StockProfite } from '../../model/StockProfite';

@Component({
  selector: 'app-stock-profit',
  imports: [ImportsModule, CommonModule, MinusSignToParens],
  templateUrl: './stock-profit.html',
  styleUrl: './stock-profit.css',
})
export class StockProfit {
  display = true;
  stockProfitList?: StockProfit[];
  selectedItem: StockProfite | undefined;
  constructor(private cdr: ChangeDetectorRef, private stockProfiteService: StockProfiteService, private router: Router) { }

  ngOnInit() {
    this.onRefreshGridClicked();
  }

  onRefreshGridClicked() {
    this.display = false;
    this.stockProfiteService.StockProfiteList().subscribe({
      next: (res) => {
        this.stockProfitList = res;
        this.selectedItem = undefined;
        this.cdr.detectChanges();
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
  onDeleteProfitClicked(){
    if(this.selectedItem == undefined) return;
      this.display = false;
      this.stockProfiteService.DeleteProfit(this.selectedItem).subscribe({
        next: (res) => {
          this.onRefreshGridClicked();
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
    onSetZakahDateClicked(){
    if(this.selectedItem == undefined) return;
      this.display = false;
      this.stockProfiteService.SetZakahDate(this.selectedItem!).subscribe({
        next: (res) => {
          this.onRefreshGridClicked();
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
  onCreateProfitClicked() {
    this.router.navigate(['createStockProfit']);
  }
  onEditProfitClicked(){
    if(this.selectedItem == undefined) return;
    this.router.navigate(['editStockProfit', this.selectedItem.ST_PROFIT_ID]);
  }
}
