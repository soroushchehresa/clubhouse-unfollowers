import axios, { AxiosResponse, AxiosError } from 'axios';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

const methods = ['get', 'post', 'put', 'patch', 'delete', 'head'];

class Request {
  constructor() {
    methods.forEach((method: string) => {
      (this as any)[method] = Request.requestWrapper(method);
    });
  }

  static requestWrapper(method: string) {
    return async (
      url: string,
      data: object,
      options: object,
    ): Promise<() => Object> => {
      const { requestURL, request }: {requestURL: string, request: object} = await Request.decorateRequest({
        url,
        method,
        data,
        options
      });
      return new Promise((resolve) => {
        axios.request({ url: requestURL, ...request })
          .then((response: AxiosResponse<any>) => {
            Request.checkStatus({ response, resolve });
          })
          .catch((response: AxiosError<any>) => {
            Request.checkStatus({ response, resolve });
          });
      });
    };
  }

  private static checkStatus({ response, resolve }: {response: AxiosResponse<any> | AxiosError<any>, resolve: any}): object {
    const status = _.get(response, ['status']) || _.get(response, ['response', 'status']);
    if (status === 401) {
      localStorage.clear();
      window.location.reload();
    }
    return (status && status >= 200 && status < 300)
      ? resolve(response) : resolve(_.get(response, 'response'));
  }

  private static async decorateRequest(
    {
      data,
      method,
      url,
      options,
    }: {
      method: string;
      url: string;
      options: object;
      data: object;
    },
  ): Promise<{requestURL: string, request: object}> {
    const requestURL = `https://cors.bridged.cc/https://www.clubhouseapi.com/api/${url}`;
    const requestHeadersDataDecoration = await Request.getHeaderDataDecoration();
    const requestData: {data?: object, headers: object, method: string} = {
      headers: {
        ...{
          ...(_.get(requestHeadersDataDecoration, 'headers')),
          ...(_.get(options, 'headers') || {}),
        },
      },
      method,
      data,
    };
    if (method === 'get') {
      delete requestData.data;
    }
    return {
      requestURL,
      request: requestData,
    };
  }

  private static async getHeaderDataDecoration(): Promise<object> {
    let token: string | null = localStorage.getItem('CH-token');
    let uid: string | null = localStorage.getItem('CH-uid');
    let headers: object = {
      'User-Agent': 'clubhouse/324 (iPhone; iOS 14.4; Scale/2.00)',
      'CH-Languages': 'en-US',
      'CH-Locale': 'en_US',
      'CH-AppVersion': '0.1.30',
      'CH-AppBuild': '324',
      'CH-DeviceId': uuidv4(),
      'CH-UserID': '(null)',
      'Content-Type': 'application/json; charset=utf-8',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US;q=1',
      'Connection': 'Connection',
      'Host': 'www.clubhouseapi.com',
      'Access-Control-Allow-Origin': '*',
    };
    if (token && uid) {
      headers = {
        ...headers,
        'Authorization': `Token ${token}`,
        'CH-UserID': parseInt(uid, 10),
      };
    }
    return {
      headers,
    };
  }
}

export default new Request();
