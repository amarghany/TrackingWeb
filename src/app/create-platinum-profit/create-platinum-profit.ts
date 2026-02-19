import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ImportsModule } from '../imports';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatinumProfiteService } from '../../service/PlatinumProfiteService';
import { PlatinumProfite } from '../../model/PlatinumProfite';

@Component({
  selector: 'app-create-platinum-profit',
  imports: [ImportsModule],
  templateUrl: './create-platinum-profit.html',
  styleUrl: './create-platinum-profit.css',
})
export class CreatePlatinumProfit {
  display = true;

  saveForm: FormGroup;

  formSubmitted = false;

  constructor(private fb: FormBuilder, private profiteService: PlatinumProfiteService, private cdr: ChangeDetectorRef, private router: Router) {
    this.saveForm = this.fb.group({
      TRAND_ID: ['', Validators.required],
      TRANS_DATE: ['', Validators.required],
      ZAKAH_DATE: ['', Validators.required],
      SPOT_PRICE_OZ: ['', Validators.required],
      NO_OZ: ['', Validators.required],
      MARKET_PRICE: ['', Validators.required],
      SALES_TAX: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(JSON.stringify(this.saveForm.value));
    this.formSubmitted = true;
    if (!this.saveForm.valid) return;
    this.display = false;
    let profit = JSON.parse(JSON.stringify(this.saveForm.value)) as PlatinumProfite;
    this.profiteService.SavePlatinumProfite(profit).subscribe({
      next: (res) => {
        //this.goldProfitList = res;
        this.saveForm.reset();
        this.formSubmitted = false;
        this.cdr.detectChanges();
        this.router.navigate(['platinumProfit']);
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
