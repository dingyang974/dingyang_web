export type Project = {
  title: string;
  role: string;
  time: string;
  label: string;
  summary: string;
  highlights: string[];
  metrics: string[];
  assets?: {
    src: string;
    alt: string;
  }[];
  demo?: string;
  award?: string;
};

export const profile = {
  name: "丁杨",
  targetRole: "AI产品经理",
  headline:
    "国防科技大学研二，管理科学与工程专业，自然语言处理方向，求职AI产品经理。",
  summary:
    "关注大模型、RAG与Agent在企业业务场景中的产品化落地，具备AI产品0→1设计、NLP文本分析、数据建模、原型设计和产品迭代经验。希望将技术理解、业务洞察和产品方法结合，设计能真正进入工作流、辅助决策并产生业务价值的AI产品。",
  tags: ["AI产品", "RAG / Agent", "NLP文本分析", "产品0→1", "数据驱动迭代"],
  education: [
    "国防科技大学｜管理科学与工程｜硕士研究生｜自然语言处理方向｜2024.09-2027.06",
    "吉林大学｜信息管理与信息系统｜本科｜GPA前10%（保研）｜2020.09-2024.06",
  ],
  status: ["研二在读", "可长期实习", "英语可作为工作语言"],
  resume: {
    label: "下载简历 PDF",
    path: "/resume/ding-yang-resume.pdf",
  },
};

export const heroMetrics = [
  { value: "0→1", label: "AI产品设计与MVP验证" },
  { value: "7+", label: "多源市场信号整合平台" },
  { value: "5000+", label: "日均文本与元数据采集" },
  { value: "H奖", label: "美国大学生数学建模竞赛" },
];

export const strengths = [
  {
    title: "AI产品场景化设计",
    description:
      "能够将RAG、NLP、Agent研判等AI能力转化为具体业务工作流，围绕企业情报、风险识别、竞品分析和行动建议设计可验证的AI产品方案。",
    keywords: ["AI产品", "RAG", "Agent", "业务工作流", "MVP"],
  },
  {
    title: "从需求到原型的产品方法",
    description:
      "具备需求调研、竞品分析、用户画像、功能结构设计和原型设计经验，能够把复杂业务场景拆解成清晰的角色、流程和交互页面。",
    keywords: ["需求分析", "竞品调研", "用户流程", "墨刀原型"],
  },
  {
    title: "NLP与数据分析能力",
    description:
      "熟悉文本清洗、情感分析、主题建模、向量检索、数据可视化和预测建模，能够理解AI能力边界，并将模型结果转化为业务洞察。",
    keywords: ["BERT", "BERTopic", "Python", "数据建模"],
  },
  {
    title: "反馈闭环与产品迭代",
    description:
      "在AIGC产品实习中参与query、点赞/拉踩、负面反馈和rerun case分析，协助定位response优化方向，支持标签体系和评测报告建设。",
    keywords: ["反馈闭环", "评测分析", "标签体系", "产品迭代"],
  },
];

