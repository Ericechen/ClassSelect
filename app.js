// Expanded Icon-Free Course Database with Department Metadata & Rich Inspector Details
const COURSES = [
  {
    id: 'CS301',
    department: '資訊工程學系',
    name: '演算法',
    englishName: 'Algorithms',
    category: 'REQUIRED',
    categoryName: '系定必修',
    credits: 3,
    teacher: '林哲安 教授',
    email: 'chean@cs.edu.tw',
    officeHours: '週二 14:00-16:00 (R402)',
    room: 'R301 (資訊館)',
    day: 3, // 週三
    periodStart: 3,
    periodEnd: 4,
    timeText: '週三 3-4 節',
    capacity: 60,
    enrolled: 48,
    status: 'AVAILABLE',
    statusText: '可加選 (剩 12 人)',
    prereq: '程式設計 (一)、資料結構',
    syllabus: '涵蓋分治法、動態規劃、貪婪演算法與圖形演算法，著重複雜度分析與實際問題解題。',
    grading: '期中考 30%、期末考 35%、程式作業 25%、出席 10%',
    textbook: 'Introduction to Algorithms (4th Edition) - CLRS'
  },
  {
    id: 'CS302',
    department: '資訊工程學系',
    name: '資料庫系統',
    englishName: 'Database Systems',
    category: 'ELECTIVE',
    categoryName: '專業選修',
    credits: 3,
    teacher: '陳建宏 教授',
    email: 'jhchen@cs.edu.tw',
    officeHours: '週三 10:00-12:00 (R510)',
    room: 'R204 (資訊館)',
    day: 3, // 週三 (衝堂測試用！)
    periodStart: 3,
    periodEnd: 4,
    timeText: '週三 3-4 節',
    capacity: 50,
    enrolled: 45,
    status: 'WARNING',
    statusText: '即將額滿 (剩 5 人)',
    prereq: '資料結構',
    syllabus: '關聯式資料庫架構、SQL 語法與效能調校、ERD 設計、交易處理 (ACID)，另含 NoSQL 導論。',
    grading: '期中專案 30%、期末考 35%、隨堂測驗 25%、出席 10%',
    textbook: 'Database System Concepts (7th Edition) - Silberschatz'
  },
  {
    id: 'CS303',
    department: '資訊工程學系',
    name: '作業系統',
    englishName: 'Operating Systems',
    category: 'REQUIRED',
    categoryName: '系定必修',
    credits: 3,
    teacher: '張淑芬 教授',
    email: 'sfchang@cs.edu.tw',
    officeHours: '週一 14:00-16:00 (R318)',
    room: 'R302 (資訊館)',
    day: 1, // 週一
    periodStart: 1,
    periodEnd: 2,
    timeText: '週一 1-2 節',
    capacity: 60,
    enrolled: 52,
    status: 'AVAILABLE',
    statusText: '可加選 (剩 8 人)',
    prereq: '計算機組織、資料結構',
    syllabus: '行程與執行緒同步、記憶體管理 (Virtual Memory)、檔案系統、系統呼叫實作，搭配 Linux Kernel 機制說明。',
    grading: 'Lab 實作作業 40%、期中考 25%、期末考 25%、出席 10%',
    textbook: 'Operating System Concepts (10th Edition)'
  },
  {
    id: 'CS304',
    department: '資訊工程學系',
    name: '計算機網路',
    englishName: 'Computer Networks',
    category: 'REQUIRED',
    categoryName: '系定必修',
    credits: 3,
    teacher: '李偉銘 教授',
    email: 'wmlee@cs.edu.tw',
    officeHours: '週四 10:00-12:00 (R405)',
    room: 'R301 (資訊館)',
    day: 2, // 週二
    periodStart: 5,
    periodEnd: 6,
    timeText: '週二 5-6 節',
    capacity: 60,
    enrolled: 40,
    status: 'AVAILABLE',
    statusText: '可加選 (剩 20 人)',
    prereq: '無特殊限制，建議具備 C/C++ 基礎',
    syllabus: 'OSI 七層與 TCP/IP 協定、封包路由、Socket 程式設計、網路安全基礎，搭配 Wireshark 實際分析。',
    grading: 'Socket 專案 30%、期中考 30%、期末考 30%、平時評量 10%',
    textbook: 'Computer Networking: A Top-Down Approach (8th Edition)'
  },
  {
    id: 'EE201',
    department: '電機工程學系',
    name: '數位邏輯設計',
    englishName: 'Digital Logic Design',
    category: 'ELECTIVE',
    categoryName: '專業選修',
    credits: 3,
    teacher: '吳建志 教授',
    email: 'ccwu@ee.edu.tw',
    officeHours: '週五 10:00-12:00 (E302)',
    room: 'E101 (電機館)',
    day: 4, // 週四
    periodStart: 1,
    periodEnd: 2,
    timeText: '週四 1-2 節',
    capacity: 50,
    enrolled: 30,
    status: 'AVAILABLE',
    statusText: '可加選 (剩 20 人)',
    prereq: '基礎物理、微積分',
    syllabus: '布林代數、邏輯閘優化、組合與順序邏輯電路、有限狀態機 (FSM)，以 Verilog HDL 模擬實作。',
    grading: 'Verilog 實作 35%、期中考 30%、期末考 30%、平時測驗 5%',
    textbook: 'Digital Design (6th Edition) - M. Morris Mano'
  },
  {
    id: 'GE101',
    department: '通識教育中心',
    name: '心理學導論',
    englishName: 'Introduction to Psychology',
    category: 'GENERAL',
    categoryName: '通識核心',
    credits: 3,
    teacher: '黃美玲 教授',
    email: 'mlhuang@gen.edu.tw',
    officeHours: '週四 14:00-16:00 (G201)',
    room: 'R101 (綜合大樓)',
    day: 4, // 週四
    periodStart: 3,
    periodEnd: 4,
    timeText: '週四 3-4 節',
    capacity: 40,
    enrolled: 38,
    status: 'WARNING',
    statusText: '即將額滿 (剩 2 人)',
    prereq: '無先修限制 (適合全校學生)',
    syllabus: '認知心理學、神經科學基礎、發展心理學與社會心理學，以實際案例探討人類行為與心理歷程。',
    grading: '期中測驗 30%、期末報告 40%、心得作業 20%、討論 10%',
    textbook: 'Psychology (13th Edition) - David G. Myers'
  },
  {
    id: 'GE102',
    department: '通識教育中心',
    name: '哲學思考與現代社會',
    englishName: 'Philosophical Thinking',
    category: 'GENERAL',
    categoryName: '通識核心',
    credits: 2,
    teacher: '高德華 教授',
    email: 'dhkao@gen.edu.tw',
    officeHours: '週五 14:00-16:00 (G204)',
    room: 'R102 (綜合大樓)',
    day: 5, // 週五
    periodStart: 1,
    periodEnd: 2,
    timeText: '週五 1-2 節',
    capacity: 40,
    enrolled: 40,
    status: 'FULL',
    statusText: '已額滿 (0 人)',
    prereq: '無先修限制',
    syllabus: '批判性思考與倫理學架構，討論科技倫理、AI 對社會的影響與正義論相關議題。',
    grading: '課堂討論與辯論 40%、期中心得 30%、期末論文 30%',
    textbook: 'Justice: What\'s the Right Thing to Do? - Sandel'
  },
  {
    id: 'CS305',
    department: '資訊工程學系',
    name: '人工智慧導論',
    englishName: 'Introduction to AI',
    category: 'ELECTIVE',
    categoryName: '專業選修',
    credits: 3,
    teacher: '鄭宗翰 教授',
    email: 'thcheng@cs.edu.tw',
    officeHours: '週二 10:00-12:00 (R412)',
    room: 'R305 (資訊館)',
    day: 2, // 週二
    periodStart: 3,
    periodEnd: 4,
    timeText: '週二 3-4 節',
    capacity: 50,
    enrolled: 35,
    status: 'AVAILABLE',
    statusText: '可加選 (剩 15 人)',
    prereq: '線性代數、微積分、Python',
    syllabus: '機器學習與深度學習基本原理，包括監督式學習、神經網路架構，以 Python/PyTorch 實作專題。',
    grading: 'AI 專案實作 40%、期中考 25%、期末考 25%、出席 10%',
    textbook: 'Artificial Intelligence: A Modern Approach (4th Edition)'
  },
  {
    id: 'CS306',
    department: '資訊工程學系',
    name: '網頁前端開發技術',
    englishName: 'Web Frontend Development',
    category: 'ELECTIVE',
    categoryName: '專業選修',
    credits: 3,
    teacher: '蔡明達 教授',
    email: 'mttsai@cs.edu.tw',
    officeHours: '週五 13:00-15:00 (R310)',
    room: 'R302 (資訊館)',
    day: 5, // 週五
    periodStart: 3,
    periodEnd: 4,
    timeText: '週五 3-4 節',
    capacity: 50,
    enrolled: 25,
    status: 'AVAILABLE',
    statusText: '可加選 (剩 25 人)',
    prereq: 'HTML/CSS 基礎、程式設計基礎',
    syllabus: 'HTML5/CSS3/JavaScript ES6+ 實作，UI/UX 設計原則與React/Vite 整合應用。',
    grading: '期末 Web 專案 50%、實作作業 30%、課堂參與 20%',
    textbook: 'JavaScript: The Definitive Guide (7th Edition)'
  },
  {
    id: 'CS307',
    department: '資訊工程學系',
    name: '軟體工程與實務',
    englishName: 'Software Engineering',
    category: 'ELECTIVE',
    categoryName: '專業選修',
    credits: 3,
    teacher: '劉智勝 教授',
    email: 'jsliu@cs.edu.tw',
    officeHours: '週一 10:00-12:00 (R415)',
    room: 'R305 (資訊館)',
    day: 1, // 週一
    periodStart: 3,
    periodEnd: 4,
    timeText: '週一 3-4 節',
    capacity: 50,
    enrolled: 42,
    status: 'AVAILABLE',
    statusText: '可加選 (剩 8 人)',
    prereq: '物件導向程式設計',
    syllabus: '敏捷開發 (Agile/Scrum)、Design Patterns、CI/CD 自動化測試與軟體架構品質評估。',
    grading: '敏捷團隊專案 45%、期中考 25%、期末考 25%、出席 5%',
    textbook: 'Clean Code: A Handbook of Agile Software Craftsmanship'
  },
  {
    id: 'EE202',
    department: '電機工程學系',
    name: '訊號與系統',
    englishName: 'Signals and Systems',
    category: 'REQUIRED',
    categoryName: '系定必修',
    credits: 3,
    teacher: '許家榮 教授',
    email: 'crhsu@ee.edu.tw',
    officeHours: '週三 14:00-16:00 (E410)',
    room: 'E102 (電機館)',
    day: 3, // 週三
    periodStart: 1,
    periodEnd: 2,
    timeText: '週三 1-2 節',
    capacity: 60,
    enrolled: 55,
    status: 'WARNING',
    statusText: '即將額滿 (剩 5 人)',
    prereq: '微分方程、線性代數',
    syllabus: '連續與離散時間訊號、傅立葉級數/轉換、Laplace 轉換、Z 轉換應用。',
    grading: '期中考 35%、期末考 35%、MATLAB 實驗 20%、平時測驗 10%',
    textbook: 'Signals and Systems (2nd Edition) - Oppenheim & Willsky'
  },
  {
    id: 'GE103',
    department: '通識教育中心',
    name: '科技與藝術跨界導論',
    englishName: 'Technology and Art',
    category: 'GENERAL',
    categoryName: '通識核心',
    credits: 2,
    teacher: '林雅婷 教授',
    email: 'ytlin@gen.edu.tw',
    officeHours: '週四 10:00-12:00 (G301)',
    room: 'R103 (綜合大樓)',
    day: 4, // 週四
    periodStart: 5,
    periodEnd: 6,
    timeText: '週四 5-6 節',
    capacity: 40,
    enrolled: 22,
    status: 'AVAILABLE',
    statusText: '可加選 (剩 18 人)',
    prereq: '無先修限制',
    syllabus: '生成式藝術 (Generative Art)、互動裝置、新媒體展演與演算法視覺/音樂美學。',
    grading: '期末新媒體創作 50%、展覽心得 30%、課堂參與 20%',
    textbook: 'Generative Design: Visualize, Program, and Create with Processing'
  }
];

