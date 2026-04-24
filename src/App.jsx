import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import './index.css';

const slides = [
  {
    id: 1,
    title: "传统时尚 AIGC",
    subtitle: "学院教师研究方向与战略指南",
    items: [
      { title: "研究趋势洞察", detail: "从表象的AIGC应用向深度的工程化、文化溯源转型，把握国际学术与产业的最新风向。" },
      { title: "规避低阶盲区", detail: "放弃单纯的“提示词拼凑”，避免产出缺乏文化底蕴与物理真实感的“形似神离”之作。" },
      { title: "学院统一框架", detail: "建立涵盖“文化解析、技术生成、制造验证”的三维AIGC研究高地，形成强大的学术合力。" }
    ],
    bg: "/bg1.png",
    accent: "Academy Research Guide"
  },
  {
    id: 2,
    title: "全球研究六大趋势",
    subtitle: "从表层应用向深度工程与文化演进",
    items: [
      { title: "1. 案例应用研究", detail: "使用大模型将传统元素应用于现代设计，进行视觉评价分析（目前最普遍的初级阶段）。" },
      { title: "2. 构建专属数据库", detail: "从依赖泛泛的提示词，转向构建权威、经过高质量专业文本标注的传统服饰形制数据库。" },
      { title: "3. 特定文化微调 (LoRA)", detail: "针对大模型无法捕捉特定民族美感的缺陷，训练具有文化偏向校正能力的专属AI模型。" },
      { title: "4. 向3D资产转化", detail: "打破2D平面的局限，将历史面料通过AI直接转化为可用于实时交互与仿真的3D数字资产。" },
      { title: "5. 人机协同体系", detail: "改变“AI代笔”模式：让AI作为提案者，人类专家负责文化把关与工艺评估，形成共创闭环。" },
      { title: "6. 制造与物理仿真", detail: "AIGC的终极目标正向结构合理性、面料物理属性（Materiality）和可制造性验证转移。" }
    ],
    bg: "/bg1.png",
    accent: "Global Research Landscape"
  },
  {
    id: 3,
    title: "必须避免的盲区",
    subtitle: "超越单一的“提示词拼凑”与“图像生成”",
    items: [
      { title: "形似神离", detail: "缺乏将抽象文化系统转化为AI语义的逻辑框架，导致生成的作品充满符号滥用与形制错误。" },
      { title: "缺乏制造验证", detail: "视觉上再绚丽的生成结果，若无法在实际服装制版或数码提花、刺绣制造中落地，便失去价值。" },
      { title: "物理属性缺失", detail: "通用图像模型不理解纺织品的经纬结构与厚度，导致设计在导入工业3D仿真时产生严重悬空。" }
    ],
    bg: "/bg2.png",
    accent: "Common Pitfalls in AIGC Research"
  },
  {
    id: 4,
    title: "学院级通用框架",
    subtitle: "文化—技术—制造 融合的 6 阶段范式",
    items: [
      { title: "1. 文化原理解析", detail: "像人类学家一样提炼传统服饰的物理肌理、色彩规范与约束，而非简单找图。" },
      { title: "2. AI输入体系化", detail: "建立个人研究专属的文本-图像数据集，并训练针对特定工艺的控制模型（LoRA）。" },
      { title: "3. 算法规则重构", detail: "在确保文化准确的前提下，将传统元素与现代审美进行算法级推演，让AI参与决策。" },
      { title: "4. 高保真多维生成", detail: "生成包括法线(Normal)与置换(Displacement)贴图在内的2.5D资产，还原面料厚度。" },
      { title: "5. 制造与工程验证", detail: "将AI资产导入仿真软件(CLO 3D)进行物理测试，或导出为数控机床生产数据。" },
      { title: "6. 教育与产业闭环", detail: "将上述过程沉淀为标准化的教学工作坊(Workshop)，并对接时尚产业链实现转化。" }
    ],
    bg: "/bg2.png",
    accent: "The 6-Stage Common Framework"
  },
  {
    id: 5,
    title: "教师专属细分赛道",
    subtitle: "在统一框架下，找到您的研究落脚点",
    items: [
      { title: "赛道 A: 文化数据库建构", detail: "构建高质量多模态数据集与专用风格控制模型。适合偏重理论史论与数据整理的教师。" },
      { title: "赛道 B: 特定工艺生成算法", detail: "聚焦传统非遗技法，探索其AI环境下的生成逻辑，打通数字化生产。适合偏重工艺的教师。" },
      { title: "赛道 C: 物理级 2.5D/3D验证", detail: "研究AI面料纹理如何与CLO 3D等工业仿真完美结合。这是目前最前沿的细分赛道。" }
    ],
    bg: "/bg1.png",
    accent: "Research Tracks & Directions"
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={{ width: '100vw', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${slide.id}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.7, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            position: 'fixed',
            top: 0, left: 0, width: '100%', height: '100%',
            backgroundImage: `url(${slide.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1
          }}
        />
      </AnimatePresence>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '2rem' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${slide.id}`}
            className="glass-panel"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ textAlign: 'center', maxWidth: '1400px', width: '100%', position: 'relative', zIndex: 1 }}
          >
            <motion.h3 
              style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', letterSpacing: '3px', marginBottom: '1rem', color: 'var(--accent)' }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            >
              {slide.accent}
            </motion.h3>
            
            <motion.h1 
              className="text-gradient" 
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, marginBottom: '0.8rem', lineHeight: 1.2 }}
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
            >
              {slide.title}
            </motion.h1>
            
            <motion.h2 
              style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: 300, color: 'var(--text-secondary)', marginBottom: '2.5rem' }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            >
              {slide.subtitle}
            </motion.h2>

            {/* Grid Layout for Content */}
            <motion.div 
              className="responsive-grid"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            >
              {slide.items.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.08)' }}
                  style={{
                    padding: '1.8rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px', 
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', fontWeight: 700, borderLeft: '4px solid var(--accent)', paddingLeft: '0.8rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', lineHeight: 1.7, fontWeight: 300 }}>
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Indicators */}
      <div style={{ position: 'absolute', bottom: '3rem', left: '0', right: '0', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        {slides.map((s, idx) => (
          <div 
            key={s.id} 
            onClick={() => setCurrentSlide(idx)}
            style={{ width: '10px', height: '10px', borderRadius: '50%', background: currentSlide === idx ? 'var(--text-primary)' : 'rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'all 0.3s ease' }}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div onClick={prevSlide} style={{ position: 'fixed', left: '2rem', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', padding: '1rem', zIndex: 10 }}>
        <ChevronLeft size={48} color="rgba(255,255,255,0.5)" />
      </div>
      <div onClick={nextSlide} style={{ position: 'fixed', right: '2rem', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', padding: '1rem', zIndex: 10 }}>
        <ChevronRight size={48} color="rgba(255,255,255,0.5)" />
      </div>
    </div>
  );
}
