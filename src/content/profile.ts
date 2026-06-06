export type PortfolioAsset = {
  src: string;
  alt: string;
};

export type PortfolioCard = {
  id: string;
  deckTitle: string;
  title: string;
  subtitle: string;
  meta: string;
  category: string;
  summary: string;
  highlights: string[];
  tags: string[];
  link?: {
    label: string;
    href: string;
  };
  assets?: PortfolioAsset[];
  accent: "mint" | "peach" | "sky" | "lemon" | "rose" | "lilac" | "green" | "sand";
};

export type InternshipExperience = {
  id: string;
  company: string;
  role: string;
  time: string;
  kind: string;
  summary: string;
  highlights: string[];
  tags: string[];
  accent: "mint" | "sky";
};

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const profile = {
  name: "丁杨",
  targetRole: "AI产品经理",
  signature: "Designing AI products that turn messy signals into clear decisions.",
  typewriterPhrases: [
    "AI产品经理",
    "数据产品经理",
    "NLP方向研究生",
    "会做原型，也懂数据与模型边界",
    "把AI能力设计进真实业务流程",
  ],
  floatingTags: ["AI Product", "Data Insight", "RAG / Agent", "Product Sense", "Research Mindset"],
  resume: {
    label: "下载简历 PDF",
    path: publicAsset("resume/ding-yang-resume.pdf"),
  },
  contactEmail: "13317310637@163.com",
};

export const educationPanel = {
  education: [
    {
      school: "国防科技大学",
      major: "管理科学与工程 | 自然语言处理方向",
      time: "2024.09 - 2027.06",
      notes: [],
    },
    {
      school: "吉林大学",
      major: "信息管理与信息系统 | 商务英语双学位",
      time: "2020.09 - 2024.06",
      notes: ["GPA 前 10%", "保研", "国家励志奖学金", "一等奖学金", "院优秀学生", "学术科技奖", "互联网+省金"],
    },
  ],
  toolkit: [
    {
      label: "产品与设计",
      items: ["figma", "lovable", "Canva", "XMind", "Visio", "Office"],
    },
    {
      label: "数据与分析",
      items: ["SQL", "Python", "Tableau", "SPSS", "Gephi", "Excel 高级函数"],
    },
    {
      label: "语言能力",
      items: ["IELTS 7.0", "可作为工作语言"],
    },
  ],
  tags: ["NLP Research", "Product Thinking", "Data Analysis", "Prototype Design", "IELTS 7.0"],
};

export const internshipExperiences: InternshipExperience[] = [
  {
    id: "wondershare",
    company: "万兴科技",
    role: "产品策划经理",
    time: "2026.01-2026.05",
    kind: "Internal Data Product",
    summary:
      "面向企业内部团队分析系统，参与数据型产品策划与迭代。产品服务于管理者，用于追踪项目进展、识别团队风险、挖掘高潜人才。",
    highlights: [
      "根据业务方需求，使用 lovable / figma make 快速输出高保真前端原型，推动 10+ 需求上线。",
      "协调数开、前端、测试人员的排期与需求验收，跟进功能从需求到上线后的运营闭环。",
      "基于产品事件埋点搭建 QuickBI 看板，为后续迭代和用户体验优化提供数据支撑。",
      "参与员工评价数据一致性分析，调用 LLM 进行评语语义拆分，使用 Sentence Transformer 完成向量嵌入，自动输出员工优劣势画像与结构化评价卡片。",
      "支持私有化模型部署和常态化训练，为管理者绩效面谈提供数据支撑，减少人工整理评价的时间成本约 70%。",
      "基于公司内部 AI 编程平台和 Git 版本控制，以 AI native 工作流参与新功能快速开发上线。",
    ],
    tags: ["数据产品", "内部系统", "QuickBI", "LLM应用", "AI Native"],
    accent: "mint",
  },
  {
    id: "chaitin",
    company: "北京长亭科技",
    role: "AI工具产品岗",
    time: "2024.06-2024.09",
    kind: "AI Security Product",
    summary: "参与 0→1 网安垂直领域 AI 智能问答产品建设，辅助网安产品的使用、运营和售后。",
    highlights: [
      "随机抽取用户 query 及点赞/拉踩反馈，重点关注负面案例与 rerun 情况。",
      "从「需求理解」和「回复满意度」两个维度定位模型生成内容问题。",
      "协助重构标签体系，提升回答质量。",
      "建立效果评估闭环，设计准确性、相关性、安全性等多维度评测标准。",
      "通过分析用户反馈与模型输出异常，持续定位大模型在真实场景中的能力边界，驱动产品与模型迭代。",
    ],
    tags: ["AI工具产品", "网安场景", "Badcase分析", "评测闭环"],
    accent: "sky",
  },
];

