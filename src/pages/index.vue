<template>
	<div class="supplier_data_container">
		<div class="tab_menu">
			<el-dropdown trigger="click" @command="handleCommand">
				<span class="el-dropdown-link setting">
					用户设置<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="1">修改密码</el-dropdown-item>
					<el-dropdown-item command="2">退出登录</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
		<div class="page_content">
			<div class="page_top_row">
				<el-form :inline="true" size="small" class="demo-form-inline">
					<el-form-item label="供应商：">
						<el-select v-model="supplier_name" filterable remote reserve-keyword placeholder="请输入供应商" @change="boardGysInfo">
							<el-option v-for="item in supplier_list" :key="item" :label="item" :value="item">
							</el-option>
						</el-select>
					</el-form-item>
				</el-form>
				<div class="name">{{top_info.gys}}</div>
				<div class="type_row">
					<div>{{top_info.jsfs}}</div>
					<div>{{top_info.gys_level}}</div>
				</div>
			</div>
			<el-card v-loading="info_loading">
				<div slot="header">
					<span class="card_title">数据更新时间：{{update_date}}</span>
				</div>
				<div class="content_row">
					<div class="row_item">
						<img class="item_icon" src="../static/zsks_icon.png">
						<div class="item_text">
							<div class="text_val">{{top_info.ksbm_num}}</div>
							<div class="text_label">在售款数</div>
						</div>
					</div>
					<el-popover placement="right" width="530" trigger="click">
						<el-table :data="xssl_1_data.data" tooltip-effect="dark" style="width: 100%" :header-cell-style="{'background':'#f4f4f4'}" max-height="300px">
							<el-table-column width="280" align="center" show-overflow-tooltip property="gyshh" label="供应商货号"></el-table-column>
							<el-table-column width="240" align="center" show-overflow-tooltip property="xssl_1" label="销量"></el-table-column>
						</el-table>
						<div class="page">
							<el-pagination @size-change="detailSizeChange" @current-change="detailPageChange" :current-page="detail_page" :pager-count="5" :page-size="detail_pagesize" layout="total, prev, pager, next, jumper" :total="xssl_1_data.total">
							</el-pagination>
						</div>
						<div class="row_item pointer" slot="reference" @click="getDetail('xssl_1')">
							<img class="item_icon" src="../static/zrxl_icon.png">
							<div class="item_text">
								<div class="text_val">{{top_info.xssl_1}}</div>
								<div class="text_label">昨日销量</div>
							</div>
						</div>
					</el-popover>
					<div class="row_item">
						<img class="item_icon" src="../static/jsstxl_icon.png">
						<div class="item_text">
							<div class="text_val">{{top_info.xssl_sum_30}}</div>
							<div class="text_label">近30天销量</div>
						</div>
					</div>
					<div class="row_item">
						<img class="item_icon" src="../static/stl_icon.png">
						<div class="item_text">
							<div class="text_val">{{top_info.stl}}</div>
							<div class="text_label">实退率</div>
						</div>
					</div>
					<div class="row_item">
						<img class="item_icon" src="../static/mll_icon.png">
						<div class="item_text">
							<div class="text_val">{{top_info.mll}}</div>
							<div class="text_label">毛利率</div>
						</div>
					</div>
				</div>
			</el-card>
			<el-card class="margin_top" v-loading="info_loading">
				<div slot="header">
					<span class="card_title">库存报货统计</span>
				</div>
				<div class="content_row">
					<div class="bhtj_item">
						<el-popover placement="right" width="710" trigger="click">
							<el-table :data="xykc_data.data" tooltip-effect="dark" style="width: 100%" :header-cell-style="{'background':'#f4f4f4'}" max-height="300px">
								<el-table-column width="280" align="center" show-overflow-tooltip property="gyshh" label="供应商货号"></el-table-column>
								<el-table-column width="120" align="center" show-overflow-tooltip property="color" label="颜色"></el-table-column>
								<el-table-column width="120" align="center" show-overflow-tooltip property="size" label="尺码"></el-table-column>
								<el-table-column width="180" align="center" show-overflow-tooltip property="xykc" label="当前库存数量"></el-table-column>
							</el-table>
							<div class="page">
								<el-pagination @size-change="detailSizeChange" @current-change="detailPageChange" :current-page="detail_page" :pager-count="5" :page-size="detail_pagesize" layout="total, prev, pager, next, jumper" :total="xykc_data.total">
								</el-pagination>
							</div>
							<div class="val_item pointer" slot="reference" @click="getDetail('xykc')">
								<div class="bhtj_val">{{top_info.xykc}}</div>
								<div class="bhtj_label">当前库存</div>
							</div>
						</el-popover>
						<div class="val_item margin_top">
							<div class="bhtj_val">{{top_info.pbh_dhl_1}}</div>
							<div class="bhtj_label">昨日排除备货到货率</div>
						</div>
					</div>
					<div class="bhtj_item">
						<el-popover placement="right" width="710" trigger="click">
							<el-table :data="cgsl_0_data.data" tooltip-effect="dark" style="width: 100%" :header-cell-style="{'background':'#f4f4f4'}" max-height="300px">
								<el-table-column width="280" align="center" show-overflow-tooltip property="gyshh" label="供应商货号"></el-table-column>
								<el-table-column width="120" align="center" show-overflow-tooltip property="color" label="颜色"></el-table-column>
								<el-table-column width="120" align="center" show-overflow-tooltip property="size" label="尺码"></el-table-column>
								<el-table-column width="180" align="center" show-overflow-tooltip property="cgsl_0" label="报货数量"></el-table-column>
							</el-table>
							<div class="page">
								<el-pagination @size-change="detailSizeChange" @current-change="detailPageChange" :current-page="detail_page" :pager-count="5" :page-size="detail_pagesize" layout="total, prev, pager, next, jumper" :total="cgsl_0_data.total">
								</el-pagination>
							</div>
							<div class="val_item pointer" slot="reference" @click="getDetail('cgsl_0')">
								<div class="bhtj_val">{{top_info.jrbhs}}</div>
								<div class="bhtj_label">今日报货数</div>
							</div>
						</el-popover>
						
						<div class="val_item margin_top">
							<div class="bhtj_val">{{top_info.dhl_7}}</div>
							<div class="bhtj_label">7天到货率</div>
						</div>
					</div>
					<div class="bhtj_item">
						<div class="val_item">
							<div class="bhtj_val">{{top_info.zrdhl}}</div>
							<div class="bhtj_label">昨日到货率</div>
						</div>
						<div class="val_item margin_top">
							<div class="bhtj_val">{{top_info.pbh_dhl_7}}</div>
							<div class="bhtj_label">7天排除备货到货率</div>
						</div>
					</div>
				</div>
			</el-card>
			<el-card class="margin_top">
				<div slot="header">
					<span class="card_title">销量统计</span>
				</div>
				<div class="xltj_row">
					<div class="left_total">
						<div class="left_item" v-loading="xl_total_loading">
							<div class="label">近30天销量</div>
							<div class="value">{{pro_info.month_xssl}}</div>
							<div class="percentage_row">
								<img class="per_icon" src="../static/per_up_icon.png" v-if="pro_info.month_hb >= 0">
								<img class="per_icon" src="../static/per_down_icon.png" v-if="pro_info.month_hb < 0">
								<div class="per_value" :class="{'red_color':pro_info.month_hb < 0}">{{pro_info.month_hb}}%</div>
								<div class="per_label">环比上周期</div>
							</div>
						</div>
						<div class="left_item left_item_margin" v-loading="xl_total_loading">
							<div class="label">近7天销量</div>
							<div class="value">{{pro_info.week_xssl}}</div>
							<div class="percentage_row">
								<img class="per_icon" src="../static/per_up_icon.png" v-if="pro_info.week_hb >= 0">
								<img class="per_icon" src="../static/per_down_icon.png" v-if="pro_info.week_hb < 0">
								<div class="per_value" :class="{'red_color':pro_info.week_hb < 0}">{{pro_info.week_hb}}%</div>
								<div class="per_label">环比上周期</div>
							</div>
						</div>
					</div>
					<div class="right_chart">
						<div class="tab_row">
							<div class="tab_item" :class="{'active_tab':type == '1'}" @click="checkDate('1')">近30天</div>
							<div class="tab_item margin_left" :class="{'active_tab':type == '2'}" @click="checkDate('2')">近7天</div>
						</div>
						<!-- 本月图表 -->
						<div class="tj_chart" id="month_chart" v-if="type == '1'" v-loading="chart_loading"></div>
						<!-- 本周图表 -->
						<div class="tj_chart" id="week_chart" v-if="type == '2'" v-loading="chart_loading"></div>
					</div>
				</div>
			</el-card>
			<el-card class="margin_top">
				<div class="header_row" slot="header">
					<span class="card_title">款式信息</span>
					<el-button type="primary" plain size="small" @click="commitExport">导出<i class="el-icon-download el-icon--right"></i></el-button>
				</div>
				<div>
					<el-form :inline="true" size="small" class="demo-form-inline">
						<el-form-item label="输入搜索：">
							<el-input placeholder="款式编码" suffix-icon="el-icon-search" v-model="ksbm" @change="ksPageChange(1,'1')">
							</el-input>
						</el-form-item>
						<el-form-item label="是否新品：">
							<el-select v-model="is_new" clearable :popper-append-to-body="false" placeholder="全部" @change="ksPageChange(1,'1')">
								<el-option label="是" value="是"></el-option>
								<el-option label="否" value="否"></el-option>
							</el-select>
						</el-form-item>
					</el-form>
					<el-table size="small" :data="ks_table_data" tooltip-effect="dark" style="width: 100%" :header-cell-style="{'background':'#f4f4f4'}" @sort-change="ksSortChange" ref="ks_table" v-loading="ks_loading">
						<el-table-column :prop="item.prop" :label="item.label" :width="item.width" align="center" show-overflow-tooltip :sort-orders="['descending', 'ascending', null]" :sortable="item.is_fixed?'custom':false" :render-header="renderHeader" v-for="item in ks_column_list">
							<template slot-scope="scope">
								<div style="color: #1890FF;cursor: pointer" v-if="item.type == 2" @click="getDetail('sku',scope.row.ksbm)">{{scope.row[item.prop]}}</div>
								<!-- 图片 -->
								<el-image :z-index="2008" style="width: 50px;height: 50px" :src="scope.row.images[0]" fit="scale-down" :preview-src-list="scope.row.images" v-else-if="item.type == 3"></el-image>
								<!-- 供应商/等级 -->
								<div v-else-if="item.type == 4">{{scope.row.gys}}/{{scope.row.gys_level}}</div>
								<!-- 普通 -->
								<div v-else>{{scope.row[item.prop]}}</div>
							</template>
						</el-table-column>
					</el-table>
					<div class="page">
						<el-pagination @size-change="ksSizeChange" @current-change="ksPageChange" :current-page="ks_page" :pager-count="11" :page-size="ks_pagesize" :page-sizes="[5, 10, 15, 20]" layout="total, sizes, prev, pager, next, jumper" :total="ks_total">
						</el-pagination>
					</div>
				</div>
			</el-card>
		</div>
		<!-- 下钻 -->
		<el-dialog title="SKU信息" @close="closeDetail" :visible.sync="detailDialog">
			<el-table size="small" :data="sku_table_data" tooltip-effect="dark" style="width: 100%" :header-cell-style="{'background':'#f4f4f4'}"  @sort-change="skuSortChange" ref="sku_table" v-loading="sku_loading">
				<el-table-column :prop="item.prop" :label="item.label" :width="item.width" align="center" show-overflow-tooltip :sort-orders="['descending', 'ascending', null]" :sortable="item.is_fixed?'custom':false" :render-header="renderHeader" v-for="item in sku_column_list"></el-table-column>
			</el-table>
			<div class="page">
				<el-pagination @size-change="detailSizeChange" @current-change="detailPageChange" :current-page="detail_page" :pager-count="11" :page-size="detail_pagesize" :page-sizes="[5, 10, 15, 20]" layout="total, sizes, prev, pager, next, jumper" :total="sku_total">
				</el-pagination>
			</div>
		</el-dialog>
	</div>
