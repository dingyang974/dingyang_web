import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  BrainCircuit,
  DatabaseZap,
  Download,
  FileText,
  GraduationCap,
  Layers3,
  Mail,
  RotateCcw,
  Sparkles,
  X,
} from "lucide-react";
import { capabilityGroups, educationPanel, internshipExperiences, portfolioCards, profile } from "./content/profile";
import type { InternshipExperience, PortfolioCard } from "./content/profile";

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const lifePhotos = Array.from(
  { length: 7 },
  (_, index) => publicAsset(`assets/profile/life-${String(index + 1).padStart(2, "0")}.jpg`),
);

const navItems = [
  { href: "#top", label: "首页" },
  { href: "#internship", label: "实习" },
  { href: "#cards", label: "经历牌" },
  { href: "#capability", label: "能力" },
  { href: "#contact", label: "联系" },
];

const highlightWords = [
  "lovable",
  "figma make",
  "10+",
  "QuickBI",
  "LLM",
  "Sentence Transformer",
  "70%",
  "AI native",
  "query",
  "rerun",
  "Agent",
  "RAG",
  "5000+",
  "BERT",
  "BERTopic",
  "DeepSeek API",
  "FAISS",
  "LSTM-ARIMAX",
  "ARIMAX",
  "LSTM",
  "ARIMA",
  "GBDT",
  "CSSCI",
  "fsQCA",
  "csQCA",
  "30+",
  "NLP",
];

function App() {
  const [selectedCard, setSelectedCard] = useState<PortfolioCard | null>(null);

  useEffect(() => {
    if (!selectedCard) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCard(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCard]);

  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <InternshipSection />
      <TarotSection onSelect={setSelectedCard} />
      <CapabilitySection />
      <ContactSection />
      {selectedCard && <CardDetailOverlay card={selectedCard} onClose={() => setSelectedCard(null)} />}
    </main>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="回到首页">
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
        <Download size={17} />
        简历
      </a>
    </header>
  );
}

