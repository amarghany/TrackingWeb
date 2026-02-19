import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StockProfite } from "../model/StockProfite";

@Injectable({ providedIn: 'root' })
export class StockProfiteService {
  private apiUrl = 'https://localhost:7177';

  constructor(private http: HttpClient) { }

  StockProfiteList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/StockProfite?UpdateCalcFieldsFlg=N`);
  }
  SaveStockProfite(stockProfite: StockProfite): Observable<any> {
    return this.http.post(`${this.apiUrl}/StockProfite`, stockProfite);
  }
  DeleteProfit(message: StockProfite): Observable<any> {
    return this.http.delete(`${this.apiUrl}/StockProfite/${message.ST_PROFIT_ID}`);
  }
  GetSingleProfit(message: StockProfite): Observable<any> {
    return this.http.get(`${this.apiUrl}/StockProfite/${message.ST_PROFIT_ID}`);
  }
  UpdateProfit(message: StockProfite): Observable<any> {
    return this.http.put(`${this.apiUrl}/StockProfite/${message.ST_PROFIT_ID}?OperationCd=001`, message);
  }
  SetZakahDate(message: StockProfite): Observable<any> {
    return this.http.put(`${this.apiUrl}/StockProfite/${message.ST_PROFIT_ID}?OperationCd=002`, message);
  }
}