// Selected Courses Default Preset Seed
const DEFAULT_ENROLLED_IDS = ['CS301', 'CS303', 'CS304', 'GE101', 'CS305', 'CS306'];

const INITIAL_COURSES = [
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
    day: 3,
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
    day: 3,
    periodStart: 3,
    periodEnd: 4,
    timeText: '週三 3-4 節',
    capacity: 50,
    enrolled: 50,
    status: 'FULL',
    statusText: '已額滿 (0 人)',
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
    day: 1,
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
    day: 2,
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
    day: 4,
    periodStart: 1,
    periodEnd: 2,
    timeText: '週四 1-2 節',
    capacity: 50,
    enrolled: 30,
    status: 'AVAILABLE',
    statusText: '可加選 (剩 20 人)',
    prereq: '無先修限制',
    syllabus: '布林代數、組合邏輯電路設計、順序邏輯電路、卡諾圖簡化與 Verilog HDL 硬體描述語言。',
    grading: '布林邏輯實驗 30%、期中考 35%、期末專案 35%',
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
    email: 'mlhuang@ge.edu.tw',
    officeHours: '週三 14:00-16:00 (R101)',
    room: 'R101 (綜合大樓)',
    day: 4,
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
  }
];

const INITIAL_ANNOUNCEMENTS = [
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

// Seed Rosters for Force Enroll
const SEED_STUDENTS = [
  { id: '110590012', name: '王小明', department: '資工三A', type: '正常選課', time: '2026-09-08 09:15' },
  { id: '110590015', name: '張美玲', department: '資工三A', type: '正常選課', time: '2026-09-08 09:18' },
  { id: '110590018', name: '陳冠宇', department: '資工三B', type: '正常選課', time: '2026-09-08 09:25' }
];

// --- LocalStorage State Helpers ---

function getStoredCourses() {
  const saved = localStorage.getItem('demo_courses');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (e) {}
  }
  localStorage.setItem('demo_courses', JSON.stringify(INITIAL_COURSES));
  return [...INITIAL_COURSES];
}

function saveStoredCourses(courses) {
  localStorage.setItem('demo_courses', JSON.stringify(courses));
}

function getStoredAnnouncements() {
  const saved = localStorage.getItem('demo_announcements');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {}
  }
  localStorage.setItem('demo_announcements', JSON.stringify(INITIAL_ANNOUNCEMENTS));
  return [...INITIAL_ANNOUNCEMENTS];
}

function saveStoredAnnouncements(announcements) {
  localStorage.setItem('demo_announcements', JSON.stringify(announcements));
}

function getConflictMode() {
  const val = localStorage.getItem('demo_conflict_mode');
  return val || 'STRICT';
}

