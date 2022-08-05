// package/index.js
// 引入自己封装的组件
import TestButton from './TestButton' // 文件名为index可以省略
// 可以把封装的组件全部放在这个数组中
const components = [
	TestButton
]
// 注册组件
const install = function (Vue) {
	components.forEach((com) => {
		// name是给组件的名字
		Vue.component(com.name, com)
	})
}
// 将components中的所有组件定义为全局组件，在Vue.use的时候，install方法会被调用
export default install

export {
  TestButton
}