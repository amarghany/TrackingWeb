import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';
import { MinusSignToParens } from '../../pipes/minus-sign-to-parens';
import { CryptoProfiteService } from '../../service/CryptoProfiteService';
import { Router } from '@angular/router';
import { CryptoProfite } from '../../model/CryptoProfite';

@Component({
  selector: 'app-crypto-profit',
  imports: [TableModule, ButtonModule, ProgressSpinnerModule, CommonModule, MinusSignToParens],
  templateUrl: './crypto-profit.html',
  styleUrl: './crypto-profit.css',
})
export class CryptoProfit {
  display = true;
  cryptoProfitList?: CryptoProfit[];
  selectedItem: CryptoProfite|undefined;
  constructor(private cdr: ChangeDetectorRef, private cryptoProfiteService: CryptoProfiteService, private router: Router) { }
    
    ngOnInit() {
      this.onRefreshGridClicked();
    }
  
    onRefreshGridClicked() {
      this.display = false;
      this.cryptoProfiteService.CryptoProfitList().subscribe({
        next: (res) => {
          this.cryptoProfitList = res;
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
      this.cryptoProfiteService.DeleteProfit(this.selectedItem!).subscribe({
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
    onCreateProfitClicked(){
    this.router.navigate(['createCryptoProfit']);
  }

  onSetZakahDateClicked(){
    if(this.selectedItem == undefined) return;
      this.display = false;
      this.cryptoProfiteService.SetZakahDate(this.selectedItem!).subscribe({
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

  onEditProfitClicked(){
    if(this.selectedItem == undefined) return;
    this.router.navigate(['editCryptoProfit', this.selectedItem!.CRY_PROFIT_ID]);
  }
}
