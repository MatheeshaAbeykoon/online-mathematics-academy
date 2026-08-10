export const COURSES_DATA = [
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