export const portfolioCards: PortfolioCard[] = [
  {
    id: "insightops",
    deckTitle: "InsightOps",
    title: "企业市场情报 Agent",
    subtitle: "AI产品0→1设计与实现",
    meta: "2025.10-2026.02",
    category: "代表项目",
    summary:
      "面向品牌运营、公关风控、营销增长和竞品策略场景，设计 AI 驱动的企业市场情报分析助手，帮助业务团队从信息监测进入 Agent 研判、证据追溯和行动建议。",
    highlights: [
      "设计市场情报总览、Agent 研判中心、风险事件中心、竞品情报雷达和证据库。",
      "整合微博、抖音、小红书等 7 个主流平台数据，实现日均 5000+ 条文本及互动数据采集。",
      "基于 BERT 进行细粒度情绪分类，结合 BERTopic 自动提取热点话题并追踪演化轨迹。",
      "接入 DeepSeek API，使用 FAISS 构建向量证据库，通过 RAG 让生成结论引用事实证据，降低幻觉风险。",
      "形成从数据采集、分析到决策支持的 MVP 产品流程。",
    ],
    tags: ["RAG", "Agent", "企业情报", "AI产品0→1"],
    link: {
      label: "在线 Demo",
      href: "https://dingyang-spider-rag.streamlit.app/",
    },
    assets: [
      {
        src: publicAsset("assets/insightops/overview.png"),
        alt: "企业市场情报分析助手的市场总览页面截图",
      },
      {
        src: publicAsset("assets/insightops/risk-center.png"),
        alt: "企业市场情报分析助手的风险事件中心页面截图",
      },
      {
        src: publicAsset("assets/insightops/competitor-radar.png"),
        alt: "企业市场情报分析助手的竞品情报雷达页面截图",
      },
    ],
    accent: "peach",
  },
  {
    id: "olympic",
    deckTitle: "Olympic Forecast",
    title: "基于深度时序建模的预测项目",
    subtitle: "美赛建模项目 · H奖",
    meta: "2024.12-2025.01",
    category: "建模项目",
    summary: "围绕奥运奖牌预测问题，构建融合时间序列趋势、历史表现和外部影响因素的预测模型。",
    highlights: [
      "初选 GDP、人口规模、历史成绩、主场优势等 12 个候选影响因素。",
      "使用随机森林进行特征重要性分析，筛选 4 个关键预测特征。",
      "构建 LSTM-ARIMAX 混合模型，用 LSTM 捕捉非线性特征，用 ARIMAX 处理线性趋势与外部因子。",
      "使用 MSE、MAE 等指标评估模型效果，并可视化预测值与真实值拟合情况。",
    ],
    tags: ["LSTM", "ARIMAX", "特征工程", "预测建模"],
    accent: "lemon",
  },
  {
    id: "cssci",
    deckTitle: "Research Publication",
    title: "CSSCI 二作论文",
    subtitle: "双减政策下的公共图书馆家庭亲子阅读服务",
    meta: "2022.02-2023.05",
    category: "研究发表",
    summary: "《双减政策下的公共图书馆家庭亲子阅读服务——基于 csQCA 方法的影响路径分析》。",
    highlights: [
      "参与“双减”政策背景下家庭亲子阅读服务研究。",
      "使用 fsQCA / csQCA 方法参与实证数据分析与路径建模。",
      "参与论文结构调整、内容修改和研究表达优化。",
      "最终以第二作者发表于 CSSCI 期刊。",
    ],
    tags: ["CSSCI", "QCA", "路径分析", "二作"],
    accent: "rose",
  },
  {
    id: "wordle",
    deckTitle: "Wordle Modeling",
    title: "Wordle 结果预测与分类",
    subtitle: "美国大学生数学建模竞赛 · H奖",
    meta: "2022.12-2023.03",
    category: "建模竞赛",
    summary: "围绕 Wordle 字谜游戏数据，建立预测与分类模型，探索游戏结果分布规律。",
    highlights: [
      "使用 ARIMA 模型进行时间序列分析与结果预测。",
      "根据数据特性设置参数，建立最小二乘回归模型。",
      "基于 GBDT 建立决策树模型，完成分类与预测任务。",
      "根据模型构建思路和结果撰写英文建模报告，并负责报告美工设计。",
    ],
    tags: ["MCM", "H奖", "ARIMA", "GBDT"],
    accent: "lilac",
  },
  {
    id: "business",
    deckTitle: "Business Design",
    title: "商业竞赛组合",
    subtitle: "三创赛省一 + 互联网+省金",
    meta: "2023.05-2024.07",
    category: "商业设计",
    summary: "将两个商业竞赛合并为一张“商业设计能力”牌，展示市场分析、产品服务设计、商业模式和答辩表达能力。",
    highlights: [
      "全国大学生电子商务“创新、创意及创业”挑战赛省级一等奖，负责商业计划书中的产品与服务介绍、市场分析、商业模式，以及 PPT 制作与答辩。",
      "互联网+大学生创新创业大赛省级金奖，查阅市场营销文献 30+ 篇，制定市场营销战略，并完成商业计划书撰写。",
      "能够将用户价值、市场空间、商业模式和展示表达组织成完整商业叙事。",
    ],
    tags: ["商业模式", "市场分析", "BP撰写", "答辩表达"],
    accent: "sand",
  },
  {
    id: "employee-evaluation",
    deckTitle: "NLP Evaluation Insight",
    title: "员工评价一致性分析方案",
    subtitle: "基于 NLP 的评价文本洞察",
    meta: "2026.04",
    category: "NLP方案",
    summary: "面向 HR 和管理者，设计基于 NLP 的员工评价文本一致性分析方案，将主观评价拆解为可分析、可追踪的数据洞察。",
    highlights: [
      "针对评价文本中的空泛表述、隐含语义、维度混杂和反馈不一致问题设计分析方案。",
      "将评价文本拆解为评价维度、立场和证据，识别共识与分歧。",
      "设计员工评价画像卡，辅助判断优势、短板和潜在冲突点。",
      "通过员工评价网络识别团队核心人物、协作关系和沟通断点。",
    ],
    tags: ["NLP", "文本分析", "网络分析", "数据洞察"],
    accent: "green",
  },
];

export const capabilityGroups = [
  {
    title: "Product",
    items: ["需求拆解", "原型设计", "竞品分析", "用户流程", "MVP验证"],
  },
  {
    title: "AI",
    items: ["RAG", "Agent", "LLM评测", "Prompt", "AI Native"],
  },
  {
    title: "Data",
    items: ["SQL", "Python", "QuickBI", "Tableau", "网络分析"],
  },
];
