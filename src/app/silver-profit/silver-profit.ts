import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinusSignToParens } from '../../pipes/minus-sign-to-parens';
import { SilvarProfiteService } from '../../service/SilvarProfiteService';
import { ImportsModule } from '../imports';
import { Router } from '@angular/router';
import { SilvarProfite } from '../../model/SilvarProfite';

@Component({
  selector: 'app-silver-profit',
  imports: [ImportsModule, CommonModule, MinusSignToParens],
  templateUrl: './silver-profit.html',
  styleUrl: './silver-profit.css',
})
export class SilverProfit {
  display = true;
  silverProfitList?: SilvarProfite[];
  selectedItem: SilvarProfite|undefined;
  constructor(private cdr: ChangeDetectorRef, private silvarProfiteService: SilvarProfiteService, private router: Router) { }

  ngOnInit() {
    this.onRefreshGridClicked();
  }

  onRefreshGridClicked() {
    this.display = false;
    this.silvarProfiteService.SilvarProfiteList().subscribe({
      next: (res) => {
        this.silverProfitList = res;
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
      this.silvarProfiteService.DeleteProfit(this.selectedItem).subscribe({
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
      this.silvarProfiteService.SetZakahDate(this.selectedItem!).subscribe({
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
    this.router.navigate(['createSilverProfit']);
  }
  onEditProfitClicked(){
    if(this.selectedItem == undefined) return;
    this.router.navigate(['editSilverProfit', this.selectedItem.SIL_PROFIT_ID]);
  }
}
