import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PlatinumProfite } from "../model/PlatinumProfite";

@Injectable({ providedIn: 'root' })
export class PlatinumProfiteService {
  private apiUrl = 'https://localhost:7177';

  constructor(private http: HttpClient) { }

  PlatinumProfiteList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/PlatinumProfite?UpdateCalcFieldsFlg=N`);
  }
  SavePlatinumProfite(platinumProfite: PlatinumProfite): Observable<any> {
    return this.http.post(`${this.apiUrl}/PlatinumProfite`, platinumProfite);
  }
  DeleteProfit(message: PlatinumProfite): Observable<any> {
    return this.http.delete(`${this.apiUrl}/PlatinumProfite/${message.PLAT_PROFIT_ID}`);
  }
  GetSingleProfit(message: PlatinumProfite): Observable<any> {
    return this.http.get(`${this.apiUrl}/PlatinumProfite/${message.PLAT_PROFIT_ID}`);
  }
  UpdateProfit(message: PlatinumProfite): Observable<any> {
    return this.http.put(`${this.apiUrl}/PlatinumProfite/${message.PLAT_PROFIT_ID}?OperationCd=001`, message);
  }
  SetZakahDate(message: PlatinumProfite): Observable<any> {
    return this.http.put(`${this.apiUrl}/PlatinumProfite/${message.PLAT_PROFIT_ID}?OperationCd=002`, message);
  }
}