/**
 * PORTFOLIO INTERACTIVITY & DATA ENGINE
 * Candidate: Paúl Alexander Rosero Carrión
 */

// --- 1. DETAILED PROJECTS DATABASE ---
const PROJECTS_DATA = [
  {
    id: "centro-medico-erp",
    title: "ERP/POS Médico en Producción & Agente IA Local",
    type: "Producción Comercial",
    badges: ["En Producción", "Arquitectura Cloud", "IA Operativa"],
    categories: ["all", "enterprise", "beauty-tech", "backend-data", "applied-ai", "fullstack"],
    summary: "Plataforma ERP/POS integral desplegada en la nube para el Centro Médico Familiar Dra. Verónica Barahona. Controla transacciones críticas de farmacia y consultas médicas.",
    challenge: "Descuadres en inventarios físicos, caídas de red que corrompían el Kardex y consultas manuales lentas en punto de venta.",
    solution: "Arquitectura en SvelteKit con PostgreSQL (Supabase) blindada con Triggers y Row Level Security (RLS). Integración de escáner láser de códigos de barra para acelerar caja, motor de notificaciones Push (VAPID) con Service Workers para sortear bloqueos de caché móvil, y un agente Llama 3 (Groq API) con compuertas algorítmicas que mitigan al 100% las alucinaciones.",
    metrics: "100% de integridad auditada en Kardex • 0% alucinaciones de IA • Despliegue PWA 24/7",
    techStack: ["SvelteKit", "PostgreSQL", "Supabase", "Llama 3", "Groq API", "Service Workers", "PWA", "Triggers ACID"],
    githubUrl: "https://github.com/alex171215/CentroMedicoDoctoraVeronicaBarahona",
    liveUrl: "#",
    architectureFlow: `[Hardware Escáner Láser] ──► [SvelteKit PWA (Mobile/Desktop)]
           │                                 │
           ▼                                 ▼
   [WebSockets / Push VAPID]      [Supabase PostgreSQL + RLS + Triggers]
           │                                 │
           ▼                                 ▼
[Service Worker Cache Bypass]     [Agente Llama 3 con Guardrails Anti-Alucinación]`
  },
  {
    id: "optimizador-etl-masivo",
    title: "Optimizador Transaccional de Bases de Datos Masivas",
    type: "Ingeniería de Datos & ETL",
    badges: ["Big Data", "SQL Server", "Alto Rendimiento"],
    categories: ["all", "enterprise", "backend-data"],
    summary: "Motor de migración y procesamiento ETL masivo en Python y T-SQL para manipular más de 1,000,000 de registros analíticos empresariales sin colapsar la infraestructura.",
    challenge: "Bloqueos exclusivos de tablas corporativas (table locks) y saturación del Transaction Log al intentar actualizar 1M+ registros en una sola transacción.",
    solution: "Diseño de un procesador por lotes (batches) de 50,000 registros con control transaccional estricto (SAVEPOINT, COMMIT, ROLLBACK). Análisis y reingeniería de Execution Plans reemplazando costosos Nested Loops por Hash Match Joins en memoria.",
    metrics: "+1,000,000 de registros procesados • Cero bloqueos de Transaction Log • 65% reducción de latencia",
    techStack: ["Python", "SQL Server (T-SQL)", "pyodbc", "Execution Plans", "ETL Batching", "ACID Controls"],
    githubUrl: "https://github.com/alex171215",
    liveUrl: "#",
    architectureFlow: `[Dataset Analítico 1M+ Filas] ──► [Pipeline Python ETL por Lotes (50k)]
                 │                                    │
                 ▼                                    ▼
       [SAVEPOINT / ROLLBACK] ──► [SQL Server T-SQL Execution Plan: Hash Match]
                 │                                    │
                 ▼                                    ▼
[Auditoría Transaction Log Seguro] ──► [Consolidación Final en Data Warehouse]`
  },
  {
    id: "orquestador-rpa-whisper",
    title: "Orquestador Autónomo RPA & IA Multimodal (Cero Costo de Tokens)",
    type: "Automatización & IA",
    badges: ["RPA", "Local LLM", "Docker"],
    categories: ["all", "beauty-tech", "applied-ai"],
    summary: "Sistema automatizado de scraping avanzado y evaluación multimodal de código y audio para 49 estudiantes con transcripción local y triage anti-alucinaciones.",
    challenge: "El proceso manual de evaluación consumía decenas de horas y los costos de APIs en la nube (tokens de audio/texto) eran prohibitivos para ejecuciones repetitivas.",
    solution: "Agente RPA con Playwright capaz de eludir mecanismos complejos de inicio de sesión único (SSO). Contenedorización en Docker de Faster-Whisper local para transcripción con costo de tokens igual a cero, coordinado con Gemini 1.5 Flash bajo estrictas compuertas lógicas (triage gates).",
    metrics: "49 usuarios procesados concurrentemente • $0 costo en tokens de nube • 100% de automatización del flujo",
    techStack: ["Python", "Playwright (RPA)", "Faster-Whisper Local", "Gemini 1.5 Flash", "Docker", "JSON"],
    githubUrl: "https://github.com/alex171215",
    liveUrl: "#",
    architectureFlow: `[Playwright RPA (SSO Bypass)] ──► [Extracción Masiva de Entregas (49 usuarios)]
              │                                          │
              ▼                                          ▼
[Docker Container: Faster-Whisper] ──► [Transcripción de Audio Local ($0 Tokens)]
              │                                          │
              ▼                                          ▼
[Compuertas Lógicas de Triage]     ──► [Gemini 1.5 Flash Feedback Estructurado]`
  },
  {
    id: "soa-rabbitmq-esb",
    title: "Integración Empresarial SOA + Mini-ESB + RabbitMQ + NestJS",
    type: "Arquitectura de Integración",
    badges: ["Microservicios", "Event-Driven", "RabbitMQ"],
    categories: ["all", "enterprise", "beauty-tech", "backend-data"],
    summary: "Arquitectura híbrida de integración orientada a servicios (SOA) con capa de mensajería asíncrona desacoplada mediante colas y Enterprise Service Bus (ESB).",
    challenge: "Comunicación síncrona acoplada que causaba cascadas de fallas ante picos de demanda entre servicios legados y nuevas aplicaciones.",
    solution: "Implementación de servicio SOAP/WSDL con Express, capa Mini-ESB para orquestar y publicar eventos asíncronos en RabbitMQ, consumidor distribuido y frontend MVC en NestJS con Handlebars.",
    metrics: "Tolerancia a fallos asíncrona • Cero pérdida de mensajes • Desacoplamiento total",
    techStack: ["Node.js", "NestJS", "RabbitMQ (amqplib)", "SOAP / WSDL", "Express", "TypeScript"],
    githubUrl: "https://github.com/alex171215/SOA-ESB-Rabbit-MQ",
    liveUrl: "#",
    architectureFlow: `[Servicio SOA (SOAP / WSDL)] ──► [Capa Mini-ESB de Transformación]
                 │                                │
                 ▼                                ▼
       [Publicador amqplib]  ──► [RabbitMQ Queue: productos.consultados]
                 │                                │
                 ▼                                ▼
       [Consumidor Worker]   ──► [NestJS MVC Frontend & Logger]`
  },
  {
    id: "ecotrip-mobile",
    title: "EcoTrip 2026 - Planificación Resiliente de Rutas Nativas",
    type: "Ingeniería Móvil Nativa",
    badges: ["Android Nativo", "Kotlin", "Jetpack Compose"],
    categories: ["all", "fullstack"],
    summary: "Aplicación móvil Android de alto rendimiento desarrollada en Kotlin con arquitectura declarativa moderna, persistencia local con Room y diseño Material You.",
    challenge: "Garantizar disponibilidad offline y persistencia instantánea de rutas de transporte ecológico sin bloqueos en el hilo principal de la interfaz.",
    solution: "Arquitectura MVVM + Clean Architecture con Kotlin Coroutines y Flow. Implementación de capa de persistencia Room (SQLite nativo) y diseño declarativo con Jetpack Compose.",
    metrics: "Rol: Arquitecto Core & Persistencia • Modo 100% Offline • 60 FPS Fluidos",
    techStack: ["Kotlin", "Jetpack Compose", "Android SDK", "Room (SQLite)", "MVVM", "Coroutines"],
    githubUrl: "https://github.com/alex171215/ProyectoRDA2-Programaci-n-Mobil",
    liveUrl: "#",
    architectureFlow: `[Jetpack Compose UI (Material You)] ──► [ViewModel con Kotlin StateFlow]
                   │                                     │
                   ▼                                     ▼
         [Repository Pattern]         ──► [Room Database (SQLite Caching Offline)]
                   │                                     │
                   ▼                                     ▼
   [Coroutines Dispatchers.IO]       ──► [Sincronización Asíncrona Resiliente]`
  },
  {
    id: "detector-phishing-ml",
    title: "Sistema Predictivo de Detección de Phishing con ML",
    type: "Machine Learning & Datos",
    badges: ["Machine Learning", "Python", "Data Science"],
    categories: ["all", "applied-ai", "backend-data"],
    summary: "Modelo de clasificación supervisada para la detección proactiva de ataques de phishing analizando características estructurales y semánticas de URLs y tráfico.",
    challenge: "Identificar sitios maliciosos de día cero antes de que aparezcan en listas negras tradicionales.",
    solution: "Extracción automática de características heurísticas, preprocesamiento con Pandas/NumPy y entrenamiento de clasificadores predictivos optimizando la métrica F1-Score.",
    metrics: "+94% de precisión predictiva • Clasificación en tiempo real • Mínimos falsos positivos",
    techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Jupyter Notebook"],
    githubUrl: "https://github.com/alex171215/Detector-Phishing-ML",
    liveUrl: "#",
    architectureFlow: `[Dataset Crudo de URLs] ──► [Extracción de Características Léxicas y Heurísticas]
             │                                              │
             ▼                                              ▼
[Normalización con Pandas] ──► [Modelos de Clasificación Scikit-Learn]
             │                                              │
             ▼                                              ▼
    [Optimización F1-Score] ──► [Detección Predictiva de Amenazas en Tiempo Real]`
  },
  {
    id: "biblioteca-bigdata-telefonica",
    title: "Sistema de Gestión Bibliotecaria Big Data (Top 10 Nacional)",
    type: "Big Data & Analítica",
    badges: ["Top 10 Telefónica", "Big Data", "Reconocimiento"],
    categories: ["all", "enterprise", "backend-data"],
    summary: "Arquitectura analítica para la gestión y procesamiento de grandes volúmenes de registros bibliográficos, seleccionada en el Top 10 entre cientos de participantes.",
    challenge: "Estructurar y analizar catálogos bibliográficos heterogéneos y dispersos con tiempos de respuesta óptimos para comités directivos.",
    solution: "Diseño del ciclo completo de vida del dato (ingesta, depuración, almacenamiento optimizado y analítica visual). Sustentación en vivo ante el comité ejecutivo corporativo de Telefónica Movistar y Datalat.",
    metrics: "Seleccionado entre los 10 mejores proyectos de la promoción (200h) • Presentación ejecutiva corporativa",
    techStack: ["Big Data Fundamentals", "SQL", "Modelado Dimensional", "Power BI", "Data Analytics"],
    githubUrl: "https://github.com/alex171215",
    liveUrl: "#",
    architectureFlow: `[Catálogos Heterogéneos] ──► [Limpieza y Estandarización de Metadatos]
              │                                      │
              ▼                                      ▼
[Esquema Dimensional Star Schema] ──► [Consultas Analíticas de Alta Eficiencia]
              │                                      │
              ▼                                      ▼
[Tableros Ejecutivos Power BI] ──► [Presentación ante Comité Ejecutivo Telefónica]`
  }
];