function setConflictMode(mode) {
  localStorage.setItem('demo_conflict_mode', mode);
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

function saveStoredGradeCreditRules(rules) {
  localStorage.setItem('demo_grade_credit_rules', JSON.stringify(rules));
}

function getStoredRosters() {
  const saved = localStorage.getItem('demo_rosters');
  if (saved) {
    try { return JSON.parse(saved); } catch(e) {}
  }
  const initialRosters = {
    'CS301': [...SEED_STUDENTS],
    'CS302': [...SEED_STUDENTS],
    'CS303': [...SEED_STUDENTS],
    'CS304': [...SEED_STUDENTS]
  };
  localStorage.setItem('demo_rosters', JSON.stringify(initialRosters));
  return initialRosters;
}

function saveStoredRosters(rosters) {
  localStorage.setItem('demo_rosters', JSON.stringify(rosters));
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

// --- Toast Notification Helper ---
function showToast(message, type = 'success') {
  const toast = document.getElementById('adminToast');
  if (!toast) return;
  toast.textContent = message;
  toast.className = `admin-toast ${type} show`;
  setTimeout(() => {
    toast.className = 'admin-toast';
  }, 3000);
}

// --- Global UI State ---
let currentCourses = getStoredCourses();
let currentAnnouncements = getStoredAnnouncements();
let editingCourseId = null;

// --- Sidebar Navigation & Smooth Scroll ---
document.querySelectorAll('.sidebar-item[data-admin-tab]').forEach(tabBtn => {
  tabBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = tabBtn.dataset.adminTab;
    const scrollTargetId = tabBtn.dataset.scrollTarget;

    document.querySelectorAll('.sidebar-item[data-admin-tab]').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.admin-tab-view').forEach(view => view.classList.remove('active'));

    tabBtn.classList.add('active');
    const targetView = document.getElementById(targetId);
    if (targetView) targetView.classList.add('active');

    // Update Topbar Title
    const topbarTitle = document.getElementById('topbarTitle');
    if (topbarTitle) {
      const categoryGroup = tabBtn.closest('.menu-category-group');
      const categoryHeader = categoryGroup ? categoryGroup.querySelector('.category-header') : null;
      const catText = categoryHeader ? categoryHeader.textContent.trim() : '控制台';
      topbarTitle.textContent = `控制台總覽 / ${catText} › ${tabBtn.textContent.trim()}`;
    }

    // Scroll to specific section if specified
    if (scrollTargetId) {
      const targetElem = document.getElementById(scrollTargetId);
      if (targetElem) {
        setTimeout(() => {
          targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      }
    }
  });
});

// --- Stat Cards Update ---
function updateStatCards() {
  currentCourses = getStoredCourses();
  currentAnnouncements = getStoredAnnouncements();
  const pendingOverrides = getPendingOverrides();

  // 1. Total Courses
  if (document.getElementById('statTotalCourses')) {
    document.getElementById('statTotalCourses').textContent = currentCourses.length;
  }

  // 2. System Announcements Count
  if (document.getElementById('statTotalAnnouncements')) {
    document.getElementById('statTotalAnnouncements').textContent = currentAnnouncements.length;
  }

  // 3. Conflict Status
  const conflictMode = getConflictMode();
  const conflictEl = document.getElementById('statConflictStatus');
  if (conflictEl) {
    if (conflictMode === 'STRICT') {
      conflictEl.innerHTML = `<span class="status-pill available">嚴格硬阻擋</span>`;
    } else {
      conflictEl.innerHTML = `<span class="status-pill warning">警示允許加簽</span>`;
    }
  }

  // 4. Pending Overrides Count
  const pendingCount = Object.keys(pendingOverrides).length;
  if (document.getElementById('statPendingOverrides')) {
    document.getElementById('statPendingOverrides').textContent = pendingCount;
  }
  const pendingBadge = document.getElementById('pendingQueueBadge');
  if (pendingBadge) {
    pendingBadge.textContent = `${pendingCount} 件待審核`;
  }
}

// ======================================================
// 模組 1：基礎開課與名額模組 (Class & Quota Setup)
// ======================================================

const adminTableBody = document.getElementById('adminCourseTableBody');
const searchInput = document.getElementById('adminSearchInput');
const deptFilter = document.getElementById('adminDeptFilter');
const categoryFilter = document.getElementById('adminCategoryFilter');

function renderAdminCourseTable() {
  if (!adminTableBody) return;

  const keyword = searchInput ? searchInput.value.trim().toLowerCase() : '';
  const dept = deptFilter ? deptFilter.value : 'ALL';
  const cat = categoryFilter ? categoryFilter.value : 'ALL';

  currentCourses = getStoredCourses();

  const filtered = currentCourses.filter(c => {
    const matchKw = !keyword || c.id.toLowerCase().includes(keyword) || c.name.toLowerCase().includes(keyword) || c.teacher.toLowerCase().includes(keyword);
    const matchDept = dept === 'ALL' || c.department === dept;
    const matchCat = cat === 'ALL' || c.category === cat;
    return matchKw && matchDept && matchCat;
  });

  if (filtered.length === 0) {
    adminTableBody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: var(--color-body-muted); padding: 30px;">尚無符合條件的課程資料</td></tr>`;
    return;
  }

  let html = '';
  filtered.forEach(c => {
    const enrolledCount = c.enrolled || 0;
    const isFull = enrolledCount >= c.capacity;
    const isWarn = enrolledCount >= c.capacity - 5 && !isFull;
    
    let statusBadgeHtml = `<span class="status-pill available">可加選 (剩 ${c.capacity - enrolledCount} 人)</span>`;
    if (isFull) {
      statusBadgeHtml = `<span class="status-pill full">已額滿 (0 人)</span>`;
    } else if (isWarn) {
      statusBadgeHtml = `<span class="status-pill warning">即將額滿 (剩 ${c.capacity - enrolledCount} 人)</span>`;
    }

    const catBadgeName = c.categoryName || (c.category === 'REQUIRED' ? '系定必修' : (c.category === 'ELECTIVE' ? '專業選修' : '通識核心'));

    html += `
      <tr>
        <td style="font-weight: 700;">${c.id}</td>
        <td>
          <div style="font-weight: 600;">${c.name}</div>
          <div style="font-size: 12px; color: var(--color-body-muted);">${c.englishName || ''}</div>
        </td>
        <td>${c.department}</td>
        <td><span class="dept-code-tag">${catBadgeName} (${c.credits}學分)</span></td>
        <td>${c.teacher}</td>
        <td>${c.timeText} <span style="color: var(--color-body-muted);">(${c.room})</span></td>
        <td>
          <div style="display: flex; align-items: center; gap: 6px;">
            <strong style="font-size: 16px; color: var(--color-primary);">${c.capacity}</strong> 人
            <button class="btn-sm-edit" onclick="promptEditCapacity('${c.id}', ${c.capacity})" title="快速修改容納上限">✎ 修改</button>
          </div>
        </td>
        <td>
          <div>${enrolledCount} / ${c.capacity} 人</div>
          <div style="margin-top: 4px;">${statusBadgeHtml}</div>
        </td>
        <td style="text-align: center;">
          <div style="display: flex; gap: 6px; justify-content: center;">
            <button class="btn-secondary" style="padding: 4px 8px; font-size: 12px;" onclick="openEditCourseModal('${c.id}')">編輯</button>
            <button class="btn-danger" style="padding: 4px 8px; font-size: 12px;" onclick="deleteCourse('${c.id}')">刪除</button>
          </div>
        </td>
      </tr>
    `;
  });

  adminTableBody.innerHTML = html;
}

if (searchInput) searchInput.addEventListener('input', renderAdminCourseTable);
if (deptFilter) deptFilter.addEventListener('change', renderAdminCourseTable);
if (categoryFilter) categoryFilter.addEventListener('change', renderAdminCourseTable);

// --- Course Modal Form Handler ---
const courseModal = document.getElementById('courseEditModal');
const courseForm = document.getElementById('courseForm');

function openAddCourseModal() {
  editingCourseId = null;
  document.getElementById('editCourseIsNew').value = 'true';
  document.getElementById('courseModalTitle').textContent = '新增本學期課程實例';
  document.getElementById('courseIdInput').value = '';
  document.getElementById('courseIdInput').readOnly = false;
  document.getElementById('courseNameInput').value = '';
  document.getElementById('courseEnglishNameInput').value = '';
  document.getElementById('courseDepartmentInput').value = '資訊工程學系';
  document.getElementById('courseCategoryInput').value = 'REQUIRED';
  document.getElementById('courseCreditsInput').value = '3';
  document.getElementById('courseCapacityInput').value = '50';
  document.getElementById('courseTeacherInput').value = '';
  document.getElementById('courseRoomInput').value = 'R301 (資訊館)';
  document.getElementById('courseDayInput').value = '1';
  document.getElementById('courseStartInput').value = '1';
  document.getElementById('courseEndInput').value = '2';
  if (document.getElementById('coursePrereqInput')) document.getElementById('coursePrereqInput').value = '無特殊先修限制';
  document.getElementById('courseSyllabusInput').value = '';

  courseModal.classList.add('active');
}

window.openEditCourseModal = function(courseId) {
  const course = currentCourses.find(c => c.id === courseId);
  if (!course) return;

  editingCourseId = courseId;
  document.getElementById('editCourseIsNew').value = 'false';
  document.getElementById('courseModalTitle').textContent = `編輯課程資訊 (${course.id})`;
  document.getElementById('courseIdInput').value = course.id;
  document.getElementById('courseIdInput').readOnly = true;
  document.getElementById('courseNameInput').value = course.name;
  document.getElementById('courseEnglishNameInput').value = course.englishName || '';
  document.getElementById('courseDepartmentInput').value = course.department;
  document.getElementById('courseCategoryInput').value = course.category;
  document.getElementById('courseCreditsInput').value = course.credits;
  document.getElementById('courseCapacityInput').value = course.capacity;
  document.getElementById('courseTeacherInput').value = course.teacher;
  document.getElementById('courseRoomInput').value = course.room;
  document.getElementById('courseDayInput').value = course.day;
  document.getElementById('courseStartInput').value = course.periodStart;
  document.getElementById('courseEndInput').value = course.periodEnd;
  if (document.getElementById('coursePrereqInput')) document.getElementById('coursePrereqInput').value = course.prereq || '無特殊先修限制';
  document.getElementById('courseSyllabusInput').value = course.syllabus || '';

  courseModal.classList.add('active');
};

if (document.getElementById('openAddCourseBtn')) {
  document.getElementById('openAddCourseBtn').addEventListener('click', openAddCourseModal);
}
if (document.getElementById('closeCourseModalBtn')) {
  document.getElementById('closeCourseModalBtn').addEventListener('click', () => courseModal.classList.remove('active'));
}
if (document.getElementById('cancelCourseModalBtn')) {
  document.getElementById('cancelCourseModalBtn').addEventListener('click', () => courseModal.classList.remove('active'));
}

if (courseForm) {
  courseForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = document.getElementById('courseIdInput').value.trim().toUpperCase();
    const name = document.getElementById('courseNameInput').value.trim();
    const englishName = document.getElementById('courseEnglishNameInput').value.trim() || name;
    const department = document.getElementById('courseDepartmentInput').value;
    const category = document.getElementById('courseCategoryInput').value;
    const credits = parseInt(document.getElementById('courseCreditsInput').value, 10);
    const capacity = parseInt(document.getElementById('courseCapacityInput').value, 10);
    const teacher = document.getElementById('courseTeacherInput').value.trim();
    const room = document.getElementById('courseRoomInput').value.trim();
    const day = parseInt(document.getElementById('courseDayInput').value, 10);
    const startP = parseInt(document.getElementById('courseStartInput').value, 10);
    const endP = parseInt(document.getElementById('courseEndInput').value, 10);
    const prereq = document.getElementById('coursePrereqInput') ? document.getElementById('coursePrereqInput').value.trim() || '無特殊先修限制' : '無特殊先修限制';
    const syllabus = document.getElementById('courseSyllabusInput').value.trim() || '本課程提供結合理論與實務之專業教學內容。';

    const dayMap = { 1: '週一', 2: '週二', 3: '週三', 4: '週四', 5: '週五' };
    const catNameMap = { 'REQUIRED': '系定必修', 'ELECTIVE': '專業選修', 'GENERAL': '通識核心' };
    const timeText = `${dayMap[day]} ${startP}-${endP} 節`;

    const isNew = document.getElementById('editCourseIsNew').value === 'true';

    if (isNew) {
      if (currentCourses.some(c => c.id === id)) {
        alert(`課號 【${id}】 已存在，請使用不同課號！`);
        return;
      }
      const newCourse = {
        id,
        department,
        name,
        englishName,
        category,
        categoryName: catNameMap[category],
        credits,
        teacher,
        email: `${id.toLowerCase()}@edu.tw`,
        officeHours: '週二 14:00-16:00',
        room,
        day,
        periodStart: startP,
        periodEnd: endP,
        timeText,
        capacity,
        enrolled: 0,
        status: 'AVAILABLE',
        statusText: `可加選 (剩 ${capacity} 人)`,
        prereq,
        syllabus,
        grading: '期中考 35%、期末專案 45%、出席與作業 20%',
        textbook: '授課教師隨堂教材講義'
      };
      currentCourses.push(newCourse);
      showToast(`成功新增課程【${id} ${name}】！`);
    } else {
      const course = currentCourses.find(c => c.id === editingCourseId);
      if (course) {
        course.name = name;
        course.englishName = englishName;
        course.department = department;
        course.category = category;
        course.categoryName = catNameMap[category];
        course.credits = credits;
        course.capacity = capacity;
        course.teacher = teacher;
        course.room = room;
        course.day = day;
        course.periodStart = startP;
        course.periodEnd = endP;
        course.timeText = timeText;
        course.prereq = prereq;
        course.syllabus = syllabus;
        
        const enrolled = course.enrolled || 0;
        if (enrolled >= capacity) {
          course.status = 'FULL';
          course.statusText = '已額滿 (0 人)';
        } else {
          course.status = 'AVAILABLE';
          course.statusText = `可加選 (剩 ${capacity - enrolled} 人)`;
        }
        showToast(`成功更新課程【${id} ${name}】！`);
      }
    }

    saveStoredCourses(currentCourses);
    courseModal.classList.remove('active');
    renderAdminCourseTable();
    populateSimCourseSelects();
    updateStatCards();
  });
}

