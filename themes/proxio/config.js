/**
 * 另一个落地页主题
 */
const CONFIG = {
  PROXIO_WELCOME_COVER_ENABLE: true, //是否显示页面进入的欢迎文字
  PROXIO_WELCOME_TEXT: '所谓技术，应是热爱的延伸 所谓财富，应是自由的底气', // 欢迎文字，留空则不启用

  // 英雄区块导航
  PROXIO_HERO_ENABLE: true, // 开启英雄区
  PROXIO_HERO_TITLE_1: '多元技术驱动的咨询与服务机构', // 英雄区文字
  PROXIO_HERO_TITLE_2: 'AI 技术与数据能力的跨界应用', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  PROXIO_HERO_BUTTON_1_TEXT: '', // 英雄区按钮
  PROXIO_HERO_BUTTON_1_URL:
    'https://docs.tangly1024.com/article/vercel-deploy-notion-next', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_TEXT: '', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_URL: 'https://github.com/tangly1024/NotionNext', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_ICON: '/images/starter/github-mark.svg', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  PROXIO_HERO_BANNER_IMAGE: '', // hero区背景，默认是获取Notion背景，如需另外配置图片可以填写在这里
  PROXIO_HERO_BANNER_IFRAME_URL: '', // hero背景区内嵌背景网页 ，可以配置一个网页地址，例如动画网页https://my.spline.design/untitled-b0c6e886227646c34afc82cdc6de4ca2/

  // 文章区块
  PROXIO_BLOG_ENABLE: true, // 首页博文区块开关
  PROXIO_BLOG_TITLE: '业务',
  PROXIO_BLOG_COUNT: 4, // 首页博文区块展示前4篇文章
  PROXIO_BLOG_TEXT_1: '我们的主要业务',

  // 区块默认内容显示文章的summary文本，但也支持用自定义图片或logo德国替换掉占位显示内容
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: '', // 填写要替换成的图片，支持图床或直接上传到项目中，示例  /images/feature-1.webp
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',

  PROXIO_ANNOUNCEMENT_ENABLE: true, //公告文字区块

  // 特性区块
  PROXIO_FEATURE_ENABLE: true, // 特性区块开关
  PROXIO_FEATURE_TITLE: '为什么选我',
  PROXIO_FEATURE_TEXT_1: '在不确定的浪潮里 构建确定的价值',
  PROXIO_FEATURE_TEXT_2: '每一个项目，都是一次深度的价值交换与信任托付',

  // 特性1
  PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-stopwatch', // fas图标
  PROXIO_FEATURE_1_ICON_IMG_URL: '', // 图片图标选填，默认是fas图标，如果需要图片图标可以填写图片地址，示例/avatar.png
  PROXIO_FEATURE_1_TITLE_1: '审美驱动的叙事',
  PROXIO_FEATURE_1_TEXT_1:
    '不止于专业视频制作。我们通过技术与艺术的共振，捕捉品牌灵魂中最具生命力的光影，让视觉成为直抵人心的力量。',

  PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-comments',
  PROXIO_FEATURE_2_ICON_IMG_URL: '',
  PROXIO_FEATURE_2_TITLE_1: '通向未来的桥梁',
  PROXIO_FEATURE_2_TEXT_1: '拒绝技术焦虑。作为教育者，我们通过 AI 咨询与 GEO 优化，让您的品牌语义在生成式时代获得最清晰、最权威的表达',

  PROXIO_FEATURE_3_ICON_CLASS: 'fa-solid fa-search',
  PROXIO_FEATURE_3_ICON_IMG_URL: '',
  PROXIO_FEATURE_3_TITLE_1: '可复现的安全感',
  PROXIO_FEATURE_3_TEXT_1:
    '所有的套利逻辑均公开、透明且经得起推敲。我们不追求爆发式的增长，只追求在安全边界内的稳步前行',

  PROXIO_FEATURE_BUTTON_TEXT: '了解更多', // 按钮文字
  PROXIO_FEATURE_BUTTON_URL: 'https://github.com/tangly1024/NotionNext', // 按钮跳转

  // 首页生涯区块
  PROXIO_CAREER_ENABLE: true, // 区块开关
  PROXIO_CAREER_TITLE: '生涯',
  PROXIO_CAREER_TEXT: '以下是我的职业生涯',

  // 生涯内容卡牌 ，title是标题 ，bio是备注，text是详情
  PROXIO_CAREERS: [
    {
      title: '视觉艺术与资本逻辑的探索期',
      bio: '2014 - 2019',
      text: '核心身份： 爱奇艺《笑霸来了》编导、央视《发现之旅》技术总监、太阳在线 CFO. 在这段时期，我游走于极具张力的创意现场与严谨的财务模型之间。在爱奇艺与中央电视台的经历，让我构建了对专业影像叙事与媒介底层技术的深刻理解；而担任太阳在线 CFO 的历程，则让我开始从资本与逻辑的视角审视市场，这一阶段，我学会了如何用“光”去表达美，并开始寻找属于资产的“锚”.'
    },
    {
      title: '内容叙事与知识传递的转型期',
      bio: '2019 - 2022',
      text: '核心身份： 短剧制片人、大学讲师. 随着移动互联网进入碎片化叙事时代，我以制片人的身份投身短剧创作，探索在极短时间内激发情感共鸣的可能。与此同时，我走上大学讲台，开始将过往的实战经验转化为结构化的知识, 讲台上的教学相长，让我意识到：真正的技术，应当是赋能于人的温暖力量.'
    },
    {
      title: '光与锚：技术驱动的跨界实践期',
      bio: '2022-Now',
      text: '核心身份： 佑卿传媒「光与锚」创始人、Blender 开发者、外汇对冲策略专家, 这是我职业生涯从多元积累走向系统爆发的黄金期。我创立了 「光与锚 Light-Anchor」，致力于打通视觉记录、GEO 传播、智启咨询与资产守护的闭环，专注于黄金（XAUUSD）期现对冲策略，在市场的波动中捕捉确定性的复利回响.'
    }
  ],

  // 首页用户测评区块
  PROXIO_TESTIMONIALS_ENABLE: true, // 测评区块开关
  PROXIO_TESTIMONIALS_TITLE: '用户反馈',
  PROXIO_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
  PROXIO_TESTIMONIALS_TEXT_2:
    '高校课堂的学术探讨，到商业前沿的技术落地。我们有幸见证了众多品牌在 AI 浪潮中重塑表达，也陪伴了许多理性投资者在波动中找到了稳健的锚点',

  // 用户测评处的跳转按钮
  PROXIO_TESTIMONIALS_BUTTON_URL: '/about',
  PROXIO_TESTIMONIALS_BUTTON_TEXT: '联系我',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  PROXIO_TESTIMONIALS_ITEMS: [
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '王老师对技术的运用极其克制且精准。在合作 AI 影视项目时，他不仅提供了电影级的视觉方案，更通过他的教学思维帮我们的团队理清了未来的技术流。与其说是一次交付，不如说是一场深刻的审美进修 ',
      PROXIO_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '小鹤',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '艺术总监',
      PROXIO_TESTIMONIALS_ITEM_URL: ''
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '在外汇这个充满博弈的行业，很少见到如此坦诚且逻辑闭环的策略。黄金期现套利不追求夸张的爆发，但那种‘看得见、睡得香’的确定性增长，才是当下巨变环境下最珍贵的资产‘避风港',
      PROXIO_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'netguest',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '忠实托管客户',
      PROXIO_TESTIMONIALS_ITEM_URL: ''
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '在大学期间，王老师的课就是我们通往数字艺术边界的窗口。他不仅教会了我们如何驾驭 Touch Designer 和 AI 工具，更传授了那种‘技术服务于叙事’的克制感。即便毕业多年，我在创作遇到瓶颈时，依然会回到他的空间寻找启发，( •̀ ω •́ )y ',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '小谢不用谢',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '策展设计师',
      PROXIO_TESTIMONIALS_ITEM_URL: ''
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '作为一个小品牌，我们没有巨额预算去投广告。GEO 服务最让我感触的是它的人文关怀——它不是在教我如何钻算法空子，而是在帮我向 AI 讲好品牌故事，我知道我的坚持终于被看懂了',
      PROXIO_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Siven ',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '国风化妆品领航者',
      PROXIO_TESTIMONIALS_ITEM_URL: ''
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '金融的本质是信任。在合作黄金托管业务的过程中，最吸引我的不是那份收益表，而是背后那种保底、稳健、不冒进的理财哲学。这种安全感，源于一个跨界者对规则的敬畏，也源于一份想要为普通人构建资产护城河的初心',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Jhon',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '盾博投资者',
      PROXIO_TESTIMONIALS_ITEM_URL: ''
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT: 'Blender插件很好用，公众号给我启发很大666',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'FD',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Blender爱好者',
      PROXIO_TESTIMONIALS_ITEM_URL: ''
    }
  ],

  //   FAQ 常见问题模块
  PROXIO_FAQ_ENABLE: true, // 常见问题模块开关
  PROXIO_FAQ_TITLE: '常见问题解答',
  PROXIO_FAQ_TEXT_1: '有任何问题吗？请看这里',
  PROXIO_FAQ_TEXT_2: '我们收集了常见的用户疑问',
  PROXIO_FAQS: [
    {
      q: '为什么将视觉艺术与金融套利这两个跨度极大的领域结合在一起？',
      a: ' 这是一个关于“创造”与“守护”的故事。视觉艺术（光）是我对世界表达热爱的方式，它赋予生命色彩；而黄金套利（锚）则是利用数学逻辑构建的资产护城河，它赋予生命尊严。在不确定的 2026 年，我希望通过技术帮助品牌发光，同时通过逻辑帮助普通人稳住生活的底气'
    },
    {
      q: 'GEO 优化与传统的 SEO 有什么本质区别？它真的能被 AI 记住吗？',
      a: 'SEO 是在做排名，而 GEO 是在做“语义资产”。在豆包和元宝统治的时代，AI 不再看链接权重，而看谁的品牌更具权威性和语义一致性。我们通过结构化数据和高质量的内容喂养，让您的品牌不仅仅是被搜索到，而是被 AI 作为“唯一答案”优先推荐'
    },
    {
      q: '托管业务如何保证我的本金安全？在剧烈行情下会爆仓吗？',
      a: '我们深知金融的本质是信任。您的本金始终留在您个人的受监管券商账户中，我们仅通过受限权限进行交易。不同于高风险的单边投机，黄金期现套利是基于“价差回归”的数学闭环。无论金价如何波动，对冲结构都能有效抵御风险，追求的是极低回撤下的稳健增长'
    },
    {
      q: '如果我想引入 AI 咨询或定制课程，合作流程是怎样的？',
      a: '基于我的大学教研背景，我们的咨询流程始终以“赋能”为核心。我们会先对您的品牌或团队进行一次深度的 AI 适应性体检，确定痛点后，提供定制化的内训或工具链部署方案。我们不提供生搬硬套的模板，只提供能实战、能沉淀、能带得走的进化策略'
    }
  ],

  // 关于作者区块
  PROXIO_ABOUT_ENABLE: true, // 关于作者区块区块开关
  PROXIO_ABOUT_TITLE: '关于创始人',
  PROXIO_ABOUT_TEXT_1: '大学讲师 视觉艺术家 数字策略师',
  PROXIO_ABOUT_TEXT_2:
    '在大学讲坛，我致力于探索数字媒体与 AI 的边界，播种创意的种子；在商业战场，我通过 GEO（生成式引擎优化） 与专业视觉叙事，为品牌重塑影响力.',
  PROXIO_ABOUT_PHOTO_URL: '/avatarone.png',
  PROXIO_ABOUT_KEY_1: '经验年限',
  PROXIO_ABOUT_VAL_1: '12年+',
  PROXIO_ABOUT_KEY_2: '客户',
  PROXIO_ABOUT_VAL_2: '3000+',
  PROXIO_ABOUT_KEY_3: '交付项目',
  PROXIO_ABOUT_VAL_3: '5000+',
  PROXIO_ABOUT_KEY_4: '逻辑与实盘积淀',
  PROXIO_ABOUT_VAL_4: '20000+',

  PROXIO_ABOUT_BUTTON_URL: '/about',
  PROXIO_ABOUT_BUTTON_TEXT: '关于我',

  // 横向滚动文字
  PROXIO_BRANDS_ENABLE: true, // 滚动文字
  PROXIO_BRANDS: [
    'Video Design',
    'GEO Services,
    'Business Consulting',
    'Foreign exchange trading'
  ],

  PROXIO_FOOTER_SLOGAN: '我们通过技术为品牌和公司创造数字体验。',

  // 页脚三列菜单组
  // 页脚菜单
  PROXIO_FOOTER_LINKS: [
    {
      name: '友情链接',
      menus: [
        {
          title: 'Tangly的学习笔记',
          href: 'https://blog.tangly1024.com'
        },
        {
          title: 'NotionNext',
          href: 'https://www.tangly1024.com'
        }
      ]
    },
    {
      name: '开发者',
      menus: [
        { title: 'Github', href: 'https://github.com/tangly1024/NotionNext' },
        {
          title: '开发帮助',
          href: 'https://docs.tangly1024.com/article/how-to-develop-with-notion-next'
        },
        {
          title: '功能反馈',
          href: 'https://github.com/tangly1024/NotionNext/issues/new/choose'
        },
        {
          title: '技术讨论',
          href: 'https://github.com/tangly1024/NotionNext/discussions'
        },
        {
          title: '关于作者',
          href: 'https://blog.tangly1024.com/about'
        }
      ]
    }
  ],

  PROXIO_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  PROXIO_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  PROXIO_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  PROXIO_404_TITLE: '我们似乎找不到您要找的页面。',
  PROXIO_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  PROXIO_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  PROXIO_CTA_ENABLE: true,
  PROXIO_CTA_TITLE: '与我建立联系',
  PROXIO_CTA_TITLE_2: '让我们立刻启动您的项目',
  PROXIO_CTA_DESCRIPTION:
    '访问NotionNext的操作文档，我们提供了详细的教程，帮助你即刻搭建站点',
  PROXIO_CTA_BUTTON: true, // 是否显示按钮
  PROXIO_CTA_BUTTON_URL: '/about',
  PROXIO_CTA_BUTTON_TEXT: '联系我',

  PROXIO_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  PROXIO_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
  PROXIO_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_PROXIO_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