// --- 2. ARCHITECTURE DIAGRAMS DATA ---
const ARCHITECTURE_MODES = {
  erp: {
    title: "Arquitectura ERP/POS Médico en Producción",
    nodes: [
      { icon: "fa-barcode", title: "1. Hardware Periférico", role: "Input en Vivo", desc: "Intercepción de escáner láser para captura de códigos de barra sin latencia de teclado." },
      { icon: "fa-desktop", title: "2. SvelteKit PWA", role: "Frontend Resiliente", desc: "Interfaz reactiva con Service Workers, Push VAPID y evadido de caché en Android." },
      { icon: "fa-database", title: "3. Supabase PostgreSQL", role: "Núcleo Transaccional", desc: "Triggers automáticos, Row Level Security (RLS) y 100% integridad de Kardex." },
      { icon: "fa-brain", title: "4. Llama 3 con Guardrails", role: "IA Operativa Segura", desc: "Consultas de inventario en lenguaje natural con cero alucinaciones mediante compuertas algorítmicas." }
    ],
    metrics: [
      { title: "Cero Errores 500", desc: "Persistencia offline ante caídas momentáneas de red de la clínica." },
      { title: "100% de Auditoría", desc: "Historial completo de auditoría y movimientos de inventario." },
      { title: "Respuesta < 200ms", desc: "Lectura inmediata de stock y precios desde periférico a pantalla." }
    ]
  },
  etl: {
    title: "Pipeline ETL Masivo & Optimización Transaccional",
    nodes: [
      { icon: "fa-file-lines", title: "1. Datos Masivos 1M+", role: "Ingesta Cruda", desc: "Archivos analíticos empresariales con más de un millón de filas para actualización." },
      { icon: "fa-boxes-stacked", title: "2. Batches de 50k", role: "Particionado en Lotes", desc: "Segmentación algorítmica para evitar el bloqueo exclusivo de tablas corporativas." },
      { icon: "fa-shield-halved", title: "3. Control ACID Estricto", role: "Seguridad Transaccional", desc: "Puntos de control SAVEPOINT y ROLLBACK protegiendo el Transaction Log de colapsos." },
      { icon: "fa-bolt", title: "4. Hash Match Joins", role: "Ejecución Optimizada", desc: "Reemplazo de Nested Loops por emparejamientos en memoria analizados con Execution Plans." }
    ],
    metrics: [
      { title: "+1,000,000 Filas", desc: "Procesadas con éxito sin degradar la operación concurrente." },
      { title: "65% Menor Latencia", desc: "Optimización lograda gracias a la reingeniería de planes de ejecución." },
      { title: "Cero Caídas de Log", desc: "Manejo preventivo de cuotas de almacenamiento transaccional." }
    ]
  },
  rpa: {
    title: "Orquestador RPA & IA Multimodal (Cero Costo en Tokens)",
    nodes: [
      { icon: "fa-robot", title: "1. Playwright RPA", role: "Extracción Autónoma", desc: "Navegación automatizada con evasión de bloqueos SSO para recolectar entregas de 49 alumnos." },
      { icon: "fa-server", title: "2. Faster-Whisper Local", role: "Contenedor Docker", desc: "Modelo de transcripción de audio ejecutado 100% en local sin enviar datos a APIs externas." },
      { icon: "fa-filter", title: "3. Triage Gates", role: "Compuertas Lógicas", desc: "Filtrado previo de sintaxis y contexto antes de consultar al modelo fundacional." },
      { icon: "fa-wand-magic-sparkles", title: "4. Gemini 1.5 Flash", role: "Evaluación Estructurada", desc: "Generación de feedback técnico detallado y exportación consolidada en formato JSON." }
    ],
    metrics: [
      { title: "$0 en Factura Cloud", desc: "La transcripción y procesamiento pesado corren en infraestructura propia." },
      { title: "49 Evaluaciones/Hora", desc: "Reducción de días de trabajo manual a una sola corrida automatizada." },
      { title: "Seguridad de Datos", desc: "El código y las grabaciones de los alumnos se procesan en entorno controlado." }
    ]
  }
};

