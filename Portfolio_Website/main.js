/* ========================================
   SIDHARTH KAMATH PORTFOLIO - MAIN JS
   Cyberpunk Hacker x LEGO Interactive
   ======================================== */

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initMatrixRain();
    initFloatingBricks();
    initCursorTrail();
    initLoadingScreen();
    initNavigation();
    initTerminalControls();
    initHeroSection();
    initAboutSection();
    initSkillsSection();
    initProjectsSection();
    initContactSection();
    initScrollAnimations();
    initEasterEggs();
});

// ========================================
// MATRIX RAIN BACKGROUND
// ========================================
function initMatrixRain() {
    const canvas = document.getElementById('matrix-bg');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]|;:<>?/\\~`01アイウエオカキクケコサシスセソタチツテト';
    const charArray = chars.split('');
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
    }

    function draw() {
        ctx.fillStyle = 'rgba(13, 2, 8, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00FF41';
        ctx.font = `${fontSize}px JetBrains Mono`;

        for (let i = 0; i < drops.length; i++) {
            const char = charArray[Math.floor(Math.random() * charArray.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;

            ctx.fillText(char, x, y);

            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(draw, 50);
}

// ========================================
// FLOATING LEGO BRICKS
// ========================================
function initFloatingBricks() {
    const container = document.getElementById('floating-bricks');
    if (!container) return;

    const colors = ['#E3000B', '#006CB7', '#FFD500', '#00852B', '#FF6D00'];
    const brickCount = 15;

    for (let i = 0; i < brickCount; i++) {
        createFloatingBrick(container, colors);
    }

    // Create new bricks periodically
    setInterval(() => {
        if (container.children.length < brickCount) {
            createFloatingBrick(container, colors);
        }
    }, 2000);
}

function createFloatingBrick(container, colors) {
    const brick = document.createElement('div');
    brick.className = 'floating-brick';
    brick.style.left = `${Math.random() * 100}%`;
    brick.style.background = colors[Math.floor(Math.random() * colors.length)];
    brick.style.color = brick.style.background;
    brick.style.animationDuration = `${15 + Math.random() * 15}s`;
    brick.style.animationDelay = `${Math.random() * 5}s`;

    container.appendChild(brick);

    // Remove brick after animation
    brick.addEventListener('animationend', () => {
        brick.remove();
    });
}

// ========================================
// CURSOR TRAIL
// ========================================
function initCursorTrail() {
    const colors = ['#00FF41', '#E3000B', '#006CB7', '#FFD500', '#00852B'];
    const trailLength = 8;
    let mouseX = 0;
    let mouseY = 0;
    let isActive = false;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!isActive && Math.random() > 0.7) {
            isActive = true;
            createTrailBlock(mouseX, mouseY, colors);
            setTimeout(() => { isActive = false; }, 50);
        }
    });
}

function createTrailBlock(x, y, colors) {
    const block = document.createElement('div');
    block.className = 'cursor-block';
    block.style.left = `${x}px`;
    block.style.top = `${y}px`;
    block.style.background = colors[Math.floor(Math.random() * colors.length)];
    block.style.opacity = '0.6';

    document.body.appendChild(block);

    // Fade out and remove
    setTimeout(() => {
        block.style.opacity = '0';
        setTimeout(() => block.remove(), 300);
    }, 100);
}

// ========================================
// LOADING SCREEN
// ========================================
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingText = document.getElementById('loading-text-content');

    if (!loadingScreen || !loadingText) return;

    const messages = [
        'Initializing portfolio...',
        'Loading Sidharth Kamath...',
        'Assembling LEGO bricks...',
        'Connecting to the matrix...',
        'System ready.'
    ];

    let messageIndex = 0;

    const typeMessage = () => {
        if (messageIndex < messages.length) {
            loadingText.textContent = messages[messageIndex];
            messageIndex++;
            setTimeout(typeMessage, 600);
        } else {
            // Hide loading screen
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 500);
        }
    };

    document.body.style.overflow = 'hidden';
    setTimeout(typeMessage, 300);
}

// ========================================
// NAVIGATION
// ========================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('nav-hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const navLogo = document.getElementById('nav-logo');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link
        updateActiveNavLink();
    });

    // Mobile menu toggle
    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            mobileMenu?.classList.remove('active');
        });
    });

    // Logo easter egg
    let logoClickCount = 0;
    navLogo?.addEventListener('click', () => {
        logoClickCount++;
        if (logoClickCount >= 5) {
            triggerLegoRain();
            logoClickCount = 0;
        }
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === currentSection) {
            link.classList.add('active');
        }
    });
}

// ========================================
// HERO SECTION
// ========================================
function initHeroSection() {
    const heroContent = document.getElementById('hero-content');
    const terminalLines = [
        { id: 'terminal-line-1', text: 'Initializing portfolio...' },
        { id: 'terminal-line-2', text: 'Loading Sidharth Kamath...' },
        { id: 'terminal-line-3', text: 'System ready.' }
    ];

    let lineIndex = 0;

    function typeTerminalLine(line, callback) {
        const lineElement = document.getElementById(line.id);
        if (!lineElement) return;

        lineElement.classList.remove('hidden');
        const textSpan = lineElement.querySelector('.typed-text');
        const cursor = lineElement.querySelector('.cursor');

        let charIndex = 0;
        const text = line.text;

        const typeChar = () => {
            if (charIndex < text.length) {
                textSpan.textContent += text[charIndex];
                charIndex++;
                setTimeout(typeChar, 50 + Math.random() * 30);
            } else {
                cursor.style.display = 'none';
                if (callback) callback();
            }
        };

        typeChar();
    }

    function showNextLine() {
        if (lineIndex < terminalLines.length) {
            typeTerminalLine(terminalLines[lineIndex], () => {
                lineIndex++;
                setTimeout(showNextLine, 400);
            });
        } else {
            // Show hero content
            setTimeout(() => {
                heroContent?.classList.remove('hidden');
                initRoleRotation();
            }, 500);
        }
    }

    // Start after loading screen
    setTimeout(showNextLine, 3500);
}

function initRoleRotation() {
    const roleText = document.getElementById('role-text');
    if (!roleText) return;

    const roles = [
        'Computer Engineer',
        'Cybersecurity Enthusiast',
        'Creative Builder',
        'AR/VR Developer',
        'CTF Solver'
    ];

    let roleIndex = 0;

    setInterval(() => {
        roleText.style.opacity = '0';
        roleText.style.transform = 'translateY(-10px)';

        setTimeout(() => {
            roleIndex = (roleIndex + 1) % roles.length;
            roleText.textContent = roles[roleIndex];
            roleText.style.opacity = '1';
            roleText.style.transform = 'translateY(0)';
        }, 300);
    }, 3000);

    roleText.style.transition = 'all 0.3s ease';
}

// ========================================
// ABOUT SECTION
// ========================================
function initAboutSection() {
    const labels = document.querySelectorAll('.rotating-labels .label');
    if (labels.length === 0) return;

    let labelIndex = 0;

    setInterval(() => {
        labels[labelIndex].classList.remove('active');
        labelIndex = (labelIndex + 1) % labels.length;
        labels[labelIndex].classList.add('active');
    }, 2500);
}

// ========================================
// SKILLS SECTION
// ========================================
function initSkillsSection() {
    const skillBricks = document.querySelectorAll('.skill-brick');

    skillBricks.forEach(brick => {
        brick.addEventListener('mouseenter', () => {
            // Add building sound effect (visual feedback instead)
            brick.style.transition = 'all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        });

        brick.addEventListener('click', () => {
            // Toggle expanded state
            brick.classList.toggle('expanded');
        });
    });
}

// ========================================
// PROJECTS SECTION
// ========================================
function initProjectsSection() {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const modalClose = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    const projectDetails = {
        leethelp: {
            title: 'LeetHelp',
            content: `
                <div class="modal-project-info">
                    <p><strong>Description:</strong> A powerful VS Code extension that brings LeetCode directly into your development environment. Get AI-powered hints, track your progress, and solve problems without leaving your IDE.</p>
                    <div class="modal-tech-stack">
                        <h4>Tech Stack:</h4>
                        <div class="tech-tags">
                            <span>TypeScript</span>
                            <span>VS Code API</span>
                            <span>Node.js</span>
                            <span>AI Integration</span>
                        </div>
                    </div>
                    <div class="modal-features">
                        <h4>Key Features:</h4>
                        <ul>
                            <li>Seamless LeetCode integration</li>
                            <li>AI-powered solution hints</li>
                            <li>Progress tracking dashboard</li>
                            <li>Code submission directly from VS Code</li>
                        </ul>
                    </div>
                    <div class="modal-links">
                        <a href="#" class="modal-btn"><i class="fab fa-github"></i> View on GitHub</a>
                        <a href="#" class="modal-btn secondary"><i class="fas fa-download"></i> Install Extension</a>
                    </div>
                </div>
            `
        },
        hearmeout: {
            title: 'hearMeOut',
            content: `
                <div class="modal-project-info">
                    <p><strong>Description:</strong> A secure mental health platform connecting students with professional counselors. Built with privacy-first architecture and AI-powered support features.</p>
                    <div class="modal-tech-stack">
                        <h4>Tech Stack:</h4>
                        <div class="tech-tags">
                            <span>Firebase</span>
                            <span>React</span>
                            <span>Node.js</span>
                            <span>AI/ML</span>
                        </div>
                    </div>
                    <div class="modal-features">
                        <h4>Key Features:</h4>
                        <ul>
                            <li>End-to-end encrypted messaging</li>
                            <li>Anonymous support options</li>
                            <li>AI-powered mood tracking</li>
                            <li>Counselor matching algorithm</li>
                        </ul>
                    </div>
                    <div class="modal-links">
                        <a href="#" class="modal-btn"><i class="fab fa-github"></i> View on GitHub</a>
                        <a href="#" class="modal-btn secondary"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                    </div>
                </div>
            `
        },
        atomic: {
            title: 'Atomic & Compounding QR',
            content: `
                <div class="modal-project-info">
                    <p><strong>Description:</strong> An augmented reality educational app that brings chemistry to life. Scan QR codes to visualize 3D molecular structures and chemical reactions in real-time.</p>
                    <div class="modal-tech-stack">
                        <h4>Tech Stack:</h4>
                        <div class="tech-tags">
                            <span>Unity</span>
                            <span>AR Foundation</span>
                            <span>C#</span>
                            <span>Vuforia</span>
                        </div>
                    </div>
                    <div class="modal-features">
                        <h4>Key Features:</h4>
                        <ul>
                            <li>3D molecular visualization</li>
                            <li>Interactive chemical bonding</li>
                            <li>QR code triggered AR experiences</li>
                            <li>Educational quizzes and assessments</li>
                        </ul>
                    </div>
                    <div class="modal-links">
                        <a href="#" class="modal-btn"><i class="fab fa-github"></i> View on GitHub</a>
                        <a href="#" class="modal-btn secondary"><i class="fas fa-mobile-alt"></i> Download App</a>
                    </div>
                </div>
            `
        }
    };

    // Add modal styles
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .modal-project-info p {
            color: var(--text-secondary);
            margin-bottom: 20px;
            line-height: 1.8;
        }
        .modal-project-info strong {
            color: var(--matrix-green);
        }
        .modal-tech-stack, .modal-features {
            margin-bottom: 20px;
        }
        .modal-tech-stack h4, .modal-features h4 {
            color: var(--text-primary);
            margin-bottom: 10px;
            font-size: 1rem;
        }
        .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .tech-tags span {
            padding: 6px 14px;
            background: rgba(0, 255, 65, 0.1);
            color: var(--matrix-green);
            border-radius: 20px;
            font-size: 0.85rem;
        }
        .modal-features ul {
            list-style: none;
            padding-left: 0;
        }
        .modal-features li {
            padding: 8px 0;
            color: var(--text-secondary);
            position: relative;
            padding-left: 20px;
        }
        .modal-features li::before {
            content: '▹';
            position: absolute;
            left: 0;
            color: var(--matrix-green);
        }
        .modal-links {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            margin-top: 25px;
        }
        .modal-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            background: var(--matrix-green);
            color: var(--terminal-black);
            text-decoration: none;
            border-radius: 5px;
            font-family: var(--font-mono);
            font-size: 0.9rem;
            transition: all 0.3s ease;
        }
        .modal-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 20px var(--matrix-green-glow);
        }
        .modal-btn.secondary {
            background: transparent;
            border: 2px solid var(--matrix-green);
            color: var(--matrix-green);
        }
        .modal-btn.secondary:hover {
            background: var(--matrix-green);
            color: var(--terminal-black);
        }
    `;
    document.head.appendChild(modalStyles);

    projectCards.forEach(card => {
        const projectBtn = card.querySelector('.project-btn');

        projectBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            const projectId = card.getAttribute('data-project');
            const details = projectDetails[projectId];

            if (details && modalTitle && modalBody) {
                modalTitle.textContent = details.title;
                modalBody.innerHTML = details.content;
                modal?.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    modalClose?.addEventListener('click', closeModal);
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    function closeModal() {
        modal?.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            closeModal();
        }
    });
}

