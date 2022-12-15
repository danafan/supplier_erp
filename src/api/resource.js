import http from './request.js'
let path = {	
	getSms:'supplier/sms',											//发送验证码
	login:'login',													//登录
	quit:'supplier/quit',											//退出
	editPwd:'supplier/edit_pwd',									//修改密码
	boardGysInfo:'supply_chain/board_gys_info',						//供应商看板-头部汇总信息
	getGysWeekMonthTotal:'supply_chain/get_gys_weekmonth_total',	//供应商看板 本月本周销量和环比
	getGysWeekMonthChart:'supply_chain/get_gys_weekmonth_table',	//供应商看板-本月本周销量图表
	getGysKsbmList:'supply_chain/get_gys_ksbm_list',				//供应商看板-款式编码列表
	getGysKsbmExport:'supply_chain/get_gys_ksbm_export',			//款式编码列表导出
	getGysSkuList:'supply_chain/get_gys_sku_list',					//下钻列表
	
}						
export default{
	//获取验证码
	getSms(params){
		return http.get(path.getSms, params)
	},
	//登录
	login(params){
		return http.post(path.login, params)
	},
	//退出
	quit(params){
		return http.post(path.quit, params)
	},
	//修改密码
	editPwd(params){
		return http.post(path.editPwd, params)
	},
	//供应商看板-头部汇总信息
	boardGysInfo(params){
		return http.get(path.boardGysInfo, params)
	},
	//供应商看板 本月本周销量和环比
	getGysWeekMonthTotal(params){
		return http.get(path.getGysWeekMonthTotal, params)
	},
	//供应商看板-本月本周销量图表
	getGysWeekMonthChart(params){
		return http.get(path.getGysWeekMonthChart, params)
	},
	//供应商看板-款式编码列表
	getGysKsbmList(params){
		return http.get(path.getGysKsbmList, params)
	},
	//款式编码列表导出
	getGysKsbmExport(params){
		return http.post(path.getGysKsbmExport, params)
	},
	//下钻列表
	getGysSkuList(params){
		return http.get(path.getGysSkuList, params)
	},
	
}









