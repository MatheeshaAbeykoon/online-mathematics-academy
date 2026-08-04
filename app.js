// AB Mathematics Application Logic

// 1. DATABASE & CONFIGURATION
const COURSES_DATA = [
    {
        id: "algebra",
        title: "Algebra & Equations",
        category: "Algebra",
        description: "Master solving linear equations, quadratic structures, and graphing parabolas.",
        sections: [
            {
                title: "1. Introduction to Linear Equations",
                content: `
                    <h4>What is a Linear Equation?</h4>
                    <p>A linear equation is an algebraic equation in which each term is either a constant or the product of a constant and a single variable. When graphed, it forms a straight line.</p>
                    <p>The standard slope-intercept form is:</p>
                    <div class="math-equation-block" data-math="y = mx + c"></div>
                    <p>Where <strong>m</strong> represents the slope (steepness) and <strong>c</strong> represents the y-intercept (where the line crosses the vertical axis).</p>
                    
                    <h4>Solving for the Variable</h4>
                    <p>To solve a linear equation, our goal is to isolate the variable on one side of the equation. Let's look at an example:</p>
                    <div class="math-equation-block" data-math="3x + 5 = 17"></div>
                    <p>First, subtract $5$ from both sides of the equation to isolate the term containing $x$:</p>
                    <div class="math-equation-block" data-math="3x = 12"></div>
                    <p>Next, divide both sides by $3$ to find the value of $x$:</p>
                    <div class="math-equation-block" data-math="x = 4"></div>
                `
            },
            {
                title: "2. The Quadratic Formula",
                content: `
                    <h4>Quadratic Equations</h4>
                    <p>A quadratic equation is a second-order polynomial equation in a single variable. The general form is:</p>
                    <div class="math-equation-block" data-math="ax^2 + bx + c = 0"></div>
                    <p>Where $a$, $b$, and $c$ are coefficients, and $a \\neq 0$.</p>
                    
                    <h4>The Quadratic Formula</h4>
                    <p>When factoring is difficult, we can always find the roots (solutions) using the famous <strong>Quadratic Formula</strong>:</p>
                    <div class="math-equation-block" data-math="x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}"></div>
                    <p>The expression inside the square root, $b^2 - 4ac$, is called the <strong>discriminant</strong> ($D$). It tells us the nature of the roots:</p>
                    <ul>
                        <li>If $D > 0$, there are two distinct real roots.</li>
                        <li>If $D = 0$, there is exactly one real root (a repeated root).</li>
                        <li>If $D < 0$, there are two complex (imaginary) roots.</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: "trig",
        title: "Trigonometry & Waveforms",
        category: "Trigonometry",
        description: "Explore triangular properties, trigonometric ratios, and wave function behaviors.",
        sections: [
            {
                title: "1. Right-Angled Triangles",
                content: `
                    <h4>Trigonometric Ratios</h4>
                    <p>Trigonometry studies the relationships between the side lengths and angles of triangles. In a right-angled triangle, we define the three primary ratios relative to an angle $\\theta$:</p>
                    <ul>
                        <li><strong>Sine (sin):</strong> Opposite side divided by the Hypotenuse.</li>
                        <li><strong>Cosine (cos):</strong> Adjacent side divided by the Hypotenuse.</li>
                        <li><strong>Tangent (tan):</strong> Opposite side divided by the Adjacent side.</li>
                    </ul>
                    <p>This is commonly remembered using the acronym <strong>SOH-CAH-TOA</strong>:</p>
                    <div class="math-equation-block" data-math="\\sin(\\theta) = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} \\quad \\cos(\\theta) = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} \\quad \\tan(\\theta) = \\frac{\\text{Opposite}}{\\text{Adjacent}}"></div>
                    
                    <h4>The Pythagorean Identity</h4>
                    <p>For any angle $\\theta$, the fundamental trigonometric identity states that:</p>
                    <div class="math-equation-block" data-math="\\sin^2(\\theta) + \\cos^2(\\theta) = 1"></div>
                `
            },
            {
                title: "2. Graphing Sine and Cosine Waves",
                content: `
                    <h4>Periodic Waveforms</h4>
                    <p>Trigonometric functions repeat their values in regular intervals, making them periodic. The standard sine function is periodic with a period of $2\\pi$ (or $360^\\circ$).</p>
                    <p>The general wave function can be modelled as:</p>
                    <div class="math-equation-block" data-math="y = A \\sin(Bx - C) + D"></div>
                    <p>Where parameters control the properties of the wave:</p>
                    <ul>
                        <li><strong>A</strong> is the <strong>amplitude</strong> (height of the wave).</li>
                        <li><strong>B</strong> controls the <strong>frequency/period</strong> (period = $2\\pi / |B|$).</li>
                        <li><strong>C</strong> represents the <strong>phase shift</strong> (horizontal shift).</li>
                        <li><strong>D</strong> represents the <strong>vertical shift</strong> (average height).</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: "calculus",
        title: "Calculus & Limits",
        category: "Calculus",
        description: "Introduction to rates of change, limit evaluations, and core derivative rules.",
        sections: [
            {
                title: "1. The Concept of Limits",
                content: `
                    <h4>What is a Limit?</h4>
                    <p>A limit describes the value that a function approaches as the input approaches some value. It is the core foundation upon which all of calculus is built.</p>
                    <p>We write limits using the notation:</p>
                    <div class="math-equation-block" data-math="\\lim_{x \\to c} f(x) = L"></div>
                    <p>Which reads: "The limit of $f(x)$ as $x$ approaches $c$ equals $L$."</p>
                    
                    <h4>An Indeterminate Form Example</h4>
                    <p>Consider the function $f(x) = \\frac{x^2 - 1}{x - 1}$. We cannot evaluate this function at $x = 1$ directly because it results in $\\frac{0}{0}$. However, we can find its limit as $x$ approaches $1$ by factoring:</p>
                    <div class="math-equation-block" data-math="\\lim_{x \\to 1} \\frac{(x-1)(x+1)}{x-1} = \\lim_{x \\to 1} (x+1) = 2"></div>
                `
            },
            {
                title: "2. The Derivative (Power Rule)",
                content: `
                    <h4>What is a Derivative?</h4>
                    <p>The derivative measures the instantaneous rate of change of a function at any given point. Graphically, it is the slope of the tangent line to the curve at that point.</p>
                    <p>The formal definition of a derivative is:</p>
                    <div class="math-equation-block" data-math="f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}"></div>
                    
                    <h4>The Power Rule</h4>
                    <p>Evaluating the limit manually for every function is tedious. Fortunately, we have shortcuts! The <strong>Power Rule</strong> is one of the most fundamental rules of differentiation:</p>
                    <div class="math-equation-block" data-math="\\frac{d}{dx} [x^n] = n x^{n-1}"></div>
                    <p>Let's find the derivative of $f(x) = x^3 - 4x$:</p>
                    <div class="math-equation-block" data-math="f'(x) = 3x^2 - 4"></div>
                `
            }
        ]
    }
];

const QUIZZES_DATA = {
    algebra: {
        title: "Algebra & Equations Quiz",
        questions: [
            {
                q: "Solve for $x$: $4x - 9 = 15$",
                options: ["$x = 4$", "$x = 5$", "$x = 6$", "$x = 8$"],
                answer: 2,
                explanation: "1. Add 9 to both sides: $4x = 24$\n2. Divide by 4: $x = 6$."
            },
            {
                q: "What is the discriminant of the equation $x^2 - 6x + 9 = 0$?",
                options: ["$D = 0$", "$D = 18$", "$D = -6$", "$D = 12$"],
                answer: 0,
                explanation: "Use the formula $D = b^2 - 4ac$:\n$D = (-6)^2 - 4(1)(9) = 36 - 36 = 0$."
            },
            {
                q: "Factor completely: $x^2 - 9$",
                options: ["$(x-3)^2$", "$(x-9)(x+1)$", "$(x-3)(x+3)$", "$(x+3)^2$"],
                answer: 2,
                explanation: "This is a difference of squares: $a^2 - b^2 = (a-b)(a+b)$.\n$x^2 - 3^2 = (x-3)(x+3)$."
            }
        ]
    },
    trig: {
        title: "Trigonometry & Waveforms Quiz",
        questions: [
            {
                q: "If $\\sin(\\theta) = \\frac{3}{5}$ in a right triangle, what is $\\cos(\\theta)$?",
                options: ["$\\frac{4}{5}$", "$\\frac{3}{4}$", "$\\frac{5}{4}$", "$\\frac{2}{5}$"],
                answer: 0,
                explanation: "Use the Pythagorean Identity: $\\sin^2(\\theta) + \\cos^2(\\theta) = 1$.\n$\\left(\\frac{3}{5}\\right)^2 + \\cos^2(\\theta) = 1 \\implies \\frac{9}{25} + \\cos^2(\\theta) = 1$\n$\\cos^2(\\theta) = \\frac{16}{25} \\implies \\cos(\\theta) = \\frac{4}{5}$."
            },
            {
                q: "What is the period of the wave $y = 3\\sin(2x)$?",
                options: ["$2\\pi$", "$\\pi$", "$\\frac{\\pi}{2}$", "$4\\pi$"],
                answer: 1,
                explanation: "The formula for period is $P = \\frac{2\\pi}{|B|}$. Here $B = 2$, so $P = \\frac{2\\pi}{2} = \\pi$."
            }
        ]
    },
    calculus: {
        title: "Calculus Basics Quiz",
        questions: [
            {
                q: "Evaluate: $\\lim_{x \\to 3} (x^2 - 2x + 1)$",
                options: ["$2$", "$4$", "$6$", "$0$"],
                answer: 1,
                explanation: "Directly substitute $x = 3$ into the polynomial:\n$3^2 - 2(3) + 1 = 9 - 6 + 1 = 4$."
            },
            {
                q: "Find the derivative of $f(x) = 5x^4$",
                options: ["$20x^3$", "$5x^3$", "$20x^4$", "$4x^3$"],
                answer: 0,
                explanation: "Apply the Power Rule: $\\frac{d}{dx}[x^n] = n x^{n-1}$.\n$f'(x) = 5 \\cdot 4x^{4-1} = 20x^3$."
            }
        ]
    }
};

const FORMULAS_DATABASE = [
    { name: "Quadratic Formula", formula: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}" },
    { name: "Pythagorean Theorem", formula: "a^2 + b^2 = c^2" },
    { name: "Trigonometric Identity", formula: "\\sin^2(\\theta) + \\cos^2(\\theta) = 1" },
    { name: "Derivative Definition", formula: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}" },
    { name: "Power Rule", formula: "\\frac{d}{dx}[x^n] = n x^{n-1}" },
    { name: "Quotient Rule", formula: "\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{u'v - uv'}{v^2}" },
    { name: "Euler's Identity", formula: "e^{i\\pi} + 1 = 0" }
];

// Seed Datasets for Zoom, WhatsApp, and Class Recordings
const INITIAL_ZOOM_CLASSES = [
    {
        id: "zoom-1",
        title: "2024 Theory - Pure Mathematics (Integration)",
        time: "Every Sunday | 8:00 AM - 12:00 PM",
        status: "LIVE NOW",
        meetingId: "845 2910 4432",
        passcode: "MATHS2024",
        url: "https://zoom.us/j/84529104432?pwd=MATHS2024",
        instructor: "Mr. Matheesha Abeykoon"
    },
    {
        id: "zoom-2",
        title: "2025 Theory - Trigonometry & Vectors",
        time: "Every Wednesday | 6:00 PM - 9:00 PM",
        status: "Upcoming",
        meetingId: "912 4051 8830",
        passcode: "TRIG2025",
        url: "https://zoom.us/j/91240518830?pwd=TRIG2025",
        instructor: "Mr. Matheesha Abeykoon"
    },
    {
        id: "zoom-3",
        title: "Revision & Speed Paper Class",
        time: "Every Friday | 7:00 PM - 10:00 PM",
        status: "Upcoming",
        meetingId: "732 9901 1245",
        passcode: "PAPER2026",
        url: "https://zoom.us/j/73299011245?pwd=PAPER2026",
        instructor: "Mr. Matheesha Abeykoon"
    }
];

const INITIAL_WHATSAPP_GROUPS = [
    {
        id: "wa-1",
        name: "2024 Combined Maths Theory",
        batch: "2024 A/L Batch",
        desc: "Official group for 2024 Theory. Daily class announcements, Zoom links & model paper PDF links.",
        members: "850+ Members",
        url: "https://chat.whatsapp.com/ExampleGroup2024"
    },
    {
        id: "wa-2",
        name: "2025 Combined Maths Theory",
        batch: "2025 A/L Batch",
        desc: "Main discussion and homework submission group for 2025 Theory batch.",
        members: "1,200+ Members",
        url: "https://chat.whatsapp.com/ExampleGroup2025"
    },
    {
        id: "wa-3",
        name: "2026 Revision & Paper Class",
        batch: "Revision Batch",
        desc: "High-yield paper discussions, model paper answers, and targeted revision guidance.",
        members: "640+ Members",
        url: "https://chat.whatsapp.com/ExampleGroupRevision"
    },
    {
        id: "wa-4",
        name: "AB Mathematics Main Channel",
        batch: "All Batches",
        desc: "General notification channel for all registered academy students.",
        members: "2,500+ Members",
        url: "https://chat.whatsapp.com/ExampleGroupAnnounce"
    }
];

const INITIAL_RECORDINGS = [
    {
        id: "rec-1",
        title: "Calculus - Integration by Parts & Definite Integrals",
        category: "Calculus",
        duration: "2h 45m",
        date: "Aug 02, 2026",
        desc: "Comprehensive step-by-step lecture covering reduction formulas, definite integrals, and area calculations.",
        streamUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        downloadUrl: "https://drive.google.com/uc?export=download&id=sample_integration_recording"
    },
    {
        id: "rec-2",
        title: "Trigonometry - Compound Angles & General Solutions",
        category: "Trigonometry",
        duration: "2h 15m",
        date: "Jul 28, 2026",
        desc: "Complete derivation of sine and cosine compound identities with past paper problem walkthroughs.",
        streamUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        downloadUrl: "https://drive.google.com/uc?export=download&id=sample_trig_recording"
    },
    {
        id: "rec-3",
        title: "Algebra - Polynomial Roots & Partial Fractions",
        category: "Algebra",
        duration: "1h 50m",
        date: "Jul 21, 2026",
        desc: "Decomposition into partial fractions and remainder theorem applications for advanced algebra.",
        streamUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        downloadUrl: "https://drive.google.com/uc?export=download&id=sample_algebra_recording"
    },
    {
        id: "rec-4",
        title: "Applied Maths - Relative Velocity & Vector Kinematics",
        category: "Applied Maths",
        duration: "2h 30m",
        date: "Jul 14, 2026",
        desc: "Vector resolution, relative motion diagrams, and shortest distance calculation problems.",
        streamUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        downloadUrl: "https://drive.google.com/uc?export=download&id=sample_applied_recording"
    }
];

// 2. STATE MANAGER
const State = {
    user: null,
    currentView: "dashboard",
    theme: "violet",
    mode: "dark", // default dark theme
    streak: 3,
    completedLessons: ["algebra-0"], // stores lessonId-sectionIdx
    scores: {}, // stores quizId: pctScore
    tutorials: [], // stores uploaded tutorial objects
    zoomClasses: [],
    whatsappGroups: [],
    recordings: [],
    activeCourseId: null,
    activeSectionIndex: 0,
    activeQuizId: null,
    activeQuizQuestion: 0,
    activeQuizScore: 0,
    quizSecondsElapsed: 0,
    quizTimerInterval: null,
    selectedQuizOption: null,
    activeTuteFilter: "All",
    activeTuteTypeFilter: "All",
    activeRecFilter: "All",
    recSearchQuery: "",

    // Returns true if the current user is an admin
    isAdmin() {
        if (!this.user) return false;
        const email = (this.user.email || "").toLowerCase();
        return email.startsWith("admin");
    },
    
    // Save to local storage
    save() {
        const payload = {
            user: this.user,
            theme: this.theme,
            mode: this.mode,
            streak: this.streak,
            completedLessons: this.completedLessons,
            scores: this.scores,
            zoomClasses: this.zoomClasses,
            whatsappGroups: this.whatsappGroups,
            recordings: this.recordings
        };
        localStorage.setItem("abmathematics_state", JSON.stringify(payload));
    },

    // Save tutorials separately (can be large due to base64)
    saveTutorials() {
        try {
            localStorage.setItem("abmathematics_tutorials", JSON.stringify(this.tutorials));
        } catch(e) {
            console.error("Tutorial storage failed (file may be too large):", e);
        }
    },
    
    // Load from local storage
    load() {
        const raw = localStorage.getItem("abmathematics_state");
        if (raw) {
            try {
                const parsed = JSON.parse(raw);
                this.user = parsed.user || null;
                this.theme = parsed.theme || "violet";
                this.mode = parsed.mode || "dark";
                this.streak = parsed.streak || 3;
                this.completedLessons = parsed.completedLessons || [];
                this.scores = parsed.scores || {};
                this.zoomClasses = parsed.zoomClasses || INITIAL_ZOOM_CLASSES;
                this.whatsappGroups = parsed.whatsappGroups || INITIAL_WHATSAPP_GROUPS;
                this.recordings = parsed.recordings || INITIAL_RECORDINGS;
            } catch (e) {
                console.error("Failed to parse stored state:", e);
            }
        } else {
            this.zoomClasses = INITIAL_ZOOM_CLASSES;
            this.whatsappGroups = INITIAL_WHATSAPP_GROUPS;
            this.recordings = INITIAL_RECORDINGS;
        }

        // Load tutorials
        const rawTutes = localStorage.getItem("abmathematics_tutorials");
        if (rawTutes) {
            try {
                this.tutorials = JSON.parse(rawTutes) || [];
            } catch(e) {
                this.tutorials = [];
            }
        }
        
        // Initialize mock data if storage is empty
        if (this.tutorials.length === 0) {
            const dummyDataUrl = "data:text/plain;base64,U2FtcGxlIERvY3VtZW50IENvbnRlbnQgLSBBYiBNYXRoZW1hdGljcw==";
            this.tutorials = [
                {
                    id: "mock-1",
                    title: "2025 Mid-Year Algebra Exam Paper",
                    category: "Algebra",
                    type: "Paper",
                    description: "Complete past exam paper covering linear equations, quadratic formulas, and algebra fundamentals.",
                    fileName: "2025_Algebra_MidYear_Exam.pdf",
                    fileSize: 1258291,
                    fileType: "pdf",
                    dataUrl: dummyDataUrl,
                    uploadedAt: "Jun 15, 2026"
                },
                {
                    id: "mock-2",
                    title: "Calculus Limits Reference Guide",
                    category: "Calculus",
                    type: "Tutorial",
                    description: "Step-by-step tutorial explaining limit calculation, indeterminate forms, and basic rules of calculus.",
                    fileName: "Limits_Reference_Guide.pdf",
                    fileSize: 860160,
                    fileType: "pdf",
                    dataUrl: dummyDataUrl,
                    uploadedAt: "Jun 20, 2026"
                },
                {
                    id: "mock-3",
                    title: "Trigonometric Waveforms Worksheet",
                    category: "Trigonometry",
                    type: "Tutorial",
                    description: "Practice worksheet with exercises on graphing sine/cosine functions and amplitude/period modulation.",
                    fileName: "Trig_Waveforms_Worksheet.docx",
                    fileSize: 460800,
                    fileType: "docx",
                    dataUrl: dummyDataUrl,
                    uploadedAt: "Jun 22, 2026"
                },
                {
                    id: "mock-4",
                    title: "2024 Final Statistics Exam & Solutions",
                    category: "Statistics",
                    type: "Paper",
                    description: "Official 2024 end-of-year statistics exam with complete step-by-step marking scheme and answer key.",
                    fileName: "2024_Final_Statistics_Exam.pdf",
                    fileSize: 1887436,
                    fileType: "pdf",
                    dataUrl: dummyDataUrl,
                    uploadedAt: "May 10, 2026"
                }
            ];
            this.saveTutorials();
        }
    }
};

// 3. UI RENDERING AND MATH RENDERING HELPERS
function renderMathInElement(elem) {
    if (!elem) return;
    
    // 1. Handle blocks marked with data-math
    const mathBlocks = elem.querySelectorAll('.math-equation-block');
    mathBlocks.forEach(block => {
        const equation = block.getAttribute('data-math');
        if (equation && typeof katex !== 'undefined') {
            try {
                block.innerHTML = katex.renderToString(equation, { displayMode: true, throwOnError: false });
            } catch (err) {
                block.textContent = equation;
            }
        }
    });

    // 2. Inline math parsing: replace text inside $...$ with KaTeX
    // Work on text nodes to prevent destroying HTML structures
    const walk = document.createTreeWalker(elem, NodeFilter.SHOW_TEXT, null, false);
    const nodesToReplace = [];
    
    while (walk.nextNode()) {
        const node = walk.currentNode;
        if (node.parentNode.tagName === 'CODE' || node.parentNode.tagName === 'SCRIPT' || node.parentNode.classList.contains('math-equation-block')) {
            continue;
        }
        if (node.nodeValue.includes('$')) {
            nodesToReplace.push(node);
        }
    }
    
    nodesToReplace.forEach(node => {
        const text = node.nodeValue;
        const parent = node.parentNode;
        
        // Split by '$'
        const parts = text.split('$');
        const fragment = document.createDocumentFragment();
        
        for (let i = 0; i < parts.length; i++) {
            if (i % 2 === 0) {
                // Regular text
                if (parts[i]) {
                    fragment.appendChild(document.createTextNode(parts[i]));
                }
            } else {
                // Math content
                if (parts[i] && typeof katex !== 'undefined') {
                    const span = document.createElement('span');
                    span.className = 'math-inline';
                    try {
                        span.innerHTML = katex.renderToString(parts[i], { displayMode: false, throwOnError: false });
                    } catch (err) {
                        span.textContent = parts[i];
                    }
                    fragment.appendChild(span);
                } else {
                    fragment.appendChild(document.createTextNode('$' + parts[i] + '$'));
                }
            }
        }
        parent.replaceChild(fragment, node);
    });
}

// 4. GRAPHING CANVAS ENGINE (CUSTOM GRAPHING CALCULATOR)
const Grapher = {
    canvas: null,
    ctx: null,
    scale: 30, // Pixels per unit
    offsetX: 0, // Translation offset x
    offsetY: 0, // Translation offset y
    expression: "x^2 - 4",
    hoverCoord: null,

    init(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        
        // Reset translation to center
        this.offsetX = this.canvas.width / 2;
        this.offsetY = this.canvas.height / 2;
        
        // Listeners for drawing
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.canvas.addEventListener('mouseleave', () => {
            this.hoverCoord = null;
            this.draw();
        });
        
        this.draw();
    },

    setExpression(expr) {
        this.expression = expr;
        this.draw();
    },

    zoom(factor) {
        this.scale *= factor;
        if (this.scale < 5) this.scale = 5;
        if (this.scale > 200) this.scale = 200;
        this.draw();
    },

    reset() {
        this.scale = 30;
        this.offsetX = this.canvas.width / 2;
        this.offsetY = this.canvas.height / 2;
        this.draw();
    },

    // Custom expression evaluator for canvas points
    evalExpr(expr, x) {
        try {
            let parsed = expr.toLowerCase();
            parsed = parsed.replace(/\bpi\b/g, 'Math.PI');
            parsed = parsed.replace(/\be\b/g, 'Math.E');
            
            const MathFunctions = ['sin', 'cos', 'tan', 'sqrt', 'abs', 'log', 'exp', 'pow'];
            MathFunctions.forEach(f => {
                const regex = new RegExp(`\\b${f}\\(`, 'g');
                parsed = parsed.replace(regex, `Math.${f}(`);
            });
            
            parsed = parsed.replace(/\^/g, '**');
            
            // Replace standalone variable 'x'
            parsed = parsed.replace(/(?<![a-z_])x(?![a-z_])/g, `(${x})`);
            
            // Safe evaluation via function builder
            const result = new Function(`return ${parsed}`)();
            return isNaN(result) || !isFinite(result) ? null : result;
        } catch (e) {
            return null;
        }
    },

    drawGrid() {
        const { width, height } = this.canvas;
        const ctx = this.ctx;
        
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);

        // Draw light grid lines
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1;
        
        // Vertical lines & numbers
        const xStart = Math.floor(-this.offsetX / this.scale);
        const xEnd = Math.ceil((width - this.offsetX) / this.scale);
        
        for (let i = xStart; i <= xEnd; i++) {
            const x = this.offsetX + i * this.scale;
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
            
            // Numbers on axis
            if (i !== 0) {
                ctx.fillStyle = '#94a3b8';
                ctx.font = '10px Outfit';
                ctx.fillText(i, x - 5, this.offsetY + 15);
            }
        }
        
        // Horizontal lines & numbers
        const yStart = Math.floor(-this.offsetY / this.scale);
        const yEnd = Math.ceil((height - this.offsetY) / this.scale);
        
        for (let j = yStart; j <= yEnd; j++) {
            const y = this.offsetY + j * this.scale;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
            
            // Numbers on axis
            if (j !== 0) {
                ctx.fillStyle = '#94a3b8';
                ctx.font = '10px Outfit';
                ctx.fillText(-j, this.offsetX + 8, y + 4);
            }
        }

        // Main Axes (Glow lighting style)
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 2;
        
        // X-axis
        ctx.beginPath();
        ctx.moveTo(0, this.offsetY);
        ctx.lineTo(width, this.offsetY);
        ctx.stroke();
        
        // Y-axis
        ctx.beginPath();
        ctx.moveTo(this.offsetX, 0);
        ctx.lineTo(this.offsetX, height);
        ctx.stroke();
        
        // Origin marker
        ctx.fillStyle = '#64748b';
        ctx.fillText('0', this.offsetX - 12, this.offsetY + 15);
    },

    drawFunction() {
        const { width, height } = this.canvas;
        const ctx = this.ctx;
        
        ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#7c3aed';
        ctx.lineWidth = 3;
        ctx.shadowColor = ctx.strokeStyle;
        ctx.shadowBlur = 10;
        
        ctx.beginPath();
        let drawing = false;
        
        for (let screenX = 0; screenX < width; screenX++) {
            const mathX = (screenX - this.offsetX) / this.scale;
            const mathY = this.evalExpr(this.expression, mathX);
            
            if (mathY !== null) {
                const screenY = this.offsetY - mathY * this.scale;
                if (screenY >= 0 && screenY <= height) {
                    if (!drawing) {
                        ctx.moveTo(screenX, screenY);
                        drawing = true;
                    } else {
                        ctx.lineTo(screenX, screenY);
                    }
                } else {
                    drawing = false;
                }
            } else {
                drawing = false;
            }
        }
        ctx.stroke();
        
        // Reset shadow
        ctx.shadowBlur = 0;
    },

    drawHoverPoint() {
        if (!this.hoverCoord) return;
        const ctx = this.ctx;
        
        const mathX = (this.hoverCoord.x - this.offsetX) / this.scale;
        const mathY = this.evalExpr(this.expression, mathX);
        
        if (mathY !== null) {
            const screenY = this.offsetY - mathY * this.scale;
            
            // Draw marker circle
            ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#7c3aed';
            ctx.beginPath();
            ctx.arc(this.hoverCoord.x, screenY, 6, 0, 2 * Math.PI);
            ctx.fill();
            
            // Marker border
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(this.hoverCoord.x, screenY, 6, 0, 2 * Math.PI);
            ctx.stroke();
            
            // Tooltip text
            const text = `(${mathX.toFixed(2)}, ${mathY.toFixed(2)})`;
            ctx.fillStyle = '#1e1b4b';
            ctx.font = 'bold 12px Outfit';
            ctx.fillText(text, this.hoverCoord.x + 10, screenY - 10);
        }
    },

    handleMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        this.hoverCoord = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
        this.draw();
    },

    draw() {
        if (!this.canvas || !this.ctx) return;
        this.drawGrid();
        this.drawFunction();
        this.drawHoverPoint();
    }
};

