(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1Z_8N"}},17:function(e,t,a){},18:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(10),o=a.n(c),u=(a(17),a(3)),s=a(4),l=a(6),i=a(5),h=(a(18),a(7)),m=a.n(h),p=a(0),b=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={queryValue:""},e.handleChange=function(t){e.setState({queryValue:t.currentTarget.value.toLowerCase()})},e.handleOnSubmit=function(t){t.preventDefault(),""!==e.state.queryValue.trim()&&(e.props.onSubmit(e.state.queryValue),e.setState({queryValue:""}))},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:m.a.Searchbar,children:Object(p.jsxs)("form",{className:m.a.SearchForm,onSubmit:this.handleOnSubmit,children:[Object(p.jsx)("button",{type:"submit",className:m.a.SearchForm__button,children:Object(p.jsx)("span",{className:m.a.SearchForm__button__label,children:"Search"})}),Object(p.jsx)("input",{className:m.a.SearchForm__input,type:"text",autoComplete:"off",autoFocus:!0,value:this.state.queryValue,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),a}(r.Component),_=b,g=a(11),j=a.n(g),d=a(12),y=a.n(d),f=function(){return Object(p.jsx)(y.a,{type:"ThreeDots",color:"#3f51b5",height:80,width:80})},S=a(9),O=a.n(S);function v(e){var t=e.onToggle,a=e.pictures;return Object(p.jsx)(p.Fragment,{children:a.map((function(e){return Object(p.jsx)("li",{onClick:t,className:O.a.ImageGalleryItem,children:Object(p.jsx)("img",{src:e.webformatURL,alt:e.tags[0],className:O.a.ImageGalleryItem__image,largeImage:e.largeImageURL})},e.id)}))})}var x=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={pictures:[],error:null,showModal:!1,status:"idle",page:1},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,r=e.queryValue,n=this.props.queryValue;if(r!==n){this.setState({status:"pending"});fetch("".concat("https://pixabay.com/api/?key=").concat("23041177-0c0b450b7629b324f32016842","&q=").concat(n,"&page=").concat(this.state.page,"&per_page=12&image_type=photo")).then((function(e){return e.ok?e.json():Promise.reject({error:new Error("nothing found for the your request ".concat(n))})})).then((function(e){return a.setState({pictures:e.hits,status:"resolved"})})).catch((function(e){return a.setState({error:e,status:"rejected"})}))}}},{key:"toggleModal",value:function(){this.setState((function(e){return{showModal:!e.showModal}}))}},{key:"render",value:function(){var e=this.state,t=e.pictures,a=e.error,r=e.status;return"idle"===r?Object(p.jsx)("p",{children:"Input your query"}):"pending"===r?Object(p.jsx)(f,{}):"rejected"===r?Object(p.jsxs)("p",{children:["Whoops, something went wrong: ",a.message]}):"resolved"===r?Object(p.jsx)("ul",{className:j.a.ImageGallery,children:Object(p.jsx)(v,{pictures:t,onToggle:this.toggleModal})}):void 0}}]),a}(r.PureComponent),I=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={queryValue:""},e.handleSearchOnSubmit=function(t){e.setState({queryValue:t})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){}},{key:"render",value:function(){var e=this.state.queryValue;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(_,{onSubmit:this.handleSearchOnSubmit}),Object(p.jsx)(x,{queryValue:e})]})}}]),a}(r.PureComponent),q=I;o.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(q,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__zUh9K",SearchForm:"SearchBar_SearchForm__36KZq",SearchForm__input:"SearchBar_SearchForm__input__3SaG-",SearchForm__button:"SearchBar_SearchForm__button__2OE_K",SearchForm__button__label:"SearchBar_SearchForm__button__label__LVahJ"}},9:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1Msiq",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__2Pd04"}}},[[40,1,2]]]);
//# sourceMappingURL=main.8857acd6.chunk.js.map