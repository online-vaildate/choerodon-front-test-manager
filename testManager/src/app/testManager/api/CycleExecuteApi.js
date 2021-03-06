import { stores, axios } from 'choerodon-front-boot';

const { AppState } = stores;
export function getCycle(id) {
  const projectId = AppState.currentMenuType.id;
  return axios.get(`/test/v1/projects/${projectId}/cycle/case/query/one/${id}`);
}
export function getStatusList(statusType) {
  const projectId = AppState.currentMenuType.id;
  return axios.post(`/test/v1/projects/${projectId}/status/query`, { statusType, projectId });
}
export function getUsers(param) {
  const projectId = AppState.currentMenuType.id;
  if (param) {
    return axios.get(`/test/v1/projects/${projectId}/users?param=${param}`);
  }
  return axios.get(`/test/v1/projects/${projectId}/users`);
}
export function editCycle(cycle) {
  const projectId = AppState.currentMenuType.id;
  return axios.post(`/test/v1/projects/${projectId}/cycle/case/update`, cycle);
}
export function addDefects(defects) {
  const projectId = AppState.currentMenuType.id;
  return axios.post(`/test/v1/projects/${projectId}/defect`, defects);
}
export function removeDefect(defectId) {
  const projectId = AppState.currentMenuType.id;
  return axios.delete(`/test/v1/projects/${projectId}/defect/delete/${defectId}`);
}
export function editCycleSide(data) {
  const axiosConfig = {
    headers: { 'content-type': 'multipart/form-datal' },
  };
  const projectId = AppState.currentMenuType.id;
  return axios.post(`/zuul/test/v1/projects/${projectId}/cycle/case/step/updateWithAttach`, data, axiosConfig);
}
export function getCycleDetails(pagination, cycleCaseId) {
  const { size, page } = pagination;
  const projectId = AppState.currentMenuType.id;
  return axios.get(`test/v1/projects/${projectId}/cycle/case/step/query/${cycleCaseId}?size=${size}&page=${page}`);
}
export function getCycleHistiorys(pagination, cycleCaseId) {
  const { size, page } = pagination;
  const projectId = AppState.currentMenuType.id;
  return axios.get(`test/v1/projects/${projectId}/cycle/case/history/${cycleCaseId}?size=${size}&page=${page}`);
}
export function deleteAttachment(id) {
  const projectId = AppState.currentMenuType.id;
  return axios.delete(`test/v1/projects/${projectId}/test/case/attachment/delete/bucket/test/attach/${id}`);
}