// Prompt Quick Edit Capacity
window.promptEditCapacity = function(courseId, oldCap) {
  const newCapStr = prompt(`請輸入課號【${courseId}】的新單一容納上限 (Hard Cap)：`, oldCap);
  if (newCapStr === null) return;

  const newCap = parseInt(newCapStr, 10);
  if (isNaN(newCap) || newCap < 1) {
    alert('容量上限必須為大於 0 之正整數！');
    return;
  }

  const course = currentCourses.find(c => c.id === courseId);
  if (course) {
    course.capacity = newCap;
    const enrolled = course.enrolled || 0;
    if (enrolled >= newCap) {
      course.status = 'FULL';
      course.statusText = '已額滿 (0 人)';
    } else {
      course.status = 'AVAILABLE';
      course.statusText = `可加選 (剩 ${newCap - enrolled} 人)`;
    }
    saveStoredCourses(currentCourses);
    renderAdminCourseTable();
    updateStatCards();
    showToast(`【${courseId}】上限已更新為 ${newCap} 人！`);
  }
};

// Delete Course
window.deleteCourse = function(courseId) {
  const course = currentCourses.find(c => c.id === courseId);
  if (!course) return;

  if (confirm(`您確定要刪除課程【${course.id} ${course.name}】嗎？此動作無法復原。`)) {
    currentCourses = currentCourses.filter(c => c.id !== courseId);
    saveStoredCourses(currentCourses);
    renderAdminCourseTable();
    populateSimCourseSelects();
    updateStatCards();
    showToast(`已成功刪除課程【${courseId}】！`, 'warning');
  }
};

