import { DoubleClickError } from "@/models/error.model";
import axios,{ AxiosRequestConfig, AxiosResponse, Method } from "axios";
import { AuthError } from '../models/error.model';
import { strip } from 'underscore.string';
import { stringUtil } from "./string.util";
class AxiosUtil {
  //....
  private baseUrl = `http://${process.env.VUE_APP_SERVER_DOMAIN}`;
  //Check to double click
  private pendingSet = new Set<string>();
  private timeout = 30000; //

  public async get<T>(
    url: string,
    queryParams?: any
  ): Promise<AxiosResponse<T>> {
    return this.request<T>(url, "GET", null, queryParams);
  }

  public async post<T>(url: string, data: any): Promise<AxiosResponse<T>> {
    return this.request<T>(url, "POST", data);
  }

  public async put<T>(url: string, data: any): Promise<AxiosResponse<T>> {
    return this.request<T>(url, "PUT", data);
  }

  public async delete<T>(url: string): Promise<AxiosResponse<T>> {
    return this.request<T>(url, "DELETE");
  }

  //TODO
  private async request<T>(
    url: string,
    method: Method,
    data?: any,
    params?: any
  ) {

    //1. Check Double Click
    const pendingUrl = `${method} ${url}`;
    if(this.pendingSet.has(pendingUrl)){
      console.warn('double click');
      throw new DoubleClickError();
    }
    this.pendingSet.add(pendingUrl);

    //2.clear body
    let body:any = undefined;
    if(data){
      body = JSON.parse(JSON.stringify(data));
      this.clearBody(body);
    }

    //3.get idToken
    // const idToken = this.getCookieValue('idToken');
    // if(idToken == undefined){
    //   throw new AuthError();
    // }
    // this.refreshCookie('idToken');

    //4.axios request config
    const config: AxiosRequestConfig = {
      url : this.baseUrl + url,
      method: method,
      data:body,
      params:params,
      // headers:{
      //   Authorization: idToken
      // },
      timeout: this.timeout,
    };

    try {
      return axios.request<T>(config);
    } finally {
      //Delete pendingUrl
      this.pendingSet.delete(pendingUrl);
    }
  }

  /**
   * In TypeScript, the syntax Object.keys(data) is a call to the keys 
   * method of the Object class.This method returns an array of the keys of the object data
   * 
                  const data = {
                    name: 'John',
                    age: 30,
                    city: 'New York'
                  };

      ---> then calling Object.keys(data) would return an array of strings with the values ['name', 'age', 'city'].
      Object.keys is called on the outer data object, it only returns the keys of the top-level properties in the objec
   */
  public clearBody(data: any){
    //when data is only an object
    if(typeof data == 'object' && !Array.isArray(data)){
      for (const key of Object.keys(data)){
        const value = data[key];
        if((typeof value === 'string' && stringUtil.isBlank(value)) || value === null){
          //clear the top level blank property
          delete data[key];
          //if the value is an array
        } else if( Array.isArray(value)){
          for(const item of value){
            this.clearBody(item);
          }
          //if the value is an object
        } else if (typeof value === 'object'){
          this.clearBody(value);
        }
      }
      //when data is an array
    } else if (Array.isArray(data)){
      for (const item of data){
        this.clearBody(item);
      }
    }
  }

  //Set Cookie
  public setCookie (key: string, value: string, maxAge = 180 * 60){
    const arr = [`${key}=${value}`];
    const option: any = {
      path:'/',
      'max-age': maxAge,
      Secure:true,
    };
    for (const key of Object.keys(option)){
      arr.push(`${key}=${option[key]}`);
    }

    const cookie = arr.join(';');
    document.cookie = cookie;
  }

  //GET cookie
  public getCookieValue(key: string){
    const cookies = document.cookie.split(';');
    /**
     * 
     * ------  strip(str: string, characters?: string): string; ------
     * 
     * Trims defined characters from begining and ending of the string.
     * Defaults to whitespace characters.
     * ('  foobar   ') => 'foobar'
     * ('_-foobar-_', '_-') => 'foobar'
     * @param str
     * @param characters
     */
    const target = cookies.map((cookie)=> strip(cookie)).filter((cookie) => cookie.startsWith(key));
    if(target.length == 0){
      return undefined;
    }
    return target[0].split('=')[1];
  }

  //Refresh cookie
  public refreshCookie(key: string){
    const cookieValue = this.getCookieValue(key);
    if (cookieValue == undefined){
      return;
    }
    this.setCookie(key, cookieValue);
  }
}

export const axiosUtil = new AxiosUtil();

const data = {
  name: 'John',
  age: 30,
  city: 'New York',
  workType:{
    first: 'office',
    second: 'home'
  }
};

