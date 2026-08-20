import { COURSES_DATA, State } from './data/courses.js';

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
        this.bindStudentEvents();
        this.renderStudents();
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
                        <p>${c.category} â€¢ ${totalSecs} chapters</p>
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
    // STUDENT MANAGEMENT MODULE
    bindStudentEvents() {
        const form = document.getElementById('student-form');

        const addStudentBtn = document.getElementById('add-student-btn');
        const studentFormContainer = document.getElementById('student-form-container');

        if (addStudentBtn && studentFormContainer) {
            addStudentBtn.addEventListener('click', () => {
                studentFormContainer.style.display = 'block';

                console.log(
                    'FORM DISPLAY:',
                    studentFormContainer.style.display,
                    studentFormContainer
                );

                const nameInput = document.getElementById('student-name');
                if (nameInput) {
                    nameInput.focus();
                }
            });
        }

        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('student-name').value.trim();
            const grade = document.getElementById('student-grade').value.trim();
            const phone = document.getElementById('student-phone').value.trim();

            if (!name || !grade || !phone) {
                alert('Please fill in all student details.');
                return;
            }

            const editingId = form.dataset.editingId;

            if (editingId) {
                const student = State.students.find(
                    student => String(student.id) === String(editingId)
                );

                if (student) {
                    student.name = name;
                    student.grade = grade;
                    student.phone = phone;
                }

                delete form.dataset.editingId;

                alert('Student updated successfully!');
            } else {
                const student = {
                    id: Date.now(),
                    name: name,
                    grade: grade,
                    phone: phone
                };

                State.addStudent(student);

                alert('Student saved successfully!');
            }
            form.reset();

            this.renderStudents();


        });

        // Delete student
        const studentList = document.getElementById('students-list');

        if (studentList) {
            studentList.addEventListener('click', (e) => {
                const button = e.target.closest('.delete-student-btn');

                if (!button) return;

                const studentId = button.getAttribute('data-id');

                const confirmed = confirm(
                    'Are you sure you want to delete this student?'
                );

                if (!confirmed) return;

                State.students = State.students.filter(
                    student => String(student.id) !== String(studentId)
                );

                State.save();
                this.renderStudents();

                alert('Student deleted successfully!');
            });
            // Edit student
            studentList.addEventListener('click', (e) => {
                console.log('REAL EDIT HANDLER');
                const button = e.target.closest('.edit-student-btn');

                if (!button) return;

                const studentId = button.getAttribute('data-id');

                form.dataset.editingId = studentId;

                const student = State.students.find(
                    student => String(student.id) === String(studentId)
                );
                console.log('FOUND STUDENT:', student);

                if (!student) return;
                studentFormContainer.style.display = 'block';

                document.getElementById('student-name').value = student.name;
                document.getElementById('student-grade').value = student.grade;
                document.getElementById('student-phone').value = student.phone;
                console.log('FORM VALUES:', {
                    name: document.getElementById('student-name').value,
                    grade: document.getElementById('student-grade').value,
                    phone: document.getElementById('student-phone').value
                });
            });
        }
    },   // ← bindStudentEvents() close
    // Render student list
    renderStudents() {
        const list = document.getElementById('students-list');

        if (!list) return;

        if (State.students.length === 0) {
            list.innerHTML = '<p>No students added yet.</p>';
            return;
        }
        list.innerHTML = State.students.map(student => `
    <div class="student-card">
        <h3>${student.name}</h3>
        <p><strong>Grade:</strong> ${student.grade}</p>
        <p><strong>Phone:</strong> ${student.phone}</p>

        <div class="student-actions">
            <button type="button" class="edit-student-btn" data-id="${student.id}">
                Edit
            </button>

            <button type="button" class="delete-student-btn" data-id="${student.id}">
                Delete
            </button>
        </div>
    </div>
`).join('');
    },
    // 13. TUTORIALS MODULE
    bindTutorialsEvents() {
        const fileInput = document.getElementById('tute-file-input');
        const dropZone = document.getElementById('tute-drop-zone');
        const browseTrig = document.getElementById('tute-browse-trigger');
        const form = document.getElementById('tute-upload-form');

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
        const type = document.getElementById('tute-type').value;
        const title = document.getElementById('tute-title').value.trim();
        const category = document.getElementById('tute-category').value;
        const desc = document.getElementById('tute-description').value.trim();
        const file = this._pendingTuteFile;
        const feedback = document.getElementById('tute-upload-feedback');

        if (!title) { this._tuteFeedback('Please enter a title.', false); return; }
        if (!file) { this._tuteFeedback('Please select a file to upload.', false); return; }

        // Disable submit while reading
        const btn = document.getElementById('tute-upload-btn');
        btn.disabled = true;
        btn.querySelector('span').textContent = 'Uploadingâ€¦';

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
                uploadedAt: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
            };

            State.tutorials.unshift(tutorial); // newest first
            State.saveTutorials();

            // Reset form
            document.getElementById('tute-upload-form').reset();
            document.getElementById('tute-file-name').textContent = 'No file selected';
            this._pendingTuteFile = null;
            btn.disabled = false;
            btn.querySelector('span').textContent = 'Upload Tutorial';

            this._tuteFeedback(`âœ… "${title}" uploaded successfully!`, true);
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
        const empty = document.getElementById('tute-empty-state');
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
            const sizeStr = this._formatBytes(t.fileSize);
            const itemType = t.type || 'Tutorial';
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
                        <span class="tute-card-date">ðŸ“… ${t.uploadedAt}</span>
                        <span class="tute-card-size">ðŸ’¾ ${sizeStr}</span>
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
        if (['doc', 'docx'].includes(ext)) return 'doc';
        if (ext === 'txt') return 'txt';
        if (['ppt', 'pptx'].includes(ext)) return 'ppt';
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
            alert(`âœ… Live Zoom link "${title}" published!`);
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
                : `<span class="zoom-badge-status status-upcoming">ðŸ•’ ${z.time.split('|')[0] || 'Upcoming'}</span>`;

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
                    <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 12px;">ðŸ“… ${z.time} | ðŸ‘¨â€ðŸ« ${z.instructor}</p>
                    
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
            alert(`âœ… WhatsApp Group "${name}" published!`);
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
                    <span class="whatsapp-badge">ðŸ·ï¸ ${w.batch}</span>
                    <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 8px; color: var(--text-primary);">${w.name}</h3>
                    <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 15px; line-height: 1.4;">${w.desc}</p>
                    <p style="font-size: 0.8rem; font-weight: 700; color: var(--whatsapp-green); margin-bottom: 20px;">ðŸ‘¥ ${w.members}</p>
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
            alert(`âœ… Recording link "${title}" published!`);
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
                    <span class="duration-badge">â±ï¸ ${r.duration}</span>
                </div>
                <div class="recording-body">
                    <div>
                        <div style="display: flex; gap: 6px; margin-bottom: 8px;">
                            <span class="tute-card-type badge-tutorial">${r.category}</span>
                            <span style="font-size: 0.78rem; color: var(--text-muted);">ðŸ“… ${r.date}</span>
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

