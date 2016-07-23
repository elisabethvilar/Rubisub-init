YUI.add("aui-scheduler-view-week",function(e,t){var n=e.Lang,r=n.isFunction,i="",s="&mdash;",o=" ",u=e.DataType.DateMath,a=u.WEEK_LENGTH,f="scheduler-view-week",l="date",c="days",h="firstDayOfWeek",p="locale",d="scheduler",v="viewDate",m="week",g=e.Component.create({NAME:f,ATTRS:{bodyContent:{value:i},days:{value:7},headerViewConfig:{value:{displayDaysInterval:a}},name:{value:m},navigationDateFormatter:{valueFn:function(){return this._valueNavigationDateFormatter},validator:r}},EXTENDS:e.SchedulerDayView,prototype:{getAdjustedViewDate:function(e){var t=this,n=t.get(d),r=n.get(h);return u.toMidnight(u.getFirstDayOfWeek(e,r))},getNextDate:function(){var e=this,t=e.get(d),n=t.get(v);return u.toLastHour(u.add(n,u.WEEK,1))},getPrevDate:function(){var e=this,t=e.get(d),n=t.get(v);return u.toMidnight(u.subtract(n,u.WEEK,1))},getToday:function(){var e=this,t=g.superclass.getToday.apply(this,arguments);return e._firstDayOfWeek(t)},_firstDayOfWeek:function(e){var t=this,n=t.get(d),r=n.get(h);return u.getFirstDayOfWeek(e,r)},_valueNavigationDateFormatter:function(t){var n=this,r=n.get(d),i=r.get(p),a=n._firstDayOfWeek(t),f=e.DataType.Date.format(a,{format:"%B %d",locale:i}),l=u.add(a,u.DAY,n.get(c)-1),h=e.DataType.Date.format(l,{format:(u.isMonthOverlapWeek(a)?"%B %d":"%d")+", %Y",locale:i});return[f,s,h].join(o)}}});e.SchedulerWeekView=g},"2.0.0",{requires:["aui-scheduler-view-day"],skinnable:!0});
