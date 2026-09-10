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
    syllabus: '本課程介紹核心演算法設計範式，包含分治法 (Divide and Conquer)、動態規劃 (Dynamic Programming)、貪婪演算法與圖形演算法分析。養成解決複雜問題與複雜度分析能力。',
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
    syllabus: '探討關聯式資料庫架構、SQL 語法優化、實體關聯圖 (ERD) 設計、交易管理 (ACID) 與 NoSQL 資料庫導論。結合作業系統儲存機制與索引設計。',
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
    syllabus: '研討作業系統核心概念：行程與執行緒同步、記憶體管理 (Virtual Memory)、檔案系統與系統呼叫實作。包含 Linux Kernel 機制導讀。',
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
    syllabus: '深入網際網路 OSI 七層模型與 TCP/IP 協定堆疊，包含封包路由、Socket 程式設計與網路安全基礎。搭配 Wireshark 實戰分析。',
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
    syllabus: '介紹布林代數、邏輯閘閘級優化、組合邏輯與順序邏輯電路設計、有限狀態機 (FSM) 與 Verilog HDL 電路模擬。',
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
    syllabus: '探索人類行為與心理歷程，涵蓋認知心理學、神經科學基礎、發展心理學與社會心理學現象。提升自我覺察與溝通能力。',
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
    syllabus: '引入批判性思考與倫理學架構，討論現代科技倫理、人工智慧對社會影響與正義論命題。',
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
    syllabus: '介紹機器學習與深度學習基本原理，包括監督式學習、神經網路架構與 Python/PyTorch 實務範例。專題導向開發。',
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
    syllabus: '現代 Web 前端技術實戰：HTML5/CSS3/JavaScript ES6+，UI/UX 設計原則與 React/Vite 框架整合應用。打造高質感響應式應用程式。',
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
    syllabus: '講授敏捷開發 (Agile/Scrum)、Design Patterns 設計模式、CI/CD 自動化測試與軟體架構品質評估。',
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
    syllabus: '連續與離散時間訊號、傅立葉級數 (FS)、傅立葉轉換 (FT)、Laplace 轉換與 Z 轉換應用分析。',
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
    syllabus: '探討生成式藝術 (Generative Art)、互動裝置、新媒體展演與演算法視覺音樂之美學脈絡。',
    grading: '期末新媒體創作 50%、展覽心得 30%、課堂參與 20%',
    textbook: 'Generative Design: Visualize, Program, and Create with Processing'
  }
];

// Default Preset Enrolled IDs for Realistic DEMO (18 Credits)
const DEFAULT_ENROLLED_IDS = ['CS301', 'CS303', 'CS304', 'GE101', 'CS305', 'CS306'];

// Pagination State
let currentPage = 1;
const ITEMS_PER_PAGE = 9;

// LocalStorage State
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

let enrolledIds = getEnrolledCourseIds();

// Tab Switcher Logic
window.switchTab = function(tabId) {
  document.querySelectorAll('.nav-tab-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
  document.querySelectorAll('.tab-content-view').forEach(view => {
    view.classList.toggle('active', view.id === tabId);
  });
};

document.querySelectorAll('.nav-tab-item').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    switchTab(btn.dataset.tab);
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

  const enrolledCourses = COURSES.filter(c => enrolledIds.includes(c.id));
  const homeCountEl = document.getElementById('homeEnrolledCount');
  if (homeCountEl) homeCountEl.textContent = `已排 ${enrolledCourses.length} 門課程`;

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
}

