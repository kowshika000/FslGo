import * as Types from '../ActionTypes'
export const opensailingRequest = ({sent_}) => ({
    type: Types.OPENSAILING_REQUEST,
    payload:{sent_}
  });