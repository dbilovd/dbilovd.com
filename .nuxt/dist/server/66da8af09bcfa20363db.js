exports.ids=[5],exports.modules={26:function(e,l,t){"use strict";t.r(l);var r=t(2);t(22),t(23),t(24);var o={props:{showingDialog:{type:Boolean,required:!0,default:!1},downloadLink:{type:String,required:!0,default:""}},data:()=>({subscribe:{destination:"https://dbilovd.us4.list-manage.com/subscribe/post?u=d09bba37346feb884f1d288c3&amp;id=b82fd59c83",firstName:"",lastName:"",email:""}}),methods:{closeDialog(){this.$emit("close-dialog")},subscribeAndDownload(){document.getElementById("subscription-form").submit()}}},d=t(1);var n={components:{DownloadDialog:Object(d.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"modal  fixed w-full h-full top-0 left-0 flex items-center justify-center",class:{"opacity-0 pointer-events-none":!this.showingDialog}},[this._ssrNode('<div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div> <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"><div class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="fill-current text-white"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path></svg></div> <div class="modal-content py-4 text-left px-6"><div class="flex justify-between items-center pb-3"><p class="text-2xl font-bold">Subscribe for updates</p> <div class="modal-close cursor-pointer z-50"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="fill-current text-black"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path></svg></div></div> <div class="flex flex-col"><p class="text-sm text-gray-700">Be the first to know when I release new music.</p> <form method="POST"'+this._ssrAttr("action",this.subscribe.destination)+' id="subscription-form" class="w-full max-w-lg my-6"><div class="w-full flex flex-row flex-wrap md:flex-no-wrap items-center md:border-b md:border-b-2 md:border-gray-200 py-2"><input type="text" placeholder="John" aria-label="First name" name="FNAME" required="required" class="appearance-none bg-transparent border-none w-full md:w-1/4 text-gray-700 placeholder-gray-500 py-1 px-2 leading-tight focus:outline-none"> <hr class="block md:hidden w-full border-b border-b-2 border-gray-200 mt-1"> <input type="text" placeholder="Doe" aria-label="Last name" name="LNAME" required="required" class="appearance-none bg-transparent border-none w-full md:w-1/4 text-gray-700 placeholder-gray-500 mt-3 md:mt-0 py-1 px-2 leading-tight focus:outline-none"> <hr class="block md:hidden w-full border-b border-b-2 border-gray-200 mt-1"> <input type="email" placeholder="you@gmail.com" aria-label="Email" name="EMAIL" required="required" class="appearance-none bg-transparent border-none w-full md:w-2/4 text-gray-700 placeholder-gray-500 mt-3 md:mt-0 py-1 px-2 leading-tight focus:outline-none"> <hr class="block md:hidden w-full border-b border-b-2 border-gray-200 mt-1"></div></form></div> <div class="flex justify-between pt-2"><a'+this._ssrAttr("href",this.downloadLink)+' target="__blank" class="w-full md:w-auto block text-gray-700 hover:text-gray-700 font-semibold font-bold py-2 px-3 text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current w-3 h-4 mr-2 inline-block"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"></path></svg> <span>Only Download</span></a> <button class="w-full md:w-auto block bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold font-bold py-2 px-3 border border-gray-900 rounded shadow rounded items-center"><span>Subscribe &amp; Download</span></button></div></div></div>')])}),[],!1,null,null,"5a0594b0").exports},data:()=>({showingDownloadDialog:!1}),computed:{...Object(r.mapGetters)({releaseById:"release"}),release(){return this.releaseById(this.$route.params.release)}},head(){return{title:`${this.release.title} | Dbilovd`}},methods:{closeDownloadDialog(){this.showingDownloadDialog=!1,document.querySelector("body").classList.remove("modal-active")},showDownloadDialog(){document.querySelector("body").classList.add("modal-active"),this.showingDownloadDialog=!0}}},c=Object(d.a)(n,(function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[t("DownloadDialog",{attrs:{"download-link":e.release.downloadLink,"showing-dialog":e.showingDownloadDialog},on:{"close-dialog":e.closeDownloadDialog}}),e._ssrNode(' <div class="bg-gray-100 pt-10 pb-20 px-10"><div class="max-w-4xl mx-auto"><div class="flex flex-col md:flex-row justify-between items-top"><h3 class="w-full md:w-1/2 uppercase font-semibold text-2xl"><span class="block">'+e._ssrEscape(e._s(e.release.title))+'</span> <span class="block text-gray-600 text-sm">'+e._ssrEscape(e._s(e.release.releasedDate))+"</span></h3> "+(e.release.lyrics?'<h4 class="w-full md:w-1/2 mt-6 md:mt-0 flex flex-row justify-start md:justify-end font-semibold text-gray-600"><a'+e._ssrAttr("href",e.release.lyrics)+' class="uppercase tracking-wide"><i class="fas fa-external-link-alt fa-lite text-xs mr-2"></i> <span>Lyrics</span></a></h4>':"\x3c!----\x3e")+'</div> <div class="flex flex-col md:flex-row justify-between mt-8"><div class="w-full md:w-1/3"><img'+e._ssrAttr("src",e.release.image)+' alt="release.title" class="w-full object-cover object-center rounded shadow-lg"></div> <div class="w-full md:w-2/3 md:pl-6 text-lg"><div class="w-full my-10 md:my-0 md:mb-20">'+(e.release.youtubeEmbed?'<div class="mb-10">'+e._s(e.release.youtubeEmbed)+"</div>":"\x3c!----\x3e")+" <div>"+e._s(e.release.soundcloudEmbed)+'</div></div> <div class="w-full flex flex-col md:flex-row justify-between"><div class="mt-6 md:mt-0 flex flex-col justify-start">'+e._ssrList(e.release.links,(function(link,l){return link.url?"<a"+e._ssrAttr("href",link.url)+e._ssrAttr("target","__blank_"+link.name)+' class="block"><i'+e._ssrClass(null,"fab "+link.icon+" inline-block text-xl mr-2 mb-4")+"></i> <span>"+e._ssrEscape(e._s(link.actionText))+"</span></a>":"\x3c!----\x3e"}))+" "+(e.release.secondaryLinks.length>0?'<div class="mt-2"><h5 class="font-semibold text-gray-600 capitalize tracking-wide inline-block mr-3">\n\t\t\t\t\t\t\t\t\t\tMore:\n\t\t\t\t\t\t\t\t\t</h5> '+e._ssrList(e.release.secondaryLinks,(function(link,l){return link.url?"<a"+e._ssrAttr("href",link.url)+e._ssrAttr("target","__blank_"+link.name)+' class="inline-block mr-1 underline"><span>'+e._ssrEscape(e._s(link.name))+"</span> <span"+e._ssrStyle(null,null,{display:l<e.release.secondaryLinks.length-1?"":"none"})+">,</span></a>":"\x3c!----\x3e"}))+"</div>":"\x3c!----\x3e")+'</div> <div class="mt-6 md:mt-0">'+(e.release.downloadLink?'<a class="w-full md:w-auto block bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold font-bold py-2 px-3 border border-gray-900 rounded shadow rounded items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current w-3 h-4 mr-2 inline-block"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"></path></svg> <span>Download for Free</span></a>':"\x3c!----\x3e")+"</div></div></div></div></div></div>")],2)}),[],!1,null,null,"bc550c7a");l.default=c.exports}};