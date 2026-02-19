import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ImportsModule } from '../imports';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CryptoProfiteService } from '../../service/CryptoProfiteService';
import { CryptoProfite } from '../../model/CryptoProfite';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-edit-crypto-profit',
  imports: [ImportsModule],
  templateUrl: './edit-crypto-profit.html',
  styleUrl: './edit-crypto-profit.css',
})
export class EditCryptoProfit {
  display = true;

  saveForm: FormGroup;

  formSubmitted = false;
  ProfiteId!: number;

  constructor(private fb: FormBuilder, private profiteService: CryptoProfiteService, private cdr: ChangeDetectorRef, 
    private router: Router, private route: ActivatedRoute) {
    this.saveForm = this.fb.group({
      TRAND_ID: [0, Validators.required],
      TRANS_DATE: [new Date(), Validators.required],
      ZAKAH_DATE: [new Date(), Validators.required],
      COIN_NAME: ['BTC', Validators.required],
      SPOT_PRICE: [0, Validators.required],
      NO_COINS: [0, Validators.required],
      SALES_TAX: [0, Validators.required],
    });
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.ProfiteId = Number.parseInt(params.get('id')!);
      this.onGetSingleProfitClicked();
    });
    
  }
  onGetSingleProfitClicked() {
      this.display = false;
      let item = {CRY_PROFIT_ID:this.ProfiteId} as CryptoProfite;
      this.profiteService.GetSingleProfit(item).subscribe({
        next: (res) => {
          this.saveForm.patchValue(res);
          this.saveForm.controls['TRANS_DATE'].setValue(formatDate(res['TRANS_DATE'],'yyyy-MM-dd','en'));
          this.saveForm.controls['ZAKAH_DATE'].setValue(formatDate(res['ZAKAH_DATE'],'yyyy-MM-dd','en'));
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
  onSubmit() {
    console.log(JSON.stringify(this.saveForm.value));
    this.formSubmitted = true;
    if (!this.saveForm.valid) return;
    this.display = false;
    let profit = JSON.parse(JSON.stringify(this.saveForm.value)) as CryptoProfite;
    profit.CRY_PROFIT_ID = this.ProfiteId;
    this.profiteService.UpdateProfit(profit).subscribe({
      next: (res) => {
        this.saveForm.reset();
        this.formSubmitted = false;
        this.cdr.detectChanges();
        this.router.navigate(['cryptoProfit']);
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
