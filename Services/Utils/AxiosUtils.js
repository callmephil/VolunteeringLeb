import axios from "axios";
import socketIOClient from "socket.io-client";
import { setSleepState } from "../../Utils/Delayer";
import { isObject, getAccessToken } from "../../Utils/General";
import normalizeUrl from "normalize-url";

const { REACT_APP_NODE_API_URL, REACT_APP_SOCKET_URL } = process.env;
const SOCKET_API = socketIOClient(REACT_APP_SOCKET_URL);
const AxiosConfig = {
  headers: { "Content-Type": "application/json; charset=utf-8", Authorization: `Bearer ${getAccessToken()}`}
};

const makeUrl = (url, params) => {
  try {
    const regexPattern = /(:[A-z])\w+/g; // Match any => :par_am
    if (typeof params === "undefined" || params === null) {
      if (url.includes(":")) { 
        throw new Error(`${url}, Expected params recieved ${params}`); 
      } else return url;
    }
    if (isObject(params)) {
      const keys = Object.keys(params);
      let newUrl = url;
      keys.forEach(key => {
        newUrl = newUrl.replace(`:${key}`, params[key]);
      });
      if (newUrl.includes(":")) {
        const getMissingParamsName = newUrl.match(regexPattern);
        throw new Error(`${url}, Missing Params ${getMissingParamsName}`);
      } else return newUrl;
    } else return url.replace(regexPattern, params);
  } catch (err) {
    return { err }
  }
};

const sortOptions = (template, options) => {
  try {
    const { method, path, body } = template;
    const regexPattern = /(:[A-z])\w+/g; // Match any => :par_am
    if (typeof options === "undefined" || options === null || !isObject(options)) {
      if (Array.isArray(body) && body.length > 0) {
        throw new Error(`${path}, Expected body ${body}, recieved ${options}`);
      } else return null;
    }

    const data = {};
    const _copy = { ...options }; // Deep Copy
    const params = path.match(regexPattern);
    if (Array.isArray(params)) {
      if (params.length === Object.keys(options).length) {
        return null;
      }
      params.forEach(param => {
        delete _copy[param.replace(":", "")];
      });
    }

    if (Array.isArray(body) && body.length > 0) {
      if (!isObject(_copy)) {
        throw new Error(`Axios request, Expected body but recieved: ${_copy} instead... aborting`);
      } else {
        body.forEach(key => {
          if (typeof _copy[key] !== "undefined") {
            data[key] = _copy[key];
            delete _copy[key];
          } else throw new Error(`Missing props ${key} in ${JSON.stringify(_copy)}... aborting`);
        });
      }
    }

    if (isObject(_copy) && Object.keys(_copy).length > 0) // Temp
      console.info('extra parameters detected!', path, method, _copy);
    
    if (Object.keys(data).length > 0) {
      return method === "GET" ?  { params: { ...data }, ..._copy } : { data, ..._copy }
    } else return { ..._copy };

  } catch (err) {
    return { err }
  }
};

const handleCatch = (err, url) => {
  const isCanceled = axios.isCancel(err);
  const msg = isCanceled ? "Request Canceled " : "Axios Catch ";
  console.error(msg + url, err.message);
  return {
    success: isCanceled,
    isCancel: isCanceled,
    result: isCanceled ? null : err.message
  };
};

export default class AxiosUtils {
  constructor(setLoading, refTimeout, isApi = true) {
    this.isApi = isApi;
    this.socket = SOCKET_API;
    this.setLoading = setLoading;
    this.refTimeout = refTimeout;
    this.API_URL = REACT_APP_NODE_API_URL;
    this.service = axios.create({
      ...AxiosConfig
    });   
  }

  getCancelToken = () => {
    return axios.CancelToken.source();
  };

  AxiosRequest = async (template, cancelToken, options) => {
    return setSleepState(this.refTimeout, this.setLoading, 1000).then(async () => {
      try {
        const { method, path } = template;
        const isUrl = makeUrl(path, options);
        if (isUrl && isUrl.err) {
          throw handleCatch(isUrl.err, path);
        }
        const props = sortOptions(template, options);
        if (props && props.err) {
          throw handleCatch(props.err, path);
        }

        const url = this.isApi ? normalizeUrl(`${this.API_URL}/${isUrl}`) : isUrl;
        const response = await this.service.request({
          url,
          method,
          cancelToken: cancelToken.token,
          ...props,
        });

        console.log(url, props);
        // if (method === "GET") {
          if (response && response.data) {
            return {
              success: true,
              isCancel: false,
              result: response.data
            }
          } else {
            return {
              success: false,
              isCancel: false,
              result: response.data
            }
          }
        // }

      } catch (err) {
        return handleCatch(err, template.path);
      }
    })
  }
}