// Default Preset Enrolled IDs for Realistic DEMO (18 Credits)
const DEFAULT_ENROLLED_IDS = ['CS301', 'CS303', 'CS304', 'GE101', 'CS305', 'CS306'];

// LocalStorage Helper for Dynamic Courses & Settings
function getStoredCourses() {
  const saved = localStorage.getItem('demo_courses');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch(e) {}
  }
  localStorage.setItem('demo_courses', JSON.stringify(COURSES));
  return COURSES;
}

function saveStoredCourses(courses) {
  localStorage.setItem('demo_courses', JSON.stringify(courses));
}

function isSelectionOpen() {
  const val = localStorage.getItem('demo_selection_open');
  return val === null ? true : val === 'true';
}

function getActiveStudent() {
  const saved = localStorage.getItem('demo_active_student');
  if (saved) {
    try { return JSON.parse(saved); } catch(e) {}
  }
  return { id: '110590012', name: '王小明', dept: '資工三A' };
}

function setActiveStudent(student) {
  localStorage.setItem('demo_active_student', JSON.stringify(student));
}

function getStudentGradeKey(deptStr = '資工三A') {
  if (deptStr.includes('一')) return 'G1';
  if (deptStr.includes('二')) return 'G2';
  if (deptStr.includes('三')) return 'G3';
  if (deptStr.includes('四')) return 'G4';
  if (deptStr.includes('碩') || deptStr.includes('博')) return 'GRAD';
  return 'G3';
}

function getStoredGradeCreditRules() {
  const saved = localStorage.getItem('demo_grade_credit_rules');
  if (saved) {
    try { return JSON.parse(saved); } catch(e) {}
  }
  const defaultRules = {
    'G1': { label: '大一', max: 25, min: 16 },
    'G2': { label: '大二', max: 25, min: 16 },
    'G3': { label: '大三', max: 25, min: 15 },
    'G4': { label: '大四 (應屆)', max: 27, min: 9 },
    'GRAD': { label: '碩博士班', max: 18, min: 3 }
  };
  localStorage.setItem('demo_grade_credit_rules', JSON.stringify(defaultRules));
  return defaultRules;
}

function getActiveStudentCreditLimits() {
  const student = getActiveStudent();
  const key = getStudentGradeKey(student.dept);
  const rules = getStoredGradeCreditRules();
  const rule = rules[key] || rules['G3'];
  return {
    max: rule.max,
    min: rule.min,
    label: rule.label || '全校',
    studentName: student.name,
    studentDept: student.dept
  };
}

