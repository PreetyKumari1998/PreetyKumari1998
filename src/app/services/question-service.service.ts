import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor(private http : HttpClient) { }

  getQuestionJson() :Observable<any>{
    return this.http.get("assets/questions.json");
  }
}
