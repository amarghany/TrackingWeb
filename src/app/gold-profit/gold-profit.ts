import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { ImportsModule } from '../imports';
import { CommonModule } from '@angular/common';
import { MinusSignToParens } from '../../pipes/minus-sign-to-parens';
import { GoldProfiteService } from '../../service/GoldProfiteService';
import { Router } from '@angular/router';
import { GoldProfite } from '../../model/GoldProfite';

@Component({
  selector: 'app-gold-profit',
  imports: [ImportsModule, CommonModule, MinusSignToParens],
  templateUrl: './gold-profit.html',
  styleUrl: './gold-profit.css',
})
export class GoldProfit {
  goldProfitList?: GoldProfit[];

  constructor(private cdr: ChangeDetectorRef, private goldProfiteService: GoldProfiteService, private router: Router) { }
  display = true;
  selectedItem: GoldProfite | undefined;

  ngOnInit() {
    this.onRefreshGridCliecked();
  }

  onRefreshGridCliecked() {
    this.display = false;
    this.goldProfiteService.GoldProfiteList().subscribe({
      next: (res) => {
        this.goldProfitList = res;
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
      this.goldProfiteService.DeleteProfit(this.selectedItem).subscribe({
        next: (res) => {
          this.onRefreshGridCliecked();
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
  onCreateProfitClicked(){
    this.router.navigate(['createGoldProfit']);
  }
  onSetZakahDateClicked(){
    if(this.selectedItem == undefined) return;
      this.display = false;
      this.goldProfiteService.SetZakahDate(this.selectedItem!).subscribe({
        next: (res) => {
          this.onRefreshGridCliecked();
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
  onEditProfitClicked(){
    if(this.selectedItem == undefined) return;
    this.router.navigate(['editGoldProfit', this.selectedItem.GOLD_PROFIT_ID]);
  }
}
