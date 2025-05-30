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
      name: "Hugging Face 每日论文",
      url: "https://rsss.templateapot.cn/huggingface/daily-papers",
      category: "科研论文",
    },
    {
      name: "Hugging Face 博客",
      url: "https://rsss.templateapot.cn/huggingface/blog",
      category: "技术博客",
    },
    {
      name: "Google 开发者博客",
      url: "https://rsss.templateapot.cn/google/developers/en",
      category: "技术博客",
    },
    {
      name: "Google 研究博客",
      url: "https://rsss.templateapot.cn/google/research",
      category: "技术博客",
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
      name: "路透社 - 美国新闻",
      url: "https://rsss.templateapot.cn/reuters/world/us",
      category: "新闻",
    },
    {
      name: "路透社 - 世界新闻中国",
      url: "https://rsss.templateapot.cn/reuters/world/china",
      category: "新闻",
    },
    {
      name: "纽约时报 - 头条新闻",
      url: "https://rsss.templateapot.cn/nytimes/rss/HomePage",
      category: "新闻",
    },
    {
      name: "纽约时报 - 美国国内新闻",
      url: "https://rsss.templateapot.cn/nytimes/rss/US",
      category: "新闻",
    },
    {
      name: "华盛顿邮报 - 美国国内新闻",
      url: "https://rsss.templateapot.cn/washingtonpost/app/national",
      category: "新闻",
    },
    {
      name: "BBC News - 英国国内新闻",
      url: "https://rsss.templateapot.cn/bbc/uk",
      category: "新闻",
    },
    {
      name: "BBC News - World News 亚太区",
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
      name: "英国《独立报》 - 英国新闻",
      url: "https://www.independent.co.uk/news/uk/rss",
      category: "新闻",
    },
    {
      name: "新华网 - 新闻",
      url: "https://rsss.templateapot.cn/xinhuanet/app",
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

export const defaultSource = config.sources[1]

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
