
//获取某日期的前几日日期
export function getNextDate(date, day) { 
　　var dd = new Date(date);
　　dd.setDate(dd.getDate() + day);
　　var y = dd.getFullYear();
　　var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
　　var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
　　return m + "-" + d;
}