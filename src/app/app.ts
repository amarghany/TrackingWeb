import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('Track Investment');
  items: MenuItem[] | undefined;
  
  constructor(private cdr: ChangeDetectorRef) {}
  display = true;
  ngOnInit() {
    this.items = [
            {
                label: 'Report',
                icon: 'pi pi-chart-bar',
                routerLink:'reportProfit',
            },
            {
                label: 'Gold',
                icon: 'pi pi-bars',
                routerLink:'goldProfit',
            },
            {
                label: 'Silver',
                icon: 'pi pi-bars',
                routerLink:'silverProfit',
            },
            {
                label: 'Platinum',
                icon: 'pi pi-bars',
                routerLink:'platinumProfit',
            },
            {
                label: 'Stock',
                icon: 'pi pi-home',
                routerLink:'stockProfit',
            },
            {
                label: 'Crypto',
                icon: 'pi pi-spin pi-bitcoin',
                routerLink:'cryptoProfit',
            },
            {
                label: 'Real Estat',
                icon: 'pi pi-building',
                routerLink:'realProfit',
            },
          ];
    
  }
}
