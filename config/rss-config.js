// RSS源接口
// name: 信息源名称
// url: RSS URL地址
// category: 分类名称

/**
 * @typedef {object} RssSource
 * @property {string} name - 信息源名称
 * @property {string} url - RSS URL地址
 * @property {string} category - 分类名称
 */

// 默认配置
export const config = {
  sources: [
    {
      name: "Hacker News 近期最佳",
      url: "https://hnrss.org/best",
      category: "科技资讯",
    },
    {
      name: "Hacker News 历史每日前十",
      url: "https://rsshub.rssforever.com/github/issue/headllines/hackernews-daily",
      category: "科技资讯",
    },
    {
      name: "Github 今日热门",
      url: "https://rsshub.rssforever.com/github/trending/daily/any",
      category: "代码项目",
    },
    {
      name: "Github 近一周热门",
      url: "https://rsshub.rssforever.com/github/trending/weekly/any",
      category: "代码项目",
    },
    {
      name: "Hugging Face 每日论文",
      url: "https://rsshub.rssforever.com/huggingface/daily-papers",
      category: "科研论文",
    },
    {
      name: "Hugging Face 博客",
      url: "https://rsshub.rssforever.com/huggingface/blog",
      category: "技术博客",
    },
    {
      name: "Google 开发者博客",
      url: "https://rsshub.rssforever.com/google/developers/en",
      category: "技术博客",
    },
    {
      name: "Google 研究博客",
      url: "https://rsshub.rssforever.com/google/research",
      category: "技术博客",
    },
    {
      name: "Product Hunt 今日热门",
      url: "https://rsshub.app/producthunt/today",
      category: "产品资讯",
    },
    {
      name: "LINUX DO 今日热门",
      url: "https://r4l.deno.dev/https://linux.do/top.rss?period=daily",
      category: "论坛",
    },
    {
      name: "LINUX DO 近一周热门",
      url: "https://r4l.deno.dev/https://linux.do/top.rss?period=weekly",
      category: "论坛",
    },
    {
      name: "LINUX DO 近一月热门",
      url: "https://r4l.deno.dev/https://linux.do/top.rss?period=monthly",
      category: "论坛",
    },
    {
      name: "华尔街日报 - 美国国内新闻",
      url: "https://feeds.content.dowjones.io/public/rss/RSSUSnews",
      category: "新闻",
    },
    {
      name: "华尔街日报 - 美国政治新闻",
      url: "https://feeds.content.dowjones.io/public/rss/socialpoliticsfeed",
      category: "新闻",
    },
    {
      name: "华盛顿日报 - 头条新闻",
      url: "https://www.washingtontimes.com/rss/headlines/news/",
      category: "新闻",
    },
    {
      name: "华盛顿日报 - 美国国内新闻",
      url: "https://www.washingtontimes.com/rss/headlines/news/national/",
      category: "新闻",
    },
    {
      name: "路透社 - 美国新闻",
      url: "https://rsss.templateapot.cn/reuters/world/us",
      category: "新闻",
    },
    {
      name: "纽约时报 - 头条新闻",
      url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
      category: "新闻",
    },
    {
      name: "华盛顿邮报 - 美国国内新闻",
      url: "https://rsss.templateapot.cn/washingtonpost/app/national",
      category: "新闻",
    },
    {
      name: "路透社世界新闻 - 中国",
      url: "https://rsss.templateapot.cn/reuters/world/china",
      category: "新闻",
    },
    {
      name: "联合早报 - 即时新闻 - 中国",
      url: "https://rsss.templateapot.cn/zaobao/realtime/china",
      category: "新闻",
    },
    {
      name: "BBC World News - 亚太区",
      url: "https://rsss.templateapot.cn/bbc/world-asia",
      category: "新闻",
    },
    {
      name: "RTHK - 香港新闻",
      url: "https://rthk.hk/rthk/news/rss/c_expressnews_clocal.xml",
      category: "新闻",
    },
    {
      name: "CGTN - 国际新闻",
      url: "https://www.cgtn.com/subscribe/rss/section/world.xml",
      category: "新闻",
    },
    {
      name: "南华早报",
      url: "https://www.scmp.com/rss/91/feed",
      category: "新闻",
    },
    {
      name: "英国《独立报》 - 英国新闻",
      url: "https://www.independent.co.uk/news/uk/rss",
      category: "新闻",
    },
    {
      name: "华盛顿邮报 - 美国国内新闻",
      url: "https://rsss.templateapot.cn/washingtonpost/app/national",
      category: "新闻",
    },
    {
      name: "CVE漏洞资讯 - Latest CVE Feed",
      url: "https://cvefeed.io/rssfeed/latest.xml",
      category: "软件安全",
    },
    {
      name: "CVE漏洞资讯 - High and Critical Severity",
      url: "https://cvefeed.io/rssfeed/severity/high.xml",
      category: "软件安全",
    },
  ],
  maxItemsPerFeed: 30,
  dataPath: "./data",
}

export const defaultSource = config.sources[0]

/**
 * @param {string} url
 * @returns {RssSource | undefined}
 */
export function findSourceByUrl(url) {
  return config.sources.find((source) => source.url === url)
}

export function getSourcesByCategory() {
  return config.sources.reduce((acc, source) => {
    if (!acc[source.category]) {
      acc[source.category] = []
    }
    acc[source.category].push(source)
    return acc
  }, {})
}
