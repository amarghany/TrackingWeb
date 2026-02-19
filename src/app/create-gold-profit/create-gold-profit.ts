import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ImportsModule } from '../imports';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoldProfiteService } from '../../service/GoldProfiteService';
import { Router } from '@angular/router';
import { GoldProfite } from '../../model/GoldProfite';

@Component({
  selector: 'app-create-gold-profit',
  imports: [ImportsModule],
  templateUrl: './create-gold-profit.html',
  styleUrl: './create-gold-profit.css',
})
export class CreateGoldProfit {
  display = true;
  
  saveForm: FormGroup;

  formSubmitted = false;

  constructor(private fb: FormBuilder, private profiteService: GoldProfiteService, private cdr: ChangeDetectorRef, private router: Router) {
        this.saveForm = this.fb.group({
            TRAND_ID: ['', Validators.required],
            TRANS_DATE: ['', Validators.required],
            ZAKAH_DATE: ['', Validators.required],
            GOLD_TYPE: ['', Validators.required],
            SPOT_PRICE_OZ: ['', Validators.required],
            NO_GRAMS: ['', Validators.required],
            MARKET_PRICE: ['', Validators.required],
            SALES_TAX: ['', Validators.required],
        });
    }

    onSubmit() {
      console.log(JSON.stringify(this.saveForm.value));
      this.formSubmitted = true;
      if(!this.saveForm.valid) return;
      this.display = false;
      let profit = JSON.parse(JSON.stringify(this.saveForm.value)) as GoldProfite;
    this.profiteService.SaveGoldProfite(profit).subscribe({
      next: (res) => {
        //this.goldProfitList = res;
        this.saveForm.reset();
        this.formSubmitted = false;
        this.cdr.detectChanges();
        this.router.navigate(['goldProfit']);
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
