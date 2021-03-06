class Config {
	constructor() { }

	getThemeMode() {
		const themeModes = {
			'light': {
				name: 'Light',
				icon: 'light-mode'
			},
			'dark': {
				name: 'Dark',
				icon: 'dark-mode'
			},
			'auto': {
				name: 'Auto',
				icon: 'auto-mode',
				lightHour: '7',
				darkHour: '18'
			}
		};

		return themeModes;
	}

	getFontFamily() {
		const fontFamilies = {
			'monospace': 'Fira Code Retina, Hack, Ubuntu Mono, Monaco, Lucida Console, monospace',
			'sans-serif': 'Inter, SF Pro Text, Roboto, Open Sans, sans-serif',
			'serif': 'serif'
		};

		return fontFamilies;
	}

	getQuickSearchData() {
		const quickSearchData = {
			"scholar/": {urlPrefix: "https://scholar.google.com/scholar?q="},
			"book/": {urlPrefix: "https://www.douban.com/search?cat=1001&q="},
			'r/': {urlPrefix: 'https://reddit.com/r/'},
			'myblog/': {urlPrefix: 'https://hidadeng.github.io/'},
			'gate/': {urlPrefix: "https://www.researchgate.net/"},
			'pnas/': {urlPrefix: "https://www.pnas.org/"},
			'wos/': {urlPrefix: 'https://www.webofscience.com/wos/alldb/basic-search'},
			'ssrn/': {urlPrefix: 'https://www.ssrn.com/'},
			'proquest/': {urlPrefix: 'https://www.proquest.com/'},
			'zhiwang/': {urlPrefix: 'https://www.cnki.net/'},
			'zhihu/': {urlPrefix: 'https://www.zhihu.com/search?type=content&q='},
			'img/': {urlPrefix: 'https://unsplash.com/s/photos/'},
			'jd/': {urlPrefix: 'https://amazon.com/s?k='},
			'taobao/': {urlPrefix: 'https://s.taobao.com/search?q='},
			'youtube/': {urlPrefix: 'https://youtube.com/results?search_query='},
			'bilibili/': {urlPrefix: 'https://search.bilibili.com/all?keyword='},
			'github/': {urlPrefix: 'https://github.com/search?q='},
			"scihub/": {urlPrefix: 'https://sci-hub.ru/'},
			"arxiv/": {urlPrefix: "https://arxiv.org/search/?searchtype=all&abstracts=show&order=-announced_date_first&size=50&query="},
			"medium/": {urlPrefix: 'https://medium.com/search?q='},
		};

		return quickSearchData;
	}

	getSearchEngines() {

		const searchEngines = {
			'GoogleScholar':	{
				name: 'Google Scholar',
				icon: 'google-scholar',
				prefix: 'https://scholar.google.com/scholar?q='
			},

			'startpage': {
				name: 'Startpage',
				prefix: 'https://www.startpage.com/do/dsearch?query=',
				icon: 'startpage'
			},
			'qwant': {
				name: 'Qwant',
				prefix: 'https://www.qwant.com/?q=',
				icon: 'qwant'
			},
			'ecosia': {
				name: 'Ecosia',
				prefix: 'https://www.ecosia.org/search?q=',
				icon: 'ecosia'
			},
			'duckduckgo': {
				name: 'Duckduckgo',
				prefix: 'https://duckduckgo.com/?q=',
				icon: 'duckduckgo'
			},
			'yahoo': {
				name: 'Yahoo',
				prefix: 'https://search.yahoo.com/search?p=',
				icon: 'yahoo'
			},
			'google': {
				name: 'Google',
				prefix: 'https://www.google.com/search?q=',
				icon: 'google'
			},
			'bing': {
				name: 'Bing',
				prefix: 'https://www.bing.com/search?q=',
				icon: 'bing'
			},
			'yandex': {
				name: 'Yandex',
				prefix: 'https://yandex.com/search/?text=',
				icon: 'yandex'
			}
			
		};

		return searchEngines;
	}

	getWebSites() {
		// Web menu
		// A list of websites that will be generated and put on the web menu
		const webSites = [
			{
				site: '36Kr',
				icon: '36kr',
				url: 'https://www.36kr.com/',
				category: 'cNews'
			},


			{
				site: 'Reddit',
				icon: 'reddit',
				url: 'https://reddit.com/',
				category: 'Coding'
			},

			{
				site: 'Github',
				icon: 'github',
				url: 'https://github.com/',
				category: 'Coding'
			},
			{
				site: 'MyBlog',
				icon: 'myblog',
				url: 'https://hidadeng.github.io/',
				category: 'Coding'
			},
			
			{
				site: 'Bilibili',
				icon: 'bilibili',
				url: 'https://www.bilibili.com/',
				category: 'media'
			},

			{
				site: 'OSF HOME',
				icon: 'osf',
				url: 'https://osf.io/',
				category: 'Academic Tools'
			},

			{
				site: 'Research Gate',
				icon: 'researchgate',
				url: 'https://www.researchgate.net/',
				category: 'Academic Search Engine'
			},
			{
				site: 'Sci-Hub',
				icon: 'scihub',
				url: 'https://sci-hub.yncjkj.com/',
				category: 'Academic Search Engine'
			},
			{
				site: 'ProQuest',
				icon: 'proquest',
				url: 'https://www.proquest.com/site/pqdd_unavailable.shtml',
				category: 'Academic Search Engine'
			},
			{
				site: '????????????',
				icon: 'google-translate',
				url: 'https://translate.google.cn/',
				category: 'Academic Tools'
			},

			{
				site: 'ScienceNews',
				icon: 'sciencenews',
				url: 'https://www.sciencenews.org/',
				category: 'cNews'
			},

			{
				site: 'Nature',
				icon: 'nature',
				url: 'https://www.nature.com/',
				category: 'cNews'
			},
			{
				site: 'Science',
				icon: 'science',
				url: 'https://www.science.org/',
				category: 'cNews'
			},
			{
				site: 'PNAS',
				icon: 'pnas',
				url: 'https://www.pnas.org/',
				category: 'cNews'
			},
			{
				site: 'QQ_mail',
				icon: 'gmail',
				url: 'https://mail.qq.com/',
				category: 'Academic Tools'
			},
			{
				site: 'CNKI??????',
				icon: 'cnki??????',
				url: 'https://dict.cnki.net/index',
				category: 'Academic Tools'
			},
			{
				site: 'Grammarly',
				icon: 'grammarly',
				url: 'https://app.grammarly.com/',
				category: 'Academic Tools'
			},

			{
				site: 'Overleaf',
				icon: 'overleaf',
				url: 'https://www.overleaf.com/latex/templates',
				category: 'Academic Tools'
			},

			{
				site: 'Google Scholar',
				icon: 'google-scholar',
				url: 'https://scholar.google.com/',
				category: 'Academic Search Engine'
			},

			{
				site: '??????arXiv',
				icon: 'arxiv',
				url: 'https://arxiv.org/search/?query=',
				category: 'Academic Search Engine'
			},

			{
				site: 'AnnualReviews',
				icon: 'annualreviews',
				url: 'https://www.annualreviews.org/',
				category: 'Academic Search Engine'
			},

			{
				site: 'SAGE',
				icon: 'sage',
				url: 'https://journals.sagepub.com/',
				category: 'dPublishers Group'
			},
			{
				site: 'Springer',
				icon: 'springer',
				url: 'https://link.springer.com/',
				category: 'dPublishers Group'
			},
			{
				site: 'Taylor & Francis',
				icon: 'taylorfrancis',
				url: 'https://www.tandfonline.com/',
				category: 'dPublishers Group'
			},
			
			{
				site: 'Elsevier',
				icon: 'elsevier',
				url: 'https://journalfinder.elsevier.com/',
				category: 'dPublishers Group'
			},

			{
				site: 'Web of Science',
				icon: 'wos',
				url: 'https://www.webofscience.com/wos/alldb/basic-search',
				category: 'Academic Tools'
			},
			{
				site: '????????????',
				icon: 'fms',
				url: 'http://www.fms-journal.net/journals',
				category: 'Academic Tools'
			},

			{
				site: 'Youtube',
				icon: 'youtube',
				url: 'https://youtube.com/',
				category: 'media'
			},

			{
				site: 'Zhihu',
				icon: 'zhihu',
				url: 'https://www.zhihu.com/hot',
				category: 'cNews'
			},
			{
				site: 'Medium',
				icon: 'medium',
				url: 'https://medium.com/',
				category: 'cNews'
			},
	
			{
				site: 'Duckduckgo',
				icon: 'duckduckgo',
				url: 'https://duckduckgo.com/',
				category: 'Search Engine'
			},
			{
				site: 'Yandex',
				icon: 'yandex',
				url: 'https://yandex.com/search/?text=',
				category: 'Search Engine'
			},
			{
				site: 'Ecosia',
				icon: 'ecosia',
				url: 'https://ecosia.org/',
				category: 'Search Engine'
			},
			{
				site: 'Google',
				icon: 'google',
				url: 'https://google.com/',
				category: 'Search Engine'
			},
			{
				site: 'Baidu',
				icon: 'baidu',
				url: 'https://www.baidu.com/',
				category: 'Search Engine'
			},
			{
				site: 'Bing',
				icon: 'bing',
				url: 'https://bing.com',
				category: 'Search Engine'
			},

			{
				site: 'Qwant',
				icon: 'qwant',
				url: 'https://qwant.com/',
				category: 'search Engine'
			},
			{
				site: 'Startpage',
				icon: 'startpage',
				url: 'https://startpage.com/',
				category: 'Search Engine'
			},

			{
				site: 'Unsplash',
				icon: 'unsplash',
				url: 'https://unsplash.com/',
				category: 'Coding'
			},


			{
				site: 'Icons8',
				icon: 'icons8',
				url: 'https://icons8.com/',
				category: 'Coding'
			},
			{
				site: 'MD Nice',
				icon: 'markdown',
				url: 'https://editor.mdnice.com/',
				category: 'Coding'
			},

			{
				site: '????????????',
				icon: 'hitsom',
				url: 'http://som.hit.edu.cn/',
				category: 'BInformation'
			},
			{
				site: '????????????',
				icon: 'hitindex',
				url: 'http://yjs.hit.edu.cn/zhxy-yjsxxjs/index',
				category: 'BInformation'
			},
			{
				site: '???????????????',
				icon: 'gaoxiaojob',
				url: 'http://www.gaoxiaojob.com/',
				category: 'BInformation'
			},
			{
				site: '???????????????',
				icon: 'nsfc',
				url: 'https://www.nsfc.gov.cn/',
				category: 'BInformation'
			},

			{
				site: '????????????',
				icon: 'antai',
				url: 'https://www.acem.sjtu.edu.cn/news_center/scholarship.html',
				category: 'BInformation'
			},

			{
				site: '????????????',
				icon: 'gsmpku',
				url: 'https://www.gsm.pku.edu.cn/faculty_and_research/sxgh/xsyth1.htm',
				category: 'BInformation'
			},


			{
				site: '?????????',
				icon: '?????????',
				url: 'http://www.sciencenet.cn/',
				category: 'BInformation'
			},

			{
				site: '????????????',
				icon: 'xueqiu',
				url: 'https://xueqiu.com/',
				category: 'CNews'
			},


		];

		return webSites;
	}

	getPanelSites() {
		// Panel
		// A list of websites that will be generated and put on the Panel
		const panelSites = [
			{
				site: 'Google Scholar',
				icon: 'google-scholar',
				url: 'https://scholar.google.com/'
			},
			{
				site: 'Reddit',
				icon: 'reddit',
				url: 'https://reddit.com/'
			},
			{
				site: 'Github',
				icon: 'github',
				url: 'https://github.com/'
			},
			{
				site: 'QQmail',
				icon: 'gmail',
				url: 'https://mail.qq.com/'
			},
			{
				site: 'ResearchGate',
				icon: 'researchgate',
				url: 'https://www.researchgate.net/'
			},
			{
				site: 'Mediun',
				icon: 'medium',
				url: 'https://medium.com/'
			},

		];

		return panelSites;
	}
}
