import { observable, action } from 'mobx'
class User {
  @observable user
  constructor () {
    this.user = {
      customerId: '',
      birth: '1991年06月',
      phone: '13914407178',
      name: '刘云钊',
      edu: '本科',
      collodge: '南京师范大学泰州学院',
      address: '上海市长宁区仙霞西路新泾北苑'
    }
  }
  @action.bound
  setUser = user => { this.user = user }
  @action.bound
  delUser = user => { this.user = {} }
}
const user = new User()
export default {
 user
}