// --- 3. RECRUITER LENS MESSAGES ---
const LENS_DESCRIPTIONS = {
  "all": "⚡ Mostrando todos los proyectos de ingeniería, datos, cloud e IA.",
  "enterprise": "🏢 Vista Corporativa (Cervecería Nacional / Coca-Cola): Destacando procesamiento ETL masivo, T-SQL, control transaccional ACID, arquitecturas ERP y RabbitMQ.",
  "beauty-tech": "💄 Vista Beauty Tech (Belcorp): Destacando Cloud AWS, microservicios desacoplados, agentes LLM locales a $0 tokens y arquitecturas escalables.",
  "backend-data": "📊 Vista Data & Backend: Destacando SQL Server, PostgreSQL, optimización de queries, planes de ejecución y pipelines de datos.",
  "applied-ai": "🤖 Vista IA Aplicada & RPA: Destacando Llama 3, Whisper local, Playwright RPA, Docker y mitigación de alucinaciones.",
  "fullstack": "📱 Vista Full Stack & Mobile: Destacando SvelteKit, Next.js, Android Kotlin con Jetpack Compose y Supabase."
};

// --- DOM INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavbar();
  renderProjects("all");
  initFilterButtons();
  initArchitectureTabs();
  initCounters();
  initModal();
  initDirectMessage();
  initCopyButtons();
});

