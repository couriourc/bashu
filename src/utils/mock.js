let Mock = require('mockjs')
// 拦截请求
export default class mock {
  constructor(base_url , fn , template) {
    this.base_url = base_url;
    this.fn = fn;
    this.template = template;
    return Mock.mock(base_url , template)
  }
}

mock.prototype.createTemplate = function(){

}
mock.prototype.result = function (template)  {
    return this.fn(
      function (){
        return this.createTemplate(template);
      }
    )
}