// 5. APPLICATION FLOW & VIEW CONTROLLER
const App = {
    init() {
        State.load();
        this.applyTheme(State.theme);
        this.applyMode(State.mode);
        
        this.bindAuthEvents();
        this.bindNavigation();
        this.bindDashboardEvents();
        this.bindCourseEvents();
        this.bindQuizEvents();
        this.bindToolEvents();
        this.bindSettingsEvents();
        this.bindTutorialsEvents();
        this.bindZoomEvents();
        this.bindWhatsAppEvents();
        this.bindRecordingsEvents();
        this.bindVideoModalEvents();
        
        // Show app shell if user is logged in
        if (State.user) {
            this.showAppShell();
        } else {
            this.showAuthShell();
        }
        
        lucide.createIcons();
    },
    
    // Theme accent management
    applyTheme(themeName) {
        document.body.setAttribute('data-theme', themeName);
        State.theme = themeName;
        State.save();
        
        // Update active class in settings theme boxes
        document.querySelectorAll('.theme-button').forEach(btn => {
            if (btn.getAttribute('data-theme') === themeName) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Redraw canvas if active to match colors
        if (State.currentView === "tools") {
            Grapher.draw();
        }
    },

    // Mode management (Dark vs Light theme)
    applyMode(modeName) {
        document.body.setAttribute('data-mode', modeName);
        State.mode = modeName;
        State.save();
        
        const darkBtn = document.getElementById('mode-btn-dark');
        const lightBtn = document.getElementById('mode-btn-light');
        if (darkBtn && lightBtn) {
            if (modeName === 'dark') {
                darkBtn.classList.add('active');
                lightBtn.classList.remove('active');
            } else {
                lightBtn.classList.add('active');
                darkBtn.classList.remove('active');
            }
        }
    },

    showAuthShell() {
        document.getElementById('auth-section').style.display = 'flex';
        document.getElementById('app-section').style.display = 'none';
    },

    showAppShell() {
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('app-section').style.display = 'flex';
        
        // Set user labels
        document.getElementById('sidebar-user-name').textContent = State.user.name || "Guest Student";
        
        // Set profile avatar
        const initials = (State.user.name || "GS").split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
        document.getElementById('sidebar-avatar').textContent = initials;
        
        // Sync setting page fields
        document.getElementById('settings-username').value = State.user.name;

        // Show admin badge & role label based on role
        const isAdmin = State.isAdmin();
        document.getElementById('admin-badge').style.display = isAdmin ? 'flex' : 'none';
        document.getElementById('sidebar-user-role').textContent = isAdmin ? 'Administrator' : 'Mathematics Scholar';

        // Render default dashboard view
        this.switchView("dashboard");
    },

    switchView(viewId) {
        State.currentView = viewId;
        
        // 1. Hide all views
        document.querySelectorAll('.spa-view').forEach(view => {
            view.style.display = 'none';
        });
        
        // 2. Show active view
        const targetView = document.getElementById(`view-${viewId}`);
        if (targetView) targetView.style.display = 'block';
        
        // 3. Mark active sidebar element
        document.querySelectorAll('.sidebar-menu .menu-item').forEach(item => {
            if (item.getAttribute('data-view') === viewId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // 4. Update Titles & Subtitles based on view
        const titleElem = document.getElementById('view-title');
        const subElem = document.getElementById('view-subtitle');
        
        if (viewId === "dashboard") {
            titleElem.textContent = `Welcome back, ${State.user.name}!`;
            subElem.textContent = "Explore your math modules and dashboard highlights.";
            this.renderDashboard();
        } else if (viewId === "zoom") {
            titleElem.textContent = "Zoom Online Live Classes";
            subElem.textContent = "Access official live class links, meeting IDs, and passcodes for your interactive lectures.";
            this.renderZoomClasses();
        } else if (viewId === "whatsapp") {
            titleElem.textContent = "Official WhatsApp Groups";
            subElem.textContent = "Join your official batch WhatsApp group to receive daily announcements and materials.";
            this.renderWhatsAppGroups();
        } else if (viewId === "recordings") {
            titleElem.textContent = "Class Video Recordings";
            subElem.textContent = "Watch past recorded lectures online or download video files directly for offline study.";
            this.renderRecordings();
        } else if (viewId === "lessons") {
            titleElem.textContent = "Mathematics Course Catalog";
            subElem.textContent = "Step-by-step math interactive guides across major disciplines.";
            this.renderCoursesGrid();
        } else if (viewId === "quizzes") {
            titleElem.textContent = "Assessment Portal";
            subElem.textContent = "Test your skills with interactive immediate-evaluation quizzes.";
            this.renderQuizzesGrid();
        } else if (viewId === "tutorials") {
            titleElem.textContent = "Papers & Tutes Library";
            subElem.textContent = State.isAdmin()
                ? "Upload and manage past papers and tutorials for your students."
                : "Browse and download past papers and study materials from your instructor.";
            this.renderTutorialsView();
        } else if (viewId === "tools") {
            titleElem.textContent = "Interactive Function Plotter";
            subElem.textContent = "Plot equations dynamically, explore limits, and inspect Cartesian points.";
            // Initialize grapher
            setTimeout(() => {
                Grapher.init('graphing-canvas');
            }, 50);
        } else if (viewId === "settings") {
            titleElem.textContent = "LMS Configuration";
            subElem.textContent = "Personalise your profile dashboard, light mode / dark mode theme, and lighting interface glow.";
            this.applyMode(State.mode);
        }
        
        lucide.createIcons();
    },

    // 6. AUTHENTICATION MODULE
    bindAuthEvents() {
        const form = document.getElementById('auth-form');
        const togglePassBtn = document.getElementById('toggle-password-btn');
        const passInput = document.getElementById('auth-password');
        const toggleLink = document.getElementById('auth-toggle-link');
        const submitBtn = document.getElementById('auth-submit-btn');
        
        let isSignUp = false;

        togglePassBtn.addEventListener('click', () => {
            const isPassword = passInput.type === 'password';
            passInput.type = isPassword ? 'text' : 'password';
            togglePassBtn.innerHTML = isPassword ? '<i data-lucide="eye-off"></i>' : '<i data-lucide="eye"></i>';
            lucide.createIcons();
        });

        toggleLink.addEventListener('click', (e) => {
            e.preventDefault();
            isSignUp = !isSignUp;
            
            document.getElementById('auth-title').textContent = isSignUp ? "Create Scholar Profile" : "Welcome to AB Mathematics";
            document.getElementById('auth-subtitle').textContent = isSignUp ? "Sign up to join our mathematics classes" : "Log in to continue your mathematics journey";
            submitBtn.querySelector('span').textContent = isSignUp ? "Sign Up" : "Log In";
            document.getElementById('auth-footer-text').textContent = isSignUp ? "Already have an account?" : "Don't have an account?";
            toggleLink.textContent = isSignUp ? "Log In" : "Sign Up";
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailVal = document.getElementById('auth-email').value;
            
            // Perform fake authentication
            State.user = {
                email: emailVal,
                name: emailVal.split('@')[0].split('.').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || "Student Scholar"
            };
            State.save();
            this.showAppShell();
        });
        
        // Log out handler
        document.getElementById('logout-button').addEventListener('click', () => {
            State.user = null;
            State.save();
            this.showAuthShell();
        });
    },

    // 7. NAVIGATION CONTROLLER
    bindNavigation() {
        document.querySelectorAll('.sidebar-menu .menu-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const view = item.getAttribute('data-view');
                this.switchView(view);
            });
        });
    },

    // 8. DASHBOARD MODULE
    bindDashboardEvents() {
        // Daily Challenge submission
        const dailySubmit = document.getElementById('daily-challenge-submit');
        const dailyInput = document.getElementById('daily-challenge-input');
        const dailyFeedback = document.getElementById('challenge-feedback');
        
        // Generate random algebra problem on startup
        this.generateDailyChallenge();

        dailySubmit.addEventListener('click', () => {
            const answer = parseInt(dailyInput.value);
            if (isNaN(answer)) return;
            
            const expected = this.dailyChallengeAnswer;
            
            dailyFeedback.style.display = 'block';
            if (answer === expected) {
                dailyFeedback.style.color = 'var(--success)';
                dailyFeedback.textContent = "Correct! +50 XP and Streak Saved.";
                State.streak += 1;
                State.save();
                this.renderDashboard();
            } else {
                dailyFeedback.style.color = 'var(--danger)';
                dailyFeedback.textContent = `Incorrect. Try again!`;
            }
        });

        // Quick Tools Buttons
        document.getElementById('quick-tool-graph').addEventListener('click', () => {
            this.switchView("tools");
        });
        
        document.getElementById('promo-action-btn').addEventListener('click', () => {
            this.loadCourse("calculus");
        });
        
        document.getElementById('dashboard-view-all-courses').addEventListener('click', () => {
            this.switchView("lessons");
        });

        document.getElementById('quick-tool-formulas').addEventListener('click', () => {
            this.openFormulasModal();
        });

        document.getElementById('close-formulas-btn').addEventListener('click', () => {
            document.getElementById('formulas-modal').style.display = 'none';
        });
    },

    generateDailyChallenge() {
        // Generate simple equation: ax - b = c
        const a = Math.floor(Math.random() * 5) + 2; // 2 to 6
        const x = Math.floor(Math.random() * 8) + 2; // 2 to 9
        const b = Math.floor(Math.random() * 10) + 1; // 1 to 10
        const c = a * x - b;
        
        this.dailyChallengeAnswer = x;
        document.getElementById('daily-challenge-math').textContent = `${a}x - ${b} = ${c}`;
    },

    openFormulasModal() {
        const modal = document.getElementById('formulas-modal');
        const list = document.getElementById('formula-list-katex');
        list.innerHTML = '';
        
        FORMULAS_DATABASE.forEach(f => {
            const div = document.createElement('div');
            div.className = 'glass';
            div.style.padding = '15px';
            div.innerHTML = `
                <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 5px; color: var(--text-primary);">${f.name}</div>
                <div class="math-equation-block" data-math="${f.formula}"></div>
            `;
            list.appendChild(div);
        });
        
        modal.style.display = 'flex';
        renderMathInElement(list);
    },

    renderDashboard() {
        // Update stats widgets
        document.getElementById('stat-streak').textContent = `${State.streak} Days`;
        
        const totalLessons = COURSES_DATA.reduce((sum, c) => sum + c.sections.length, 0);
        document.getElementById('stat-completed').textContent = `${State.completedLessons.length} / ${totalLessons}`;
        
        const quizScores = Object.values(State.scores);
        const avg = quizScores.length > 0 ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length) : 0;
        document.getElementById('stat-avg-score').textContent = `${avg}%`;

        // Load Course Progress cards on dashboard
        const dashboardList = document.getElementById('dashboard-course-list');
        dashboardList.innerHTML = '';
        
        COURSES_DATA.forEach(c => {
            // Calculate completion percent
            const totalSecs = c.sections.length;
            const completedInCourse = c.sections.filter((_, idx) => State.completedLessons.includes(`${c.id}-${idx}`)).length;
            const pct = Math.round((completedInCourse / totalSecs) * 100) || 0;

            const card = document.createElement('div');
            card.className = 'course-progress-card glass';
            card.innerHTML = `
                <div class="course-icon-title">
                    <div class="course-icon">${c.title.charAt(0)}</div>
                    <div class="course-title-sub">
                        <h4>${c.title}</h4>
                        <p>${c.category} • ${totalSecs} chapters</p>
                    </div>
                </div>
                <div class="course-progress-bar-wrapper">
                    <div class="progress-bar-bg">
                        <div class="progress-bar-fill" style="width: ${pct}%"></div>
                    </div>
                    <span class="progress-pct">${pct}%</span>
                </div>
            `;
            
            // Make course row clickable
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                this.loadCourse(c.id);
            });

            dashboardList.appendChild(card);
        });
    },

    // 9. COURSES MODULE
    bindCourseEvents() {
        document.getElementById('back-to-courses-btn').addEventListener('click', () => {
            document.getElementById('lessons-index-view').style.display = 'block';
            document.getElementById('lesson-content-view').style.display = 'none';
        });

        document.getElementById('prev-section-btn').addEventListener('click', () => {
            if (State.activeSectionIndex > 0) {
                this.loadSection(State.activeSectionIndex - 1);
            }
        });

        document.getElementById('next-section-btn').addEventListener('click', () => {
            const course = COURSES_DATA.find(c => c.id === State.activeCourseId);
            if (!course) return;

            // Mark current section completed
            const lessonKey = `${State.activeCourseId}-${State.activeSectionIndex}`;
            if (!State.completedLessons.includes(lessonKey)) {
                State.completedLessons.push(lessonKey);
                State.save();
            }

            if (State.activeSectionIndex < course.sections.length - 1) {
                this.loadSection(State.activeSectionIndex + 1);
            } else {
                // Course complete!
                alert("Congratulations! You completed the course material. Ready for the quiz?");
                this.switchView("quizzes");
                this.startQuiz(State.activeCourseId);
            }
        });
    },

    renderCoursesGrid() {
        const grid = document.getElementById('courses-grid');
        grid.innerHTML = '';
        
        COURSES_DATA.forEach(c => {
            const completedInCourse = c.sections.filter((_, idx) => State.completedLessons.includes(`${c.id}-${idx}`)).length;
            const pct = Math.round((completedInCourse / c.sections.length) * 100) || 0;

            const card = document.createElement('div');
            card.className = 'course-card glass';
            card.innerHTML = `
                <span class="course-tag">${c.category}</span>
                <h3>${c.title}</h3>
                <p>${c.description}</p>
                <div style="margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                    <div class="progress-bar-bg" style="height: 4px;">
                        <div class="progress-bar-fill" style="width: ${pct}%"></div>
                    </div>
                    <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">${pct}%</span>
                </div>
                <div class="course-meta">
                    <div class="course-meta-item">
                        <i data-lucide="book" style="width:16px; height:16px;"></i>
                        <span>${c.sections.length} Chapters</span>
                    </div>
                    <button class="btn btn-primary" style="padding: 8px 16px; font-size: 0.85rem;" onclick="App.loadCourse('${c.id}')">Start Learning</button>
                </div>
            `;
            grid.appendChild(card);
        });
        
        lucide.createIcons();
    },

    loadCourse(courseId) {
        State.activeCourseId = courseId;
        State.activeSectionIndex = 0;
        
        document.getElementById('lessons-index-view').style.display = 'none';
        document.getElementById('lesson-content-view').style.display = 'block';
        this.switchView("lessons");
        
        // Build Section Sidebar Menu
        const course = COURSES_DATA.find(c => c.id === courseId);
        const menu = document.getElementById('lesson-section-menu');
        menu.innerHTML = '';
        
        course.sections.forEach((sec, idx) => {
            const li = document.createElement('li');
            li.className = `lesson-nav-item ${idx === 0 ? 'active' : ''}`;
            li.textContent = sec.title.replace(/^\d+\.\s*/, '');
            li.addEventListener('click', () => this.loadSection(idx));
            menu.appendChild(li);
        });
        
        this.loadSection(0);
    },

    loadSection(index) {
        State.activeSectionIndex = index;
        const course = COURSES_DATA.find(c => c.id === State.activeCourseId);
        const section = course.sections[index];
        
        // Update menu active highlights
        const items = document.querySelectorAll('#lesson-section-menu .lesson-nav-item');
        items.forEach((item, idx) => {
            if (idx === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        
        // Render content
        document.getElementById('active-lesson-title').textContent = section.title;
        const body = document.getElementById('active-lesson-body');
        body.innerHTML = section.content;
        
        // Adjust footer buttons
        document.getElementById('prev-section-btn').style.visibility = index === 0 ? 'hidden' : 'visible';
        
        const nextBtn = document.getElementById('next-section-btn');
        if (index === course.sections.length - 1) {
            nextBtn.innerHTML = `<span>Take Module Quiz</span> <i data-lucide="award" style="width: 16px; height:16px;"></i>`;
        } else {
            nextBtn.innerHTML = `<span>Next Section</span> <i data-lucide="arrow-right" style="width: 16px; height:16px;"></i>`;
        }
        
        renderMathInElement(body);
        lucide.createIcons();
    },

    // 10. QUIZZES PORTAL MODULE
    bindQuizEvents() {
        // Back buttons
        document.getElementById('quit-quiz-btn').addEventListener('click', () => {
            clearInterval(State.quizTimerInterval);
            document.getElementById('quizzes-index-view').style.display = 'block';
            document.getElementById('quiz-runner-view').style.display = 'none';
        });

        // Verification & Evaluation checks
        document.getElementById('quiz-check-btn').addEventListener('click', () => {
            this.evaluateQuizQuestion();
        });

        document.getElementById('quiz-next-btn').addEventListener('click', () => {
            this.advanceQuizQuestion();
        });

        // Retry & Finish quiz results buttons
        document.getElementById('quiz-retry-btn').addEventListener('click', () => {
            document.getElementById('quiz-results-view').style.display = 'none';
            this.startQuiz(State.activeQuizId);
        });

        document.getElementById('quiz-finish-btn').addEventListener('click', () => {
            document.getElementById('quiz-results-view').style.display = 'none';
            document.getElementById('quizzes-index-view').style.display = 'block';
            this.renderQuizzesGrid();
        });
    },

    renderQuizzesGrid() {
        const grid = document.getElementById('quizzes-grid');
        grid.innerHTML = '';
        
        Object.entries(QUIZZES_DATA).forEach(([quizId, quiz]) => {
            const score = State.scores[quizId];
            const hasCompleted = score !== undefined;

            const card = document.createElement('div');
            card.className = 'course-card glass';
            card.innerHTML = `
                <span class="course-tag">${hasCompleted ? 'Completed' : 'Practice'}</span>
                <h3>${quiz.title}</h3>
                <p>Test your mastery on this chapter with a ${quiz.questions.length}-question assessment.</p>
                <div class="course-meta" style="margin-top: auto;">
                    <div class="course-meta-item">
                        <i data-lucide="award" style="width:16px; height:16px;"></i>
                        <span>Score: ${hasCompleted ? score + '%' : 'Not Taken'}</span>
                    </div>
                    <button class="btn btn-primary" style="padding: 8px 16px; font-size: 0.85rem;" onclick="App.startQuiz('${quizId}')">
                        ${hasCompleted ? 'Retake Quiz' : 'Start Assessment'}
                    </button>
                </div>
            `;
            grid.appendChild(card);
        });
        
        lucide.createIcons();
    },

    startQuiz(quizId) {
        State.activeQuizId = quizId;
        State.activeQuizQuestion = 0;
        State.activeQuizScore = 0;
        State.quizSecondsElapsed = 0;
        State.selectedQuizOption = null;
        
        document.getElementById('quizzes-index-view').style.display = 'none';
        document.getElementById('quiz-runner-view').style.display = 'block';
        
        // Timer
        document.getElementById('quiz-time-display').textContent = '00:00';
        clearInterval(State.quizTimerInterval);
        State.quizTimerInterval = setInterval(() => {
            State.quizSecondsElapsed++;
            const mins = Math.floor(State.quizSecondsElapsed / 60).toString().padStart(2, '0');
            const secs = (State.quizSecondsElapsed % 60).toString().padStart(2, '0');
            document.getElementById('quiz-time-display').textContent = `${mins}:${secs}`;
        }, 1000);

        this.renderQuizQuestion();
    },

    renderQuizQuestion() {
        const quiz = QUIZZES_DATA[State.activeQuizId];
        const question = quiz.questions[State.activeQuizQuestion];
        
        // Update headers
        document.getElementById('quiz-question-counter').textContent = `Question ${State.activeQuizQuestion + 1} of ${quiz.questions.length}`;
        document.getElementById('quiz-bar-fill').style.width = `${((State.activeQuizQuestion) / quiz.questions.length) * 100}%`;
        
        // Question text
        const textContainer = document.getElementById('quiz-question-text');
        textContainer.innerHTML = question.q;
        renderMathInElement(textContainer);

        // Render options list
        const optionsBox = document.getElementById('quiz-options-container');
        optionsBox.innerHTML = '';
        
        question.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option';
            btn.innerHTML = opt;
            btn.addEventListener('click', () => this.selectQuizOption(idx));
            optionsBox.appendChild(btn);
        });
        renderMathInElement(optionsBox);

        // Hide description explanations
        document.getElementById('quiz-explanation-box').style.display = 'none';
        
        // Setup footers
        State.selectedQuizOption = null;
        const checkBtn = document.getElementById('quiz-check-btn');
        checkBtn.style.display = 'inline-flex';
        checkBtn.disabled = true;
        
        document.getElementById('quiz-next-btn').style.display = 'none';
    },

    selectQuizOption(index) {
        State.selectedQuizOption = index;
        
        const options = document.querySelectorAll('#quiz-options-container .quiz-option');
        options.forEach((opt, idx) => {
            if (idx === index) {
                opt.classList.add('selected');
            } else {
                opt.classList.remove('selected');
            }
        });
        
        document.getElementById('quiz-check-btn').disabled = false;
    },

    evaluateQuizQuestion() {
        const quiz = QUIZZES_DATA[State.activeQuizId];
        const question = quiz.questions[State.activeQuizQuestion];
        const selected = State.selectedQuizOption;
        const correctIdx = question.answer;

        const options = document.querySelectorAll('#quiz-options-container .quiz-option');
        
        options.forEach((opt, idx) => {
            opt.disabled = true; // prevent clicks
            if (idx === correctIdx) {
                opt.classList.add('correct');
            } else if (idx === selected) {
                opt.classList.add('wrong');
            }
        });

        // Add score if correct
        if (selected === correctIdx) {
            State.activeQuizScore++;
        }

        // Show Explanation math
        const expBox = document.getElementById('quiz-explanation-box');
        const expText = document.getElementById('quiz-explanation-text');
        expText.innerHTML = question.explanation.replace(/\n/g, '<br>');
        expBox.style.display = 'block';
        renderMathInElement(expBox);

        // Update actions buttons
        document.getElementById('quiz-check-btn').style.display = 'none';
        
        const nextBtn = document.getElementById('quiz-next-btn');
        nextBtn.style.display = 'inline-flex';
        if (State.activeQuizQuestion === quiz.questions.length - 1) {
            nextBtn.querySelector('span').textContent = 'Finish Quiz';
        } else {
            nextBtn.querySelector('span').textContent = 'Next Question';
        }
    },

    advanceQuizQuestion() {
        const quiz = QUIZZES_DATA[State.activeQuizId];
        if (State.activeQuizQuestion < quiz.questions.length - 1) {
            State.activeQuizQuestion++;
            this.renderQuizQuestion();
        } else {
            // End quiz, store results
            clearInterval(State.quizTimerInterval);
            
            const pct = Math.round((State.activeQuizScore / quiz.questions.length) * 100);
            State.scores[State.activeQuizId] = pct;
            State.save();
            
            document.getElementById('quiz-runner-view').style.display = 'none';
            const resultsView = document.getElementById('quiz-results-view');
            resultsView.style.display = 'block';
            
            // Populate score dashboard
            document.getElementById('quiz-final-score').textContent = `${pct}%`;
            document.getElementById('quiz-score-fraction').textContent = `You answered ${State.activeQuizScore} out of ${quiz.questions.length} questions correctly.`;
            
            const msg = document.getElementById('quiz-results-message');
            if (pct === 100) {
                msg.textContent = "Perfect score! Outstanding work!";
            } else if (pct >= 70) {
                msg.textContent = "Great job! You have passing familiarity with the material.";
            } else {
                msg.textContent = "Keep practicing! Review chapters to improve your score.";
            }
        }
    },

    // 11. GRAPHING CALCULATOR MODULE
    bindToolEvents() {
        const equationField = document.getElementById('graph-equation');
        const zoomIn = document.getElementById('graph-zoom-in');
        const zoomOut = document.getElementById('graph-zoom-out');
        const reset = document.getElementById('graph-reset');

        equationField.addEventListener('input', (e) => {
            Grapher.setExpression(e.target.value);
        });

        // Preset equation triggers
        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const expr = btn.getAttribute('data-expr');
                equationField.value = expr;
                Grapher.setExpression(expr);
            });
        });

        zoomIn.addEventListener('click', () => Grapher.zoom(1.2));
        zoomOut.addEventListener('click', () => Grapher.zoom(0.8));
        reset.addEventListener('click', () => Grapher.reset());
    },

    // 12. SETTINGS MODULE
    bindSettingsEvents() {
        // Theme button click selector (Accent colors)
        document.querySelectorAll('.theme-button').forEach(btn => {
            btn.addEventListener('click', () => {
                const selectedTheme = btn.getAttribute('data-theme');
                this.applyTheme(selectedTheme);
            });
        });

        // Mode selector (Dark vs Light theme)
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const selectedMode = btn.getAttribute('data-mode-select');
                this.applyMode(selectedMode);
            });
        });

        // Save username changes
        document.getElementById('settings-save-btn').addEventListener('click', () => {
            const newName = document.getElementById('settings-username').value.trim();
            if (newName) {
                State.user.name = newName;
                State.save();
                this.showAppShell();
                alert("Settings saved successfully!");
            }
        });
    },

    // 13. TUTORIALS MODULE
    bindTutorialsEvents() {
        const fileInput  = document.getElementById('tute-file-input');
        const dropZone   = document.getElementById('tute-drop-zone');
        const browseTrig = document.getElementById('tute-browse-trigger');
        const form       = document.getElementById('tute-upload-form');

        // Browse trigger clicks the hidden input
        browseTrig.addEventListener('click', () => fileInput.click());
        dropZone.addEventListener('click', (e) => {
            if (e.target !== browseTrig) fileInput.click();
        });

        // File selected via picker
        fileInput.addEventListener('change', () => {
            this._handleTuteFileSelect(fileInput.files[0]);
        });

        // Drag & drop
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.classList.add('drag-over');
        });
        dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('drag-over');
            const file = e.dataTransfer.files[0];
            if (file) {
                fileInput._droppedFile = file;
                this._handleTuteFileSelect(file);
            }
        });

        // Upload form submit
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._uploadTutorial();
        });

        // Category filter buttons
        document.querySelectorAll('.tute-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tute-filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                State.activeTuteFilter = btn.getAttribute('data-filter');
                this._renderTuteGrid();
            });
        });

        // Type filter buttons
        document.querySelectorAll('.tute-type-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tute-type-filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                State.activeTuteTypeFilter = btn.getAttribute('data-type-filter');
                this._renderTuteGrid();
            });
        });
    },

    // Helper: show selected file name in drop zone
    _handleTuteFileSelect(file) {
        if (!file) return;
        const maxSize = 5 * 1024 * 1024; // 5 MB
        if (file.size > maxSize) {
            this._tuteFeedback('File exceeds 5 MB limit. Please choose a smaller file.', false);
            return;
        }
        document.getElementById('tute-file-name').textContent = `${file.name} (${this._formatBytes(file.size)})`;
        // Store reference
        this._pendingTuteFile = file;
    },

    // Admin: read file as DataURL then persist to State.tutorials
    _uploadTutorial() {
        const type    = document.getElementById('tute-type').value;
        const title   = document.getElementById('tute-title').value.trim();
        const category= document.getElementById('tute-category').value;
        const desc    = document.getElementById('tute-description').value.trim();
        const file    = this._pendingTuteFile;
        const feedback= document.getElementById('tute-upload-feedback');

        if (!title) { this._tuteFeedback('Please enter a title.', false); return; }
        if (!file)  { this._tuteFeedback('Please select a file to upload.', false); return; }

        // Disable submit while reading
        const btn = document.getElementById('tute-upload-btn');
        btn.disabled = true;
        btn.querySelector('span').textContent = 'Uploading…';

        const reader = new FileReader();
        reader.onload = (e) => {
            const tutorial = {
                id: Date.now().toString(),
                title,
                category,
                type,
                description: desc || 'No description provided.',
                fileName: file.name,
                fileSize: file.size,
                fileType: file.name.split('.').pop().toLowerCase(),
                dataUrl: e.target.result,
                uploadedAt: new Date().toLocaleDateString('en-US', { year:'numeric', month:'short', day:'numeric' })
            };

            State.tutorials.unshift(tutorial); // newest first
            State.saveTutorials();

            // Reset form
            document.getElementById('tute-upload-form').reset();
            document.getElementById('tute-file-name').textContent = 'No file selected';
            this._pendingTuteFile = null;
            btn.disabled = false;
            btn.querySelector('span').textContent = 'Upload Tutorial';

            this._tuteFeedback(`✅ "${title}" uploaded successfully!`, true);
            this._renderTuteGrid();
            lucide.createIcons();
        };
        reader.onerror = () => {
            btn.disabled = false;
            btn.querySelector('span').textContent = 'Upload Tutorial';
            this._tuteFeedback('Failed to read file. Please try again.', false);
        };
        reader.readAsDataURL(file);
    },

    // Show/hide the upload panel and render the tutorial grid
    renderTutorialsView() {
        const adminPanel = document.getElementById('admin-upload-panel');
        adminPanel.style.display = State.isAdmin() ? 'block' : 'none';

        // Reset category filter
        State.activeTuteFilter = 'All';
        document.querySelectorAll('.tute-filter-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-filter') === 'All');
        });

        // Reset type filter
        State.activeTuteTypeFilter = 'All';
        document.querySelectorAll('.tute-type-filter-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-type-filter') === 'All');
        });

        this._renderTuteGrid();
        lucide.createIcons();
    },

    _renderTuteGrid() {
        const grid = document.getElementById('tutorials-grid');
        const empty= document.getElementById('tute-empty-state');
        const catFilter = State.activeTuteFilter;
        const typeFilter = State.activeTuteTypeFilter;

        const filtered = State.tutorials.filter(t => {
            const matchesCategory = (catFilter === 'All' || t.category === catFilter);
            const itemType = t.type || 'Tutorial';
            const matchesType = (typeFilter === 'All' || itemType === typeFilter);
            return matchesCategory && matchesType;
        });

        grid.innerHTML = '';

        if (filtered.length === 0) {
            empty.style.display = 'flex';
            lucide.createIcons();
            return;
        }

        empty.style.display = 'none';
        const isAdmin = State.isAdmin();

        filtered.forEach(t => {
            const iconClass = this._tuteIconClass(t.fileType);
            const iconLabel = t.fileType.toUpperCase();
            const sizeStr   = this._formatBytes(t.fileSize);
            const itemType  = t.type || 'Tutorial';
            const typeBadgeClass = itemType === 'Paper' ? 'badge-paper' : 'badge-tutorial';

            const card = document.createElement('div');
            card.className = 'tute-card glass';
            card.innerHTML = `
                <div class="tute-card-top">
                    <div class="tute-file-icon ${iconClass}">${iconLabel}</div>
                    <div class="tute-card-info">
                        <div style="display: flex; gap: 4px; flex-wrap: wrap;">
                            <span class="tute-card-type ${typeBadgeClass}">${itemType}</span>
                            <span class="tute-card-category">${t.category}</span>
                        </div>
                        <div class="tute-card-title" title="${t.title}">${t.title}</div>
                        <div class="tute-card-filename" title="${t.fileName}">${t.fileName}</div>
                    </div>
                </div>
                <div class="tute-card-body">
                    <p class="tute-card-desc">${t.description}</p>
                </div>
                <div class="tute-card-footer">
                    <div class="tute-card-meta">
                        <span class="tute-card-date">📅 ${t.uploadedAt}</span>
                        <span class="tute-card-size">💾 ${sizeStr}</span>
                    </div>
                    <div style="display:flex;gap:8px;">
                        ${isAdmin ? `<button class="tute-delete-btn" data-id="${t.id}"><i data-lucide="trash-2"></i> Delete</button>` : ''}
                        <button class="tute-download-btn" data-id="${t.id}">
                            <i data-lucide="download"></i> Download
                        </button>
                    </div>
                </div>
            `;

            // Download handler
            card.querySelector('.tute-download-btn').addEventListener('click', () => {
                this._downloadTutorial(t);
            });

            // Delete handler (admin only)
            if (isAdmin) {
                card.querySelector('.tute-delete-btn').addEventListener('click', () => {
                    if (confirm(`Delete "${t.title}"? This cannot be undone.`)) {
                        State.tutorials = State.tutorials.filter(x => x.id !== t.id);
                        State.saveTutorials();
                        this._renderTuteGrid();
                        lucide.createIcons();
                    }
                });
            }

            grid.appendChild(card);
        });

        lucide.createIcons();
    },

    // Trigger a browser download from the stored dataURL
    _downloadTutorial(tutorial) {
        const a = document.createElement('a');
        a.href = tutorial.dataUrl;
        a.download = tutorial.fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    },

    // Determine CSS class for file icon based on extension
    _tuteIconClass(ext) {
        if (ext === 'pdf') return 'pdf';
        if (['doc','docx'].includes(ext)) return 'doc';
        if (ext === 'txt') return 'txt';
        if (['ppt','pptx'].includes(ext)) return 'ppt';
        return 'other';
    },

    // Format bytes to human readable
    _formatBytes(bytes) {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    },

    // Show upload feedback message
    _tuteFeedback(msg, success) {
        const el = document.getElementById('tute-upload-feedback');
        el.textContent = msg;
        el.style.color = success ? 'var(--success)' : 'var(--danger)';
        el.style.display = 'block';
        setTimeout(() => { el.style.display = 'none'; }, 4000);
    },

    // 14. ZOOM LIVE CLASSES MODULE
    bindZoomEvents() {
        const form = document.getElementById('zoom-create-form');
        if (!form) return;
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('zoom-input-title').value.trim();
            const time = document.getElementById('zoom-input-time').value.trim();
            const status = document.getElementById('zoom-input-status').value;
            const meetingId = document.getElementById('zoom-input-mid').value.trim();
            const passcode = document.getElementById('zoom-input-pass').value.trim();
            const url = document.getElementById('zoom-input-url').value.trim();

            if (!title || !url) return;

            const newZoom = {
                id: 'zoom-' + Date.now(),
                title,
                time,
                status,
                meetingId,
                passcode,
                url,
                instructor: State.user ? State.user.name : "Instructor"
            };

            State.zoomClasses.unshift(newZoom);
            State.save();
            form.reset();
            this.renderZoomClasses();
            alert(`✅ Live Zoom link "${title}" published!`);
        });
    },

    renderZoomClasses() {
        const grid = document.getElementById('zoom-classes-grid');
        const adminPanel = document.getElementById('admin-zoom-panel');
        if (!grid) return;

        if (adminPanel) {
            adminPanel.style.display = State.isAdmin() ? 'block' : 'none';
        }

        grid.innerHTML = '';
        const isAdmin = State.isAdmin();

        State.zoomClasses.forEach(z => {
            const isLive = z.status === 'LIVE NOW';
            const statusBadge = isLive 
                ? `<span class="zoom-badge-status status-live"><span class="pulse-ring"></span> LIVE NOW</span>`
                : `<span class="zoom-badge-status status-upcoming">🕒 ${z.time.split('|')[0] || 'Upcoming'}</span>`;

            const card = document.createElement('div');
            card.className = 'zoom-card glass';
            card.innerHTML = `
                <div>
                    <div class="zoom-card-header">
                        <div class="zoom-brand-badge">
                            <i data-lucide="video"></i> Zoom Live
                        </div>
                        ${statusBadge}
                    </div>
                    <h3 style="font-size: 1.2rem; font-weight: 800; margin-bottom: 6px; color: var(--text-primary);">${z.title}</h3>
                    <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 12px;">📅 ${z.time} | 👨‍🏫 ${z.instructor}</p>
                    
                    <div class="zoom-credentials-box">
                        <div class="zoom-cred-item">
                            <span class="zoom-cred-label">Meeting ID</span>
                            <span class="zoom-cred-val">${z.meetingId}</span>
                        </div>
                        <button class="btn btn-secondary copy-btn" data-copy="${z.meetingId}" style="padding: 4px 8px; font-size: 0.78rem;">
                            <i data-lucide="copy"></i> Copy ID
                        </button>
                    </div>

                    <div class="zoom-credentials-box">
                        <div class="zoom-cred-item">
                            <span class="zoom-cred-label">Passcode</span>
                            <span class="zoom-cred-val">${z.passcode}</span>
                        </div>
                        <button class="btn btn-secondary copy-btn" data-copy="${z.passcode}" style="padding: 4px 8px; font-size: 0.78rem;">
                            <i data-lucide="copy"></i> Copy Pass
                        </button>
                    </div>
                </div>

                <div style="margin-top: 15px; display: flex; flex-direction: column; gap: 8px;">
                    <a href="${z.url}" target="_blank" class="btn btn-zoom" style="text-decoration: none;">
                        <i data-lucide="external-link"></i> Join Live Zoom Class
                    </a>
                    ${isAdmin ? `<button class="btn btn-secondary delete-zoom-btn" data-id="${z.id}" style="color: var(--danger);"><i data-lucide="trash-2"></i> Delete Link</button>` : ''}
                </div>
            `;

            // Copy handlers
            card.querySelectorAll('.copy-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const text = btn.getAttribute('data-copy');
                    navigator.clipboard.writeText(text).then(() => {
                        const originalHTML = btn.innerHTML;
                        btn.innerHTML = `<i data-lucide="check"></i> Copied!`;
                        btn.style.borderColor = 'var(--success)';
                        setTimeout(() => {
                            btn.innerHTML = originalHTML;
                            btn.style.borderColor = '';
                            lucide.createIcons();
                        }, 2000);
                        lucide.createIcons();
                    });
                });
            });

            // Delete handler for admin
            if (isAdmin) {
                card.querySelector('.delete-zoom-btn').addEventListener('click', () => {
                    if (confirm(`Delete Zoom class "${z.title}"?`)) {
                        State.zoomClasses = State.zoomClasses.filter(x => x.id !== z.id);
                        State.save();
                        this.renderZoomClasses();
                    }
                });
            }

            grid.appendChild(card);
        });

        lucide.createIcons();
    },

    // 15. WHATSAPP GROUPS MODULE
    bindWhatsAppEvents() {
        const form = document.getElementById('whatsapp-create-form');
        if (!form) return;
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('wa-input-name').value.trim();
            const batch = document.getElementById('wa-input-batch').value.trim();
            const desc = document.getElementById('wa-input-desc').value.trim();
            const url = document.getElementById('wa-input-url').value.trim();

            if (!name || !url) return;

            const newWA = {
                id: 'wa-' + Date.now(),
                name,
                batch,
                desc,
                members: 'Active Group',
                url
            };

            State.whatsappGroups.unshift(newWA);
            State.save();
            form.reset();
            this.renderWhatsAppGroups();
            alert(`✅ WhatsApp Group "${name}" published!`);
        });
    },

    renderWhatsAppGroups() {
        const grid = document.getElementById('whatsapp-groups-grid');
        const adminPanel = document.getElementById('admin-whatsapp-panel');
        if (!grid) return;

        if (adminPanel) {
            adminPanel.style.display = State.isAdmin() ? 'block' : 'none';
        }

        grid.innerHTML = '';
        const isAdmin = State.isAdmin();

        State.whatsappGroups.forEach(w => {
            const card = document.createElement('div');
            card.className = 'whatsapp-card glass';
            card.innerHTML = `
                <div>
                    <div class="whatsapp-icon-bg">
                        <i data-lucide="message-circle" style="width: 28px; height: 28px;"></i>
                    </div>
                    <span class="whatsapp-badge">🏷️ ${w.batch}</span>
                    <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 8px; color: var(--text-primary);">${w.name}</h3>
                    <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 15px; line-height: 1.4;">${w.desc}</p>
                    <p style="font-size: 0.8rem; font-weight: 700; color: var(--whatsapp-green); margin-bottom: 20px;">👥 ${w.members}</p>
                </div>

                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <a href="${w.url}" target="_blank" class="btn btn-whatsapp" style="text-decoration: none;">
                        <i data-lucide="message-square"></i> Join WhatsApp Group
                    </a>
                    ${isAdmin ? `<button class="btn btn-secondary delete-wa-btn" data-id="${w.id}" style="color: var(--danger);"><i data-lucide="trash-2"></i> Delete Group</button>` : ''}
                </div>
            `;

            if (isAdmin) {
                card.querySelector('.delete-wa-btn').addEventListener('click', () => {
                    if (confirm(`Delete WhatsApp group "${w.name}"?`)) {
                        State.whatsappGroups = State.whatsappGroups.filter(x => x.id !== w.id);
                        State.save();
                        this.renderWhatsAppGroups();
                    }
                });
            }

            grid.appendChild(card);
        });

        lucide.createIcons();
    },

    // 16. CLASS RECORDINGS MODULE
    bindRecordingsEvents() {
        const searchInput = document.getElementById('recordings-search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                State.recSearchQuery = e.target.value.toLowerCase().trim();
                this.renderRecordings();
            });
        }

        document.querySelectorAll('.tute-filter-btn[data-rec-filter]').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tute-filter-btn[data-rec-filter]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                State.activeRecFilter = btn.getAttribute('data-rec-filter');
                this.renderRecordings();
            });
        });

        const form = document.getElementById('recording-create-form');
        if (!form) return;
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('rec-input-title').value.trim();
            const category = document.getElementById('rec-input-category').value;
            const duration = document.getElementById('rec-input-duration').value.trim();
            const date = document.getElementById('rec-input-date').value.trim();
            const downloadUrl = document.getElementById('rec-input-download').value.trim();
            const streamUrl = document.getElementById('rec-input-stream').value.trim();

            if (!title || !downloadUrl) return;

            const newRec = {
                id: 'rec-' + Date.now(),
                title,
                category,
                duration,
                date,
                desc: `Recorded lecture on ${title} (${category}).`,
                streamUrl: streamUrl || downloadUrl,
                downloadUrl
            };

            State.recordings.unshift(newRec);
            State.save();
            form.reset();
            this.renderRecordings();
            alert(`✅ Recording link "${title}" published!`);
        });
    },

    renderRecordings() {
        const grid = document.getElementById('recordings-grid');
        const adminPanel = document.getElementById('admin-recording-panel');
        if (!grid) return;

        if (adminPanel) {
            adminPanel.style.display = State.isAdmin() ? 'block' : 'none';
        }

        grid.innerHTML = '';
        const isAdmin = State.isAdmin();

        const filtered = State.recordings.filter(r => {
            const matchesCat = State.activeRecFilter === 'All' || r.category === State.activeRecFilter;
            const matchesSearch = !State.recSearchQuery || 
                r.title.toLowerCase().includes(State.recSearchQuery) || 
                r.category.toLowerCase().includes(State.recSearchQuery) || 
                r.desc.toLowerCase().includes(State.recSearchQuery);
            return matchesCat && matchesSearch;
        });

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px;" class="glass">
                    <i data-lucide="film" style="width: 48px; height: 48px; color: var(--text-muted); margin-bottom: 12px;"></i>
                    <h4>No Recordings Found</h4>
                    <p style="color: var(--text-muted); font-size: 0.9rem;">No video recordings match your filter criteria.</p>
                </div>
            `;
            lucide.createIcons();
            return;
        }

        filtered.forEach(r => {
            const card = document.createElement('div');
            card.className = 'recording-card glass';
            card.innerHTML = `
                <div class="recording-thumb">
                    <div class="play-btn-overlay" title="Watch Video Preview">
                        <i data-lucide="play" style="fill: #ffffff; width: 22px; height: 22px;"></i>
                    </div>
                    <span class="duration-badge">⏱️ ${r.duration}</span>
                </div>
                <div class="recording-body">
                    <div>
                        <div style="display: flex; gap: 6px; margin-bottom: 8px;">
                            <span class="tute-card-type badge-tutorial">${r.category}</span>
                            <span style="font-size: 0.78rem; color: var(--text-muted);">📅 ${r.date}</span>
                        </div>
                        <h4 style="font-size: 1.1rem; font-weight: 800; margin-bottom: 6px; color: var(--text-primary);">${r.title}</h4>
                        <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">${r.desc}</p>
                    </div>

                    <div>
                        <div class="recording-actions">
                            <button class="btn btn-watch" data-id="${r.id}">
                                <i data-lucide="play-circle"></i> Watch
                            </button>
                            <a href="${r.downloadUrl}" target="_blank" download class="btn btn-download" style="text-decoration: none;">
                                <i data-lucide="download"></i> Download
                            </a>
                        </div>
                        ${isAdmin ? `<button class="btn btn-secondary delete-rec-btn" data-id="${r.id}" style="width:100%; margin-top:8px; color:var(--danger);"><i data-lucide="trash-2"></i> Delete Recording</button>` : ''}
                    </div>
                </div>
            `;

            // Watch preview modal handler
            card.querySelector('.play-btn-overlay').addEventListener('click', () => {
                this.openVideoModal(r.title, r.streamUrl, r.downloadUrl);
            });
            card.querySelector('.btn-watch').addEventListener('click', () => {
                this.openVideoModal(r.title, r.streamUrl, r.downloadUrl);
            });

            if (isAdmin) {
                card.querySelector('.delete-rec-btn').addEventListener('click', () => {
                    if (confirm(`Delete recording "${r.title}"?`)) {
                        State.recordings = State.recordings.filter(x => x.id !== r.id);
                        State.save();
                        this.renderRecordings();
                    }
                });
            }

            grid.appendChild(card);
        });

        lucide.createIcons();
    },

    bindVideoModalEvents() {
        const closeBtn = document.getElementById('close-video-modal-btn');
        const modal = document.getElementById('video-preview-modal');
        if (!closeBtn || !modal) return;

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.getElementById('video-player-box').innerHTML = '';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.getElementById('video-player-box').innerHTML = '';
            }
        });
    },

    openVideoModal(title, streamUrl, downloadUrl) {
        const modal = document.getElementById('video-preview-modal');
        const titleEl = document.getElementById('video-modal-title');
        const playerBox = document.getElementById('video-player-box');
        const downloadBtn = document.getElementById('modal-download-btn');

        if (!modal || !playerBox) return;

        titleEl.textContent = title;
        downloadBtn.href = downloadUrl;

        // Render iframe (YouTube / Embed) or Video element
        if (streamUrl.includes('youtube') || streamUrl.includes('vimeo') || streamUrl.includes('embed')) {
            playerBox.innerHTML = `<iframe src="${streamUrl}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        } else {
            playerBox.innerHTML = `
                <video controls autoplay style="width:100%; height:100%;">
                    <source src="${streamUrl}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
        }

        modal.style.display = 'flex';
        lucide.createIcons();
    }
};

// Start application on DOM loaded
window.addEventListener('DOMContentLoaded', () => {
    App.init();
});
