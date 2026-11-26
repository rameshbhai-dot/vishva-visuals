/**
 * ============================================================
 * VISHVA VISUALS — EDIT YOUR DETAILS & REELS HERE
 * ============================================================
 */
const SITE_CONFIG = {
  brandName: 'VISHVA VISUALS',
  ownerName: 'Vishvjeet Singh Ganda',
  phoneDisplay: '+91 88154 93294',
  phoneRaw: '918815493294', // Country code + number, digits only
  instagramHandle: '@vishva_visuals',
  instagramUrl:
    'https://www.instagram.com/vishva_visuals?utm_source=ig_web_button_share_sheet&gwpx=ZDNlZDc0MzIxNw==',
  whatsappDisplay: '+91 88154 93294',
  whatsappNumber: '918815493294', // Country code + number, digits only
};

/**
 * Curated Instagram Reels from @vishva_visuals across distinct visual genres.
 */
const REELS_PORTFOLIO = [
  {
    id: 'DgEoua_B1e2',
    index: 'TOP · 2.1M',
    filter: 'festive',
    category: 'Most Viewed · 2.1M',
    title: 'Guru Nanak Jayanti · Golden Temple',
    date: 'Nov 22, 2026',
    views: '2.1M Views',
    likes: '158.4K Likes',
    featured: true,
    description:
      'Most-watched reel on @vishva_visuals — celebrating Shri Guru Nanak Dev Ji’s Prakash Purab at the sacred Golden Temple with glowing night devotion and Gurbani.',
    artClass: 'reel-art--goldentemple',
    url: 'https://www.instagram.com/vishva_visuals/reel/DgEoua_B1e2/',
  },
  {
    id: 'Df4u-b4NuLK',
    index: '002',
    filter: 'commercial',
    category: 'Brand Commercial',
    title: 'Beardo Godfather',
    date: 'Nov 18, 2026',
    description:
      'Moody dark-studio product commercial featuring atmospheric smoke, specular bottle lighting, and luxury pacing.',
    artClass: 'reel-art--perfume',
    url: 'https://www.instagram.com/vishva_visuals/reel/Df4u-b4NuLK/',
  },
  {
    id: 'Df82HmfhyN3',
    index: '003',
    filter: 'documentary',
    category: 'Aerial & Convoy',
    title: 'Gandhi Sagar — New Era',
    date: 'Nov 19, 2026',
    description:
      'High-scale convoy and terrain storytelling capturing energy infrastructure across Gandhi Sagar, Madhya Pradesh.',
    artClass: 'reel-art--aerial',
    url: 'https://www.instagram.com/vishva_visuals/reel/Df82HmfhyN3/',
  },
  {
    id: 'DgDPMpQB1rP',
    index: '004',
    filter: 'events',
    category: 'Local Event Film',
    title: 'Sacred Procession',
    date: 'Nov 22, 2026',
    views: '2,875 Views',
    description:
      'Vibrant daytime street coverage capturing community warmth, movement, and ceremonial rhythm.',
    artClass: 'reel-art--procession',
    url: 'https://www.instagram.com/vishva_visuals/reel/DgDPMpQB1rP/',
  },
  {
    id: 'DgHX612hrKE',
    index: '005',
    filter: 'events',
    category: 'Street Storytelling',
    title: 'Temple Lane Chronicles',
    date: 'Nov 23, 2026',
    views: '1,214 Views',
    description:
      'Candid handheld street cinema documenting swelling crowds and authentic devotional energy.',
    artClass: 'reel-art--street',
    url: 'https://www.instagram.com/vishva_visuals/reel/DgHX612hrKE/',
  },
  {
    id: 'DflonRrtXs3',
    index: '006',
    filter: 'festive',
    category: 'Festive & Typography',
    title: 'Bhai Dooj Nocturne',
    date: 'Nov 10, 2026',
    description:
      'Crimson night-sky fireworks paired with emotional Hindi kinetic typography and atmospheric glow.',
    artClass: 'reel-art--fireworks',
    url: 'https://www.instagram.com/vishva_visuals/reel/DflonRrtXs3/',
  },
  {
    id: 'DfxJ4yvT65O',
    index: '007',
    filter: 'festive',
    category: 'Cultural Highlight',
    title: 'Chhath Mahaparv · MP',
    date: 'Nov 15, 2026',
    description:
      'Minimalist night-frame cultural reel celebrating Chhath Mahaparv in Narmadapuram.',
    artClass: 'reel-art--chhath',
    url: 'https://www.instagram.com/vishva_visuals/reel/DfxJ4yvT65O/',
  },
];