// ======================================================
// 模組 2：系統公告管理與衝堂校驗 UI 模組
// ======================================================

// 1. 公告列表渲染
const announcementTableBody = document.getElementById('announcementTableBody');

function renderAnnouncementTable() {
  if (!announcementTableBody) return;
  currentAnnouncements = getStoredAnnouncements();

  if (currentAnnouncements.length === 0) {
    announcementTableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--color-body-muted); padding: 24px;">目前尚無公告，點擊右上角「+ 發布新公告」開始發布</td></tr>`;
    return;
  }

  let html = '';
  currentAnnouncements.forEach(ann => {
    const isUrgent = ann.category === '重要公告' || ann.categoryClass === 'urgent';
    const tagHtml = isUrgent 
      ? `<span class="news-tag urgent">${ann.category}</span>`
      : `<span class="news-tag">${ann.category}</span>`;

    html += `
      <tr>
        <td style="color: var(--color-body-muted); font-size: 13px;">${ann.date}</td>
        <td>${tagHtml}</td>
        <td style="font-weight: 600;">${ann.title}</td>
        <td style="color: var(--color-body-muted); font-size: 13px; max-width: 280px; word-break: break-word;">${ann.body}</td>
        <td style="text-align: center;">
          <button class="btn-danger" style="padding: 3px 8px; font-size: 12px;" onclick="deleteAnnouncement('${ann.id}')">刪除</button>
        </td>
      </tr>
    `;
  });

  announcementTableBody.innerHTML = html;
}