export const projects: Project[] = [
  {
    title: "企业市场情报分析助手 InsightOps",
    role: "AI产品0→1设计与实现",
    time: "2025.10-2026.02",
    label: "代表项目",
    demo: "https://dingyang-spider-rag.streamlit.app/",
    summary:
      "面向品牌运营、公关风控、营销增长和竞品策略等企业经营场景，设计并实现一款AI驱动的企业市场情报分析助手。产品将多源市场信号、风险事件、竞品动态、用户反馈和RAG证据库整合到统一工作台中，帮助业务团队从信息监测进入Agent研判、证据追溯、任务分派和行动建议。",
    highlights: [
      "围绕企业市场情报工作流，设计市场情报总览、Agent研判中心、风险事件中心、竞品情报雷达和证据库等核心模块。",
      "设计多角色工作视角，覆盖品牌运营、公关风控、营销增长和竞品策略，支持不同团队按职责查看情报、风险和建议动作。",
      "整合微博、抖音、小红书等多源公开数据，构建市场反馈与消费评论数据底座，为后续分析、检索和问答提供事实依据。",
      "基于BERT进行情感与风险倾向识别，结合BERTopic提取热点主题，辅助识别市场趋势、负面事件和竞品机会。",
      "使用FAISS构建向量证据库，接入DeepSeek API，通过RAG让Agent在生成研判结论时引用相关评论和证据，降低大模型幻觉风险。",
      "设计从发现信号、生成研判、追溯证据、分派负责人到输出行动建议的闭环流程，使AI能力嵌入企业情报处理链路。",
    ],
    metrics: ["RAG证据库", "多角色工作台", "AI置信度", "任务分派闭环"],
    assets: [
      {
        src: "/assets/insightops/overview.png",
        alt: "企业市场情报分析助手的市场情报总览页面截图",
      },
      {
        src: "/assets/insightops/risk-center.png",
        alt: "企业市场情报分析助手的风险事件中心页面截图",
      },
      {
        src: "/assets/insightops/competitor-radar.png",
        alt: "企业市场情报分析助手的竞品情报雷达页面截图",
      },
      {
        src: "/assets/insightops/agent-detail.png",
        alt: "企业市场情报分析助手的Agent研判详情页面截图",
      },
    ],
  },
  {
    title: "基于NLP的员工评价一致性分析方案",
    role: "NLP分析方案设计",
    time: "2026.04",
    label: "AI分析方案",
    summary:
      "围绕员工评价文本中存在的空泛表述、隐含语义、评价维度混杂和反馈一致性不足等问题，设计基于NLP的评价文本拆解与一致性分析方案，为HR和管理者提供员工画像、风险预警和组织洞察。",
    highlights: [
      "将评价文本拆解为评价维度、立场和证据，识别文本中的共识与分歧。",
      "设计员工评价画像卡，辅助判断员工优势、短板和潜在冲突点。",
      "基于评价一致性识别争议冲突、低信息量评价和互补型评价。",
      "提出风险预警推送机制，将高关注模块同步给相关管理者，提高问题响应效率。",
      "通过组织评价网络识别团队中的核心人物、协作关系和潜在沟通断点。",
    ],
    metrics: ["评价画像卡", "一致性分析", "风险预警", "组织网络"],
  },
  {
    title: "基于LSTM-ARIMAX的奥运会奖牌预测模型",
    role: "数据建模与分析",
    time: "2024.12-2025.01",
    label: "建模项目",
    award: "美国大学生数学建模竞赛 H奖",
    summary:
      "围绕奥运会奖牌预测问题，构建融合时间序列趋势、历史表现和外部影响因素的混合预测模型，用于预测各国奖牌数量分布。",
    highlights: [
      "初步筛选GDP、人口规模、历史成绩、主场优势等12个潜在影响因素。",
      "使用随机森林进行特征重要性分析，保留4个关键预测因子，降低过拟合风险。",
      "构建LSTM-ARIMAX混合模型，结合非线性特征捕捉与线性趋势建模。",
      "使用MSE、MAE等指标评估模型效果，并可视化预测值与真实值拟合情况。",
      "模型预测效果较基线模型提升约15%。",
    ],
    metrics: ["12个候选因子", "4个关键特征", "MSE / MAE", "15%提升"],
  },
];

export type Internship = {
  company: string;
  role: string;
  time: string;
  summary: string;
  signals: string[];
  responsibilities: string[];
};

export const internships: Internship[] = [
  {
    company: "万兴科技",
    role: "AI产品实习",
    time: "2026.02-2026.05",
    summary:
      "参与AIGC产品相关工作，围绕用户使用场景、竞品体验和功能流程进行分析，协助梳理产品需求、优化交互体验，并沉淀面向AI产品迭代的素材与反馈。",
    signals: ["AIGC产品体验", "竞品与需求分析", "功能迭代闭环"],
    responsibilities: [
      "调研AIGC工具类产品的核心功能、用户路径和差异化体验，整理竞品分析与改进建议。",
      "从用户场景出发梳理功能流程，协助拆解需求优先级、页面交互逻辑和版本优化方向。",
      "参与产品体验走查，记录关键问题、边界场景和优化机会，支持后续版本迭代。",
      "关注AI生成结果质量、易用性和用户反馈，协助沉淀可复用的产品观察与分析材料。",
    ],
  },
  {
    company: "北京长亭科技",
    role: "AIGC / AI工具产品岗",
    time: "2024.06-2024.09",
    summary:
      "参与0→1 AI辅助网安产品建设，支持AI工具在网络安全产品使用、运营、售后和垂直领域大模型训练中的落地。",
    signals: ["0→1 AI工具产品", "竞品与需求分析", "评测数据闭环"],
    responsibilities: [
      "调研网安行业头部AI工具竞品的应用场景和使用效果，协助明确产品创新路径。",
      "参与需求调研与分析，协助输出需求文档，并从页面UI、交互流程和商业化角度参与版本设计。",
      "结合用户画像和使用习惯，产出多版产品原型图，并跟进产品迭代流程。",
      "抽取用户query、点赞/拉踩、负面反馈和rerun case，分析response改进方向。",
      "协助重构标签体系，整理评测数据并输出分析报告。",
      "参与大模型训练数据质量标准制定，对网络安全领域文本数据进行清洗、标注和分类。",
    ],
  },
];

export const skillGroups = [
  {
    title: "产品能力",
    items: ["需求分析", "竞品分析", "用户画像", "用户流程设计", "PRD", "原型设计", "产品迭代"],
  },
  {
    title: "AI产品理解",
    items: ["RAG", "Prompt设计", "DeepSeek API", "FAISS向量检索", "大模型应用理解", "AI评测分析"],
  },
  {
    title: "NLP / 数据",
    items: ["Python", "SQL", "Pandas", "BERT情感分析", "BERTopic主题建模", "LSTM", "ARIMAX"],
  },
  {
    title: "工具与语言",
    items: ["墨刀", "XMind", "Visio", "Tableau", "SPSS", "Excel高级函数", "IELTS 7.0"],
  },
];
