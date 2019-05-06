import { Injectable } from '@angular/core';

const CONFIG ={
apiUrl:'http://54.89.235.149:3000/' 
};

@Injectable()
export class ServicesSettings {

  constructor() {}
  
    public getApiUrl(){
      return CONFIG.apiUrl;
    }

}