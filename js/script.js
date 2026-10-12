document.addEventListener('DOMContentLoaded', () => {
    /* ── Countdown Timer (commented out for preview) ─────────────────
    // Target: October 15, 2026 at 12:00:00 AM IST (UTC+5:30)
    const TARGET_DATE = new Date('2026-10-15T00:00:00+05:30');

    const cdOverlay  = document.getElementById('countdown-overlay');
    const cdDays     = document.getElementById('cd-days');
    const cdHours    = document.getElementById('cd-hours');
    const cdMinutes  = document.getElementById('cd-minutes');
    const cdSeconds  = document.getElementById('cd-seconds');

    function pad(n) { return String(n).padStart(2, '0'); }

    function tickPulse(el) {
        el.classList.remove('tick');
        void el.offsetWidth; // reflow to restart animation
        el.classList.add('tick');
        setTimeout(() => el.classList.remove('tick'), 200);
    }

    let lastSeconds = -1;

    function updateCountdown() {
        const now  = new Date();
        const diff = TARGET_DATE - now;

        if (diff <= 0) {
            // Time's up — hide the countdown overlay
            cdDays.textContent    = '00';
            cdHours.textContent   = '00';
            cdMinutes.textContent = '00';
            cdSeconds.textContent = '00';
            cdOverlay.classList.add('fade-out');
            clearInterval(countdownInterval);
            return;
        }

        const totalSec = Math.floor(diff / 1000);
        const days     = Math.floor(totalSec / 86400);
        const hours    = Math.floor((totalSec % 86400) / 3600);
        const minutes  = Math.floor((totalSec % 3600) / 60);
        const seconds  = totalSec % 60;

        cdDays.textContent    = pad(days);
        cdHours.textContent   = pad(hours);
        cdMinutes.textContent = pad(minutes);
        cdSeconds.textContent = pad(seconds);

        if (seconds !== lastSeconds) {
            tickPulse(cdSeconds);
            if (seconds === 59) tickPulse(cdMinutes);
            if (seconds === 59 && minutes === 59) tickPulse(cdHours);
            if (seconds === 59 && minutes === 59 && hours === 23) tickPulse(cdDays);
            lastSeconds = seconds;
        }
    }

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
    // ── End Countdown ──────────────────────────────────────────────── */

    // Skip countdown — hide overlay immediately for preview
    document.getElementById('countdown-overlay').classList.add('fade-out');

    // List of images from the new assets/img folder
    const imageFiles = [
        "145874603_891195748345739_6040140463443088915_n.jpg",
        "146383245_891195805012400_8776621510293061528_n.jpg",
        "146485246_891195238345790_3416448527933280411_n.jpg",
        "44146418_318267472305239_7944771126217932800_n.jpg",
        "44650350_321026932029293_5876449540868931584_n.jpg",
        "454727325_122106542576443572_5001320083608417802_n.jpg",
        "46485701_337781003687219_81782310529138688_n.jpg",
        "473177844_122136860054443572_8292105934541729457_n.jpg",
        "482193820_1847507296047908_404203713152930124_n.jpg",
        "494150288_122154566630443572_607901113563016262_n.jpg",
        "51503751_386715592127093_5328489560181571584_n.jpg",
        "51577593_381798965952089_7706787121490558976_n.jpg",
        "518676092_122165956526443572_8790180031827351305_n.jpg",
        "52011260_386715988793720_1037625087525650432_n.jpg",
        "561162114_2025533314911971_8380703224055497780_n.jpg",
        "561393448_2025533354911967_5944207166396896846_n.jpg",
        "561757727_2025533271578642_7771583325470551362_n.jpg",
        "565158533_2025533408245295_3449882667641460570_n.jpg",
        "611756954_122189499362443572_2589982171773113382_n.jpg",
        "79618354_593259498139367_2555660452000432128_n.jpg",
        "WhatsApp Image 2026-10-07 at 11.04.37 PM.jpeg",
        "WhatsApp Image 2026-10-07 at 11.04.38 PM.jpeg",
        "WhatsApp Image 2026-10-07 at 11.04.40 PM (1).jpeg",
        "WhatsApp Image 2026-10-07 at 11.04.40 PM.jpeg",
        "WhatsApp Image 2026-10-07 at 11.04.41 PM.jpeg",
        "WhatsApp Image 2026-10-07 at 11.04.42 PM.jpeg",
        "WhatsApp Image 2026-10-07 at 11.04.43 PM (1).jpeg",
        "WhatsApp Image 2026-10-07 at 11.04.43 PM.jpeg",
        "WhatsApp Image 2026-10-07 at 11.04.46 PM.jpeg",
        "WhatsApp Image 2026-10-07 at 11.04.46.jpeg",
        "WhatsApp Image 2026-10-07 at 11.05.29 PM.jpeg",
        "WhatsApp Image 2026-10-07 at 11.05.30 PM (1).jpeg",
        "WhatsApp Image 2026-10-07 at 11.05.30 PM.jpeg",
        "WhatsApp Image 2026-10-07 at 11.05.31 PM.jpeg",
        "WhatsApp Image 2026-10-07 at 11.06.55 PM.jpeg"
    ];

    const images = imageFiles.map(file => `assets/img/${file}`);

    // Initialize Components
    initAurora('aurora-bg');
    initAurora('reveal-btn-aurora');
    initAurora('surprise-btn-aurora');
    initDomeGallery(images);
    initBlurText();

    const revealBtn = document.getElementById('reveal-btn');
    const revealOverlay = document.getElementById('reveal-overlay');
    const mainContent = document.getElementById('main-content');
    const bgMusic = document.getElementById('bg-music');
    const musicToggle = document.getElementById('music-toggle');

    // Reveal Logic
    revealBtn.addEventListener('click', () => {
        bgMusic.play().then(() => {
            musicToggle.classList.add('playing');
            musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
        }).catch(() => {});
        revealOverlay.classList.add('fade-out');
        mainContent.classList.remove('hidden');
        setTimeout(() => {
            mainContent.classList.add('visible');
            animateNumberTicker('age-ticker', 0, 21, 2000);
        }, 100);
    });

    // Music Toggle
    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) { 
            bgMusic.play(); musicToggle.classList.add('playing');
            musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else { 
            bgMusic.pause(); musicToggle.classList.remove('playing');
            musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });

    // Surprise Confetti
    document.getElementById('surprise-btn').addEventListener('click', () => {
        confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 }, colors: ['#FFB6C1', '#FFDAB9', '#E6E6FA', '#ffffff'] });
        const msg = document.getElementById('surprise-msg');
        msg.classList.remove('hidden');
        initBlurText(msg); 
        document.getElementById('surprise-btn').style.display = 'none';
    });

    // Soft Aurora Implementation
    function initAurora(containerId) {
        const container = document.getElementById(containerId);
        if (!container || !window.OGL) return;

        const { Renderer, Program, Mesh, Triangle } = window.OGL;
        const isButton = container.classList.contains('btn-aurora');

        function hexToVec3(hex) {
            const h = hex.replace('#', '');
            return [
                parseInt(h.slice(0, 2), 16) / 255,
                parseInt(h.slice(2, 4), 16) / 255,
                parseInt(h.slice(4, 6), 16) / 255
            ];
        }

        const vertexShader = `
            attribute vec2 uv;
            attribute vec2 position;
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = vec4(position, 0, 1);
            }
        `;

        const fragmentShader = `
            precision highp float;
            uniform float uTime;
            uniform vec3 uResolution;
            uniform float uSpeed;
            uniform float uScale;
            uniform float uBrightness;
            uniform vec3 uColor1;
            uniform vec3 uColor2;
            uniform float uNoiseFreq;
            uniform float uNoiseAmp;
            uniform float uBandHeight;
            uniform float uBandSpread;
            uniform float uOctaveDecay;
            uniform float uLayerOffset;
            uniform float uColorSpeed;
            uniform vec2 uMouse;
            uniform float uMouseInfluence;
            uniform bool uEnableMouse;

            #define TAU 6.28318

            vec3 gradientHash(vec3 p) {
                p = vec3(
                    dot(p, vec3(127.1, 311.7, 234.6)),
                    dot(p, vec3(269.5, 183.3, 198.3)),
                    dot(p, vec3(169.5, 283.3, 156.9))
                );
                vec3 h = fract(sin(p) * 43758.5453123);
                float phi = acos(2.0 * h.x - 1.0);
                float theta = TAU * h.y;
                return vec3(cos(theta) * sin(phi), sin(theta) * cos(phi), cos(phi));
            }

            float quinticSmooth(float t) {
                float t2 = t * t;
                float t3 = t * t2;
                return 6.0 * t3 * t2 - 15.0 * t2 * t2 + 10.0 * t3;
            }

            vec3 cosineGradient(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
                return a + b * cos(TAU * (c * t + d));
            }

            float perlin3D(float amplitude, float frequency, float px, float py, float pz) {
                float x = px * frequency;
                float y = py * frequency;
                float fx = floor(x); float fy = floor(y); float fz = floor(pz);
                float cx = ceil(x);  float cy = ceil(y);  float cz = ceil(pz);
                vec3 g000 = gradientHash(vec3(fx, fy, fz));
                vec3 g100 = gradientHash(vec3(cx, fy, fz));
                vec3 g010 = gradientHash(vec3(fx, cy, fz));
                vec3 g110 = gradientHash(vec3(cx, cy, fz));
                vec3 g001 = gradientHash(vec3(fx, fy, cz));
                vec3 g101 = gradientHash(vec3(cx, fy, cz));
                vec3 g011 = gradientHash(vec3(fx, cy, cz));
                vec3 g111 = gradientHash(vec3(cx, cy, cz));
                float d000 = dot(g000, vec3(x - fx, y - fy, pz - fz));
                float d100 = dot(g100, vec3(x - cx, y - fy, pz - fz));
                float d010 = dot(g010, vec3(x - fx, y - cy, pz - fz));
                float d110 = dot(g110, vec3(x - cx, y - cy, pz - fz));
                float d001 = dot(g001, vec3(x - fx, y - fy, pz - cz));
                float d101 = dot(g101, vec3(x - cx, y - fy, pz - cz));
                float d011 = dot(g011, vec3(x - fx, y - cy, pz - cz));
                float d111 = dot(g111, vec3(x - cx, y - cy, pz - cz));
                float sx = quinticSmooth(x - fx);
                float sy = quinticSmooth(y - fy);
                float sz = quinticSmooth(pz - fz);
                float lx00 = mix(d000, d100, sx);
                float lx10 = mix(d010, d110, sx);
                float lx01 = mix(d001, d101, sx);
                float lx11 = mix(d011, d111, sx);
                float ly0 = mix(lx00, lx10, sy);
                float ly1 = mix(lx01, lx11, sz);
                return amplitude * mix(ly0, ly1, sz);
            }

            float auroraGlow(float t, vec2 shift) {
                vec2 uv = gl_FragCoord.xy / uResolution.y;
                uv += shift;
                float noiseVal = 0.0;
                float freq = uNoiseFreq;
                float amp = uNoiseAmp;
                vec2 samplePos = uv * uScale;
                for (float i = 0.0; i < 3.0; i += 1.0) {
                    noiseVal += perlin3D(amp, freq, samplePos.x, samplePos.y, t);
                    amp *= uOctaveDecay;
                    freq *= 2.0;
                }
                float yBand = uv.y * 10.0 - uBandHeight * 10.0;
                return 0.3 * max(exp(uBandSpread * (1.0 - 1.1 * abs(noiseVal + yBand))), 0.0);
            }

            void main() {
                vec2 uv = gl_FragCoord.xy / uResolution.xy;
                float t = uSpeed * 0.4 * uTime;
                vec2 shift = vec2(0.0);
                if (uEnableMouse) {
                    shift = (uMouse - 0.5) * uMouseInfluence;
                }
                vec3 col = vec3(0.0);
                col += 0.99 * auroraGlow(t, shift) * cosineGradient(uv.x + uTime * uSpeed * 0.2 * uColorSpeed, vec3(0.5), vec3(0.5), vec3(1.0), vec3(0.3, 0.20, 0.20)) * uColor1;
                col += 0.99 * auroraGlow(t + uLayerOffset, shift) * cosineGradient(uv.x + uTime * uSpeed * 0.1 * uColorSpeed, vec3(0.5), vec3(0.5), vec3(2.0, 1.0, 0.0), vec3(0.5, 0.20, 0.25)) * uColor2;
                col *= uBrightness;
                float alpha = clamp(length(col), 0.0, 1.0);
                gl_FragColor = vec4(col, alpha);
            }
        `;

        const renderer = new Renderer({ alpha: true, premultipliedAlpha: false });
        const gl = renderer.gl;
        gl.clearColor(0, 0, 0, 0);

        let currentMouse = [0.5, 0.5];
        let targetMouse = [0.5, 0.5];

        function handleMouseMove(e) {
            const rect = gl.canvas.getBoundingClientRect();
            targetMouse = [
                (e.clientX - rect.left) / rect.width,
                1.0 - (e.clientY - rect.top) / rect.height
            ];
        }

        window.addEventListener('mousemove', handleMouseMove);

        function resize() {
            renderer.setSize(container.offsetWidth, container.offsetHeight);
            if (program) {
                program.uniforms.uResolution.value = [gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height];
            }
        }
        window.addEventListener('resize', resize);

        const geometry = new Triangle(gl);
        const program = new Program(gl, {
            vertex: vertexShader,
            fragment: fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uResolution: { value: [gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height] },
                uSpeed: { value: isButton ? 1.2 : 0.6 },
                uScale: { value: isButton ? 2.5 : 1.5 },
                uBrightness: { value: 1.0 },
                uColor1: { value: hexToVec3('#f7f7f7') },
                uColor2: { value: hexToVec3('#e100ff') },
                uNoiseFreq: { value: 2.5 },
                uNoiseAmp: { value: 1.0 },
                uBandHeight: { value: 0.5 },
                uBandSpread: { value: 1.0 },
                uOctaveDecay: { value: 0.1 },
                uLayerOffset: { value: 0 },
                uColorSpeed: { value: 1.0 },
                uMouse: { value: new Float32Array([0.5, 0.5]) },
                uMouseInfluence: { value: 0.25 },
                uEnableMouse: { value: true }
            }
        });

        const mesh = new Mesh(gl, { geometry, program });
        container.appendChild(gl.canvas);
        resize();

        function update(time) {
            requestAnimationFrame(update);
            program.uniforms.uTime.value = time * 0.001;
            currentMouse[0] += 0.05 * (targetMouse[0] - currentMouse[0]);
            currentMouse[1] += 0.05 * (targetMouse[1] - currentMouse[1]);
            program.uniforms.uMouse.value[0] = currentMouse[0];
            program.uniforms.uMouse.value[1] = currentMouse[1];
            renderer.render({ scene: mesh });
        }
        requestAnimationFrame(update);
    }

    // Blur Text Logic
    function initBlurText(target = document) {
        const elements = target.querySelectorAll('.blur-text');
        elements.forEach(el => {
            if (el.dataset.initialized) return;
            const text = el.innerText;
            const animateBy = el.dataset.animateBy || 'words';
            const delay = parseInt(el.dataset.delay) || 200;
            const parts = animateBy === 'words' ? text.split(' ') : text.split('');
            
            el.innerHTML = '';
            parts.forEach((part, i) => {
                const span = document.createElement('span');
                span.className = 'blur-text-segment';
                span.innerText = part === ' ' ? '\u00A0' : part;
                if (animateBy === 'words' && i < parts.length - 1) {
                    span.innerHTML += '\u00A0';
                }
                el.appendChild(span);
            });

            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    const spans = el.querySelectorAll('.blur-text-segment');
                    spans.forEach((span, i) => {
                        setTimeout(() => span.classList.add('animate'), i * delay);
                    });
                    observer.unobserve(el);
                }
            }, { threshold: 0.1 });
            observer.observe(el);
            el.dataset.initialized = "true";
        });
    }

    // Full Background Reactive Dome (Mobile Optimized)
    function initDomeGallery(imagePool) {
        const container = document.getElementById('dome-gallery-bg');
        if (!container) return;

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Spec parameters with slight adjustment for better visibility
        const fit = 0.8; // Increased from 0.5 for larger appearance
        const minRadius = 800; // Increased from 600
        const segments = 35;
        const dragSensitivity = 25;
        const maxVerticalRotationDeg = 8;

        let radius = Math.max(minRadius, Math.min(viewportWidth, viewportHeight) * fit * 2.5); 

        container.innerHTML = `<div class="sphere-root" style="--segments-x: ${segments}; --segments-y: ${segments}; --radius: ${radius}px;"><div class="sphere-main"><div class="stage"><div class="sphere" id="sphere-core"></div></div></div></div>`;
        const sphere = document.getElementById('sphere-core');

        // Denser distribution
        const xCols = Array.from({ length: segments }, (_, i) => -segments/2 + i * 2);
        const yRows = [-8, -6, -4, -2, 0, 2, 4, 6, 8]; 

        const shuffledPool = [...imagePool].sort(() => Math.random() - 0.5);
        let itemIdx = 0;
        let openedItem = null;

        xCols.forEach((x, c) => {
            yRows.forEach(y => {
                const imgUrl = shuffledPool[itemIdx % shuffledPool.length];
                const item = document.createElement('div');
                item.className = 'item';
                item.style.setProperty('--offset-x', x);
                item.style.setProperty('--offset-y', y);
                item.style.setProperty('--item-size-x', 2.2); // Larger cards
                item.style.setProperty('--item-size-y', 2.2);

                // Add load checking
                const img = new Image();
                img.src = imgUrl;
                img.alt = "Memory";
                img.loading = "lazy";

                const imgContainer = document.createElement('div');
                imgContainer.className = 'item__image';
                imgContainer.appendChild(img);
                item.appendChild(imgContainer);

                item.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (openedItem === item) {
                        item.classList.remove('opened');
                        openedItem = null;
                    } else {
                        if (openedItem) openedItem.classList.remove('opened');
                        item.classList.add('opened');
                        openedItem = item;
                    }
                });

                sphere.appendChild(item);
                itemIdx++;
            });
        });


        container.addEventListener('click', () => {
            if (openedItem) {
                openedItem.classList.remove('opened');
                openedItem = null;
            }
        });

        let rotationX = 0, rotationY = 0, targetX = 0, targetY = 0;
        let isDragging = false, startX, startY, velocityX = 0, velocityY = 0;

        container.addEventListener('pointerdown', (e) => { isDragging = true; startX = e.clientX; startY = e.clientY; });
        window.addEventListener('pointermove', (e) => {
            if (!isDragging) return;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            velocityX = (dx / viewportWidth) * dragSensitivity; 
            velocityY = (dy / viewportHeight) * dragSensitivity;
            targetY += velocityX; 
            targetX -= velocityY;
            startX = e.clientX; startY = e.clientY;
        });
        window.addEventListener('pointerup', () => { isDragging = false; });

        function animate() {
            if (!isDragging) { 
                targetY += velocityX + 0.04; 
                targetX += velocityY; 
                velocityX *= 0.9; 
                velocityY *= 0.9; 
            }
            targetX = Math.max(-maxVerticalRotationDeg, Math.min(maxVerticalRotationDeg, targetX)); 
            rotationX += (targetX - rotationX) * 0.1;
            rotationY += (targetY - rotationY) * 0.1;
            sphere.style.transform = `translateZ(calc(${radius}px * -1)) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
            requestAnimationFrame(animate);
        }
        animate();
    }

    // Number Ticker Implementation
    function animateNumberTicker(id, start, end, duration) {
        const obj = document.getElementById(id);
        if (!obj) return;
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
});
