import {Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  Budjet_KEY = 'total_budget';
  Category_key="all_categories"
     constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
     public storeOnLocalStorage(data:any,key:string): void {
      let requestedData:any ;
          // get array of tasks from local storage
          if(this.Category_key===key){
            requestedData= this.storage.get(key) || [];
            // push new task to array
            requestedData.push(data);
          }else{
            requestedData=data;
          }
         
          // insert updated array to local storage
          this.storage.set(key, requestedData);
          console.log(this.storage.get(key) || 'LocaL storage is empty');
     }
     public getataFromLocalStorage(key:string): any {
        
        // get array of tasks from local storage
        let data = this.storage.get(key) ;
        if(this.Category_key===key){
          data=data || []
        }else{
          data=data ||"";
        }
        return data;

   }
}