// 2. 新增公告 Modal
const announcementModal = document.getElementById('announcementModal');
const announcementForm = document.getElementById('announcementForm');

if (document.getElementById('openAddAnnouncementBtn')) {
  document.getElementById('openAddAnnouncementBtn').addEventListener('click', () => {
    document.getElementById('annTitleInput').value = '';
    document.getElementById('annCategoryInput').value = '重要公告';
    document.getElementById('annDateInput').value = new Date().toISOString().split('T')[0];
    document.getElementById('annBodyInput').value = '';
    announcementModal.classList.add('active');
  });
}

if (document.getElementById('closeAnnouncementModalBtn')) {
  document.getElementById('closeAnnouncementModalBtn').addEventListener('click', () => announcementModal.classList.remove('active'));
}
if (document.getElementById('cancelAnnouncementModalBtn')) {
  document.getElementById('cancelAnnouncementModalBtn').addEventListener('click', () => announcementModal.classList.remove('active'));
}

if (announcementForm) {
  announcementForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('annTitleInput').value.trim();
    const category = document.getElementById('annCategoryInput').value;
    const date = document.getElementById('annDateInput').value;
    const body = document.getElementById('annBodyInput').value.trim();

    if (!title || !date || !body) return;

    const newAnn = {
      id: 'ann-' + Date.now(),
      date,
      category,
      categoryClass: category === '重要公告' ? 'urgent' : '',
      title,
      body
    };

    currentAnnouncements.unshift(newAnn);
    saveStoredAnnouncements(currentAnnouncements);

    announcementModal.classList.remove('active');
    renderAnnouncementTable();
    updateStatCards();
    showToast(`已成功發布公告【${title}】至學生前台！`);
  });
}

// 3. 刪除公告
window.deleteAnnouncement = function(annId) {
  const ann = currentAnnouncements.find(a => a.id === annId);
  if (!ann) return;

  if (confirm(`您確定要刪除公告【${ann.title}】嗎？此變更將即時反映至前台首頁。`)) {
    currentAnnouncements = currentAnnouncements.filter(a => a.id !== annId);
    saveStoredAnnouncements(currentAnnouncements);
    renderAnnouncementTable();
    updateStatCards();
    showToast(`已刪除公告【${ann.title}】！`, 'warning');
  }
};

// 4. 衝堂模式與校驗模擬器
const conflictModeStrictRadio = document.getElementById('conflictModeStrict');
const conflictModeWarnRadio = document.getElementById('conflictModeWarn');

function initConflictModeUI() {
  const mode = getConflictMode();
  if (mode === 'WARN') {
    if (conflictModeWarnRadio) conflictModeWarnRadio.checked = true;
    const pill = document.getElementById('conflictRuleStatusPill');
    if (pill) {
      pill.className = 'status-pill warning';
      pill.textContent = '警示加簽模式';
    }
  } else {
    if (conflictModeStrictRadio) conflictModeStrictRadio.checked = true;
    const pill = document.getElementById('conflictRuleStatusPill');
    if (pill) {
      pill.className = 'status-pill available';
      pill.textContent = '嚴格硬阻擋模式';
    }
  }
}

