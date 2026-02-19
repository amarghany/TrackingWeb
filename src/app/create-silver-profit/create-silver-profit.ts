import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ImportsModule } from '../imports';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SilvarProfiteService } from '../../service/SilvarProfiteService';
import { SilvarProfite } from '../../model/SilvarProfite';

@Component({
  selector: 'app-create-silver-profit',
  imports: [ImportsModule],
  templateUrl: './create-silver-profit.html',
  styleUrl: './create-silver-profit.css',
})
export class CreateSilverProfit {
display = true;

  saveForm: FormGroup;

  formSubmitted = false;

  constructor(private fb: FormBuilder, private profiteService: SilvarProfiteService, private cdr: ChangeDetectorRef, private router: Router) {
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
    let profit = JSON.parse(JSON.stringify(this.saveForm.value)) as SilvarProfite;
    this.profiteService.SaveSilvarProfite(profit).subscribe({
      next: (res) => {
        //this.goldProfitList = res;
        this.saveForm.reset();
        this.formSubmitted = false;
        this.cdr.detectChanges();
        this.router.navigate(['silverProfit']);
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
