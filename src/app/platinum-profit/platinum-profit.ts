import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { ImportsModule } from '../imports';
import { CommonModule } from '@angular/common';
import { MinusSignToParens } from '../../pipes/minus-sign-to-parens';
import { PlatinumProfiteService } from '../../service/PlatinumProfiteService';
import { Router } from '@angular/router';
import { PlatinumProfite } from '../../model/PlatinumProfite';

@Component({
  selector: 'app-platinum-profit',
  imports: [ImportsModule, CommonModule, MinusSignToParens],
  templateUrl: './platinum-profit.html',
  styleUrl: './platinum-profit.css',
})
export class PlatinumProfit {
  display = true;
  platinumProfitList?: PlatinumProfit[];
  selectedItem: PlatinumProfite|undefined;
  
  constructor(private cdr: ChangeDetectorRef, private platinumProfiteService: PlatinumProfiteService, private router: Router) { }

  ngOnInit() {
    this.onRefreshGridClicked();
  }

  onRefreshGridClicked() {
    this.display = false;
    this.platinumProfiteService.PlatinumProfiteList().subscribe({
      next: (res) => {
        this.platinumProfitList = res;
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
      this.platinumProfiteService.DeleteProfit(this.selectedItem).subscribe({
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
      this.platinumProfiteService.SetZakahDate(this.selectedItem!).subscribe({
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
    this.router.navigate(['createPlatinumProfit']);
  }
  onEditProfitClicked(){
    if(this.selectedItem == undefined) return;
    this.router.navigate(['editPlatinumProfit', this.selectedItem.PLAT_PROFIT_ID]);
  }
}