// ========================================
// CONTACT SECTION
// ========================================
function initContactSection() {
    const buildingStatus = document.getElementById('building-status');
    if (!buildingStatus) return;

    const statuses = [
        'Enhancing LeetHelp extension ',
        'Exploring new CTF challenges ',
        'Building LEGO MOCs ',
        'Learning Rust security tools ',
        'Creating VR experiences ',
        'Writing security automation scripts '
    ];

    let statusIndex = 0;

    function updateStatus() {
        buildingStatus.style.opacity = '0';

        setTimeout(() => {
            buildingStatus.textContent = statuses[statusIndex];
            buildingStatus.style.opacity = '1';
            statusIndex = (statusIndex + 1) % statuses.length;
        }, 300);
    }

    updateStatus();
    setInterval(updateStatus, 5000);

    buildingStatus.style.transition = 'opacity 0.3s ease';
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements
    const animateElements = document.querySelectorAll(
        '.section-header, .about-left, .about-right, .skill-brick, ' +
        '.timeline-card, .project-card, .achievement-badge, .cert-card, ' +
        '.contact-terminal'
    );

    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ========================================
// EASTER EGGS
// ========================================
function initEasterEggs() {
    // Konami Code for LEGO rain
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                triggerLegoRain();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    // Hidden terminal (Ctrl + `)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === '`') {
            toggleHiddenTerminal();
        }
    });

    initHiddenTerminal();
}

