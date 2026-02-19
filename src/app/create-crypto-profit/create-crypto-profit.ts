import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ImportsModule } from '../imports';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CryptoProfiteService } from '../../service/CryptoProfiteService';
import { CryptoProfite } from '../../model/CryptoProfite';

@Component({
  selector: 'app-create-crypto-profit',
  imports: [ImportsModule],
  templateUrl: './create-crypto-profit.html',
  styleUrl: './create-crypto-profit.css',
})
export class CreateCryptoProfit {
  display = true;
  
  saveForm: FormGroup;

  formSubmitted = false;

  constructor(private fb: FormBuilder, private profiteService: CryptoProfiteService, private cdr: ChangeDetectorRef, private router: Router) {
        this.saveForm = this.fb.group({
            TRAND_ID: ['', Validators.required],
            TRANS_DATE: ['', Validators.required],
            ZAKAH_DATE: ['', Validators.required],
            COIN_NAME: ['', Validators.required],
            SPOT_PRICE: ['', Validators.required],
            NO_COINS: ['', Validators.required],
            SALES_TAX: ['', Validators.required],
        });
    }

    onSubmit() {
      console.log(JSON.stringify(this.saveForm.value));
      this.formSubmitted = true;
      if(!this.saveForm.valid) return;
      this.display = false;
      let profit = JSON.parse(JSON.stringify(this.saveForm.value)) as CryptoProfite;
    this.profiteService.SaveCryptoProfite(profit).subscribe({
      next: (res) => {
        //this.goldProfitList = res;
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
