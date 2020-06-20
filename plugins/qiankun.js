/*
 * @Author: Leooman
 * @Date: 2020-05-01 11:37:56
 */
import { registerMicroApps,runAfterFirstMounted,setDefaultMountApp,start } from "qiankun"
export default () => {
	registerMicroApps([{
		name:"vue-app",
		// entry:"//localhost:8081",
		entry:"//leooman.com/visual/",
		container:"#sub-app",
		activeRule: location => location.pathname.startsWith(process.env.NODE_ENV === "production" ? '/micro-frontends/vue' : '/vue'),
	},{
		name:"nuxt-app",
		entry:"//leooman.com/workbench/",
		container:"#sub-app",
		activeRule: location => location.pathname.startsWith('/micro-frontends/nuxt'),
	}],{
		beforeLoad:[
			app => {}
		],
		beforeMount:[
			app => {}
		],
		afterUnmount:[
			app => {}
		]
	})

	setDefaultMountApp('/micro-frontends')

	runAfterFirstMounted(() => {})

	start({ prefetch: true, jsSandbox: true })
}