function triggerLegoRain() {
    const colors = ['#E3000B', '#006CB7', '#FFD500', '#00852B', '#FF6D00'];
    const brickCount = 50;

    for (let i = 0; i < brickCount; i++) {
        setTimeout(() => {
            const brick = document.createElement('div');
            brick.className = 'lego-rain-brick';
            brick.style.cssText = `
                position: fixed;
                top: -50px;
                left: ${Math.random() * 100}vw;
                width: 30px;
                height: 20px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 3px;
                z-index: 9999;
                pointer-events: none;
                animation: legoFall ${2 + Math.random() * 2}s linear forwards;
            `;

            document.body.appendChild(brick);

            setTimeout(() => brick.remove(), 4000);
        }, i * 50);
    }

    // Add animation if not exists
    if (!document.getElementById('lego-rain-style')) {
        const style = document.createElement('style');
        style.id = 'lego-rain-style';
        style.textContent = `
            @keyframes legoFall {
                0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

function toggleHiddenTerminal() {
    const terminal = document.getElementById('hidden-terminal');
    terminal?.classList.toggle('active');

    if (terminal?.classList.contains('active')) {
        document.getElementById('terminal-input')?.focus();
    }
}

function initHiddenTerminal() {
    const terminal = document.getElementById('hidden-terminal');
    const input = document.getElementById('terminal-input');
    const output = document.getElementById('terminal-output');
    const closeBtn = document.getElementById('close-hidden-terminal');

    if (!terminal || !input || !output) return;

    closeBtn?.addEventListener('click', () => {
        terminal.classList.remove('active');
    });

    const commands = {
        help: `Available commands:
• about - About Sidharth
• skills - List skills
• contact - Contact info
• lego - LEGO surprise!
• matrix - Toggle matrix rain
• clear - Clear terminal
• exit - Close terminal`,
        about: `Sidharth Kamath
Computer Engineering Student
Cybersecurity Enthusiast | AR/VR Developer | LEGO Fan
Currently pursuing Honours in Cyber Security & Forensics`,
        skills: `Languages: Java, C++, Python, C
Frameworks: Unity, Unreal Engine 5
Security: SIEM, EDR/XDR, CTF, Network Monitoring
Tools: Git, VS Code, IntelliJ IDEA`,
        contact: `GitHub: github.com/sidkm18
LinkedIn: linkedin.com/in/Sidkm18
Location: Mumbai, India`,
        lego: () => {
            triggerLegoRain();
            return 'LEGO rain activated! 🧱';
        },
        matrix: () => {
            const canvas = document.getElementById('matrix-bg');
            if (canvas) {
                canvas.style.opacity = canvas.style.opacity === '0' ? '0.15' : '0';
            }
            return 'Matrix rain toggled.';
        },
        clear: () => {
            output.innerHTML = '<p><span class="prompt">&gt;</span> Terminal cleared.</p>';
            return null;
        },
        exit: () => {
            terminal.classList.remove('active');
            return null;
        }
    };

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmd = input.value.trim().toLowerCase();
            input.value = '';

            // Add command to output
            const cmdLine = document.createElement('p');
            cmdLine.innerHTML = `<span class="prompt">&gt;</span> ${cmd}`;
            output.appendChild(cmdLine);

            // Process command
            if (cmd in commands) {
                const result = typeof commands[cmd] === 'function' ? commands[cmd]() : commands[cmd];
                if (result) {
                    const resultLine = document.createElement('p');
                    resultLine.style.whiteSpace = 'pre-wrap';
                    resultLine.style.color = '#00FF41';
                    resultLine.textContent = result;
                    output.appendChild(resultLine);
                }
            } else if (cmd) {
                const errorLine = document.createElement('p');
                errorLine.style.color = '#ff5f56';
                errorLine.textContent = `Command not found: ${cmd}. Type 'help' for available commands.`;
                output.appendChild(errorLine);
            }

            // Scroll to bottom
            output.scrollTop = output.scrollHeight;
        }
    });
}

// ========================================
// TERMINAL WINDOW CONTROLS
// ========================================
function initTerminalControls() {
    const buttons = document.querySelectorAll('[data-action]');

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const action = btn.getAttribute('data-action');
            const targetId = btn.getAttribute('data-target');
            const terminal = document.getElementById(targetId);

            if (!terminal) return;

            const body = terminal.querySelector('.terminal-body');
            const header = terminal.querySelector('.terminal-header');

            switch (action) {
                case 'close':
                    terminal.style.animation = 'windowClose 0.3s ease forwards';
                    setTimeout(() => {
                        terminal.style.display = 'none';
                    }, 300);
                    break;

                case 'minimize':
                    if (body) {
                        body.style.transition = 'all 0.3s ease';
                        if (body.style.display === 'none') {
                            body.style.display = 'block';
                            body.style.opacity = '1';
                            body.style.maxHeight = 'none';
                            btn.classList.remove('minimized');
                        } else {
                            body.style.opacity = '0';
                            body.style.maxHeight = '0';
                            body.style.overflow = 'hidden';
                            body.style.display = 'none';
                            btn.classList.add('minimized');
                        }
                    }
                    break;

                case 'maximize':
                    terminal.classList.toggle('fullscreen');
                    break;
            }
        });
    });
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar')?.offsetHeight || 70;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// PRELOAD CRITICAL RESOURCES
// ========================================
window.addEventListener('load', () => {
    // Preload fonts
    document.fonts.ready.then(() => {
        document.body.classList.add('fonts-loaded');
    });
});

// ========================================
// PERFORMANCE: THROTTLE SCROLL EVENTS
// ========================================
function throttle(func, wait) {
    let timeout = null;
    let lastArgs = null;

    return function (...args) {
        if (!timeout) {
            func.apply(this, args);
            timeout = setTimeout(() => {
                timeout = null;
                if (lastArgs) {
                    func.apply(this, lastArgs);
                    lastArgs = null;
                }
            }, wait);
        } else {
            lastArgs = args;
        }
    };
}

// Apply throttle to scroll-heavy functions
window.addEventListener('scroll', throttle(updateActiveNavLink, 100));