if (conflictModeStrictRadio) {
  conflictModeStrictRadio.addEventListener('change', () => {
    if (conflictModeStrictRadio.checked) {
      setConflictMode('STRICT');
      initConflictModeUI();
      updateStatCards();
      showToast('已切換衝堂校驗模式為：【嚴格硬阻擋】');
    }
  });
}

if (conflictModeWarnRadio) {
  conflictModeWarnRadio.addEventListener('change', () => {
    if (conflictModeWarnRadio.checked) {
      setConflictMode('WARN');
      initConflictModeUI();
      updateStatCards();
      showToast('已切換衝堂校驗模式為：【警示並允許加簽】', 'warning');
    }
  });
}

// 5. 填入與執行衝堂校驗模擬器
const simCourseASelect = document.getElementById('simCourseASelect');
const simCourseBSelect = document.getElementById('simCourseBSelect');
const runConflictSimBtn = document.getElementById('runConflictSimBtn');
const simResultBox = document.getElementById('simResultBox');

function populateSimCourseSelects() {
  if (!simCourseASelect || !simCourseBSelect) return;
  currentCourses = getStoredCourses();

  let optionsHtml = '';
  currentCourses.forEach(c => {
    optionsHtml += `<option value="${c.id}">${c.id} ${c.name} (${c.timeText})</option>`;
  });

  simCourseASelect.innerHTML = optionsHtml;
  simCourseBSelect.innerHTML = optionsHtml;

  // Set default selection A=CS301, B=CS302 (Conflict pair!)
  if (currentCourses.some(c => c.id === 'CS301')) simCourseASelect.value = 'CS301';
  if (currentCourses.some(c => c.id === 'CS302')) simCourseBSelect.value = 'CS302';
}

if (runConflictSimBtn) {
  runConflictSimBtn.addEventListener('click', () => {
    const idA = simCourseASelect.value;
    const idB = simCourseBSelect.value;

    if (idA === idB) {
      simResultBox.innerHTML = `<span style="color: var(--color-status-warning); font-weight: 600;">⚠️ 請選擇兩門不同的課程進行衝堂校驗比對！</span>`;
      return;
    }

    const courseA = currentCourses.find(c => c.id === idA);
    const courseB = currentCourses.find(c => c.id === idB);

    if (!courseA || !courseB) return;

    // Check Day & Period intersection
    const dayMap = { 1: '週一', 2: '週二', 3: '週三', 4: '週四', 5: '週五' };
    const sameDay = courseA.day === courseB.day;
    const isOverlap = sameDay && (Math.max(courseA.periodStart, courseB.periodStart) <= Math.min(courseA.periodEnd, courseB.periodEnd));

    if (isOverlap) {
      const overlapStart = Math.max(courseA.periodStart, courseB.periodStart);
      const overlapEnd = Math.min(courseA.periodEnd, courseB.periodEnd);
      const overlapText = `${dayMap[courseA.day]} 第 ${overlapStart === overlapEnd ? overlapStart : overlapStart + '-' + overlapEnd} 節`;

      simResultBox.innerHTML = `
        <div style="width: 100%; text-align: left;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <span class="status-pill full" style="font-size: 14px; padding: 4px 12px;">⚠️ 檢測出時間衝堂衝突！</span>
            <strong style="color: #D32F2F;">衝突時段：${overlapText}</strong>
          </div>
          <div style="font-size: 13.5px; color: var(--color-ink); background-color: #FFEBEE; padding: 10px; border-radius: var(--radius-sm); border: 1px solid #FFCDD2;">
            <div>📌 <strong>課程 A (【${courseA.id}】${courseA.name})</strong>：${courseA.timeText} (${courseA.room})</div>
            <div style="margin-top: 4px;">📌 <strong>課程 B (【${courseB.id}】${courseB.name})</strong>：${courseB.timeText} (${courseB.room})</div>
            <div style="margin-top: 8px; font-weight: 700; color: #B71C1C;">硬規則校驗結果：此兩門課無法同時加入同一位學生的週課表中，系統將自動觸發擋課硬限制。</div>
          </div>
        </div>
      `;
    } else {
      simResultBox.innerHTML = `
        <div style="width: 100%; text-align: left;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <span class="status-pill available" style="font-size: 14px; padding: 4px 12px;">✅ 校驗通過：無時間衝堂</span>
            <strong style="color: #2E7D32;">時段完全錯開</strong>
          </div>
          <div style="font-size: 13.5px; color: var(--color-ink); background-color: #E8F5E9; padding: 10px; border-radius: var(--radius-sm); border: 1px solid #C8E6C9;">
            <div>📌 <strong>【${courseA.id}】${courseA.name}</strong>：${courseA.timeText}</div>
            <div style="margin-top: 4px;">📌 <strong>【${courseB.id}】${courseB.name}</strong>：${courseB.timeText}</div>
            <div style="margin-top: 6px; font-weight: 600; color: #1B5E20;">學生可同時順利加選此兩門課程，無任何時間衝突障礙。</div>
          </div>
        </div>
      `;
    }
  });
}

