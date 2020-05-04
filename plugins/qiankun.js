/*
 * @Author: Leooman
 * @Date: 2020-05-01 11:37:56
 */
import { registerMicroApps,runAfterFirstMounted,setDefaultMountApp,start } from "qiankun"
export default () => {
	registerMicroApps([{
		name:"vue-dev",
		// entry:"//localhost:8081",
		entry:"//leooman.com/Vadmin",
		container:"#sub-app",
		activeRule: location => location.pathname.startsWith('/vue'),
	}],{
		beforeLoad:[
			app => {
				console.log("before load",app)
			}
		],
		beforeMount:[
			app => {
				console.log("before mount",app)
			}
		],
		afterUnmount:[
			app => {
				console.log("after unload",app)
			}
		]
	})

	setDefaultMountApp('/vue')

	runAfterFirstMounted(() => {})

	start({ prefetch: true, jsSandbox: true })
}