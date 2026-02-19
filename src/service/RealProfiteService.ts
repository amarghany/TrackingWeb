import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RealProfite } from "../model/RealProfite";

@Injectable({ providedIn: 'root' })
export class RealProfiteService {
  private apiUrl = 'https://localhost:7177';

  constructor(private http: HttpClient) { }

  RealProfiteList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/RealProfite?UpdateCalcFieldsFlg=N`);
  }
  SaveRealProfite(realProfite: RealProfite): Observable<any> {
    return this.http.post(`${this.apiUrl}/RealProfite`, realProfite);
  }
  DeleteProfit(message: RealProfite): Observable<any> {
    return this.http.delete(`${this.apiUrl}/RealProfite/${message.REAL_PROFIT_ID}`);
  }
  GetSingleProfit(message: RealProfite): Observable<any> {
    return this.http.get(`${this.apiUrl}/RealProfite/${message.REAL_PROFIT_ID}`);
  }
  UpdateProfit(message: RealProfite): Observable<any> {
    return this.http.put(`${this.apiUrl}/RealProfite/${message.REAL_PROFIT_ID}?OperationCd=001`, message);
  }
  SetZakahDate(message: RealProfite): Observable<any> {
    return this.http.put(`${this.apiUrl}/RealProfite/${message.REAL_PROFIT_ID}?OperationCd=002`, message);
  }
}