function getMaxCreditsLimit() {
  return getActiveStudentCreditLimits().max;
}

function getMinCreditsLimit() {
  return getActiveStudentCreditLimits().min;
}

// Pagination State
let currentPage = 1;
let ITEMS_PER_PAGE = 9;

// LocalStorage State (Enrolled, Wishlist, Pending Overrides)
function getEnrolledCourseIds() {
  const saved = localStorage.getItem('demo_enrolled_courses');
  if (saved) {
    try { return JSON.parse(saved); } catch(e) {}
  }
  return [...DEFAULT_ENROLLED_IDS];
}

function saveEnrolledCourseIds(ids) {
  localStorage.setItem('demo_enrolled_courses', JSON.stringify(ids));
}

function getWishlistCourseIds() {
  const saved = localStorage.getItem('demo_wishlist_courses');
  if (saved) {
    try { return JSON.parse(saved); } catch(e) {}
  }
  return ['EE201']; // default 1 pre-selected course for demo
}

function saveWishlistCourseIds(ids) {
  localStorage.setItem('demo_wishlist_courses', JSON.stringify(ids));
}

function getPendingOverrides() {
  const saved = localStorage.getItem('demo_pending_overrides');
  if (saved) {
    try { return JSON.parse(saved); } catch(e) {}
  }
  return {};
}

function savePendingOverrides(overrides) {
  localStorage.setItem('demo_pending_overrides', JSON.stringify(overrides));
}

let enrolledIds = getEnrolledCourseIds();
let wishlistIds = getWishlistCourseIds();
let pendingOverrides = getPendingOverrides();

let courseToDropId = null;
let overrideCourseId = null;

// Tab Switcher Logic
window.switchTab = function(tabId) {
  document.querySelectorAll('.nav-tab-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
  document.querySelectorAll('.tab-content-view').forEach(view => {
    view.classList.toggle('active', view.id === tabId);
  });
};

document.querySelectorAll('.nav-tab-item[data-tab]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (btn.dataset.tab) {
      switchTab(btn.dataset.tab);
    }
  });
});

// FAQ Accordion Toggle Interaction
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const parent = q.parentElement;
    parent.classList.toggle('active');
  });
});

// Render Timetable Grid (5 days x 8 periods)
const timetableGrid = document.getElementById('timetableGrid');

function renderTimetableGrid() {
  timetableGrid.innerHTML = '';
  
  const timeHeaderCell = document.createElement('div');
  timeHeaderCell.className = 'grid-header';
  timeHeaderCell.textContent = '時段';
  timetableGrid.appendChild(timeHeaderCell);

  const days = ['週一', '週二', '週三', '週四', '週五'];
  days.forEach(day => {
    const headerCell = document.createElement('div');
    headerCell.className = 'grid-header';
    headerCell.textContent = day;
    timetableGrid.appendChild(headerCell);
  });

  for (let period = 1; period <= 8; period++) {
    const timeLabel = document.createElement('div');
    timeLabel.className = 'time-slot';
    timeLabel.textContent = `第 ${period} 節`;
    timetableGrid.appendChild(timeLabel);

    for (let day = 1; day <= 5; day++) {
      const cell = document.createElement('div');
      cell.className = 'grid-cell';
      cell.dataset.day = day;
      cell.dataset.period = period;
      timetableGrid.appendChild(cell);
    }
  }
}

// Update Timetable Content
function updateTimetableContent() {
  const cells = timetableGrid.querySelectorAll('.grid-cell');
  cells.forEach(cell => {
    cell.innerHTML = '';
    cell.classList.remove('conflict-flash');
  });

  const allCourses = getStoredCourses();
  const enrolledCourses = allCourses.filter(c => enrolledIds.includes(c.id));
  const pendingWishlistCount = wishlistIds.filter(id => !enrolledIds.includes(id)).length;
  const homeCountEl = document.getElementById('homeEnrolledCount');
  if (homeCountEl) {
    homeCountEl.textContent = `已排 ${enrolledCourses.length} 門課程` + (pendingWishlistCount > 0 ? ` (${pendingWishlistCount} 門預排中)` : '');
  }

  // 1. Draw Enrolled Courses (Solid)
  enrolledCourses.forEach(course => {
    for (let p = course.periodStart; p <= course.periodEnd; p++) {
      const cell = timetableGrid.querySelector(`.grid-cell[data-day="${course.day}"][data-period="${p}"]`);
      if (cell) {
        const catClass = course.category === 'REQUIRED' ? 'required' : (course.category === 'ELECTIVE' ? 'elective' : 'general');
        
        if (p === course.periodStart) {
          const block = document.createElement('div');
          block.className = `schedule-block ${catClass}`;
          block.innerHTML = `
            <div class="title">${course.name}</div>
            <div class="room">${course.teacher} | ${course.room}</div>
          `;
          cell.appendChild(block);
        } else {
          const block = document.createElement('div');
          block.className = `schedule-block ${catClass}`;
          block.style.opacity = '0.7';
          cell.appendChild(block);
        }
      }
    }
  });

  // 2. Draw Wishlist Courses (Dashed) & Highlight Conflicts
  const wishlistCourses = allCourses.filter(c => wishlistIds.includes(c.id) && !enrolledIds.includes(c.id));
  wishlistCourses.forEach(course => {
    const isConflictWithEnrolled = enrolledCourses.some(ec => ec.day === course.day && Math.max(ec.periodStart, course.periodStart) <= Math.min(ec.periodEnd, course.periodEnd));
    const isConflictWithOtherWishlist = wishlistCourses.some(wc => wc.id !== course.id && wc.day === course.day && Math.max(wc.periodStart, course.periodStart) <= Math.min(wc.periodEnd, course.periodEnd));
    const isConflict = isConflictWithEnrolled || isConflictWithOtherWishlist;

    for (let p = course.periodStart; p <= course.periodEnd; p++) {
      const cell = timetableGrid.querySelector(`.grid-cell[data-day="${course.day}"][data-period="${p}"]`);
      if (cell) {
        if (cell.children.length === 0) {
          if (p === course.periodStart) {
            const block = document.createElement('div');
            block.className = `schedule-block wishlist ${isConflict ? 'conflict' : ''}`;
            block.innerHTML = `
              <div class="title">${isConflict ? '⚠️【衝堂】' : '【預排】'}${course.name}</div>
              <div class="room">${course.timeText}</div>
            `;
            cell.appendChild(block);
          } else {
            const block = document.createElement('div');
            block.className = `schedule-block wishlist ${isConflict ? 'conflict' : ''}`;
            block.style.opacity = '0.6';
            cell.appendChild(block);
          }
        } else if (isConflictWithEnrolled) {
          cell.classList.add('conflict-flash');
        }
      }
    }
  });
}

