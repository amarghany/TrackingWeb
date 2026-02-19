import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ImportsModule } from '../imports';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RealProfiteService } from '../../service/RealProfiteService';
import { RealProfite } from '../../model/RealProfite';

@Component({
  selector: 'app-create-real-profit',
  imports: [ImportsModule],
  templateUrl: './create-real-profit.html',
  styleUrl: './create-real-profit.css',
})
export class CreateRealProfit {
display = true;

  saveForm: FormGroup;

  formSubmitted = false;

  constructor(private fb: FormBuilder, private profiteService: RealProfiteService, private cdr: ChangeDetectorRef, private router: Router) {
    this.saveForm = this.fb.group({
      TRAND_ID: ['', Validators.required],
      TRANS_DATE: ['', Validators.required],
      ZAKAH_DATE: ['', Validators.required],
      TOT_PRICE: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(JSON.stringify(this.saveForm.value));
    this.formSubmitted = true;
    if (!this.saveForm.valid) return;
    this.display = false;
    let profit = JSON.parse(JSON.stringify(this.saveForm.value)) as RealProfite;
    this.profiteService.SaveRealProfite(profit).subscribe({
      next: (res) => {
        this.saveForm.reset();
        this.formSubmitted = false;
        this.cdr.detectChanges();
        this.router.navigate(['realProfit']);
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