// --- THEME TOGGLE ---
function initTheme() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("portfolio-theme", next);
      updateThemeIcon(next);
      showToast(`Tema cambiado a modo ${next === 'dark' ? 'oscuro' : 'claro'}`);
    });
  }
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById("themeToggleBtn");
  if (!toggleBtn) return;
  toggleBtn.innerHTML = theme === "light" 
    ? '<i class="fa-solid fa-moon"></i>' 
    : '<i class="fa-solid fa-sun"></i>';
}

// --- NAVBAR SCROLL & SMOOTH SCROLL ---
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.querySelector(".nav-links");
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      const isVisible = navLinks.style.display === "flex";
      navLinks.style.display = isVisible ? "none" : "flex";
      navLinks.style.flexDirection = "column";
      navLinks.style.position = "absolute";
      navLinks.style.top = "100%";
      navLinks.style.left = "0";
      navLinks.style.width = "100%";
      navLinks.style.background = "var(--bg-card)";
      navLinks.style.padding = "1.5rem";
      navLinks.style.borderBottom = "1px solid var(--border-subtle)";
    });
  }
}

// --- RENDER PROJECTS ---
function renderProjects(category) {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  const filtered = PROJECTS_DATA.filter(p => p.categories.includes(category));
  grid.innerHTML = "";

  filtered.forEach(p => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.dataset.id = p.id;

    const badgesHtml = p.badges.map(b => `<span class="badge badge-cyan">${b}</span>`).join("");
    const techHtml = p.techStack.slice(0, 5).map(t => `<span class="tech-tag">${t}</span>`).join("");

    card.innerHTML = `
      <div class="project-header">
        <div class="project-badges">${badgesHtml}</div>
        <span class="project-type-tag">${p.type}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-summary">${p.summary}</p>
        
        <div class="star-method-box">
          <p><strong>🎯 Desafío Resuelto:</strong> ${p.challenge}</p>
        </div>

        <div class="project-metrics-chip">
          <i class="fa-solid fa-chart-line"></i>
          <span>${p.metrics}</span>
        </div>

        <div class="project-tech-stack">${techHtml}</div>
      </div>
      <div class="project-footer">
        <div class="project-links">
          ${p.githubUrl !== '#' ? `<a href="${p.githubUrl}" target="_blank" class="btn btn-secondary btn-sm" title="Ver código en GitHub"><i class="fa-brands fa-github"></i> Código</a>` : ''}
        </div>
        <button class="btn-details" onclick="openProjectModal('${p.id}')">
          Ver Arquitectura <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// --- FILTER BUTTONS & RECRUITER LENS ---
function initFilterButtons() {
  const buttons = document.querySelectorAll(".filter-btn");
  const lensInfo = document.getElementById("activeLensInfo");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      renderProjects(filter);

      if (lensInfo && LENS_DESCRIPTIONS[filter]) {
        lensInfo.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${LENS_DESCRIPTIONS[filter]}`;
      }
    });
  });
}