function HeroSection() {
  const typedText = useTypewriter(profile.typewriterPhrases);
  const galleryPhotos = [...lifePhotos, ...lifePhotos];

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="pastel-grid" />
      <div className="hero-copy">
        <p className="signature">
          <Sparkles size={16} />
          {profile.signature}
        </p>
        <h1 id="hero-title">Know about Ding Yang</h1>
        <p className="typewriter" aria-live="polite">
          <span>{typedText}</span>
          <i aria-hidden="true" />
        </p>
        <div className="floating-tags" aria-label="核心标签">
          {profile.floatingTags.map((tag, index) => (
            <span className={`float-tag tag-${index + 1}`} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-panel">
        <PhotoCarousel photos={galleryPhotos} />
        <EducationCard />
      </div>
    </section>
  );
}

function PhotoCarousel({ photos }: { photos: string[] }) {
  return (
    <section className="photo-panel" aria-label="个人照片">
      <div className="card-section-title photo-title">
        <Sparkles size={18} />
        <span>My Life</span>
      </div>
      <div className="photo-stage">
        <div className="photo-ribbon">
          {photos.map((src, index) => (
            <figure className="photo-card" key={`${src}-${index}`}>
              <img src={src} alt={`丁杨生活照片 ${index % lifePhotos.length + 1}`} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationCard() {
  return (
    <aside className="education-card" aria-label="教育经历和技能工具">
      <div className="card-section-title">
        <GraduationCap size={18} />
        <span>Education</span>
      </div>
      <div className="education-list">
        {educationPanel.education.map((item) => (
          <article className="education-item" key={item.school}>
            <h2>{item.school}</h2>
            <p>{item.major}</p>
            <strong>{item.time}</strong>
            {item.notes.length > 0 && (
              <div className="inline-notes">
                {item.notes.map((note) => (
                  <span key={note}>{note}</span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="card-section-title toolkit-title">
        <DatabaseZap size={18} />
        <span>Toolkit</span>
      </div>
      <div className="toolkit-list">
        {educationPanel.toolkit.map((group) => (
          <p key={group.label}>
            <strong>{group.label}：</strong>
            {group.items.join("、")}
          </p>
        ))}
      </div>
      <div className="bottom-tags">
        {educationPanel.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </aside>
  );
}

function InternshipSection() {
  return (
    <section id="internship" className="section internship-section" aria-labelledby="internship-title">
      <div className="section-heading internship-heading">
        <p className="eyebrow">
          <Briefcase size={16} />
          Internship
        </p>
        <h2 id="internship-title">The Practitioner</h2>
        <p>真实业务场景中的 AI 产品、数据产品与模型评测经验。</p>
      </div>
      <div className="internship-grid">
        {internshipExperiences.map((experience, index) => (
          <InternshipCard experience={experience} index={index} key={experience.id} />
        ))}
      </div>
    </section>
  );
}

function InternshipCard({ experience, index }: { experience: InternshipExperience; index: number }) {
  return (
    <article className={`internship-card internship-${experience.accent}`}>
      <span className="internship-ribbon" aria-hidden="true" />
      <div className="internship-top">
        <div>
          <span className="internship-index">{String(index + 1).padStart(2, "0")}</span>
          <p>{experience.kind}</p>
          <h3>{experience.company}</h3>
        </div>
        <div className="internship-meta">
          <span>{experience.role}</span>
          <strong>{experience.time}</strong>
        </div>
      </div>
      <p className="internship-summary">
        <EmphasisText text={experience.summary} />
      </p>
      <div className="internship-highlights">
        {experience.highlights.map((highlight, highlightIndex) => (
          <p key={highlight}>
            <span>{String(highlightIndex + 1).padStart(2, "0")}</span>
            <em>
              <EmphasisText text={highlight} />
            </em>
          </p>
        ))}
      </div>
      <div className="internship-tags">
        {experience.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}

function TarotSection({ onSelect }: { onSelect: (card: PortfolioCard) => void }) {
  return (
    <section id="cards" className="section tarot-section" aria-labelledby="cards-title">
      <div className="section-heading centered">
        <p className="eyebrow">
          <Layers3 size={16} />
          Experience Deck
        </p>
        <h2 id="cards-title">The Explorer</h2>
        <p className="deck-hint">Click a card below to explore my PM DNA</p>
      </div>
      <div className="tarot-workspace">
        <div className="tarot-deck" aria-label="经历牌组">
          {portfolioCards.map((card, index) => {
            const angle = (index - (portfolioCards.length - 1) / 2) * 8.5;
            const lift = Math.abs(index - (portfolioCards.length - 1) / 2) * 5;
            const offset = (index - (portfolioCards.length - 1) / 2) * 104;
            const style = {
              "--card-angle": `${angle}deg`,
              "--card-lift": `${lift}px`,
              "--card-x": `${offset}px`,
              "--card-z": String(index + 1),
            } as React.CSSProperties;

            return (
              <button
                className="tarot-card"
                key={card.id}
                onClick={() => onSelect(card)}
                style={style}
                type="button"
                aria-label={`抽取第 ${index + 1} 张经历牌`}
              >
                <span className="card-back-mark">
                  <Sparkles size={34} />
                </span>
                <span className="card-back-line" />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CardDetailOverlay({ card, onClose }: { card: PortfolioCard; onClose: () => void }) {
  return (
    <div className="detail-overlay" role="dialog" aria-modal="true" aria-labelledby={`detail-${card.id}`} onClick={onClose}>
      <article className={`detail-panel detail-modal accent-${card.accent}`} key={card.id} onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="关闭详情">
          <X size={20} />
        </button>
        <div className="detail-kicker">
          <span>{card.category}</span>
          <span>{card.meta}</span>
        </div>
        <div className="detail-title-row">
          <div>
            <h3 id={`detail-${card.id}`}>{card.title}</h3>
            <p>{card.subtitle}</p>
          </div>
          {card.link && (
            <a className="detail-link" href={card.link.href} target="_blank" rel="noreferrer">
              {card.link.label}
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
        <p className="detail-summary">
          <EmphasisText text={card.summary} />
        </p>
        <div className="detail-body">
          {card.highlights.map((highlight) => (
            <p key={highlight}>
              <BadgeCheck size={16} />
              <span>
                <EmphasisText text={highlight} />
              </span>
            </p>
          ))}
        </div>
        <div className="detail-tags">
          {card.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {card.assets && (
          <div className="asset-strip" aria-label={`${card.title} 截图`}>
            {card.assets.map((asset) => (
              <figure key={asset.src}>
                <img src={asset.src} alt={asset.alt} />
              </figure>
            ))}
          </div>
        )}
        <div className="modal-actions">
          <button className="secondary-button" type="button" onClick={onClose}>
            <RotateCcw size={18} />
            返回牌组
          </button>
        </div>
      </article>
    </div>
  );
}

function CapabilitySection() {
  return (
    <section id="capability" className="section capability-section" aria-labelledby="capability-title">
      <div className="section-heading">
        <p className="eyebrow">
          <BrainCircuit size={16} />
          Capability
        </p>
        <h2 id="capability-title">产品、AI 与数据的交叉能力</h2>
      </div>
      <div className="capability-grid">
        {capabilityGroups.map((group) => (
          <article className="capability-card" key={group.title}>
            <h3>{group.title}</h3>
            <div>
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section" aria-label="联系方式">
      <div>
        <p className="eyebrow">
          <Mail size={16} />
          Contact
        </p>
        <h2>期待 AI 产品 / 数据产品方向的实习与项目机会</h2>
        <p>联系邮箱：{profile.contactEmail}</p>
      </div>
      <div className="contact-actions">
        <a className="primary-button" href={profile.resume.path} target="_blank" rel="noreferrer">
          <FileText size={18} />
          打开简历
        </a>
      </div>
    </section>
  );
}

function EmphasisText({ text }: { text: string }) {
  const pattern = useMemo(() => {
    const escaped = highlightWords.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    return new RegExp(`(${escaped.join("|")})`, "gi");
  }, []);
  const parts = text.split(pattern).filter(Boolean);
  const lookup = new Set(highlightWords.map((word) => word.toLowerCase()));

  return (
    <>
      {parts.map((part, index) =>
        lookup.has(part.toLowerCase()) ? (
          <mark key={`${part}-${index}`}>{part}</mark>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        ),
      )}
    </>
  );
}

function useTypewriter(phrases: string[]) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    const phrase = phrases[phraseIndex] ?? "";
    const isComplete = charCount >= phrase.length;
    const delay = isComplete ? 1400 : 90;
    const timer = window.setTimeout(() => {
      if (isComplete) {
        setPhraseIndex((current) => (current + 1) % phrases.length);
        setCharCount(0);
      } else {
        setCharCount((current) => current + 1);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [charCount, phraseIndex, phrases]);

  return (phrases[phraseIndex] ?? "").slice(0, charCount);
}

export default App;
