import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  DatabaseZap,
  Download,
  ExternalLink,
  FileText,
  Layers3,
  Mail,
  Radar,
  Sparkles,
} from "lucide-react";
import {
  heroMetrics,
  internships,
  profile,
  projects,
  skillGroups,
  strengths,
} from "./content/profile";
import type { Project } from "./content/profile";

const navItems = [
  { href: "#strengths", label: "优势" },
  { href: "#projects", label: "项目" },
  { href: "#internship", label: "实习" },
  { href: "#skills", label: "技能" },
];

const lifePhotos = Array.from(
  { length: 7 },
  (_, index) => `/assets/profile/life-${String(index + 1).padStart(2, "0")}.jpg`,
);

const internshipSignalIcons = [BadgeCheck, Radar, DatabaseZap];

function App() {
  const galleryPhotos = [...lifePhotos, ...lifePhotos];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="回到顶部">
          <span className="brand-mark">DY</span>
          <span>丁杨</span>
        </a>
        <nav aria-label="页面导航">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-action" href={profile.resume.path} target="_blank" rel="noreferrer">
          <Download size={18} />
          简历
        </a>
      </header>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">
            <Sparkles size={16} />
            {profile.targetRole} Portfolio
          </p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero-headline">{profile.headline}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="tag-row">
            {profile.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              查看代表项目
              <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href={profile.resume.path} target="_blank" rel="noreferrer">
              <Download size={18} />
              下载简历
            </a>
          </div>
        </div>
        <div className="hero-gallery" aria-label="个人生活照片">
          <div className="gallery-shell">
            <div className="gallery-track">
              {galleryPhotos.map((src, index) => (
                <figure className="gallery-card" key={`${src}-${index}`}>
                  <img src={src} alt={`丁杨生活照 ${index % lifePhotos.length + 1}`} />
                </figure>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-metrics" aria-label="关键亮点">
          {heroMetrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="intro-band" aria-label="求职定位">
        <div>
          <p>求职定位</p>
          <strong>AI产品经理，偏大模型应用、企业智能体与数据驱动产品方向。</strong>
        </div>
        <div>
          <p>教育背景</p>
          {profile.education.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div>
          <p>当前状态</p>
          {profile.status.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section id="strengths" className="section">
        <div className="section-heading">
          <p className="eyebrow">
            <BrainCircuit size={16} />
            Why AI Product
          </p>
          <h2>把AI能力放进真实业务流程</h2>
          <p>
            这版网页先把你的核心叙事聚焦在AI产品能力：理解技术边界，也能把业务痛点拆成可验证的产品方案。
          </p>
        </div>
        <div className="strength-grid">
          {strengths.map((strength, index) => (
            <article className="strength-card" key={strength.title}>
              <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
              <div className="mini-tags">
                {strength.keywords.map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section project-section">
        <div className="section-heading">
          <p className="eyebrow">
            <Layers3 size={16} />
            Selected Work
          </p>
          <h2>3个重点项目</h2>
          <p>第一项目已按“企业情报分析助手 / 企业市场情报Agent”的方向重新包装，后续可以继续往AI产品叙事上优化。</p>
        </div>

        <FeaturedProject project={projects[0]} />

        <div className="project-grid">
          {projects.slice(1).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="internship" className="section internship-section">
        <div className="section-heading compact">
          <p className="eyebrow">
            <BriefcaseBusiness size={16} />
            Internship
          </p>
          <h2>实习经历</h2>
          <p>从AIGC应用产品到AI安全工具产品，沉淀需求分析、原型设计、体验评估与数据反馈闭环经验。</p>
        </div>
        <div className="internship-stack">
          {internships.map((internship) => (
            <article className="internship-layout" key={internship.company}>
              <div className="internship-summary">
                <div className="project-meta">
                  <span>{internship.role}</span>
                  <span>{internship.time}</span>
                </div>
                <h3>{internship.company}</h3>
                <p>{internship.summary}</p>
                <div className="signal-list">
                  {internship.signals.map((signal, index) => {
                    const SignalIcon = internshipSignalIcons[index % internshipSignalIcons.length];
                    return (
                      <span key={signal}>
                        <SignalIcon size={16} />
                        {signal}
                      </span>
                    );
                  })}
                </div>
              </div>
              <ul className="responsibility-list">
                {internship.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="section-heading">
          <p className="eyebrow">
            <DatabaseZap size={16} />
            Capability Stack
          </p>
          <h2>技能标签</h2>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" aria-label="联系方式">
        <div>
          <p className="eyebrow">
            <Mail size={16} />
            Contact
          </p>
          <h2>期待AI产品方向的实习与项目机会</h2>
          <p>联系方式已放在简历 PDF 中。后续如果你愿意，也可以在这里单独加入邮箱、微信二维码或作品集链接。</p>
        </div>
        <div className="contact-actions">
          <a className="primary-button" href={profile.resume.path} target="_blank" rel="noreferrer">
            <FileText size={18} />
            打开简历
          </a>
          <a className="secondary-button" href="#top">
            回到顶部
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="featured-project">
      <div className="featured-copy">
        <div className="project-meta">
          <span>{project.label}</span>
          <span>{project.time}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-role">{project.role}</p>
        <p>{project.summary}</p>
        <div className="metric-row">
          {project.metrics.map((metric) => (
            <span key={metric}>{metric}</span>
          ))}
        </div>
        <ul className="highlight-list">
          {project.highlights.slice(0, 4).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {project.demo && (
          <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">
            在线Demo
            <ExternalLink size={16} />
          </a>
        )}
      </div>
      <div className="screenshot-grid">
        {project.assets?.map((asset, index) => (
          <figure className={index === 0 ? "screenshot primary" : "screenshot"} key={asset.src}>
            <img src={asset.src} alt={asset.alt} />
          </figure>
        ))}
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-meta">
        <span>{project.label}</span>
        <span>{project.time}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-role">{project.role}</p>
      {project.award && <p className="award">{project.award}</p>}
      <p>{project.summary}</p>
      <div className="metric-row">
        {project.metrics.map((metric) => (
          <span key={metric}>{metric}</span>
        ))}
      </div>
      <ul className="highlight-list">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default App;