// Update Credit Dashboards & Enrolled Table Actions
function updateCreditDashboard() {
  const allCourses = getStoredCourses();
  const enrolledCourses = allCourses.filter(c => enrolledIds.includes(c.id));
  const wishlistCourses = allCourses.filter(c => wishlistIds.includes(c.id) && !enrolledIds.includes(c.id));
  const maxCreditsLimit = getMaxCreditsLimit();
  
  // 1. Enrolled credits
  let total = 0, req = 0, ele = 0, gen = 0;
  enrolledCourses.forEach(c => {
    total += c.credits;
    if (c.category === 'REQUIRED') req += c.credits;
    if (c.category === 'ELECTIVE') ele += c.credits;
    if (c.category === 'GENERAL') gen += c.credits;
  });

  // 2. Wishlist (Pre-planned) credits
  let wishTotal = 0, wishReq = 0, wishEle = 0, wishGen = 0;
  wishlistCourses.forEach(c => {
    wishTotal += c.credits;
    if (c.category === 'REQUIRED') wishReq += c.credits;
    if (c.category === 'ELECTIVE') ele += c.credits;
    if (c.category === 'GENERAL') gen += c.credits;
  });

  // Tab 1 Big Numbers
  const reqBig = document.getElementById('creditReqBig');
  if (reqBig) reqBig.textContent = `${req} / 12`;

  const eleBig = document.getElementById('creditEleBig');
  if (eleBig) eleBig.textContent = `${ele} / 9`;

  const genBig = document.getElementById('creditGenBig');
  if (genBig) genBig.textContent = `${gen} / 4`;

  // Update Tab 2 Search Left Sidebar Credit Elements
  const searchTotalBadge = document.getElementById('searchTotalBadge');
  if (searchTotalBadge) {
    if (wishTotal > 0) {
      searchTotalBadge.innerHTML = `${total} <span style="font-size: 11px; color: #E65100; font-weight: 700;">(+${wishTotal} 預排)</span> / ${maxCreditsLimit} 學分`;
    } else {
      searchTotalBadge.textContent = `${total} / ${maxCreditsLimit} 學分`;
    }
  }

  // Dual progress bar
  const enrolledPct = Math.min(100, Math.round((total / maxCreditsLimit) * 100));
  const wishPct = Math.min(100 - enrolledPct, Math.round((wishTotal / maxCreditsLimit) * 100));

  const searchTotalProgressBar = document.getElementById('searchTotalProgressBar');
  if (searchTotalProgressBar) searchTotalProgressBar.style.width = `${enrolledPct}%`;

  const searchWishlistProgressBar = document.getElementById('searchWishlistProgressBar');
  if (searchWishlistProgressBar) {
    searchWishlistProgressBar.style.left = `${enrolledPct}%`;
    searchWishlistProgressBar.style.width = `${wishPct}%`;
  }

  const legendEnrolledText = document.getElementById('legendEnrolledText');
  if (legendEnrolledText) legendEnrolledText.textContent = `${total} 已選`;

  const legendWishlistWrapper = document.getElementById('legendWishlistWrapper');
  const legendWishlistText = document.getElementById('legendWishlistText');
  if (legendWishlistWrapper && legendWishlistText) {
    if (wishTotal > 0) {
      legendWishlistWrapper.style.display = 'flex';
      legendWishlistText.textContent = `+${wishTotal} 預排`;
    } else {
      legendWishlistWrapper.style.display = 'none';
    }
  }

  // Category card 1: 系定必修
  const sideReqVal = document.getElementById('sideReqVal');
  if (sideReqVal) {
    sideReqVal.innerHTML = wishReq > 0 
      ? `${req} <span style="font-size: 11px; color: #E65100; font-weight: 700;">(+${wishReq})</span> / 12` 
      : `${req} / 12`;
  }
  const sideReqDesc = document.getElementById('sideReqDesc');
  if (sideReqDesc) {
    const reqEnrolled = enrolledCourses.filter(c => c.category === 'REQUIRED').map(c => c.name);
    const reqWishlist = wishlistCourses.filter(c => c.category === 'REQUIRED').map(c => c.name);
    let descHtml = '';
    if (reqEnrolled.length > 0) {
      descHtml += `<div class="desc-line"><span class="mini-tag enrolled">已選</span>${reqEnrolled.join('、')}</div>`;
    }
    if (reqWishlist.length > 0) {
      descHtml += `<div class="desc-line"><span class="mini-tag wishlist">預排</span>${reqWishlist.join('、')}</div>`;
    }
    if (descHtml === '') descHtml = '尚未選取必修課程';
    sideReqDesc.innerHTML = descHtml;
  }

  // Category card 2: 專業選修
  const sideEleVal = document.getElementById('sideEleVal');
  if (sideEleVal) {
    sideEleVal.innerHTML = wishEle > 0 
      ? `${ele} <span style="font-size: 11px; color: #E65100; font-weight: 700;">(+${wishEle})</span> / 9` 
      : `${ele} / 9`;
  }
  const sideEleDesc = document.getElementById('sideEleDesc');
  if (sideEleDesc) {
    const eleEnrolled = enrolledCourses.filter(c => c.category === 'ELECTIVE').map(c => c.name);
    const eleWishlist = wishlistCourses.filter(c => c.category === 'ELECTIVE').map(c => c.name);
    let descHtml = '';
    if (eleEnrolled.length > 0) {
      descHtml += `<div class="desc-line"><span class="mini-tag enrolled">已選</span>${eleEnrolled.join('、')}</div>`;
    }
    if (eleWishlist.length > 0) {
      descHtml += `<div class="desc-line"><span class="mini-tag wishlist">預排</span>${eleWishlist.join('、')}</div>`;
    }
    if (descHtml === '') descHtml = '尚未選取選修課程';
    sideEleDesc.innerHTML = descHtml;
  }

  // Category card 3: 通識核心
  const sideGenVal = document.getElementById('sideGenVal');
  if (sideGenVal) {
    sideGenVal.innerHTML = wishGen > 0 
      ? `${gen} <span style="font-size: 11px; color: #E65100; font-weight: 700;">(+${wishGen})</span> / 4` 
      : `${gen} / 4`;
  }
  const sideGenDesc = document.getElementById('sideGenDesc');
  if (sideGenDesc) {
    const genEnrolled = enrolledCourses.filter(c => c.category === 'GENERAL').map(c => c.name);
    const genWishlist = wishlistCourses.filter(c => c.category === 'GENERAL').map(c => c.name);
    let descHtml = '';
    if (genEnrolled.length > 0) {
      descHtml += `<div class="desc-line"><span class="mini-tag enrolled">已選</span>${genEnrolled.join('、')}</div>`;
    }
    if (genWishlist.length > 0) {
      descHtml += `<div class="desc-line"><span class="mini-tag wishlist">預排</span>${genWishlist.join('、')}</div>`;
    }
    if (descHtml === '') descHtml = '尚未選取通識課程';
    sideGenDesc.innerHTML = descHtml;
  }

  // Header count text
  const sideEnrolledCount = document.getElementById('sideEnrolledCount');
  if (sideEnrolledCount) {
    sideEnrolledCount.textContent = `${enrolledCourses.length} 已選` + (wishlistCourses.length > 0 ? ` · ${wishlistCourses.length} 預排` : '');
  }

  // Sidebar Course List (Grouped)
  const sidebarCourseList = document.getElementById('sidebarCourseList');
  if (sidebarCourseList) {
    if (enrolledCourses.length === 0 && wishlistCourses.length === 0) {
      sidebarCourseList.innerHTML = `<div style="font-size: 12px; color: var(--color-body-muted); text-align: center; padding: 12px 0;">無已選或預排課程</div>`;
    } else {
      let listHtml = '';
      if (enrolledCourses.length > 0) {
        listHtml += `<div class="sidebar-group-title"><span>📌 已選課程</span> <span>${total} 學分</span></div>`;
        enrolledCourses.forEach(c => {
          listHtml += `
            <div class="sidebar-course-item">
              <div>
                <div class="c-name" title="${c.name}">${c.name}</div>
                <div class="c-meta">${c.categoryName} · ${c.credits}學分</div>
              </div>
              <button class="btn-danger" style="padding: 2px 8px; font-size: 11px;" onclick="promptDropCourse('${c.id}')">退選</button>
            </div>
          `;
        });
      }
      if (wishlistCourses.length > 0) {
        listHtml += `<div class="sidebar-group-title wishlist"><span>⭐️ 預排關注課程</span> <span>${wishTotal} 學分</span></div>`;
        wishlistCourses.forEach(c => {
          const isConflictWithEnrolled = enrolledCourses.some(ec => ec.day === c.day && Math.max(ec.periodStart, c.periodStart) <= Math.min(ec.periodEnd, c.periodEnd));
          const isConflictWithOtherWishlist = wishlistCourses.some(wc => wc.id !== c.id && wc.day === c.day && Math.max(wc.periodStart, c.periodStart) <= Math.min(wc.periodEnd, c.periodEnd));
          const isConflict = isConflictWithEnrolled || isConflictWithOtherWishlist;

          const conflictBadgeHtml = isConflict ? `<span style="font-size: 10px; color: #D32F2F; background-color: #FFEBEE; padding: 1px 4px; border-radius: 3px; margin-left: 4px; font-weight: 700;">⚠️ 衝堂</span>` : '';
          const cardStyle = isConflict 
            ? `border: 1.5px dashed #D32F2F; background-color: #FFEBEE;` 
            : `border: 1px dashed #F57F17; background-color: #FFF8E1;`;
          const titleColor = isConflict ? `#C62828` : `#E65100`;

          listHtml += `
            <div class="sidebar-course-item" style="${cardStyle}">
              <div>
                <div class="c-name" style="color: ${titleColor};" title="${c.name}">【預排】${c.name}${conflictBadgeHtml}</div>
                <div class="c-meta">${c.timeText} · ${c.credits}學分</div>
              </div>
              <div style="display: flex; gap: 4px;">
                <button class="btn-primary" style="padding: 2px 8px; font-size: 11px;" onclick="addCourse('${c.id}')">加選</button>
                <button class="btn-secondary" style="padding: 2px 6px; font-size: 11px; color: var(--color-body-muted);" onclick="toggleWishlist('${c.id}')">✕</button>
              </div>
            </div>
          `;
        });
      }
      sidebarCourseList.innerHTML = listHtml;
    }
  }

  const tableContainer = document.getElementById('enrolledTableContainer');
  if (tableContainer) {
    if (enrolledCourses.length === 0) {
      tableContainer.innerHTML = `<p style="text-align: center; color: var(--color-body-muted); padding: 30px;">目前尚未選取任何課程，您點選【一鍵匯入預設課程】可快速恢復預設資料。</p>`;
      return;
    }

    let html = `
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px;">
        <thead>
          <tr style="border-bottom: 2px solid var(--color-divider-soft); color: var(--color-body-muted);">
            <th style="padding: 10px;">開課系所</th>
            <th style="padding: 10px;">課號</th>
            <th style="padding: 10px;">課程名稱</th>
            <th style="padding: 10px;">類別</th>
            <th style="padding: 10px;">學分</th>
            <th style="padding: 10px;">授課教師</th>
            <th style="padding: 10px;">時段與地點</th>
            <th style="padding: 10px; text-align: center;">操作</th>
          </tr>
        </thead>
        <tbody>
    `;
    enrolledCourses.forEach(c => {
      html += `
        <tr style="border-bottom: 1px solid var(--color-divider-soft);">
          <td style="padding: 12px 10px; color: var(--color-body-muted);">${c.department}</td>
          <td style="padding: 12px 10px; font-weight: 600;">${c.id}</td>
          <td style="padding: 12px 10px; font-weight: 600; color: var(--color-ink);">${c.name}</td>
          <td style="padding: 12px 10px;">${c.categoryName}</td>
          <td style="padding: 12px 10px; font-weight: 600; color: var(--color-primary);">${c.credits}</td>
          <td style="padding: 12px 10px;">${c.teacher}</td>
          <td style="padding: 12px 10px; color: var(--color-body-muted);">${c.timeText} (${c.room})</td>
          <td style="padding: 12px 10px; text-align: center;">
            <div style="display: flex; gap: 6px; justify-content: center;">
              <button class="btn-secondary" style="padding: 4px 10px; font-size: 12px;" onclick="openCourseDetail('${c.id}')">細節</button>
              <button class="btn-danger" style="padding: 4px 10px; font-size: 12px;" onclick="promptDropCourse('${c.id}')">退選</button>
            </div>
          </td>
        </tr>
      `;
    });
    html += `</tbody></table>`;
    tableContainer.innerHTML = html;
  }
}