// Update Credit Dashboards
function updateCreditDashboard() {
  const enrolledCourses = COURSES.filter(c => enrolledIds.includes(c.id));
  
  let total = 0, req = 0, ele = 0, gen = 0;

  enrolledCourses.forEach(c => {
    total += c.credits;
    if (c.category === 'REQUIRED') req += c.credits;
    if (c.category === 'ELECTIVE') ele += c.credits;
    if (c.category === 'GENERAL') gen += c.credits;
  });

  const reqBig = document.getElementById('creditReqBig');
  if (reqBig) reqBig.textContent = `${req} / 12`;

  const eleBig = document.getElementById('creditEleBig');
  if (eleBig) eleBig.textContent = `${ele} / 9`;

  const genBig = document.getElementById('creditGenBig');
  if (genBig) genBig.textContent = `${gen} / 4`;

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

  const keyword = searchInput.value.trim().toLowerCase();
  const deptFilter = filterDepartment.value;
  const categoryFilter = filterCategory.value;
  const dayFilter = filterDay ? filterDay.value : 'ALL';
  const statusFilter = filterStatus.value;

  const filtered = COURSES.filter(course => {
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
    const isFull = course.status === 'FULL';
    const percent = Math.round((course.enrolled / course.capacity) * 100);

    let statusPillClass = 'available';
    if (course.status === 'WARNING') statusPillClass = 'warning';
    if (course.status === 'FULL') statusPillClass = 'full';

    const card = document.createElement('div');
    card.className = 'course-card-item';
    card.innerHTML = `
      <div>
        <div class="card-top">
          <span class="dept-code-tag">${course.department} · ${course.id} · ${course.categoryName} (${course.credits}學分)</span>
          <span class="status-pill ${statusPillClass}">${course.statusText}</span>
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
          <button class="btn-secondary" onclick="openCourseDetail('${course.id}')">查看細節</button>
          ${
            isEnrolled 
              ? `<button class="btn-danger" onclick="dropCourse('${course.id}')">退選</button>`
              : `<button class="btn-primary" ${isFull ? 'disabled' : ''} onclick="addCourse('${course.id}')">${isFull ? '已額滿' : '加選'}</button>`
          }
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
  const course = COURSES.find(c => c.id === courseId);
  if (!course) return;

  const isEnrolled = enrolledIds.includes(course.id);
  const isFull = course.status === 'FULL';

  document.getElementById('detailDeptCode').textContent = `${course.department} · ${course.id} · ${course.categoryName} (${course.credits} 學分)`;
  document.getElementById('detailTitle').textContent = `${course.name} (${course.englishName})`;
  document.getElementById('detailSubtitle').textContent = `114學年度第1學期 · ${course.credits} 學分`;

  const statusPill = document.getElementById('detailStatusPill');
  statusPill.textContent = course.statusText;
  statusPill.className = `status-pill ${course.status === 'WARNING' ? 'warning' : (course.status === 'FULL' ? 'full' : 'available')}`;

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
  if (isEnrolled) {
    actionContainer.innerHTML = `<button class="btn-danger" onclick="dropCourse('${course.id}'); closeCourseDetail();">退選此課程</button>`;
  } else {
    actionContainer.innerHTML = `<button class="btn-primary" ${isFull ? 'disabled' : ''} onclick="addCourse('${course.id}'); closeCourseDetail();">${isFull ? '已額滿' : '立即加選此課程'}</button>`;
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

// Add Course Action (with Conflict Checking)
window.addCourse = function(courseId) {
  const course = COURSES.find(c => c.id === courseId);
  if (!course) return;

  const enrolledCourses = COURSES.filter(c => enrolledIds.includes(c.id));
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

  enrolledIds.push(courseId);
  saveEnrolledCourseIds(enrolledIds);
  updateAllViews();
};

window.dropCourse = function(courseId) {
  enrolledIds = enrolledIds.filter(id => id !== courseId);
  saveEnrolledCourseIds(enrolledIds);
  updateAllViews();
};

function updateAllViews() {
  renderCourseGrid();
  updateTimetableContent();
  updateCreditDashboard();
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

// Reset & Import Demo Buttons
const resetBtn = document.getElementById('resetScheduleBtn');
if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    enrolledIds = [];
    saveEnrolledCourseIds(enrolledIds);
    updateAllViews();
  });
}

function importDemo() {
  enrolledIds = [...DEFAULT_ENROLLED_IDS];
  saveEnrolledCourseIds(enrolledIds);
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

// Initial Setup
renderTimetableGrid();
updateAllViews();
