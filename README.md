# ⚡ Portafolio Profesional de Paúl Alexander Rosero Carrión
> **Software Engineer & Cloud Data Architect**  
> *PUCE - Promedio 50/50 | AWS Cloud Practitioner | Top 10 Big Data (Telefónica & Datalat)*

Este portafolio web está construido con **HTML5 Semántico, CSS3 Vanilla con estética Glassmorphism & Cyber-Dark, y JavaScript Moderno**, optimizado para cargarse de forma instantánea, sin pasos de compilación complejos (`buildless`) y listo para desplegarse gratis en la nube.

---

## 🚀 Opciones de Despliegue en la Nube (Elige una)

### Opción 1: Despliegue en GitHub Pages (Recomendado - 2 minutos)

Si quieres que tu portafolio viva en `https://alex171215.github.io`:

1. **Crea un nuevo repositorio en tu GitHub**:
   - Ve a [github.com/new](https://github.com/new)
   - Nómbralo exactamente: **`alex171215.github.io`** (repositorio público).
2. **Sube los archivos de la carpeta `portfolio/`**:
   Abre una terminal en la carpeta `portfolio`:
   ```bash
   cd "c:\Users\ASUS\Documents\6to Semestre\CV\portfolio"
   git init
   git branch -M main
   git add .
   git commit -m "feat: Lanzamiento de portafolio profesional y centro de CVs"
   git remote add origin https://github.com/alex171215/alex171215.github.io.git
   git push -u origin main --force
   ```
3. **¡Listo!** En aproximadamente 60 segundos tu portafolio estará visible para reclutadores de todo el mundo en:
   👉 **`https://alex171215.github.io/`**

---

### Opción 2: Despliegue en Cloudflare Pages (Ultra rápido y CDN global)

1. Ingresa a [Cloudflare Dashboard > Workers & Pages](https://dash.cloudflare.com/).
2. Haz clic en **Create application** > **Pages** > **Connect to Git** (o arrastra y suelta directamente la carpeta `portfolio`).
3. Si conectas con Git:
   - Framework preset: `None` (Static HTML)
   - Build command: *(dejar en blanco)*
   - Output directory: *(dejar en blanco o `./`)*
4. Haz clic en **Save and Deploy**. Tendrás un dominio gratuito `https://paul-rosero.pages.dev` con certificado SSL automático y analíticas en tiempo real.

---

### Opción 3: Despliegue en Vercel

1. Instala el CLI de Vercel o entra a [vercel.com](https://vercel.com).
2. En la terminal dentro de `portfolio`:
   ```bash
   npx vercel
   ```
3. Responde a las opciones por defecto (`Y`) y tu sitio estará en vivo en segundos.

---

## 📁 Estructura del Proyecto

```
portfolio/
├── index.html                   # Documento principal SEO-optimizado con OpenGraph tags
├── css/
│   └── style.css                # Sistema de diseño, Glassmorphism, temas claro/oscuro y responsive
├── js/
│   └── main.js                  # Motor de filtros de reclutador, diagramas de arquitectura y modales
├── assets/
│   └── cv/                      # PDFs optimizados descargables
│       ├── CV_Paul_Rosero_General.pdf
│       ├── CV_Paul_Rosero_Cerveceria_Nacional.pdf
│       ├── CV_Paul_Rosero_CocaCola.pdf
│       └── CV_Paul_Rosero_Belcorp_BeautyTech.pdf
└── README.md                    # Esta guía
```

---

## 🎯 Características Incluidas para Impresionar Reclutadores

1. **Lente de Reclutador Dinámico**:
   - Filtros especializados para **Cervecería Nacional / Coca-Cola** (resaltando ETL masivo de 1M+ filas, ACID y T-SQL).
   - Filtros para **Belcorp Beauty Tech** (destacando Cloud AWS, microservicios e IA local sin costo de tokens).
   - Filtros para **Data & Backend**, **IA Aplicada** y **Full Stack & Mobile**.
2. **Playground de Arquitecturas**:
   - Diagramas interactivos de flujo para el ERP Médico en Producción, el Pipeline ETL masivo y el orquestador RPA/Whisper.
3. **Modal de Detalle Técnico (Método STAR)**:
   - Explicación de cada proyecto bajo la estructura: *Desafío de Ingeniería -> Solución Técnica -> Impacto y Métricas Cuantificables*.
4. **Centro de Descarga de CVs**:
   - Enlace directo a cada una de tus 4 versiones de CV en formato PDF.
5. **Alineación ATS y Accesibilidad**:
   - Semántica HTML5 nativa, modo claro/oscuro con memoria local y tiempos de carga inferiores a 0.5s.
