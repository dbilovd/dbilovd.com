exports.ids=[6],exports.modules={31:function(t,e,d){"use strict";d.r(e);var n=d(2);var o={data:()=>({}),created(){this.fetchPosts()},computed:{...Object(n.mapGetters)(["postBySlug"]),update(){return this.postBySlug(this.$route.params.slug)}},head(){return{title:`Update: ${this.update.title} | Dbilovd`}},methods:{...Object(n.mapActions)(["fetchPosts"]),formatDate:t=>new Date(t).toDateString()},watch:{update(t){if(t){document.title=`${t.title} : Dbilovd`;let meta=document.createElement("meta");meta.name="description",meta.content=t.intro,document.getElementsByTagName("head")[0].appendChild(meta);let e=document.createElement("meta");e.setAttribute("property","og:title"),e.content=`${t.title} : Dbilovd`,document.getElementsByTagName("head")[0].appendChild(e);let d=document.createElement("meta");if(d.setAttribute("property","og:description"),d.content=t.intro,document.getElementsByTagName("head")[0].appendChild(d),t.image){let e=document.createElement("meta");e.setAttribute("property","og:image"),e.content=t.image,document.getElementsByTagName("head")[0].appendChild(e)}}}}},l=d(1),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._ssrNode('<div class="bg-gray-100 pt-10 pb-20 px-10"><div class="max-w-2xl mx-auto p-6"><h1 class="font-semibold text-2xl mt-10 capitalize">'+t._ssrEscape(t._s(t.update.title))+'</h1> <p class="font-semibold text-sm mt-2 mb-10">'+t._ssrEscape(t._s(t.formatDate(t.update.date)))+'</p> <div class="update-content text-lg">'+t._s(t.update.content)+"</div></div></div>")])}),[],!1,null,null,"3331a58e");e.default=component.exports}};