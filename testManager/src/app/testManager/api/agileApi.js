import { stores, axios } from 'choerodon-front-boot';

const { AppState } = stores;

export function getVersionCode() {
  const projectId = AppState.currentMenuType.id;
  return axios.get(`agile/v1/projects/${projectId}/lookup_values/version`);
}

export function getProjectVersion() {
  const projectId = AppState.currentMenuType.id;
  return axios.get(`agile/v1/projects/${projectId}/product_version/versions`);
}
export function getIssueList(summary, type) {
  const projectId = AppState.currentMenuType.id;
  const search = {};
  if (type) {
    search.typeCode = ['issue_test'];
  }
  if (summary) {
    search.summary = summary;
  }
  return axios.post(`agile/v1/projects/${projectId}/issues/no_sub`, { advancedSearchArgs: search });
}
export function getIssueListSearch(search) {
  const projectId = AppState.currentMenuType.id;
  return axios.post(`agile/v1/projects/${projectId}/issues/no_sub`, search);
}
export function getModules() {
  const projectId = AppState.currentMenuType.id;
  return axios.get(`agile/v1/projects/${projectId}/component`);
}
export function getLabels() {
  const projectId = AppState.currentMenuType.id;
  return axios.get(`agile/v1/projects/${projectId}/issue_labels`);
}
export function getPrioritys() {
  const projectId = AppState.currentMenuType.id;
  return axios.get(`agile/v1/projects/${projectId}/lookup_values/priority`);
}
export function getIssueStatus() {
  const projectId = AppState.currentMenuType.id;
  return axios.get(`agile/v1/projects/${projectId}/issue_status/list`);
}
export function getIssueCount(search) {
  const projectId = AppState.currentMenuType.id;
 
  return axios.post(`agile/v1/projects/${projectId}/issues/test_component/no_sub`, search);
}
