import { getAction,deleteAction,putAction,postAction} from '@/api/manage'

//根路径
const doMian = "/jx-boot/";
//图片预览请求地址
const imgView = "http://127.0.0.1:8080/jx-boot/sys/common/view/";


//角色管理
const addRole = (params)=>postAction("/sys/role/add",params);
const editRole = (params)=>putAction("/sys/role/edit",params);
const getRoleList = (params)=>getAction("/sys/role/list",params);
const deleteRole = (params)=>deleteAction("/sys/role/delete",params);
const deleteRoleList = (params)=>deleteAction("/sys/role/deleteBatch",params);
const checkRoleCode = (params)=>getAction("/sys/role/checkRoleCode",params);
const queryall = (params)=>getAction("/sys/role/queryall",params);

//用户管理
const addUser = (params)=>postAction("/sys/user/add",params);
const editUser = (params)=>putAction("/sys/user/edit",params);
const queryUserRole = (params)=>getAction("/sys/user/queryUserRole",params);
const getUserList = (params)=>getAction("/sys/user/list",params);
const deleteUser = (params)=>deleteAction("/sys/user/delete",params);
const deleteUserList = (params)=>deleteAction("/sys/user/deleteBatch",params);
const frozenBatch = (params)=>putAction("/sys/user/frozenBatch",params);
//验证用户账号是否唯一
const checkUsername = (params)=>getAction("/sys/user/checkOnlyUser",params);
//改变密码
const changPassword = (params)=>putAction("/sys/user/changPassword",params);

//权限管理
const addPermission= (params)=>postAction("/sys/permission/add",params);
const editPermission= (params)=>putAction("/sys/permission/edit",params);
const getPermissionList = (params)=>getAction("/sys/permission/list",params);
const deletePermission = (params)=>deleteAction("/sys/permission/delete",params);
const deletePermissionList = (params)=>deleteAction("/sys/permission/deleteBatch",params);
const queryTreeList = (params)=>getAction("/sys/permission/queryTreeList",params);
const queryListAsync = (params)=>getAction("/sys/permission/queryListAsync",params);
const queryRolePermission = (params)=>getAction("/sys/permission/queryRolePermission",params);
const saveRolePermission = (params)=>postAction("/sys/permission/saveRolePermission",params);
const queryPermissionsByUser = (params)=>getAction("/sys/permission/queryByUser",params);
const loadAllRoleIds = (params)=>getAction("/sys/permission/loadAllRoleIds",params);

// 部门管理
const queryDepartTreeList = (params)=>getAction("/sysdepart/sysDepart/queryTreeList",params);
const queryIdTree = (params)=>getAction("/sysdepart/sysDepart/queryIdTree",params);
const queryParentName   = (params)=>getAction("/sysdepart/sysDepart/queryParentName",params);
const searchByKeywords   = (params)=>getAction("/sysdepart/sysDepart/searchBy",params);

//日志管理
const getLogList = (params)=>getAction("/sys/log/list",params);
const deleteLog = (params)=>deleteAction("/sys/log/delete",params);
const deleteLogList = (params)=>deleteAction("/sys/log/deleteBatch",params);

//数据字典
const addDict = (params)=>postAction("/sys/dict/add",params);
const editDict = (params)=>putAction("/sys/dict/edit",params);
const getDictList = (params)=>getAction("/sys/dict/list",params);
const treeList = (params)=>getAction("/sys/dict/treeList",params);
const delDict = (params)=>deleteAction("/sys/dict/delete",params);
const getDictItemList = (params)=>getAction("/sys/dictItem/list",params);
const addDictItem = (params)=>postAction("/sys/dictItem/add",params);
const editDictItem = (params)=>putAction("/sys/dictItem/edit",params);
const delDictItem = (params)=>deleteAction("/sys/dictItem/delete",params);
const delDictItemList = (params)=>deleteAction("/sys/dictItem/deleteBatch",params);

//字典标签专用（通过code获取字典数组）
export const ajaxGetDictItems = (code, params)=>getAction(`/sys/dict/getDictItems/${code}`,params);

//系统通告
const doReleaseData = (params)=>getAction("/sys/annountCement/doReleaseData",params);
const doReovkeData = (params)=>getAction("/sys/annountCement/doReovkeData",params);
//获取系统访问量
const getLoginfo = (params)=>getAction("/sys/loginfo",params);

export {
  imgView,
  doMian,
  addRole,
  editRole,
  getRoleList,
  deleteRole,
  deleteRoleList,
  checkRoleCode,
  addUser,
  editUser,
  queryUserRole,
  queryall,
  getUserList,
  deleteUser,
  deleteUserList,
  frozenBatch,
  checkUsername,
  changPassword,
  getPermissionList,
  deletePermission,
  deletePermissionList,
  addPermission,
  editPermission,
  queryTreeList,
  queryListAsync,
  queryRolePermission,
  saveRolePermission,
  queryPermissionsByUser,
  loadAllRoleIds,
  queryDepartTreeList,
  queryIdTree,
  queryParentName,
  searchByKeywords,
  getLogList,
  deleteLog,
  deleteLogList,
  getDictList,
  addDict,
  editDict,
  delDict,
  treeList,
  getDictItemList,
  addDictItem,
  editDictItem,
  delDictItem,
  delDictItemList,
  doReleaseData,
  doReovkeData,
  getLoginfo
}