// Render Course Grid (Max 9 Courses per Page)
const courseGridContainer = document.getElementById('courseGridContainer');
const paginationContainer = document.getElementById('paginationContainer');
const searchInput = document.getElementById('searchInput');
const filterDepartment = document.getElementById('filterDepartment');
const filterCategory = document.getElementById('filterCategory');
const filterDay = document.getElementById('filterDay');
const filterStatus = document.getElementById('filterStatus');

function renderCourseGrid() {
  if (!courseGridContainer) return;

  const keyword = searchInput ? searchInput.value.trim().toLowerCase() : '';
  const deptFilter = filterDepartment ? filterDepartment.value : 'ALL';
  const categoryFilter = filterCategory ? filterCategory.value : 'ALL';
  const dayFilter = filterDay ? filterDay.value : 'ALL';
  const statusFilter = filterStatus ? filterStatus.value : 'ALL';

  const allCourses = getStoredCourses();
  const filtered = allCourses.filter(course => {
    const matchKeyword = !keyword || course.name.toLowerCase().includes(keyword) || course.englishName.toLowerCase().includes(keyword) || course.teacher.toLowerCase().includes(keyword) || course.id.toLowerCase().includes(keyword);
    const matchDept = deptFilter === 'ALL' || course.department === deptFilter;
    const matchCategory = categoryFilter === 'ALL' || course.category === categoryFilter;
    const matchDay = dayFilter === 'ALL' || course.day === parseInt(dayFilter, 10);
    const matchStatus = statusFilter === 'ALL' || course.status === statusFilter;
    return matchKeyword && matchDept && matchCategory && matchDay && matchStatus;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE) || 1;
  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageCourses = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  courseGridContainer.innerHTML = '';

  if (filtered.length === 0) {
    courseGridContainer.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: var(--color-body-muted); padding: 40px;">沒有符合篩選條件的課程。</p>`;
    if (paginationContainer) paginationContainer.innerHTML = '';
    return;
  }

  pageCourses.forEach(course => {
    const isEnrolled = enrolledIds.includes(course.id);
    const isWishlist = wishlistIds.includes(course.id);
    const isPendingOverride = !!pendingOverrides[course.id];
    const isFull = course.status === 'FULL';
    const percent = Math.round((course.enrolled / course.capacity) * 100);

    let statusPillClass = 'available';
    let statusText = course.statusText;
    if (course.status === 'WARNING') statusPillClass = 'warning';
    if (course.status === 'FULL') statusPillClass = 'full';
    
    if (isPendingOverride) {
      statusPillClass = 'pending';
      statusText = '加簽審核中';
    } else if (isWishlist && !isEnrolled) {
      statusPillClass = 'wishlist';
      statusText = '已預排關注';
    }

    let actionBtnHtml = '';
    if (isEnrolled) {
      actionBtnHtml = `<button class="btn-danger" onclick="promptDropCourse('${course.id}')">退選</button>`;
    } else if (isPendingOverride) {
      actionBtnHtml = `<button class="btn-secondary" onclick="cancelOverrideApplication('${course.id}')">取消加簽</button>`;
    } else if (isFull) {
      actionBtnHtml = `<button class="btn-primary accent" onclick="openOverrideModal('${course.id}')">申請加簽</button>`;
    } else {
      actionBtnHtml = `<button class="btn-primary" onclick="addCourse('${course.id}')">加選</button>`;
    }

    const wishlistBtnHtml = !isEnrolled ? `<button class="btn-wishlist ${isWishlist ? 'active' : ''}" onclick="toggleWishlist('${course.id}')">${isWishlist ? '★ 已預排' : '☆ 預排'}</button>` : '';

    const card = document.createElement('div');
    card.className = 'course-card-item';
    card.innerHTML = `
      <div>
        <div class="card-top">
          <span class="dept-code-tag">${course.department} · ${course.id} · ${course.categoryName} (${course.credits}學分)</span>
          <span class="status-pill ${statusPillClass}">${statusText}</span>
        </div>
        
        <div class="course-title-main">${course.name} <span style="font-size: 13.5px; font-weight: 400; color: var(--color-body-muted);">${course.englishName}</span></div>
        
        <div class="course-meta-row">
          <span>${course.teacher}</span>
          <span class="dot">·</span>
          <span>${course.room}</span>
          <span class="dot">·</span>
          <span>${course.timeText}</span>
        </div>

        <div class="course-syllabus-snippet">${course.syllabus}</div>

        <div class="course-mini-specs">
          <span>先修：${course.prereq}</span>
          <span>評分：${course.grading.split('、')[0]}等</span>
        </div>
      </div>

      <div class="card-capacity-row">
        <div class="card-capacity-stat">
          <span>已報 ${course.enrolled}/${course.capacity}</span>
          <div class="mini-cap-bar-outer">
            <div class="mini-cap-bar-inner" style="width: ${percent}%;"></div>
          </div>
        </div>
        <div class="card-actions">
          <button class="btn-secondary" onclick="openCourseDetail('${course.id}')">細節</button>
          ${wishlistBtnHtml}
          ${actionBtnHtml}
        </div>
      </div>
    `;
    courseGridContainer.appendChild(card);
  });

  renderPaginationBar(totalPages);
}

function renderPaginationBar(totalPages) {
  if (!paginationContainer || totalPages <= 1) {
    if (paginationContainer) paginationContainer.innerHTML = '';
    return;
  }

  let html = `<button class="page-btn ${currentPage === 1 ? 'disabled' : ''}" ${currentPage === 1 ? 'disabled' : ''} onclick="goToPage(${currentPage - 1})">上一頁</button>`;
  
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
  }

  html += `<button class="page-btn ${currentPage === totalPages ? 'disabled' : ''}" ${currentPage === totalPages ? 'disabled' : ''} onclick="goToPage(${currentPage + 1})">下一頁</button>`;

  paginationContainer.innerHTML = html;
}