</template>
<script>
	import resource from '../api/resource.js'

	import { getNextDate } from '../api/filterDate.js'

	import {exportPost} from '../api/export.js'
	import { MessageBox,Message } from 'element-ui';

	export default{
		data(){
			return{
				supplier_name:"",	//可传递的供应商名称
				update_date:"",		//数据更新日
				top_info:{},		//顶部信息
				info_loading:false,
				pro_info:{},		//头部汇总信息
				xl_total_loading:false,
				type:'1',			//销量统计类型（1:本月；2:本周）
				monthChart:null,
				month_list_data:{},
				weekChart:null,
				week_list_data:{},
				chart_loading:false,
				ksbm:"",			//输入的款式编码
				is_new:"",			//是否新品
				ks_column_list:[{
					label:"图片",
					prop:'tp',
					width:"120",
					type:3
				},{
					label:"供应商货号",
					width:"140",
					prop:'gyshh',
					type:2,
				},{
					label:"7天日均销量",
					prop:'xssl_sum_7',
					width:"120",
					is_fixed:true
				},{
					label:"7天毛利率",
					prop:'mll',
					width:"100",
					is_fixed:true
				},{
					label:"15天实退率",
					prop:'stl_15',
					width:"120",
					is_fixed:true
				},{
					label:"7天到货率",
					prop:'dhl_7',
					width:"100",
					is_fixed:true
				},{
					label:"",
					prop:'xssl_3',
					width:"100",
				},{
					label:"",
					prop:'xssl_2',
					width:"100",
				},{
					label:"",
					prop:'xssl_1',
					width:"100",
				},{
					label:"主卖店铺",
					prop:'zmdp',
					width:"100",
				},{
					label:"现有库存",
					prop:'xykc',
					width:"100",
					is_fixed:true
				},{
					label:"批发价",
					prop:'pfj',
					width:"80",
				},{
					label:"审计成本",
					prop:'sjcb',
					width:"80",
				},{
					label:"商品名称",
					prop:'mc',
					width:"100",
				},{
					label:"供应商/供应商等级",
					prop:"",
					width:"130",
					type:4,
				},{
					label:"结算方式",
					prop:'jsfs',
					width:"90",
				},{
					label:"款式编码",
					prop:'ksbm',
					width:"90",
				}],							//款式信息列
				date:"",
				ks_table_data:[],			//款式信息数据列表
				ks_total:0,
				ks_loading:false,
				ks_sort:"",
				ks_page:1,
				ks_pagesize:10,	
				detail_page:1,				//下钻的页码
				detail_pagesize:10,			
				xssl_1_data:{},				//昨日销量数据
				xykc_data:{},				//当前库存数据
				cgsl_0_data:{},				//今日报货数
				detailDialog:false,			//sku弹窗
				sku_table_data:[],			//sku数据列表
				sku_total:0,				
				sku_loading:false,
				detail_sku:"",				//sku下钻
				detail_sort:"",				//sku排序
				sku_column_list:[{
					label:"颜色",
					width:"100",
					prop:"color"
				},{
					label:"尺码",
					width:"100",
					prop:"size"
				},{
					label:"3天销量",
					prop:"xssl_sum_3",
					width:"100",
					is_fixed:true
				},{
					label:"7天销量",
					prop:"xssl_sum_7",
					width:"100",
					is_fixed:true
				},{
					label:"",
					width:"120",
					prop:"xssl_3",
					is_fixed:true
				},{
					label:"",
					width:"120",
					prop:"xssl_2",
					is_fixed:true
				},{
					label:"",
					width:"120",
					prop:"xssl_1",
					is_fixed:true
				},{
					label:"现有库存",
					prop:"xykc",
					width:"100",
					is_fixed:true
				}],							//sku信息列
			}
		},
		created(){
			this.supplier_name = this.supplier_list[0];
			//获取顶部数据
			this.boardGysInfo();
		},
		computed:{
			//供应商列表
			supplier_list(){
				return this.$store.state.supplier_list;
			},
			//账号id
			account_id(){
				return this.$store.state.account_id;
			}
		},
		methods:{
			//修改密码或退出登录
			handleCommand(type){
				if(type == '1'){		//修改密码
					this.$router.push('/update');
				}else{
					resource.quit({account_id:this.account_id}).then(res => {
						if(res.data.code == 1){
							this.$message.success(res.data.msg);
							this.$router.replace('/login');
						}else{
							this.$message.warning(res.data.msg);
						}
					})
				}
			},
			//顶部悬浮
			renderHeader(h, data) {
				return h("span", [
					h(
						"el-tooltip",
						{
							attrs: {
								class: "item",
								effect: "dark",
								content: data.column.label,
								placement: "top",
							},
						},
						[h("span", data.column.label)]
						),
					]);
			},
			//获取顶部数据
			boardGysInfo(){
				let arg = {
					gys:this.supplier_name
				}
				this.info_loading = true;
				resource.boardGysInfo(arg).then(res => {
					if(res.data.code == 1){
						this.info_loading = false;
						let data = res.data.data;
						if(!data.info){
							this.$message.warning('不存在该供应商!');
							return;
						}
						this.update_date = data.date;
						this.top_info = data.info;

						this.type = 1;

						this.ks_page = 1;
						this.ks_pagesize = 10;
						this.ks_sort = "";
						this.sku_page = 1;
						this.sku_pagesize = 10;
						this.sku_sort = "";
						//本月本周销量和环比
						this.getGysWeekMonthTotal();
						//本月本周销量图表
						this.getGysWeekMonthChart();
						//款式信息列表
						this.ksInfoData();
					}else{
						this.$message.warning(res.data.msg);
					}
				})
			},
			//本月本周销量和环比
			getGysWeekMonthTotal(){
				let arg = {
					gys:this.top_info?this.top_info.gys:""
				}
				this.xl_total_loading = true;
				resource.getGysWeekMonthTotal(arg).then(res => {
					if(res.data.code == 1){
						this.xl_total_loading = false;
						this.pro_info = res.data.data;
					}else{
						this.$message.warning(res.data.msg);
					}
				})
			},
			//切换时间
			checkDate(type){
				this.type = type;
				if(type == '1'){
					this.setMonthChart();
				}else{
					this.setWeekChart();
				}
			},
			//本月本周销量图表
			getGysWeekMonthChart(){
				let arg = {
					gys:this.top_info?this.top_info.gys:""
				}
				this.chart_loading = true;
				resource.getGysWeekMonthChart(arg).then(res => {
					if(res.data.code == 1){
						this.chart_loading = false;
						this.month_list_data = res.data.data.month_list;
						this.week_list_data = res.data.data.week_list;
						//渲染月图表
						this.setMonthChart();
					}else{
						this.$message.warning(res.data.msg);
					}
				})
			},
			//获取星期几
			getWeek(time)  {
				let datelist = ['周日','周一','周二','周三','周四','周五','周六',]
				return datelist[new Date(time).getDay()];
			},
			//渲染月图表
			setMonthChart(){
				this.$nextTick(() => {
					var echarts = require("echarts");
					var month_chart = document.getElementById('month_chart');
					this.monthChart = echarts.getInstanceByDom(month_chart)
					if (this.monthChart == null) { 
						this.monthChart = echarts.init(month_chart);
					}
					let day_list = [];
					this.month_list_data.day_list.map(item => {
						day_list.push(item + `(${this.getWeek(item)})`);
					})
					this.monthChart.setOption(this.setOptions('近30天销售统计',day_list,this.month_list_data.data_list));
					window.addEventListener('resize',() => {
						this.monthChart.resize();
					})
				})	
			},
			//渲染周图表
			setWeekChart(){
				this.$nextTick(() => {
					var echarts = require("echarts");
					var week_chart = document.getElementById('week_chart');
					this.weekChart = echarts.getInstanceByDom(week_chart)
					if (this.weekChart == null) { 
						this.weekChart = echarts.init(week_chart);
					}
					let day_list = [];
					this.week_list_data.day_list.map(item => {
						day_list.push(item + `(${this.getWeek(item)})`);
					})
					this.weekChart.setOption(this.setOptions('近7天销售统计',day_list,this.week_list_data.data_list));
					window.addEventListener('resize',() => {
						this.weekChart.resize();
					})
				})
			},
			//图表渲染
			setOptions(title,x_axis,series_data){
				return {
					title: {
						text: title
					},
					tooltip: {
						trigger: 'axis'
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: x_axis
					},
					yAxis: {
						type: 'value'
					},
					series: [
					{
						data: series_data,
						type: 'line',
						areaStyle: {}
					}
					]
				}
			},
			//款式信息分页
			ksSizeChange(val) {
				this.ks_pagesize = val;
				//款式信息列表
				this.ksInfoData();
			},
			ksPageChange(val,type) {
				this.ks_page = val;
				if(type) {
					this.ks_sort = "";
					this.$refs.ks_table.clearSort(); // 清除排序
				}
				//款式信息列表
				this.ksInfoData();
			},
			//款式信息排序
			ksSortChange(column){
				if(column.order){
					let order = column.order == 'ascending'?'1':'0';
					this.ks_sort = column.prop + '-' + order;
				}else{
					this.ks_sort = "";
				}
				//款式信息列表
				this.ksInfoData();
			},
			//款式信息列表
			ksInfoData(){
				let arg = {
					gys:this.top_info?this.top_info.gys:"",
					ksbm:this.ksbm,
					is_new:this.is_new,
					sort:this.ks_sort,
					page:this.ks_page,
					pagesize:this.ks_pagesize
				}
				this.ks_loading = true;
				resource.getGysKsbmList(arg).then(res => {
					if(res.data.code == 1){
						this.ks_loading = false;
						let data = res.data.data;
						this.date = data.date.split(' ')[0];
						this.ks_column_list[6].label = `${getNextDate(this.date,-3)}日销量`;
						this.ks_column_list[7].label = `${getNextDate(this.date,-2)}日销量`;
						this.ks_column_list[8].label = `${getNextDate(this.date,-1)}日销量`;
						if(data.length == 0){
							this.ks_table_data = [];
						}else{
							let ks_table_data = data.data;
							ks_table_data.map(item => {
								let images = [];
								images.push(item.tp);
								item.images = images;
							})
							this.ks_table_data = ks_table_data;
							this.ks_total = data.total;
						}
						
					}else{
						this.$message.warning(res.data.msg);
					}
				})
			},
			//款式信息列表导出
			commitExport(){
				MessageBox.confirm('确认导出?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					let arg = {
						gys:this.top_info?this.top_info.gys:"",
						ksbm:this.ksbm,
						is_new:this.is_new,
						sort:this.ks_sort,
						page:this.ks_page,
						pagesize:this.ks_pagesize
					}
					resource.getGysKsbmExport(arg).then(res => {
						if(res){
							exportPost("\ufeff" + res.data,'款式编码');
						}
					})
				}).catch(() => {
					Message({
						type: 'info',
						message: '取消导出'
					});          
				});
			},
			//点击下钻
			getDetail(type,ksbm){
				this.detail_type = type;
				this.detail_page = 1;
				this.detail_pagesize = 10;
				let arg = {
					gys:this.supplier_name,
					type:this.detail_type,
					page:this.detail_page,
					pagesize:this.detail_pagesize
				}
				if(this.detail_type == 'sku'){
					this.detail_sku = ksbm;
				}
				//获取列表
				this.getDetailList()
			},
			//获取列表
			getDetailList(){
				let arg = {
					gys:this.supplier_name,
					type:this.detail_type,
					page:this.detail_page,
					pagesize:this.detail_pagesize
				}
				if(this.detail_type == 'sku'){
					this.sku_loading = true;
					arg.ksbm = this.detail_sku;
					arg.sort = this.detail_sort;
				}
				resource.getDetail(arg).then(res => {
					if(res.data.code == 1){
						if(this.detail_type == 'xssl_1'){	//昨日销量
							this.xssl_1_data = res.data.data;
						}else if(this.detail_type == 'xykc'){
							this.xykc_data = res.data.data;
						}else if(this.detail_type == 'cgsl_0'){
							this.cgsl_0_data = res.data.data;
						}else if(this.detail_type == 'sku'){
							this.sku_loading = false;
							this.detailDialog = true;
							let data = res.data.data;
							this.sku_column_list[4].label = `${getNextDate(this.date,-3)}日销量`;
							this.sku_column_list[5].label = `${getNextDate(this.date,-2)}日销量`;
							this.sku_column_list[6].label = `${getNextDate(this.date,-1)}日销量`;
							if(data.length == 0){
								this.sku_table_data = [];
							}else{
								this.sku_table_data = data.data;
								this.sku_total = data.total;
							}
						}
					}else{
						this.$message.warning(res.data.msg);
					}
				})
			},
			//详情分页
			detailSizeChange(val) {
				this.detail_pagesize = val;
				//点击下钻
				this.getDetailList();
			},
			detailPageChange(val,type) {
				this.detail_page = val;
				//点击下钻
				this.getDetailList();
			},
			//sku信息排序
			skuSortChange(column){
				if(column.order){
					let order = column.order == 'ascending'?'1':'0';
					this.detail_sort = column.prop + '-' + order;
				}else{
					this.detail_sort = "";
				}
				//款式信息列表
				this.getDetailList();
			},
			//关闭弹窗
			closeDetail(){
				this.detail_page = 1;
				this.detail_pagesize = 10;
				this.detail_sort = "";
				this.$refs.sku_table.clearSort(); // 清除排序
			},
			
		}
	}