(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let updateCursorTargets = () => {};

  /* ----------------------------------------------------------
     1. Hydrate Contact Details from SITE_CONFIG
     ---------------------------------------------------------- */
  function hydrateConfig() {
    const mapText = {
      brandName: SITE_CONFIG.brandName,
      ownerName: SITE_CONFIG.ownerName,
      phoneDisplay: SITE_CONFIG.phoneDisplay,
      instagramHandle: SITE_CONFIG.instagramHandle,
      whatsappDisplay: SITE_CONFIG.whatsappDisplay,
    };

    Object.entries(mapText).forEach(([key, value]) => {
      document.querySelectorAll(`[data-config="${key}"]`).forEach((el) => {
        el.textContent = value;
      });
    });

    const defaultWaText = encodeURIComponent(
      `Hi ${SITE_CONFIG.ownerName}, I visited ${SITE_CONFIG.brandName} and would like to discuss a project.`
    );
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${defaultWaText}`;

    // Mobile number redirects directly to WhatsApp as requested
    document.querySelectorAll('[data-config="phoneHref"]').forEach((el) => {
      el.setAttribute('href', whatsappUrl);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });

    document.querySelectorAll('[data-config="instagramHref"]').forEach((el) => {
      el.setAttribute('href', SITE_CONFIG.instagramUrl);
    });

    document.querySelectorAll('[data-config="whatsappHref"]').forEach((el) => {
      el.setAttribute('href', whatsappUrl);
    });

    const yearEl = document.getElementById('footerYear');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  /* ----------------------------------------------------------
     2. Render & Filter Reels Portfolio
     ---------------------------------------------------------- */
  function initPortfolio() {
    const grid = document.getElementById('portfolioGrid');
    const filterBar = document.getElementById('portfolioFilters');
    const modal = document.getElementById('reelModal');
    const modalClose = document.getElementById('reelModalClose');
    const modalBackdrop = document.getElementById('reelModalBackdrop');
    const modalTitle = document.getElementById('reelModalTitle');
    const modalCategory = document.getElementById('reelModalCategory');
    const modalIframe = document.getElementById('reelEmbedIframe');
    const modalExternal = document.getElementById('reelModalExternal');

    if (!grid) return;

    function openReelModal(reel) {
      if (!modal || !modalIframe) {
        window.open(reel.url, '_blank', 'noopener,noreferrer');
        return;
      }
      if (modalTitle) modalTitle.textContent = reel.title;
      if (modalCategory) modalCategory.textContent = `${reel.category} · ${reel.date}`;
      if (modalExternal) modalExternal.setAttribute('href', reel.url);
      modalIframe.setAttribute('src', `https://www.instagram.com/reel/${reel.id}/embed/`);
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    }

    function closeReelModal() {
      if (!modal) return;
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      if (modalIframe) modalIframe.setAttribute('src', 'about:blank');
    }

    if (modalClose) modalClose.addEventListener('click', closeReelModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeReelModal);
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
        closeReelModal();
      }
    });

    function renderCards(filterKey) {
      grid.classList.toggle('is-all', filterKey === 'all');

      const filtered =
        filterKey === 'all'
          ? REELS_PORTFOLIO
          : REELS_PORTFOLIO.filter((item) => item.filter === filterKey);

      grid.innerHTML = filtered
        .map((reel, idx) => {
          const statsHtml =
            reel.featured && (reel.views || reel.likes)
              ? `<div class="reel-stats-row">
                  ${reel.views ? `<span class="reel-stat-chip">${reel.views}</span>` : ''}
                  ${reel.likes ? `<span class="reel-stat-chip">${reel.likes}</span>` : ''}
                </div>`
              : '';

          return `
          <article class="work-card ${reel.featured ? 'work-card--featured' : ''} spotlight-card" data-tilt data-cursor="REEL" style="animation-delay: ${idx * 0.07}s">
            <a href="${reel.url}" target="_blank" rel="noopener noreferrer" class="work-visual ${reel.artClass}" aria-label="Watch ${reel.title} on Instagram">
              <span class="visual-index mono-tag">${reel.index}</span>
              <span class="reel-type-pill">${reel.category}</span>
              <span class="reel-play-badge" aria-hidden="true">▶</span>
            </a>
            <div class="work-meta">
              <div class="work-meta-top">
                <h3>${reel.title}</h3>
                <span class="mono-tag">${reel.date}</span>
              </div>
              ${statsHtml}
              <p>${reel.description}</p>
              <div class="work-actions">
                <button type="button" class="reel-action-btn" data-preview-id="${reel.id}" data-cursor="PREVIEW">
                  Preview Embed
                </button>
                <a href="${reel.url}" target="_blank" rel="noopener noreferrer" class="reel-ext-link" data-cursor="OPEN">
                  Instagram <span>↗</span>
                </a>
              </div>
            </div>
          </article>
        `;
        })
        .join('');

      grid.querySelectorAll('[data-preview-id]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-preview-id');
          const reel = REELS_PORTFOLIO.find((r) => r.id === id);
          if (reel) openReelModal(reel);
        });
      });

      bindSpotlightsAndTilt(grid);
      updateCursorTargets(grid);
    }

    renderCards('all');

    if (filterBar) {
      filterBar.querySelectorAll('.filter-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          filterBar.querySelectorAll('.filter-btn').forEach((b) => {
            b.classList.remove('is-active');
            b.setAttribute('aria-selected', 'false');
          });
          btn.classList.add('is-active');
          btn.setAttribute('aria-selected', 'true');
          renderCards(btn.getAttribute('data-filter') || 'all');
        });
      });
    }
  }

  /* ----------------------------------------------------------
     3. Preloader Curtain Sequence
     ---------------------------------------------------------- */
  function runPreloader() {
    const preloader = document.getElementById('preloader');
    const countEl = document.getElementById('preloaderCount');
    const barEl = document.getElementById('preloaderBar');

    if (!preloader || prefersReducedMotion) {
      if (preloader) preloader.style.display = 'none';
      document.body.classList.remove('is-loading');
      document.body.classList.add('is-ready');
      triggerVisibleHero();
      return;
    }

    let progress = 0;
    const duration = 950;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      progress = Math.round((1 - Math.pow(1 - t, 3)) * 100);
      if (countEl) countEl.textContent = String(progress).padStart(2, '0');
      if (barEl) barEl.style.width = `${progress}%`;

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        preloader.classList.add('is-leaving');
        document.body.classList.remove('is-loading');
        document.body.classList.add('is-ready');
        triggerVisibleHero();

        setTimeout(() => {
          preloader.classList.add('is-done');
          preloader.style.display = 'none';
        }, 1000);
      }
    }

    requestAnimationFrame(step);
  }

  function triggerVisibleHero() {
    document.querySelectorAll('#hero .reveal-fade').forEach((el) => {
      el.classList.add('is-visible');
    });
  }

  /* ----------------------------------------------------------
     4. Interactive Generative Flow-Field Particle Canvas
     ---------------------------------------------------------- */
  function initAmbientCanvas() {
    const canvas = document.getElementById('ambientCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    const mouse = { x: -9999, y: -9999, vx: 0, vy: 0 };
    let lastMouse = { x: 0, y: 0 };

    const particles = [];
    const PARTICLE_COUNT = window.innerWidth < 768 ? 42 : 85;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticles() {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.6 + 0.6,
          alpha: Math.random() * 0.45 + 0.15,
          accent: i % 9 === 0,
        });
      }
    }

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    window.addEventListener(
      'mousemove',
      (e) => {
        mouse.vx = e.clientX - lastMouse.x;
        mouse.vy = e.clientY - lastMouse.y;
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        lastMouse.x = e.clientX;
        lastMouse.y = e.clientY;
      },
      { passive: true }
    );

    resize();
    createParticles();

    if (prefersReducedMotion) {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.accent ? 'rgba(216, 255, 75, 0.4)' : `rgba(243, 242, 237, ${p.alpha})`;
        ctx.fill();
      });
      return;
    }

    let tick = 0;
    function render() {
      tick += 0.006;
      ctx.clearRect(0, 0, width, height);

      if (mouse.x > 0) {
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 280);
        grad.addColorStop(0, 'rgba(216, 255, 75, 0.055)');
        grad.addColorStop(1, 'rgba(216, 255, 75, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const angle = Math.sin(p.x * 0.0022 + tick) * Math.cos(p.y * 0.0022 - tick) * Math.PI;
        p.vx += Math.cos(angle) * 0.012;
        p.vy += Math.sin(angle) * 0.012;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 170 && dist > 1) {
          const force = (1 - dist / 170) * 0.38;
          p.vx += (dx / dist) * force + mouse.vx * 0.012;
          p.vy += (dy / dist) * force + mouse.vy * 0.012;
        }

        p.vx *= 0.96;
        p.vy *= 0.96;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.accent
          ? 'rgba(216, 255, 75, 0.65)'
          : `rgba(243, 242, 237, ${p.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const lx = p.x - q.x;
          const ly = p.y - q.y;
          const d = lx * lx + ly * ly;
          if (d < 13500) {
            const lineAlpha = (1 - d / 13500) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(243, 242, 237, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      mouse.vx *= 0.9;
      mouse.vy *= 0.9;
      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  }

  /* ----------------------------------------------------------
     5. Custom Physics Cursor & Magnetic Elements
     ---------------------------------------------------------- */
  function initCursorAndMagnetics() {
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    const label = document.getElementById('cursorLabel');

    if (!dot || !ring || prefersReducedMotion || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;

    window.addEventListener(
      'mousemove',
      (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
        dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      },
      { passive: true }
    );

    window.addEventListener('mousedown', () => ring.classList.add('is-pressed'));
    window.addEventListener('mouseup', () => ring.classList.remove('is-pressed'));

    function animateCursor() {
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);

    updateCursorTargets = (root = document) => {
      root.querySelectorAll('[data-cursor]').forEach((el) => {
        el.addEventListener('mouseenter', () => {
          const text = el.getAttribute('data-cursor') || '';
          if (label) label.textContent = text;
          ring.classList.add('has-label');
        });
        el.addEventListener('mouseleave', () => {
          ring.classList.remove('has-label');
        });
      });

      root.querySelectorAll('.magnetic').forEach((el) => {
        const strength = parseFloat(el.getAttribute('data-strength') || '0.25');
        el.addEventListener('mousemove', (e) => {
          const rect = el.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) * strength;
          const y = (e.clientY - rect.top - rect.height / 2) * strength;
          el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });
        el.addEventListener('mouseleave', () => {
          el.style.transform = 'translate3d(0, 0, 0)';
        });
      });
    };

    updateCursorTargets(document);
  }

  /* ----------------------------------------------------------
     6. Spotlight Borders & 3D Card Tilt
     ---------------------------------------------------------- */
  function bindSpotlightsAndTilt(root = document) {
    root.querySelectorAll('.spotlight-card').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mx', `${x}px`);
        card.style.setProperty('--my', `${y}px`);

        if (card.hasAttribute('data-tilt') && !prefersReducedMotion) {
          const rx = ((y - rect.height / 2) / rect.height) * -8;
          const ry = ((x - rect.width / 2) / rect.width) * 8;
          card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
        }
      });

      card.addEventListener('mouseleave', () => {
        if (card.hasAttribute('data-tilt')) {
          card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)';
        }
      });
    });
  }

  /* ----------------------------------------------------------
     7. Scroll Choreography: Reveal, Scrubbed Statement, Marquee
     ---------------------------------------------------------- */
  function initScrollChoreography() {
    const header = document.getElementById('siteHeader');
    const marqueeTrack = document.getElementById('marqueeTrack');
    const statementEl = document.getElementById('scrubStatement');

    let scrubWords = [];
    if (statementEl) {
      const words = statementEl.textContent.trim().split(/\s+/);
      statementEl.innerHTML = words
        .map((w) => `<span class="scrub-word">${w}</span>`)
        .join(' ');
      scrubWords = Array.from(statementEl.querySelectorAll('.scrub-word'));
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    document.querySelectorAll('.reveal-fade').forEach((el) => observer.observe(el));

    let marqueeOffset = 0;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let direction = -1;

    function tick() {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;
      lastScrollY = currentY;

      if (Math.abs(delta) > 0.2) {
        direction = delta > 0 ? -1 : 1;
        scrollVelocity = Math.min(Math.abs(delta) * 0.45, 14);
      } else {
        scrollVelocity *= 0.92;
      }

      if (header) {
        header.classList.toggle('is-scrolled', currentY > 36);
      }

      if (marqueeTrack && !prefersReducedMotion) {
        const groupWidth = marqueeTrack.firstElementChild
          ? marqueeTrack.firstElementChild.getBoundingClientRect().width
          : 800;

        marqueeOffset += direction * (0.75 + scrollVelocity);
        if (marqueeOffset <= -groupWidth) marqueeOffset += groupWidth;
        if (marqueeOffset >= 0) marqueeOffset -= groupWidth;

        marqueeTrack.style.transform = `translate3d(${marqueeOffset}px, 0, 0)`;
      }

      if (statementEl && scrubWords.length > 0) {
        const rect = statementEl.getBoundingClientRect();
        const vh = window.innerHeight;
        const rawProgress = (vh * 0.82 - rect.top) / (vh * 0.55 + rect.height * 0.4);
        const clamped = Math.max(0, Math.min(1, rawProgress));
        const activeCount = Math.floor(clamped * scrubWords.length);

        scrubWords.forEach((word, idx) => {
          word.classList.toggle('is-lit', idx <= activeCount);
        });
      }

      requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  /* ----------------------------------------------------------
     8. Live Clock, Copy Phone, Quick WhatsApp & Back to Top
     ---------------------------------------------------------- */
  function initUtilities() {
    const clockEl = document.getElementById('liveClock');
    if (clockEl) {
      const updateClock = () => {
        const now = new Date();
        clockEl.textContent = now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        });
      };
      updateClock();
      setInterval(updateClock, 15000);
    }

    const toast = document.getElementById('toast');
    let toastTimer = null;
    function showToast(msg) {
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.add('is-shown');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove('is-shown'), 2400);
    }

    const copyBtn = document.getElementById('copyPhoneBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(SITE_CONFIG.phoneDisplay);
          copyBtn.textContent = 'Copied';
          showToast(`Copied ${SITE_CONFIG.phoneDisplay}`);
          setTimeout(() => {
            copyBtn.textContent = 'Copy';
          }, 1800);
        } catch {
          showToast(SITE_CONFIG.phoneDisplay);
        }
      });
    }

    const waForm = document.getElementById('waComposerForm');
    const waInput = document.getElementById('waMessageInput');
    if (waForm && waInput) {
      waForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const custom = waInput.value.trim();
        const text = encodeURIComponent(
          custom ||
            `Hi ${SITE_CONFIG.ownerName}, I'd love to discuss a visual project with ${SITE_CONFIG.brandName}.`
        );
        window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
      });
    }

    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      });
    }
  }

  /* ----------------------------------------------------------
     Boot
     ---------------------------------------------------------- */
  hydrateConfig();
  initAmbientCanvas();
  initCursorAndMagnetics();
  bindSpotlightsAndTilt(document);
  initPortfolio();
  initScrollChoreography();
  initUtilities();
  runPreloader();
})();