// --- ARCHITECTURE PLAYGROUND TABS ---
function initArchitectureTabs() {
  const tabs = document.querySelectorAll(".arch-tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const modeKey = tab.dataset.arch;
      renderArchitectureFlow(modeKey);
    });
  });

  renderArchitectureFlow("erp");
}

function renderArchitectureFlow(modeKey) {
  const mode = ARCHITECTURE_MODES[modeKey];
  if (!mode) return;

  const titleEl = document.getElementById("archFlowTitle");
  if (titleEl) titleEl.textContent = mode.title;

  const flowContainer = document.getElementById("archDiagramFlow");
  if (flowContainer) {
    flowContainer.innerHTML = mode.nodes.map((n, i) => `
      <div class="arch-flow-node">
        <div class="node-icon"><i class="fa-solid ${n.icon}"></i></div>
        <h4 class="node-title">${n.title}</h4>
        <div class="node-role">${n.role}</div>
        <p class="node-details">${n.desc}</p>
      </div>
    `).join("");
  }

  const breakdownContainer = document.getElementById("archMetricsBreakdown");
  if (breakdownContainer) {
    breakdownContainer.innerHTML = mode.metrics.map(m => `
      <div class="arch-breakdown-item">
        <div class="arch-breakdown-icon"><i class="fa-solid fa-circle-check"></i></div>
        <div>
          <h4>${m.title}</h4>
          <p>${m.desc}</p>
        </div>
      </div>
    `).join("");
  }
}

// --- ANIMATED NUMBER COUNTERS ---
function initCounters() {
  const counters = document.querySelectorAll(".counter-value");
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = parseFloat(counter.dataset.target);
          const isDecimal = counter.dataset.decimal === "true";
          const suffix = counter.dataset.suffix || "";
          let current = 0;
          const duration = 1600;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            counter.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString()) + suffix;
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.25 });

  const metricsSection = document.querySelector(".metrics-section");
  if (metricsSection) observer.observe(metricsSection);
}

