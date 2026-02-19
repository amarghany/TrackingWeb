import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ImportsModule } from '../imports';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StockProfiteService } from '../../service/StockProfiteService';
import { StockProfite } from '../../model/StockProfite';

@Component({
  selector: 'app-create-stock-profit',
  imports: [ImportsModule],
  templateUrl: './create-stock-profit.html',
  styleUrl: './create-stock-profit.css',
})
export class CreateStockProfit {
display = true;

  saveForm: FormGroup;

  formSubmitted = false;

  constructor(private fb: FormBuilder, private profiteService: StockProfiteService, private cdr: ChangeDetectorRef, private router: Router) {
    this.saveForm = this.fb.group({
      TRAND_ID: ['', Validators.required],
      TRANS_DATE: ['', Validators.required],
      ZAKAH_DATE: ['', Validators.required],
      STOCK_SYMBOL: ['', Validators.required],
      CCOMPANY_NAME: ['', Validators.required],
      NO_STOCKS: ['', Validators.required],
      SPOT_PRICE: ['', Validators.required],
      MARKET_PRICE: ['', Validators.required],
      SALES_TAX: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(JSON.stringify(this.saveForm.value));
    this.formSubmitted = true;
    if (!this.saveForm.valid) return;
    this.display = false;
    let profit = JSON.parse(JSON.stringify(this.saveForm.value)) as StockProfite;
    this.profiteService.SaveStockProfite(profit).subscribe({
      next: (res) => {
        this.saveForm.reset();
        this.formSubmitted = false;
        this.cdr.detectChanges();
        this.router.navigate(['stockProfit']);
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

  isInvalid(controlName: string) {
    const control = this.saveForm.get(controlName);
    return control?.invalid && (control.touched || this.formSubmitted);
  }
}
