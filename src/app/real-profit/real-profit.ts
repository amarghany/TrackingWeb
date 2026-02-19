import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
// import { ButtonModule } from 'primeng/button';
// import { TableModule } from 'primeng/table';
// import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ImportsModule } from '../imports';
import { CommonModule } from '@angular/common';
import { MinusSignToParens } from '../../pipes/minus-sign-to-parens';
import { RealProfiteService } from '../../service/RealProfiteService';
import { Router } from '@angular/router';
import { RealProfite } from '../../model/RealProfite';

@Component({
  selector: 'app-real-profit',
  imports: [ImportsModule, CommonModule, MinusSignToParens],
  templateUrl: './real-profit.html',
  styleUrl: './real-profit.css',
})
export class RealProfit {
  display = true;
  realProfitList?: RealProfit[];
  selectedItem: RealProfite|undefined;
  constructor(private cdr: ChangeDetectorRef, private realProfiteService: RealProfiteService, private router: Router) { }

  ngOnInit() {
    this.onRefreshGridClicked();
  }

  onRefreshGridClicked() {
    this.display = false;
    this.realProfiteService.RealProfiteList().subscribe({
      next: (res) => {
        this.realProfitList = res;
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
      this.realProfiteService.DeleteProfit(this.selectedItem).subscribe({
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
      this.realProfiteService.SetZakahDate(this.selectedItem!).subscribe({
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
    this.router.navigate(['createRealProfit']);
  }
  onEditProfitClicked(){
    if(this.selectedItem == undefined) return;
    this.router.navigate(['editRealProfit', this.selectedItem.REAL_PROFIT_ID]);
  }
}