// --- PROJECT MODAL DEEP DIVE ---
function initModal() {
  const overlay = document.getElementById("projectModalOverlay");
  const closeBtn = document.getElementById("modalCloseBtn");

  if (closeBtn && overlay) {
    closeBtn.addEventListener("click", () => closeModal());
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("active")) {
        closeModal();
      }
    });
  }
}

window.openProjectModal = function(projectId) {
  const p = PROJECTS_DATA.find(item => item.id === projectId);
  if (!p) return;

  const overlay = document.getElementById("projectModalOverlay");
  const title = document.getElementById("modalProjectTitle");
  const badges = document.getElementById("modalProjectBadges");
  const content = document.getElementById("modalProjectContent");
  const githubBtn = document.getElementById("modalGithubBtn");

  if (title) title.textContent = p.title;
  if (badges) {
    badges.innerHTML = p.badges.map(b => `<span class="badge badge-cyan">${b}</span>`).join("") +
      `<span class="badge badge-purple">${p.type}</span>`;
  }

  if (content) {
    content.innerHTML = `
      <p style="font-size: 1.05rem; color: #cbd5e1; margin-bottom: 1.25rem; line-height: 1.7;">${p.summary}</p>
      
      <h4 class="modal-section-title"><i class="fa-solid fa-triangle-exclamation"></i> Desafío de Ingeniería</h4>
      <p style="color: var(--text-muted); margin-bottom: 1.25rem;">${p.challenge}</p>

      <h4 class="modal-section-title"><i class="fa-solid fa-screwdriver-wrench"></i> Solución Arquitectónica</h4>
      <p style="color: var(--text-muted); margin-bottom: 1.25rem;">${p.solution}</p>

      <h4 class="modal-section-title"><i class="fa-solid fa-diagram-project"></i> Flujo Arquitectónico</h4>
      <div class="modal-arch-box"><pre style="margin: 0; white-space: pre-wrap; font-family: var(--font-mono);">${p.architectureFlow}</pre></div>

      <h4 class="modal-section-title"><i class="fa-solid fa-chart-line"></i> Métricas & Resultados Cuantificables</h4>
      <div class="project-metrics-chip" style="margin-bottom: 1.5rem;">
        <i class="fa-solid fa-trophy"></i>
        <span>${p.metrics}</span>
      </div>

      <h4 class="modal-section-title"><i class="fa-solid fa-microchip"></i> Stack Tecnológico Validado</h4>
      <div class="project-tech-stack">
        ${p.techStack.map(t => `<span class="tech-tag" style="font-size: 0.85rem; padding: 0.4rem 0.85rem;">${t}</span>`).join("")}
      </div>
    `;
  }

  if (githubBtn) {
    if (p.githubUrl && p.githubUrl !== "#") {
      githubBtn.href = p.githubUrl;
      githubBtn.style.display = "inline-flex";
    } else {
      githubBtn.style.display = "none";
    }
  }

  if (overlay) {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
};

function closeModal() {
  const overlay = document.getElementById("projectModalOverlay");
  if (overlay) {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// --- DIRECT MESSAGE TO EMAIL ---
function initDirectMessage() {
  const form = document.getElementById("directMessageForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("senderName").value;
    const company = document.getElementById("senderCompany").value;
    const message = document.getElementById("senderMsg").value;

    const subject = encodeURIComponent(`Propuesta de Trabajo / Pasantía: ${company} - ${name}`);
    const body = encodeURIComponent(`Hola Paúl,\n\nSoy ${name} de ${company}.\n\n${message}\n\nContacto de respuesta rápida.`);

    window.open(`mailto:alexandercarrion918@gmail.com?subject=${subject}&body=${body}`, "_blank");
    showToast("Abriendo cliente de correo institucional...");
    form.reset();
  });
}

// --- COPY BUTTONS WITH TOAST ---
function initCopyButtons() {
  const copyButtons = document.querySelectorAll(".copy-btn");
  copyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const textToCopy = btn.dataset.copy;
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copiado: ${textToCopy}`);
        }).catch(() => {
          showToast("No se pudo copiar automáticamente");
        });
      }
    });
  });
}

// --- TOAST HELPER ---
function showToast(message) {
  let toast = document.querySelector(".toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast-notification";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--emerald-accent);"></i> <span>${message}</span>`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}
