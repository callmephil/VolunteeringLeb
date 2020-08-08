/* eslint-disable no-useless-constructor */
import AxiosUtils from "./Utils/AxiosUtils";
import { Template } from "./Template/ApiTemplate";

export default class Templateservice extends AxiosUtils {
  constructor(setLoading, refTimeout,) {
    super(setLoading, refTimeout);
    this.refTimeout = refTimeout;
  }

  getExample = async (id, cancelToken) => {
    return await this.AxiosRequest(Template.GET_TEMPLATE, cancelToken, id);
  };

  getByIdExample = async (id, cancelToken)  => {
    return await this.AxiosRequest(Template.GET_ALL_ASSIGNMENTS, cancelToken, id);
  };

  createExample = async (props, cancelToken) => {
    return await this.AxiosRequest(Template.CREATE_TEMPLATE, cancelToken, props);
  };

  updateExample = async (id, props, cancelToken) => {
    return await this.AxiosRequest(Template.UPDATE_TEMPLATE_BY_ID, cancelToken, {id, ...props});
  };

  deleteExample = async (id, cancelToken) => {
    return await this.AxiosRequest(Template.DELETE_TEMPLATE_BY_ID, cancelToken, id);
  };
}
