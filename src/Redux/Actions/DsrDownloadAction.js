import * as Types from '../ActionTypes'
export const DsrDownloadRequest = ({payload}) => ({
    type: Types.DSR_DOWNLOAD_REQUEST,
    payload:{payload}
  });