import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,a as n,b as a,d as t,e as l,r as c}from"./app.429f44ea.js";const i={},r=n("p",null,"迷上 IFTTT 后急需 RSS 来监测网页，找到免费的 FEED43。网上有很多教程，但对新手都不够友好，就重新整理了一份。",-1),u=n("p",null,[n("strong",null,"► 开始烧制属于自己的 feed")],-1),d=n("h2",{id:"_1-进入网页",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-进入网页","aria-hidden":"true"},"#"),a(" 1. 进入网页")],-1),h={href:"http://www.feed43.com/",target:"_blank",rel:"noopener noreferrer"},g=l(`<p><img src="https://pic1.zhimg.com/v2-b5da0b08f632376fad3925a779e373b4_r.jpg" alt="" loading="lazy"></p><h2 id="_2-选定-rss-网页" tabindex="-1"><a class="header-anchor" href="#_2-选定-rss-网页" aria-hidden="true">#</a> 2. 选定 RSS 网页</h2><p>将目标网址添入 Step1. Specify source page address (URL)，将输入的源代码复制到 txt 文档中（方便之后写抓取规则）</p><p><img src="https://pic1.zhimg.com/v2-1b687a5b1c325ba6d04fbdcc13b95668_r.jpg" alt="" loading="lazy"></p><p>如果 Page Source 显示为乱码，Encoding 可设为 <strong>UTF-8</strong> 。</p><h2 id="_3-定制-rss-抓取规则" tabindex="-1"><a class="header-anchor" href="#_3-定制-rss-抓取规则" aria-hidden="true">#</a> 3. 定制 RSS 抓取规则</h2><p>Global Search Pattern 是选择你要搜索的范围。可以不填，这样会搜索整个页面，一般新手都选择整个页面，即空白。Item (repeatable) Search Pattern 这部分最重要，是我们要抓取的内容。</p><p><img src="https://pic1.zhimg.com/v2-b1fa90c59739bddc0c27134cd36ba6bc_r.jpg" alt="" loading="lazy"></p><p>仔细查看 Step1 中的源代码，找到区需要抓取的部分，输入到 Item (repeatable) Search Pattern。</p><p>测试网址：<code>http://news.163.com/special/0001386F/rank_whole.html</code>。</p><p>需要抓取的源代码：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>更时尚更运动 车展实拍解析红旗 H5<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>更时尚更运动 车展实拍解析红旗 H5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span>
    <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cBlue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>11211615<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://pic2.zhimg.com/v2-cf6dbf2c09189f7517ec63abdc80c50d_r.jpg" alt="" loading="lazy"></p><p><strong>抓取规则</strong>：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
  {*}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{*}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{*}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{%}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{%}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  {*}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cBlue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{*}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  {*}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击 Extract，进行抓取。</p><p><img src="https://pic4.zhimg.com/v2-e9486741a6229ab258a95147f584571b_r.jpg" alt="" loading="lazy"></p><h2 id="_4-整理-rss-输入格式" tabindex="-1"><a class="header-anchor" href="#_4-整理-rss-输入格式" aria-hidden="true">#</a> 4. 整理 rss 输入格式</h2><p>Define output format，一般情况下前面三个会已经写好，后三个就将前面得出的 item 里面的元素填入即可，我这里{%1}对应的是链接所以填入 Link，{%2}对于标题就填入 Title。</p><p><img src="https://pic1.zhimg.com/v2-b4614f5c46090f2eb762aac87d604350_r.jpg" alt="" loading="lazy"></p><p>然后点击 preview，完成制作，同时出现预览。</p><p><img src="https://pic2.zhimg.com/v2-498bf1f1c0b14da172498b58f59e39b9_r.jpg" alt="" loading="lazy"></p><p>如果注册了 FEED43 的账号，可以修改 rss 地址，但不能改为中文，否则会 rss 出错。</p><h2 id="_5-获取-rss-地址" tabindex="-1"><a class="header-anchor" href="#_5-获取-rss-地址" aria-hidden="true">#</a> 5. 获取 RSS 地址</h2>`,24),k={href:"https://www.feed43.com/dianji.xml",target:"_blank",rel:"noopener noreferrer"},_=n("p",null,[n("img",{src:"https://pic1.zhimg.com/v2-f3b00e876d8df136f7d354b4fc22f900_r.jpg",alt:"",loading:"lazy"})],-1),m=n("p",null,"在 RSS reader 中展示为",-1),f=n("p",null,[n("img",{src:"https://pic4.zhimg.com/v2-6d8f503ff3da16eb985ca1d3ae2de98f_r.jpg",alt:"",loading:"lazy"})],-1),b=n("h2",{id:"_6-全文抓取",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-全文抓取","aria-hidden":"true"},"#"),a(" 6. 全文抓取")],-1),v=n("p",null,[a("feed43 导出的条目必须点击链接才能看到内容。在 rss 展示全文，需要通过 FeedEx 再转一次。注意：feed43 免费用户过多，"),n("strong",null,"需在浏览器中打开一次才能得到真实链接"),a(" (一般为 "),n("code",null,"http://node2.feed43.com"),a(")，FeedEx 需使用真实链接，一般 3 分钟内转换好。")],-1),S={href:"https://feedex.net/",target:"_blank",rel:"noopener noreferrer"},x=n("p",null,[n("img",{src:"https://pic4.zhimg.com/v2-8e3701adffa1d6fb4ea10dda2704988b_r.jpg",alt:"",loading:"lazy"})],-1),z=n("p",null,"feeds43 免费版每 6 小时抓取一次，显示最新的 20 条内容。",-1),R=n("p",null,"如果网页源更新较频繁的话，可使用 RSSHub 和 Huginn。",-1),w=n("h2",{id:"rss-合集",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rss-合集","aria-hidden":"true"},"#"),a(" RSS 合集")],-1),q=n("p",null,"汇总的 RSS 永久订阅 feeds，均通过 RSSHub 和 Huginn 制作。如果有兴趣自制 RSS，可参考以下教程。",-1),E={href:"https://newzone.top/_posts/2017-04-22-rss_feed43_feedex.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://newzone.top/_posts/2018-10-07-huginn_scraping_any_website.html",target:"_blank",rel:"noopener noreferrer"},j={href:"https://newzone.top/_posts/2019-04-01-rsshub_noob.html",target:"_blank",rel:"noopener noreferrer"},F={href:"https://newzone.top/_posts/2020-03-25-rsshub_on_vps.html",target:"_blank",rel:"noopener noreferrer"},H={href:"https://newzone.top/_posts/2021-10-23-nas_with_rsshub_and_huginn.html",target:"_blank",rel:"noopener noreferrer"},T={href:"https://newzone.top/_posts/2022-03-17-rss_persistent_link_collection.html",target:"_blank",rel:"noopener noreferrer"};function B(D,I){const s=c("ExternalLinkIcon");return p(),o("div",null,[r,u,d,n("p",null,[n("a",h,[a("FEED43"),t(s)]),a(" 无需注册，点击 Create your own feed 直接使用。")]),g,n("p",null,[a("点击 Feed URL 可得 rss 地址，我这里是 "),n("a",k,[a("https://www.feed43.com/dianji.xml"),t(s)])]),_,m,f,b,v,n("p",null,[a("FeedEx："),n("a",S,[a("https://feedex.net/"),t(s)])]),x,z,R,w,q,n("ul",null,[n("li",null,[n("p",null,[n("a",E,[a("RSS 入门篇：FEED43&FeedEx-为静态网页定制 RSS 源"),t(s)])])]),n("li",null,[n("p",null,[n("a",y,[a("RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）"),t(s)])])]),n("li",null,[n("p",null,[n("a",j,[a("RSS 速成篇：RSSHub 捡现成的轮子"),t(s)])])]),n("li",null,[n("p",null,[n("a",F,[a("RSS 速成篇 2：RSSHub 自部署"),t(s)])])]),n("li",null,[n("p",null,[n("a",H,[a("RSS 完结篇：节省千元服务费，RSSHub、Huginn 转移 NAS"),t(s)])])]),n("li",null,[n("p",null,[n("a",T,[a("RSS 汇总篇：RSS 永久链接合集，拒绝 RSS 失效"),t(s)])])])])])}const P=e(i,[["render",B],["__file","2017-04-22-rss_feed43_feedex.html.vue"]]);export{P as default};