// 6. 分年級學分硬規則 Form
const gradeCreditRulesForm = document.getElementById('gradeCreditRulesForm');
if (gradeCreditRulesForm) {
  gradeCreditRulesForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const rules = {
      'G1': { label: '大一', min: parseInt(document.getElementById('minG1').value, 10), max: parseInt(document.getElementById('maxG1').value, 10) },
      'G2': { label: '大二', min: parseInt(document.getElementById('minG2').value, 10), max: parseInt(document.getElementById('maxG2').value, 10) },
      'G3': { label: '大三', min: parseInt(document.getElementById('minG3').value, 10), max: parseInt(document.getElementById('maxG3').value, 10) },
      'G4': { label: '大四 (應屆)', min: parseInt(document.getElementById('minG4').value, 10), max: parseInt(document.getElementById('maxG4').value, 10) },
      'GRAD': { label: '碩博士班', min: parseInt(document.getElementById('minGRAD').value, 10), max: parseInt(document.getElementById('maxGRAD').value, 10) }
    };

    for (const key in rules) {
      if (rules[key].max < rules[key].min) {
        alert(`【${rules[key].label}】最高學分上限不能低於最低學分下限！`);
        return;
      }
    }

    saveStoredGradeCreditRules(rules);
    showToast('分年級學生學分硬規則已成功儲存！');
  });
}

// ======================================================
// 模組 3：行政覆寫與線上加簽審核區
// ======================================================

const forceCourseSelect = document.getElementById('forceCourseSelect');

function populateForceCourseSelect() {
  if (!forceCourseSelect) return;
  currentCourses = getStoredCourses();

  let optionsHtml = '';
  currentCourses.forEach(c => {
    optionsHtml += `<option value="${c.id}">${c.id} - ${c.name} (${c.teacher}) [已選 ${c.enrolled || 0}/${c.capacity}人]</option>`;
  });

  forceCourseSelect.innerHTML = optionsHtml;
}

// --- Admin Force Enroll Modal Handler ---
const forceEnrollModal = document.getElementById('forceEnrollModal');
const forceEnrollForm = document.getElementById('forceEnrollForm');

if (document.getElementById('openForceEnrollBtn')) {
  document.getElementById('openForceEnrollBtn').addEventListener('click', () => {
    populateForceCourseSelect();
    forceEnrollModal.classList.add('active');
  });
}
if (document.getElementById('closeForceModalBtn')) {
  document.getElementById('closeForceModalBtn').addEventListener('click', () => {
    forceEnrollModal.classList.remove('active');
  });
}
if (document.getElementById('cancelForceModalBtn')) {
  document.getElementById('cancelForceModalBtn').addEventListener('click', () => {
    forceEnrollModal.classList.remove('active');
  });
}

if (forceEnrollForm) {
  forceEnrollForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const courseId = forceCourseSelect.value;
    const studentId = document.getElementById('forceStudentIdInput').value.trim();
    const studentName = document.getElementById('forceStudentNameInput').value.trim();
    const studentDept = document.getElementById('forceStudentDeptInput').value.trim() || '資工三A';

    if (!courseId || !studentId || !studentName) return;

    let currentRosters = getStoredRosters();
    let studentList = currentRosters[courseId] || [];

    if (studentList.some(s => s.id === studentId)) {
      alert(`學號【${studentId}】已在該課程名冊中！`);
      return;
    }

    const newEntry = {
      id: studentId,
      name: studentName,
      department: studentDept,
      type: '管理員強塞',
      time: new Date().toLocaleString()
    };

    studentList.push(newEntry);
    currentRosters[courseId] = studentList;
    saveStoredRosters(currentRosters);

    // Update course count
    const course = currentCourses.find(c => c.id === courseId);
    if (course) {
      course.enrolled = studentList.length;
      saveStoredCourses(currentCourses);
    }

    forceEnrollModal.classList.remove('active');
    renderAdminCourseTable();
    updateStatCards();
    showToast(`⚡ 已成功手動強塞加簽學生【${studentId} ${studentName}】進【${course.name}】！`);
  });
}

// --- Pending Overrides Approval Queue Handler ---
const overrideQueueTableBody = document.getElementById('overrideQueueTableBody');