window.goToPage = function(page) {
  currentPage = page;
  renderCourseGrid();
  courseGridContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Expanded Course Detail Inspector Modal
window.openCourseDetail = function(courseId) {
  const allCourses = getStoredCourses();
  const course = allCourses.find(c => c.id === courseId);
  if (!course) return;

  const isEnrolled = enrolledIds.includes(course.id);
  const isWishlist = wishlistIds.includes(course.id);
  const isPendingOverride = !!pendingOverrides[course.id];
  const isFull = course.status === 'FULL';

  document.getElementById('detailDeptCode').textContent = `${course.department} · ${course.id} · ${course.categoryName} (${course.credits} 學分)`;
  document.getElementById('detailTitle').textContent = `${course.name} (${course.englishName})`;
  document.getElementById('detailSubtitle').textContent = `114學年度第1學期 · ${course.credits} 學分`;

  const statusPill = document.getElementById('detailStatusPill');
  if (isPendingOverride) {
    statusPill.textContent = '加簽審核中';
    statusPill.className = 'status-pill pending';
  } else if (isWishlist && !isEnrolled) {
    statusPill.textContent = '已預排關注';
    statusPill.className = 'status-pill wishlist';
  } else {
    statusPill.textContent = course.statusText;
    statusPill.className = `status-pill ${course.status === 'WARNING' ? 'warning' : (course.status === 'FULL' ? 'full' : 'available')}`;
  }

  document.getElementById('detailTeacher').textContent = course.teacher;
  document.getElementById('detailTimeRoom').textContent = `${course.room} · ${course.timeText}`;
  document.getElementById('detailPrereq').textContent = course.prereq || '無先修要求';
  document.getElementById('detailContact').textContent = `${course.email} · ${course.officeHours}`;

  const percent = Math.round((course.enrolled / course.capacity) * 100);
  document.getElementById('detailCapBar').style.width = `${percent}%`;
  document.getElementById('detailCapText').textContent = `${course.enrolled} / ${course.capacity} 人 (${percent}%)`;

  document.getElementById('detailSyllabus').textContent = course.syllabus;
  document.getElementById('detailGrading').textContent = course.grading;
  document.getElementById('detailTextbook').textContent = course.textbook || '授課教師隨堂提供講義與講稿';

  const actionContainer = document.getElementById('detailActionBtnContainer');
  const wishlistBtnHtml = !isEnrolled ? `<button class="btn-wishlist ${isWishlist ? 'active' : ''}" onclick="toggleWishlist('${course.id}'); openCourseDetail('${course.id}');">${isWishlist ? '★ 已預排' : '☆ 加入預排'}</button>` : '';

  if (isEnrolled) {
    actionContainer.innerHTML = `<button class="btn-danger" onclick="promptDropCourse('${course.id}'); closeCourseDetail();">退選此課程</button>`;
  } else if (isPendingOverride) {
    actionContainer.innerHTML = `${wishlistBtnHtml} <button class="btn-secondary" onclick="cancelOverrideApplication('${course.id}'); closeCourseDetail();">取消加簽申請</button>`;
  } else if (isFull) {
    actionContainer.innerHTML = `${wishlistBtnHtml} <button class="btn-primary accent" onclick="openOverrideModal('${course.id}'); closeCourseDetail();">申請線上加簽</button>`;
  } else {
    actionContainer.innerHTML = `${wishlistBtnHtml} <button class="btn-primary" onclick="addCourse('${course.id}'); closeCourseDetail();">加選此課程</button>`;
  }

  document.getElementById('detailModal').classList.add('active');
};

window.closeCourseDetail = function() {
  document.getElementById('detailModal').classList.remove('active');
};

document.getElementById('closeDetailModalBtn').addEventListener('click', closeCourseDetail);

// Backdrop Click Modal Close
document.querySelectorAll('.modal-overlay').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});

