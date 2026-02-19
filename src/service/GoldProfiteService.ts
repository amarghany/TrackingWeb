import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GoldProfite } from "../model/GoldProfite";


@Injectable({ providedIn: 'root' })
export class GoldProfiteService {
  private apiUrl = 'https://localhost:7177';

  constructor(private http: HttpClient) { }

  GoldProfiteList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/GoldProfite?UpdateCalcFieldsFlg=N`);
  }
  SaveGoldProfite(goldProfit: GoldProfite): Observable<any> {
    return this.http.post(`${this.apiUrl}/GoldProfite`, goldProfit);
  }
  DeleteProfit(message: GoldProfite): Observable<any> {
    return this.http.delete(`${this.apiUrl}/GoldProfite/${message.GOLD_PROFIT_ID}`);
  }
  GetSingleProfit(message: GoldProfite): Observable<any> {
    return this.http.get(`${this.apiUrl}/GoldProfite/${message.GOLD_PROFIT_ID}`);
  }
  UpdateProfit(message: GoldProfite): Observable<any> {
    return this.http.put(`${this.apiUrl}/GoldProfite/${message.GOLD_PROFIT_ID}?OperationCd=001`, message);
  }
  SetZakahDate(message: GoldProfite): Observable<any> {
    return this.http.put(`${this.apiUrl}/GoldProfite/${message.GOLD_PROFIT_ID}?OperationCd=002`, message);
  }
}