function renderPendingOverridesQueue() {
  if (!overrideQueueTableBody) return;

  const pendingOverrides = getPendingOverrides();
  const keys = Object.keys(pendingOverrides);

  if (keys.length === 0) {
    overrideQueueTableBody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--color-body-muted); padding: 24px;">目前沒有待處理的線上加簽申請</td></tr>`;
    return;
  }

  let html = '';
  keys.forEach(courseId => {
    const item = pendingOverrides[courseId];
    const course = currentCourses.find(c => c.id === courseId) || { name: courseId, capacity: 50, enrolled: 50 };

    html += `
      <tr>
        <td style="font-weight: 700;">${courseId} ${course.name}</td>
        <td>
          <div style="font-weight: 600;">110590012 王小明</div>
          <div style="font-size: 12px; color: var(--color-body-muted);">資工三A (應屆畢業生)</div>
        </td>
        <td style="max-width: 240px; word-break: break-word;">${item.reason || '應屆畢業或課程修習需求申請線上加簽'}</td>
        <td style="color: var(--color-body-muted); font-size: 12.5px;">${item.timestamp || '2026-09-10 14:00'}</td>
        <td><span class="status-pill full">已額滿 (${course.enrolled}/${course.capacity})</span></td>
        <td style="text-align: center;">
          <div style="display: flex; gap: 6px; justify-content: center;">
            <button class="btn-primary accent" style="padding: 4px 10px; font-size: 12px;" onclick="approvePendingOverride('${courseId}')">核准強塞</button>
            <button class="btn-danger" style="padding: 4px 10px; font-size: 12px;" onclick="rejectPendingOverride('${courseId}')">拒絕</button>
          </div>
        </td>
      </tr>
    `;
  });

  overrideQueueTableBody.innerHTML = html;
}

window.approvePendingOverride = function(courseId) {
  const pendingOverrides = getPendingOverrides();
  delete pendingOverrides[courseId];
  savePendingOverrides(pendingOverrides);

  // Add student to roster
  let currentRosters = getStoredRosters();
  let studentList = currentRosters[courseId] || [];

  if (!studentList.some(s => s.id === '110590012')) {
    studentList.push({
      id: '110590012',
      name: '王小明',
      department: '資工三A',
      type: '線上加簽強塞',
      time: new Date().toLocaleString()
    });
    currentRosters[courseId] = studentList;
    saveStoredRosters(currentRosters);
  }

  // Update course count
  const course = currentCourses.find(c => c.id === courseId);
  if (course) {
    course.enrolled = studentList.length;
    saveStoredCourses(currentCourses);
  }

  // Add to student enrolled list
  const savedEnrolled = localStorage.getItem('demo_enrolled_courses');
  let enrolledIds = savedEnrolled ? JSON.parse(savedEnrolled) : [...DEFAULT_ENROLLED_IDS];
  if (!enrolledIds.includes(courseId)) {
    enrolledIds.push(courseId);
    localStorage.setItem('demo_enrolled_courses', JSON.stringify(enrolledIds));
  }

  renderPendingOverridesQueue();
  renderAdminCourseTable();
  updateStatCards();
  showToast(`已核准【${courseId}】線上加簽申請，學生成功選入！`);
};

window.rejectPendingOverride = function(courseId) {
  const pendingOverrides = getPendingOverrides();
  delete pendingOverrides[courseId];
  savePendingOverrides(pendingOverrides);

  renderPendingOverridesQueue();
  updateStatCards();
  showToast(`已退回【${courseId}】線上加簽申請`, 'warning');
};

// --- Mobile Drawer Menu Handler ---
const mobileMenuBtn = document.getElementById('adminMobileMenuToggle');
const adminSidebar = document.querySelector('.admin-sidebar');
const sidebarBackdrop = document.getElementById('sidebarBackdrop');

function closeMobileSidebar() {
  if (adminSidebar) adminSidebar.classList.remove('mobile-open');
  if (sidebarBackdrop) sidebarBackdrop.classList.remove('active');
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    if (adminSidebar) adminSidebar.classList.toggle('mobile-open');
    if (sidebarBackdrop) sidebarBackdrop.classList.toggle('active');
  });
}

if (sidebarBackdrop) {
  sidebarBackdrop.addEventListener('click', closeMobileSidebar);
}

document.querySelectorAll('.sidebar-item').forEach(item => {
  item.addEventListener('click', () => {
    if (window.innerWidth <= 992) {
      closeMobileSidebar();
    }
  });
});

// Backdrop Click Close Modal
document.querySelectorAll('.modal-overlay').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
});

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
  updateStatCards();
  renderAdminCourseTable();
  renderAnnouncementTable();
  renderPendingOverridesQueue();
});