// Toggle Wishlist Action (with Conflict Checking)
window.toggleWishlist = function(courseId) {
  const allCourses = getStoredCourses();
  const course = allCourses.find(c => c.id === courseId);
  if (!course) return;

  if (wishlistIds.includes(courseId)) {
    wishlistIds = wishlistIds.filter(id => id !== courseId);
  } else {
    const enrolledCourses = allCourses.filter(c => enrolledIds.includes(c.id));
    const wishlistCourses = allCourses.filter(c => wishlistIds.includes(c.id) && !enrolledIds.includes(c.id));

    // 1. 與已選課程時段衝堂檢查
    const conflictingEnrolled = enrolledCourses.find(c => {
      if (c.day === course.day) {
        return Math.max(c.periodStart, course.periodStart) <= Math.min(c.periodEnd, course.periodEnd);
      }
      return false;
    });

    if (conflictingEnrolled) {
      document.getElementById('modalMessage').innerHTML = `無法將【<strong>${course.name}</strong>】加入預排。<br>該課程時段（${course.timeText}）與已選課程【<strong>${conflictingEnrolled.name}</strong>】發生時段衝突！`;
      document.getElementById('conflictModal').classList.add('active');

      for (let p = course.periodStart; p <= course.periodEnd; p++) {
        const cell = timetableGrid.querySelector(`.grid-cell[data-day="${course.day}"][data-period="${p}"]`);
        if (cell) cell.classList.add('conflict-flash');
      }
      return;
    }

    // 2. 與其他已預排課程時段衝堂檢查
    const conflictingWishlist = wishlistCourses.find(c => {
      if (c.day === course.day) {
        return Math.max(c.periodStart, course.periodStart) <= Math.min(c.periodEnd, course.periodEnd);
      }
      return false;
    });

    if (conflictingWishlist) {
      document.getElementById('modalMessage').innerHTML = `無法將【<strong>${course.name}</strong>】加入預排。<br>該課程時段（${course.timeText}）與已預排課程【<strong>${conflictingWishlist.name}</strong>】發生時段衝突！`;
      document.getElementById('conflictModal').classList.add('active');

      for (let p = course.periodStart; p <= course.periodEnd; p++) {
        const cell = timetableGrid.querySelector(`.grid-cell[data-day="${course.day}"][data-period="${p}"]`);
        if (cell) cell.classList.add('conflict-flash');
      }
      return;
    }

    wishlistIds.push(courseId);
  }
  saveWishlistCourseIds(wishlistIds);
  updateAllViews();
};

// Add Course Action (with Selection Switch, Grade-based Max Credit & Conflict Checking)
window.addCourse = function(courseId) {
  if (!isSelectionOpen()) {
    document.getElementById('warningModalTitle').textContent = '選課系統已關閉';
    document.getElementById('warningModalMessage').innerHTML = `目前非加退選開放時間。<br><span style="color: #E65100; font-weight: 600;">系統管理員已關閉選課系統</span>，請留意教務處最新選課日程公告。`;
    document.getElementById('warningModal').classList.add('active');
    return;
  }

  const allCourses = getStoredCourses();
  const course = allCourses.find(c => c.id === courseId);
  if (!course) return;

  const limits = getActiveStudentCreditLimits();
  const enrolledCourses = allCourses.filter(c => enrolledIds.includes(c.id));

  // 1. Grade-based Max Credit limit check
  const currentCredits = enrolledCourses.reduce((sum, c) => sum + c.credits, 0);
  if (currentCredits + course.credits > limits.max) {
    document.getElementById('warningModalTitle').textContent = `無法加選 (超過${limits.label}上限)`;
    document.getElementById('warningModalMessage').innerHTML = `無法加選【<strong>${course.name}</strong>】（${course.credits} 學分）。<br>加選後總學分（${currentCredits + course.credits} 分）將超過<strong>${limits.studentDept} ${limits.studentName}</strong>（${limits.label}）單學期最高上限 <strong>${limits.max} 學分</strong>！<br>若因特殊情況需超修，請向教務處課務組提出學分超修申請。`;
    document.getElementById('warningModal').classList.add('active');
    return;
  }

  // 2. Conflict checking
  const conflicting = enrolledCourses.find(c => {
    if (c.day === course.day) {
      return Math.max(c.periodStart, course.periodStart) <= Math.min(c.periodEnd, course.periodEnd);
    }
    return false;
  });

  if (conflicting) {
    document.getElementById('modalMessage').innerHTML = `無法加選【<strong>${course.name}</strong>】。<br>該課程時段（${course.timeText}）與已選課程【<strong>${conflicting.name}</strong>】發生衝突。`;
    document.getElementById('conflictModal').classList.add('active');

    for (let p = course.periodStart; p <= course.periodEnd; p++) {
      const cell = timetableGrid.querySelector(`.grid-cell[data-day="${course.day}"][data-period="${p}"]`);
      if (cell) cell.classList.add('conflict-flash');
    }
    return;
  }

  // 3. Prerequisite Warning (Friendly Notice for Demo)
  if (course.prereq && course.prereq !== '無先修限制' && course.prereq !== '無先修限制 (適合全校學生)') {
    document.getElementById('warningModalTitle').textContent = '先修科目提醒';
    document.getElementById('warningModalMessage').innerHTML = `提示：【<strong>${course.name}</strong>】設有先修科目要求：<br><span style="color: var(--color-primary); font-weight: 600;">${course.prereq}</span><br><br>課程已成功加入您的課表，請確認您具備相關先修科目背景。`;
    document.getElementById('warningModal').classList.add('active');
  }

  // Remove from wishlist if added to enrolled
  if (wishlistIds.includes(courseId)) {
    wishlistIds = wishlistIds.filter(id => id !== courseId);
    saveWishlistCourseIds(wishlistIds);
  }

  enrolledIds.push(courseId);
  saveEnrolledCourseIds(enrolledIds);
  updateAllViews();
};

// Drop Course Confirmation Workflow
window.promptDropCourse = function(courseId) {
  if (!isSelectionOpen()) {
    document.getElementById('warningModalTitle').textContent = '選課系統已關閉';
    document.getElementById('warningModalMessage').innerHTML = `目前非加退選開放時間。<br><span style="color: #E65100; font-weight: 600;">系統管理員已關閉選課系統</span>，無法執行退選操作。`;
    document.getElementById('warningModal').classList.add('active');
    return;
  }

  const allCourses = getStoredCourses();
  const course = allCourses.find(c => c.id === courseId);
  if (!course) return;

  courseToDropId = courseId;
  const enrolledCourses = allCourses.filter(c => enrolledIds.includes(c.id));
  const totalCreditsAfterDrop = enrolledCourses.reduce((sum, c) => sum + c.credits, 0) - course.credits;
  const limits = getActiveStudentCreditLimits();

  document.getElementById('dropModalMessage').innerHTML = `您確定要退選【<strong>${course.name}</strong>】（${course.credits} 學分）嗎？`;
  
  const subMsg = document.getElementById('dropModalSubMessage');
  if (totalCreditsAfterDrop < limits.min) {
    subMsg.innerHTML = `⚠️ 提醒：退選後總學分（<strong>${totalCreditsAfterDrop}</strong> 學分）將低於<strong>${limits.studentDept} ${limits.studentName}</strong>（${limits.label}）最低門檻 <strong>${limits.min} 學分</strong>。`;
    subMsg.style.display = 'block';
  } else {
    subMsg.style.display = 'none';
  }

  document.getElementById('dropConfirmModal').classList.add('active');
};

document.getElementById('confirmDropBtn').addEventListener('click', () => {
  if (courseToDropId) {
    enrolledIds = enrolledIds.filter(id => id !== courseToDropId);
    saveEnrolledCourseIds(enrolledIds);
    courseToDropId = null;
    document.getElementById('dropConfirmModal').classList.remove('active');
    updateAllViews();
  }
});

