(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{23:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a,c=n(0),o=n.n(c),r=n(10),i=n.n(r),s=(n(23),n(11)),d=n(12),b=n(13),l=n(6),u=n(18),j=n(17),h=n(5),g=n(3),v=g.a.h3(a||(a=Object(h.a)(["\n\ttext-align: center;\n"]))),O=n(1),x=function(e){var t=e.message;return Object(O.jsx)(v,{children:t})};x.defaultProps={message:""};var k,f=x,p=g.a.h3(k||(k=Object(h.a)(["\n\ttext-align: center;\n\tcolor: blue;\n"]))),F=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,o=e.positivePercentage;return Object(O.jsx)(O.Fragment,{children:c>0?Object(O.jsxs)("div",{children:[Object(O.jsxs)(p,{children:["Good: ",t]}),Object(O.jsxs)(p,{children:["Neutral: ",n]}),Object(O.jsxs)(p,{children:["Bad: ",a]}),Object(O.jsxs)(p,{children:["Total: ",c]}),Object(O.jsxs)(p,{children:["Positive Feedback: ",o,"%"]})]}):Object(O.jsx)(f,{message:"No feedback given"})})};F.defaultProps={total:0,positivePercentage:0};var P,m,y=F,L=g.a.h2(P||(P=Object(h.a)(["\n\ttext-align: center;\n\tcolor: red;\n"]))),S=function(e){var t=e.title,n=e.children;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(L,{children:t}),n]})},T=n(29),w=g.a.button(m||(m=Object(h.a)(["\n\tmargin-left: 20px;\n\tpadding: 10px;\n\tborder-radius: 10px;\n\tbackground-color: rgb(170, 184, 223);\n"]))),B=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(O.jsx)("div",{children:t.map((function(e){return Object(O.jsx)(w,{onClick:function(){return n(e)},type:"button",children:e},Object(T.a)())}))})},C=n(4),I=Object(g.a)("div")(C.c,C.h,C.f,C.d,C.e,C.a,C.b,C.g),J=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={good:0,neutral:0,bad:0},e.countTotalFeedback=e.countTotalFeedback.bind(Object(l.a)(e)),e.countPositiveFeedbackPercentage=e.countPositiveFeedbackPercentage.bind(Object(l.a)(e)),e.onLeaveFeedback=e.onLeaveFeedback.bind(Object(l.a)(e)),e}return Object(b.a)(n,[{key:"countTotalFeedback",value:function(){this.setState((function(e){return{total:e.good+e.neutral+e.bad}}))}},{key:"countPositiveFeedbackPercentage",value:function(){this.setState((function(e){var t=e.good,n=e.neutral,a=e.bad;return{positivePercentage:Math.round(100/(t+n+a)*t)}}))}},{key:"onLeaveFeedback",value:function(e){this.setState(Object(s.a)({},e,this.state[e]+1)),this.countTotalFeedback(),this.countPositiveFeedbackPercentage(),console.log(this.state.good)}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=e.total,o=e.positivePercentage;return Object(O.jsxs)(I,{display:"flex",alignItems:"center",flexDirection:"column",children:[Object(O.jsx)(S,{title:"Please leave feedback",children:Object(O.jsx)(B,{options:["good","neutral","bad"],onLeaveFeedback:this.onLeaveFeedback})}),Object(O.jsx)(S,{title:"Statistics",children:Object(O.jsx)(y,{good:t,neutral:n,bad:a,total:c,positivePercentage:o})})]})}}]),n}(c.Component);i.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(J,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.fa22bf1e.chunk.js.map