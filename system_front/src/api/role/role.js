import request from '@/utils/request'

//常量
const api_name ='/admin/system/sysRole/'
export default {
  //列表
  getPageList(page,limit,searchObj){
    return request({
      //接口路径
      // url: '/admin/system/sysRole/'+page+"/"+limit,
      url: `${api_name}`/`${page}`/`${limit}`,
      //提交方式
      method: 'get',
      //参数
      params: searchObj
    })
  }
}