document.getElementById('cancelDropBtn').addEventListener('click', () => {
  courseToDropId = null;
  document.getElementById('dropConfirmModal').classList.remove('active');
});

// Override Application Workflow
window.openOverrideModal = function(courseId) {
  const course = COURSES.find(c => c.id === courseId);
  if (!course) return;

  overrideCourseId = courseId;
  document.getElementById('overrideModalCourse').textContent = `申請課程：${course.name} (${course.id}) · ${course.department}`;
  document.getElementById('overrideReasonInput').value = '';
  document.getElementById('overrideModal').classList.add('active');
};

document.getElementById('cancelOverrideBtn').addEventListener('click', () => {
  overrideCourseId = null;
  document.getElementById('overrideModal').classList.remove('active');
});

document.getElementById('submitOverrideBtn').addEventListener('click', () => {
  if (!overrideCourseId) return;

  const reason = document.getElementById('overrideReasonInput').value.trim() || '應屆畢業或課程修習需求申請線上加簽';
  pendingOverrides[overrideCourseId] = {
    reason: reason,
    timestamp: new Date().toLocaleString()
  };
  savePendingOverrides(pendingOverrides);

  overrideCourseId = null;
  document.getElementById('overrideModal').classList.remove('active');
  updateAllViews();

  document.getElementById('warningModalTitle').textContent = '加簽申請已送出';
  document.getElementById('warningModalMessage').innerHTML = `您的加簽申請已成功傳送至授課教師與系所辦公室。<br>當前狀態：<span class="status-pill pending">加簽審核中</span>`;
  document.getElementById('warningModal').classList.add('active');
});

window.cancelOverrideApplication = function(courseId) {
  delete pendingOverrides[courseId];
  savePendingOverrides(pendingOverrides);
  updateAllViews();
};

function updateAllViews() {
  updateCourseStatusData();
  renderCourseGrid();
  renderTimetableGrid();
  renderSelectedSummaryList();
  renderFrontAnnouncements();
  updateCreditProgressBar();
  renderPendingOverridesSection();
}

// Event Listeners for Filters
if (searchInput) searchInput.addEventListener('input', () => { currentPage = 1; renderCourseGrid(); });
if (filterDepartment) filterDepartment.addEventListener('change', () => { currentPage = 1; renderCourseGrid(); });
if (filterCategory) filterCategory.addEventListener('change', () => { currentPage = 1; renderCourseGrid(); });
if (filterDay) filterDay.addEventListener('change', () => { currentPage = 1; renderCourseGrid(); });
if (filterStatus) filterStatus.addEventListener('change', () => { currentPage = 1; renderCourseGrid(); });

document.getElementById('closeModalBtn').addEventListener('click', () => {
  document.getElementById('conflictModal').classList.remove('active');
});

document.getElementById('closeWarningModalBtn').addEventListener('click', () => {
  document.getElementById('warningModal').classList.remove('active');
});

// Reset & Import Demo Buttons
const resetBtn = document.getElementById('resetScheduleBtn');
if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    enrolledIds = [];
    wishlistIds = [];
    pendingOverrides = {};
    saveEnrolledCourseIds(enrolledIds);
    saveWishlistCourseIds(wishlistIds);
    savePendingOverrides(pendingOverrides);
    updateAllViews();
  });
}

function importDemo() {
  enrolledIds = [...DEFAULT_ENROLLED_IDS];
  wishlistIds = ['EE201'];
  pendingOverrides = {};
  saveEnrolledCourseIds(enrolledIds);
  saveWishlistCourseIds(wishlistIds);
  savePendingOverrides(pendingOverrides);
  updateAllViews();
}

const importBtn1 = document.getElementById('importDemoBtn');
if (importBtn1) importBtn1.addEventListener('click', importDemo);

const importBtn2 = document.getElementById('homeImportDemoBtn');
if (importBtn2) importBtn2.addEventListener('click', importDemo);

// PPT Presets Controller
document.querySelectorAll('.ppt-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.ppt-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const preset = btn.dataset.preset;
    
    if (preset === '1') {
      switchTab('tab-home');
      document.getElementById('conflictModal').classList.remove('active');
    } else if (preset === '2') {
      switchTab('tab-search');
      enrolledIds = [...DEFAULT_ENROLLED_IDS];
      updateAllViews();
      window.addCourse('CS302');
    } else if (preset === '3') {
      switchTab('tab-schedule-credits');
      document.getElementById('conflictModal').classList.remove('active');
    } else if (preset === '4') {
      switchTab('tab-faq');
      document.getElementById('conflictModal').classList.remove('active');
    }
  });
});

// Student Identity & Grade Switcher Setup
const studentSwitcherSelect = document.getElementById('studentSwitcherSelect');
if (studentSwitcherSelect) {
  const currentStudent = getActiveStudent();
  const currentVal = `${currentStudent.dept} ${currentStudent.name} ${currentStudent.id}`;
  for (let opt of studentSwitcherSelect.options) {
    if (opt.value === currentVal) {
      studentSwitcherSelect.value = currentVal;
      break;
    }
  }

  studentSwitcherSelect.addEventListener('change', () => {
    const val = studentSwitcherSelect.value;
    const parts = val.split(' ');
    const newStudent = { dept: parts[0], name: parts[1], id: parts[2] };
    setActiveStudent(newStudent);
    updateAllViews();
  });
}

// Dynamic Front Announcements Renderer
function getFrontAnnouncements() {
  const saved = localStorage.getItem('demo_announcements');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {}
  }
  const defaultAnn = [
    {
      id: 'ann-1',
      date: '2026-09-10',
      category: '重要公告',
      categoryClass: 'urgent',
      title: '114學年度第一學期初選登記說明',
      body: '請於 09/15 前完成線上初選登記。加選時若與已選課程時段衝堂，系統會擋下並提示衝突的課程。'
    },
    {
      id: 'ann-2',
      date: '2026-09-08',
      category: '課程異動',
      categoryClass: '',
      title: '【資工系】資料庫系統 教室異動',
      body: '陳建宏教授「資料庫系統」（週三 3-4 節）教室改至資訊館 R204，請留意。'
    },
    {
      id: 'ann-3',
      date: '2026-09-05',
      category: '通識須知',
      categoryClass: '',
      title: '通識中心：114-1 通識核心課程選課須知',
      body: '通識核心課程最多採計 4 學分，不得以專業選修抵免。詳細規定請參考「常見問題與規則」分頁。'
    }
  ];
  localStorage.setItem('demo_announcements', JSON.stringify(defaultAnn));
  return defaultAnn;
}

function renderFrontAnnouncements() {
  const container = document.querySelector('.announcement-list');
  if (!container) return;

  const annList = getFrontAnnouncements();
  if (annList.length === 0) {
    container.innerHTML = `<div class="news-card"><div class="news-body">目前無系統公告</div></div>`;
    return;
  }

  let html = '';
  annList.forEach(ann => {
    const isUrgent = ann.category === '重要公告' || ann.categoryClass === 'urgent';
    const tagHtml = isUrgent ? `<span class="news-tag urgent">${ann.category}</span>` : `<span class="news-tag">${ann.category}</span>`;
    html += `
      <div class="news-card">
        <div class="news-meta">
          ${tagHtml}
          <span class="news-date">${ann.date}</span>
        </div>
        <div class="news-title">${ann.title}</div>
        <div class="news-body">${ann.body}</div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Initial Setup
renderTimetableGrid();
renderFrontAnnouncements();
updateAllViews();