</script>
<style lang="less" scoped>
.supplier_data_container{
	position: absolute;
	top: 0;
	left: 0;
	width: 1920px;
	height: 100%;
	display: flex;
	flex-direction: column;
	.tab_menu{
		display: flex;
		align-items: center;
		justify-content: flex-end;
		height: 30px;
		width: 100%;
		padding-right: 20px;
		.setting{
			cursor: pointer;
			font-size: 12px;
		}
	}
	.page_content{
		flex:1;
		overflow-y: scroll;
		width: 100%;
		background: #ECEFF8;
		padding: 20px;
		.page_top_row{
			height: 66px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.name{
				color: #5575EB;
				font-size: 30px;
				font-weight: 500;
			}
			.type_row{
				width: 125px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				color: #5575EB;
				font-size: 18px;
				font-weight: 500;
			}
		}
		.margin_top{
			margin-top: 16px;
		}
		.header_row{
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.card_title{
			font-weight: 500;
			font-size: 14px;
			color: #333333;
		}
		.content_row{
			display: flex;
			justify-content: space-between;
			.row_item{
				height: 70px;
				display: flex;
				.item_icon{
					margin-right: 16px;
					width: 70px;
					height: 70px;
				}
				.item_text{
					height: 70px;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: space-between;
					.text_val{
						font-size: 32px;
						color: #333333;
						font-weight: bold;
					}
					.text_label{
						color: #666666;
						font-size: 14px;
					}
				}
			}
			.bhtj_item{
				width: 200px;
				.val_item{
					.bhtj_val{
						color: #5575EB;
						font-size: 30px;
						font-weight: bold;
					}
					.bhtj_label{
						color: #666666;
						font-size: 14px;
					}
				}
			}
		}
		.xltj_row{
			display: flex;
			.left_total{
				width: 164px;
				.left_item{
					.label{
						color: #666666;
						font-size: 14px;
					}
					.value{
						color: #333333;
						font-size: 32px;
						font-weight: 500;
					}
					.percentage_row{
						display: flex;
						align-items: center;
						.per_icon{
							width: 10px;
							height: 6px;
						}
						.per_value{
							margin-left: 6px;
							margin-right: 6px;
							font-size: 14px;
							color: #52C41B;
						}
						.red_color{
							color: #FF4D4F;
						}
						.per_label{
							color: #999999;
							font-size: 14px;
						}
					}
				}
				.left_item_margin{
					margin-top: 30px;
				}
			}
			.right_chart{
				flex:1;
				.tab_row{
					display: flex;
					justify-content: flex-end;
					font-size: 14px;
					color: #999999;
					.active_tab{
						color: #52C41B;
					}
					.tab_item{
						cursor: pointer;
					}
					.margin_left{
						margin-left: 24px;
					}
				}
				.tj_chart{
					height: 320px;
				}
			}

		}
	}
	.pointer{
		cursor: pointer;
	}
	.page{
		margin-top: 10px;
		display: flex;
		justify-content: flex-end;
	}
}
</style>





