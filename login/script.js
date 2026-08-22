/* =====================================================
   LOGIN TAB SWITCHING
===================================================== */

const loginTabs = document.querySelectorAll(".tab");
const loginPanels = document.querySelectorAll(".login-panel");

loginTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const targetPanel = tab.dataset.panel;

        // Remove active from every tab
        loginTabs.forEach(item => {
            item.classList.remove("active");
        });

        // Remove active from every login panel
        loginPanels.forEach(panel => {
            panel.classList.remove("active");
        });

        // Activate clicked tab
        tab.classList.add("active");

        // Activate matching panel
        document.getElementById(targetPanel).classList.add("active");

    });

});


/* =====================================================
   SHOW / HIDE PASSWORD
===================================================== */

const passwordButtons =
    document.querySelectorAll(".show-password");

passwordButtons.forEach(button => {

    button.addEventListener("click", () => {

        const targetId = button.dataset.target;

        const passwordInput =
            document.getElementById(targetId);

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            button.textContent = "Hide";

        } else {

            passwordInput.type = "password";

            button.textContent = "Show";

        }

    });

});


/* =====================================================
   PAGE ELEMENTS
===================================================== */

const loginPage =
    document.getElementById("loginPage");

const interviewerDashboard =
    document.getElementById("interviewerDashboard");

const loggedInterviewerId =
    document.getElementById("loggedInterviewerId");

const dashboardInterviewerId =
    document.getElementById("dashboardInterviewerId");

const profileId =
    document.getElementById("profileId");


/* =====================================================
   INTERVIEWER LOGIN
===================================================== */

const interviewerForm =
    document.getElementById("interviewerForm");

interviewerForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const id =
        document.getElementById("interviewerId").value.trim();

    const password =
        document.getElementById("interviewerPassword").value.trim();

    const status =
        document.getElementById("interviewerStatus");


    // Validation

    if (id === "" || password === "") {

        status.textContent =
            "Please enter both ID and password.";

        status.style.color = "#C23A3A";

        return;
    }


    // Successful login

    status.textContent =
        "Login successful!";

    status.style.color = "#1B8A5A";


    // Put entered ID into dashboard

    loggedInterviewerId.textContent = id;

    dashboardInterviewerId.textContent = id;

    profileId.textContent = id;


    // Hide login

    loginPage.style.display = "none";


    // Show dashboard

    interviewerDashboard.classList.add("active");

});


/* =====================================================
   EMPLOYEE DASHBOARD ELEMENTS
===================================================== */

const employeeDashboard =
    document.getElementById("employeeDashboard");

const loggedEmployeeId =
    document.getElementById("loggedEmployeeId");

const dashboardEmployeeId =
    document.getElementById("dashboardEmployeeId");

const profileEmployeeId =
    document.getElementById("profileEmployeeId");


/* =====================================================
   EMPLOYEE LOGIN
===================================================== */

const employeeForm =
    document.getElementById("employeeForm");

employeeForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const id =
        document.getElementById("employeeId").value.trim();

    const password =
        document.getElementById("employeePassword").value.trim();

    const status =
        document.getElementById("employeeStatus");


    if (id === "" || password === "") {

        status.textContent =
            "Please enter both ID and password.";

        status.style.color = "#C23A3A";

        return;
    }


    status.textContent =
        "Login successful!";

    status.style.color = "#1B8A5A";


    // Put entered ID into dashboard

    loggedEmployeeId.textContent = id;

    dashboardEmployeeId.textContent = id;

    profileEmployeeId.textContent = id;


    // Hide login

    loginPage.style.display = "none";


    // Show dashboard

    employeeDashboard.classList.add("active");

});


/* =====================================================
   ADMIN DASHBOARD ELEMENTS
===================================================== */

const adminDashboard =
    document.getElementById("adminDashboard");

const loggedAdminId =
    document.getElementById("loggedAdminId");

const dashboardAdminId =
    document.getElementById("dashboardAdminId");

const profileAdminId =
    document.getElementById("profileAdminId");


/* =====================================================
   ADMIN LOGIN
===================================================== */

const adminForm =
    document.getElementById("adminForm");

adminForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const id =
        document.getElementById("adminId").value.trim();

    const password =
        document.getElementById("adminPassword").value.trim();

    const status =
        document.getElementById("adminStatus");


    if (id === "" || password === "") {

        status.textContent =
            "Please enter both ID and password.";

        status.style.color = "#C23A3A";

        return;
    }


    status.textContent =
        "Login successful!";

    status.style.color = "#1B8A5A";


    // Put entered ID into dashboard

    loggedAdminId.textContent = id;

    dashboardAdminId.textContent = id;

    profileAdminId.textContent = id;


    // Hide login

    loginPage.style.display = "none";


    // Show dashboard

    adminDashboard.classList.add("active");

});


/* =====================================================
   SIDEBAR MODULE NAVIGATION (INTERVIEWER)
===================================================== */

const sideMenuButtons =
    document.querySelectorAll("#interviewerDashboard .side-menu");

const contentSections =
    document.querySelectorAll("#interviewerDashboard .content-section");


sideMenuButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Get selected section

        const sectionName =
            button.dataset.section;


        // Remove active from ALL sidebar buttons

        sideMenuButtons.forEach(item => {

            item.classList.remove("active");

        });


        // Remove active from ALL content sections

        contentSections.forEach(section => {

            section.classList.remove("active");

        });


        // Activate clicked sidebar button

        button.classList.add("active");


        // Activate matching content section

        const selectedSection =
            document.getElementById(
                "section-" + sectionName
            );


        if (selectedSection) {

            selectedSection.classList.add("active");

        }

        // Scroll content to top

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});


/* =====================================================
   SIDEBAR MODULE NAVIGATION (EMPLOYEE)
===================================================== */

const employeeSideMenuButtons =
    document.querySelectorAll("#employeeDashboard .side-menu");

const employeeContentSections =
    document.querySelectorAll("#employeeDashboard .content-section");


employeeSideMenuButtons.forEach(button => {

    button.addEventListener("click", () => {

        const sectionName =
            button.dataset.empSection;


        employeeSideMenuButtons.forEach(item => {

            item.classList.remove("active");

        });


        employeeContentSections.forEach(section => {

            section.classList.remove("active");

        });


        button.classList.add("active");


        const selectedSection =
            document.getElementById(
                "emp-section-" + sectionName
            );


        if (selectedSection) {

            selectedSection.classList.add("active");

        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});


/* =====================================================
   SIDEBAR MODULE NAVIGATION (ADMIN)
===================================================== */

const adminSideMenuButtons =
    document.querySelectorAll("#adminDashboard .side-menu");

const adminContentSections =
    document.querySelectorAll("#adminDashboard .content-section");


adminSideMenuButtons.forEach(button => {

    button.addEventListener("click", () => {

        const sectionName =
            button.dataset.adminSection;


        adminSideMenuButtons.forEach(item => {

            item.classList.remove("active");

        });


        adminContentSections.forEach(section => {

            section.classList.remove("active");

        });


        button.classList.add("active");


        const selectedSection =
            document.getElementById(
                "admin-section-" + sectionName
            );


        if (selectedSection) {

            selectedSection.classList.add("active");

        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});


// Jump straight to Announcements from the dashboard shortcut button

const employeeAnnouncementButton =
    document.getElementById("employeeAnnouncementButton");

if (employeeAnnouncementButton) {

    employeeAnnouncementButton.addEventListener("click", () => {

        const announcementsButton =
            document.querySelector('[data-emp-section="announcements"]');

        if (announcementsButton) {

            announcementsButton.click();

        }

    });

}


/* =====================================================
   LIVE CLOCKS
===================================================== */

const currentTime =
    document.getElementById("currentTime");

const employeeCurrentTime =
    document.getElementById("employeeCurrentTime");

const adminCurrentTime =
    document.getElementById("adminCurrentTime");


function formatClock(now) {

    let hours = now.getHours();

    let minutes = now.getMinutes();

    let seconds = now.getSeconds();

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    hours = hours ? hours : 12;

    hours = String(hours).padStart(2, "0");

    minutes = String(minutes).padStart(2, "0");

    seconds = String(seconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds} ${ampm}`;

}


function updateClock() {

    const now = new Date();

    const formatted = formatClock(now);

    if (currentTime) {

        currentTime.textContent = formatted;

    }

    if (employeeCurrentTime) {

        employeeCurrentTime.textContent = formatted;

    }

    if (adminCurrentTime) {

        adminCurrentTime.textContent = formatted;

    }

}


updateClock();

setInterval(updateClock, 1000);


/* =====================================================
   EMPLOYEE ATTENDANCE CHECK-IN
===================================================== */

const checkInButton =
    document.getElementById("checkInButton");

const attendanceStatusLabel =
    document.getElementById("attendanceStatusLabel");

const checkInTimeLabel =
    document.getElementById("checkInTimeLabel");

let hasCheckedIn = false;


if (checkInButton) {

    checkInButton.addEventListener("click", () => {

        if (hasCheckedIn) {
            return;
        }

        hasCheckedIn = true;

        const now = new Date();

        checkInTimeLabel.textContent = formatClock(now).replace(/:\d\d( [AP]M)/, "$1");

        attendanceStatusLabel.textContent = "Checked In";

        attendanceStatusLabel.classList.remove("status-orange");

        attendanceStatusLabel.classList.add("status-green");

        checkInButton.textContent = "Checked In";

        checkInButton.classList.add("checked-in");

    });

}


/* =====================================================
   EMPLOYEE LEAVE REQUEST FORM
===================================================== */

const leaveForm =
    document.getElementById("leaveForm");

leaveForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const type =
        document.getElementById("leaveType").value;

    const from =
        document.getElementById("leaveFrom").value;

    const to =
        document.getElementById("leaveTo").value;

    const reason =
        document.getElementById("leaveReason").value.trim();

    const status =
        document.getElementById("leaveStatus");


    if (from === "" || to === "" || reason === "") {

        status.textContent =
            "Please fill in the dates and a reason.";

        status.style.color = "#C23A3A";

        return;
    }


    status.textContent =
        "Leave request submitted.";

    status.style.color = "#1B8A5A";


    // Add the new request to the top of the history table

    const historyBody =
        document.getElementById("leaveHistoryBody");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${type}</td>
        <td>${from}</td>
        <td>${to}</td>
        <td><span class="badge progress">Pending</span></td>
    `;

    historyBody.prepend(row);

    leaveForm.reset();

});


/* =====================================================
   GENERIC MODAL HELPER
===================================================== */

function setupModal(modalId, closeButtonId) {

    const modal =
        document.getElementById(modalId);

    const closeButton =
        document.getElementById(closeButtonId);

    if (!modal) {
        return modal;
    }

    if (closeButton) {

        closeButton.addEventListener("click", () => {

            modal.classList.remove("active");

        });

    }

    modal.addEventListener("click", event => {

        if (event.target === modal) {

            modal.classList.remove("active");

        }

    });

    return modal;

}


function openModal(modal) {

    if (modal) {

        modal.classList.add("active");

    }

}


function initialsFromName(name) {

    const parts = name.trim().split(/\s+/);

    const first = parts[0] ? parts[0][0] : "";

    const last = parts.length > 1 ? parts[parts.length - 1][0] : "";

    return (first + last).toUpperCase();

}


/* =====================================================
   INTERVIEWER EDIT PROFILE
===================================================== */

const interviewerEditModalEl =
    setupModal("interviewerEditModal", "closeInterviewerEdit");

const interviewerEditButton =
    document.getElementById("interviewerEditButton");

if (interviewerEditButton) {

    interviewerEditButton.addEventListener("click", () => {

        document.getElementById("interviewerEditName").value =
            document.getElementById("interviewerNameProfile").textContent.trim();

        document.getElementById("interviewerEditEmail").value =
            document.getElementById("interviewerEmailField").textContent.trim();

        document.getElementById("interviewerEditDept").value =
            document.getElementById("interviewerDeptField").textContent.trim();

        document.getElementById("interviewerEditPhone").value =
            document.getElementById("interviewerPhoneField").textContent.trim();

        document.getElementById("interviewerEditExperience").value =
            document.getElementById("interviewerExperienceField").textContent.trim();

        document.getElementById("interviewerEditStatus").textContent = "";

        openModal(interviewerEditModalEl);

    });

}


const interviewerEditForm =
    document.getElementById("interviewerEditForm");

if (interviewerEditForm) {

    interviewerEditForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("interviewerEditName").value.trim();

        const email =
            document.getElementById("interviewerEditEmail").value.trim();

        const dept =
            document.getElementById("interviewerEditDept").value.trim();

        const phone =
            document.getElementById("interviewerEditPhone").value.trim();

        const experience =
            document.getElementById("interviewerEditExperience").value.trim();


        if (name === "" || email === "") {

            document.getElementById("interviewerEditStatus").textContent =
                "Name and email are required.";

            document.getElementById("interviewerEditStatus").style.color = "#C23A3A";

            return;

        }


        const initials = initialsFromName(name);


        // Dashboard card

        document.getElementById("interviewerNameDash").textContent = name;

        document.getElementById("interviewerEmailDash").textContent = email;

        document.getElementById("interviewerDeptDash").textContent = dept;

        document.getElementById("interviewerPhoneDash").textContent = phone;

        document.getElementById("interviewerAvatarDash").textContent = initials;


        // Profile page

        document.getElementById("interviewerNameProfile").textContent = name;

        document.getElementById("interviewerNameField").textContent = name;

        document.getElementById("interviewerEmailField").textContent = email;

        document.getElementById("interviewerDeptField").textContent = dept;

        document.getElementById("interviewerPhoneField").textContent = phone;

        document.getElementById("interviewerExperienceField").textContent = experience;

        document.getElementById("interviewerAvatarProfile").textContent = initials;


        interviewerEditModalEl.classList.remove("active");

    });

}


/* =====================================================
   EMPLOYEE EDIT PROFILE
===================================================== */

const employeeEditModalEl =
    setupModal("employeeEditModal", "closeEmployeeEdit");

const employeeEditButton =
    document.getElementById("employeeEditButton");

if (employeeEditButton) {

    employeeEditButton.addEventListener("click", () => {

        document.getElementById("employeeEditName").value =
            document.getElementById("employeeNameProfile").textContent.trim();

        document.getElementById("employeeEditEmail").value =
            document.getElementById("employeeEmailField").textContent.trim();

        document.getElementById("employeeEditDept").value =
            document.getElementById("employeeDeptField").textContent.trim();

        document.getElementById("employeeEditPhone").value =
            document.getElementById("employeePhoneField").textContent.trim();

        document.getElementById("employeeEditType").value =
            document.getElementById("employeeTypeField").textContent.trim();

        document.getElementById("employeeEditStatus").textContent = "";

        openModal(employeeEditModalEl);

    });

}


const employeeEditForm =
    document.getElementById("employeeEditForm");

if (employeeEditForm) {

    employeeEditForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("employeeEditName").value.trim();

        const email =
            document.getElementById("employeeEditEmail").value.trim();

        const dept =
            document.getElementById("employeeEditDept").value.trim();

        const phone =
            document.getElementById("employeeEditPhone").value.trim();

        const type =
            document.getElementById("employeeEditType").value;


        if (name === "" || email === "") {

            document.getElementById("employeeEditStatus").textContent =
                "Name and email are required.";

            document.getElementById("employeeEditStatus").style.color = "#C23A3A";

            return;

        }


        const initials = initialsFromName(name);


        // Dashboard card

        document.getElementById("employeeNameDash").textContent = name;

        document.getElementById("employeeEmailDash").textContent = email;

        document.getElementById("employeeDeptDash").textContent = dept;

        document.getElementById("employeePhoneDash").textContent = phone;

        document.getElementById("employeeAvatarDash").textContent = initials;


        // Profile page

        document.getElementById("employeeNameProfile").textContent = name;

        document.getElementById("employeeNameField").textContent = name;

        document.getElementById("employeeEmailField").textContent = email;

        document.getElementById("employeeDeptField").textContent = dept;

        document.getElementById("employeePhoneField").textContent = phone;

        document.getElementById("employeeTypeField").textContent = type;

        document.getElementById("employeeAvatarProfile").textContent = initials;


        employeeEditModalEl.classList.remove("active");

    });

}


/* =====================================================
   ADMIN EDIT PROFILE
===================================================== */

const adminEditModalEl =
    setupModal("adminEditModal", "closeAdminEdit");

const adminEditButton =
    document.getElementById("adminEditButton");

if (adminEditButton) {

    adminEditButton.addEventListener("click", () => {

        document.getElementById("adminEditName").value =
            document.getElementById("adminNameProfile").textContent.trim();

        document.getElementById("adminEditEmail").value =
            document.getElementById("adminEmailField").textContent.trim();

        document.getElementById("adminEditDept").value =
            document.getElementById("adminDeptField").textContent.trim();

        document.getElementById("adminEditPhone").value =
            document.getElementById("adminPhoneField").textContent.trim();

        document.getElementById("adminEditAccess").value =
            document.getElementById("adminAccessField").textContent.trim();

        document.getElementById("adminEditStatus").textContent = "";

        openModal(adminEditModalEl);

    });

}


const adminEditForm =
    document.getElementById("adminEditForm");

if (adminEditForm) {

    adminEditForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("adminEditName").value.trim();

        const email =
            document.getElementById("adminEditEmail").value.trim();

        const dept =
            document.getElementById("adminEditDept").value.trim();

        const phone =
            document.getElementById("adminEditPhone").value.trim();

        const access =
            document.getElementById("adminEditAccess").value;


        if (name === "" || email === "") {

            document.getElementById("adminEditStatus").textContent =
                "Name and email are required.";

            document.getElementById("adminEditStatus").style.color = "#C23A3A";

            return;

        }


        const initials = initialsFromName(name);


        // Dashboard card

        document.getElementById("adminNameDash").textContent = name;

        document.getElementById("adminEmailDash").textContent = email;

        document.getElementById("adminDeptDash").textContent = dept;

        document.getElementById("adminPhoneDash").textContent = phone;

        document.getElementById("adminAvatarDash").textContent = initials;


        // Profile page

        document.getElementById("adminNameProfile").textContent = name;

        document.getElementById("adminNameField").textContent = name;

        document.getElementById("adminEmailField").textContent = email;

        document.getElementById("adminDeptField").textContent = dept;

        document.getElementById("adminPhoneField").textContent = phone;

        document.getElementById("adminAccessField").textContent = access;

        document.getElementById("adminAvatarProfile").textContent = initials;


        adminEditModalEl.classList.remove("active");

    });

}


/* =====================================================
   EMPLOYEE DATA STORE (ADMIN)
   Single source of truth for the Employees tables, the
   attendance bar chart, and the View Employee modal.
===================================================== */

const TOTAL_WORKING_DAYS = 22;

const employeeData = {

    EMP001: {
        name: "Priya Menon",
        dept: "Product Design",
        role: "Senior Product Designer",
        status: "Active",
        present: 18,
        todayStatus: null   // "Present" | "Absent" | "Leave" | null
    },

    EMP002: {
        name: "David Miller",
        dept: "Engineering",
        role: "Backend Developer",
        status: "Active",
        present: 20,
        todayStatus: null
    },

    EMP003: {
        name: "Sarah Williams",
        dept: "Engineering",
        role: "Frontend Developer",
        status: "On Leave",
        present: 15,
        todayStatus: null
    }

};


/* =====================================================
   MARK TODAY'S ATTENDANCE (ADMIN)
   Quick Present / Absent / Leave buttons in the
   "Mark Today's Attendance" table.
===================================================== */

const attendanceMarkTableBody =
    document.getElementById("employeesTableBody");


function renderAttendanceBadge(id) {

    const employee = employeeData[id];

    if (!employee) {
        return;
    }

    const row =
        attendanceMarkTableBody.querySelector(`tr[data-emp-id="${id}"]`);

    if (!row) {
        return;
    }

    const badge =
        row.querySelector(".attendance-badge");

    const buttons =
        row.querySelectorAll(".attendance-btn");

    if (badge) {

        if (employee.todayStatus) {

            badge.textContent = employee.todayStatus;

            badge.className =
                "badge attendance-badge " + employee.todayStatus.toLowerCase();

        } else {

            badge.textContent = "Not Marked";

            badge.className = "badge unmarked attendance-badge";

        }

    }

    buttons.forEach(button => {

        button.classList.toggle(
            "is-active",
            button.dataset.status === employee.todayStatus
        );

    });

}


function markAttendance(id, status) {

    const employee = employeeData[id];

    if (!employee) {
        return;
    }

    const previousStatus = employee.todayStatus;

    // Clicking the already-active status clears the mark
    const nextStatus =
        previousStatus === status ? null : status;

    // Keep the "Days Present" figure in sync with the mark
    if (previousStatus === "Present" && nextStatus !== "Present") {

        employee.present = Math.max(employee.present - 1, 0);

    }

    if (nextStatus === "Present" && previousStatus !== "Present") {

        employee.present = Math.min(employee.present + 1, TOTAL_WORKING_DAYS);

    }

    employee.todayStatus = nextStatus;

    renderAttendanceBadge(id);

}


if (attendanceMarkTableBody) {

    attendanceMarkTableBody.addEventListener("click", event => {

        const button =
            event.target.closest(".attendance-btn");

        if (!button) {
            return;
        }

        const row =
            button.closest("tr[data-emp-id]");

        if (!row) {
            return;
        }

        const id = row.dataset.empId;

        markAttendance(id, button.dataset.status);

    });

}


/* =====================================================
   VIEW EMPLOYEE MODAL (ADMIN)
===================================================== */

let viewEmployeeChart = null;

const viewEmployeeModalEl =
    setupModal("viewEmployeeModal", "closeViewEmployee");

const employeesListTableBody =
    document.getElementById("employeesListTableBody");


function openViewEmployeeModal(id) {

    const employee = employeeData[id];

    if (!employee) {
        return;
    }

    const present = employee.present;

    const absent = Math.max(TOTAL_WORKING_DAYS - present, 0);

    const initials = initialsFromName(employee.name);


    document.getElementById("viewEmployeeAvatar").textContent = initials;

    document.getElementById("viewEmployeeName").textContent = employee.name;

    document.getElementById("viewEmployeeRole").textContent = employee.role;

    document.getElementById("viewEmployeeId").textContent = id;

    document.getElementById("viewEmployeeDept").textContent = employee.dept;

    document.getElementById("viewEmployeeStatus").textContent = employee.status;

    document.getElementById("viewEmployeePresent").textContent =
        `${present} / ${TOTAL_WORKING_DAYS}`;

    document.getElementById("viewEmployeeToday").textContent =
        employee.todayStatus || "Not Marked";


    const chartCanvas =
        document.getElementById("viewEmployeeChart");

    if (chartCanvas && typeof Chart !== "undefined") {

        if (viewEmployeeChart) {

            viewEmployeeChart.destroy();

        }

        viewEmployeeChart = new Chart(chartCanvas, {

            type: "doughnut",

            data: {

                labels: ["Present", "Absent"],

                datasets: [{

                    data: [present, absent],

                    backgroundColor: ["#1B8A5A", "#C23A3A"],

                    borderWidth: 0

                }]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {

                        position: "bottom",

                        labels: {

                            color: "#767A85",

                            font: { family: "IBM Plex Sans", size: 12 },

                            boxWidth: 12,

                            padding: 16

                        }

                    }

                }

            }

        });

    }


    openModal(viewEmployeeModalEl);

}


if (employeesListTableBody) {

    employeesListTableBody.addEventListener("click", event => {

        const button =
            event.target.closest(".view-button");

        if (!button) {
            return;
        }

        const row =
            button.closest("tr");

        if (!row) {
            return;
        }

        const id =
            row.dataset.empId || row.children[0].textContent.trim();

        openViewEmployeeModal(id);

    });

}


/* =====================================================
   ADMIN QUICK ACTIONS - ADD EMPLOYEE
===================================================== */

const addEmployeeModalEl =
    setupModal("addEmployeeModal", "closeAddEmployee");

const addEmployeeButton =
    document.getElementById("addEmployeeButton");

if (addEmployeeButton) {

    addEmployeeButton.addEventListener("click", () => {

        document.getElementById("addEmployeeStatus").textContent = "";

        openModal(addEmployeeModalEl);

    });

}


const addEmployeeForm =
    document.getElementById("addEmployeeForm");

if (addEmployeeForm) {

    addEmployeeForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const id =
            document.getElementById("newEmployeeId").value.trim();

        const name =
            document.getElementById("newEmployeeName").value.trim();

        const dept =
            document.getElementById("newEmployeeDept").value.trim();

        const role =
            document.getElementById("newEmployeeRole").value.trim();

        const status =
            document.getElementById("newEmployeeStatus").value;

        const statusLabel =
            document.getElementById("addEmployeeStatus");


        if (id === "" || name === "" || dept === "" || role === "") {

            statusLabel.textContent =
                "Please fill in every field.";

            statusLabel.style.color = "#C23A3A";

            return;

        }

        if (employeeData[id]) {

            statusLabel.textContent =
                "That Employee ID already exists.";

            statusLabel.style.color = "#C23A3A";

            return;

        }


        // Register the new employee so both tables, the
        // chart, and the View modal all know about them

        employeeData[id] = {
            name,
            dept,
            role,
            status,
            present: 0,
            todayStatus: null
        };


        const badgeClass =
            status === "Active" ? "upcoming" : "progress";

        // Row for the "All Employees" list table

        const listRow = document.createElement("tr");

        listRow.dataset.empId = id;

        listRow.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${dept}</td>
            <td>${role}</td>
            <td><span class="badge ${badgeClass}">${status}</span></td>
            <td><button class="view-button">View</button></td>
        `;

        employeesListTableBody.appendChild(listRow);


        // Row for the "Mark Today's Attendance" table

        const markRow = document.createElement("tr");

        markRow.dataset.empId = id;

        markRow.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${dept}</td>
            <td>${role}</td>
            <td><span class="badge unmarked attendance-badge">Not Marked</span></td>
            <td>
                <div class="attendance-actions">
                    <button class="attendance-btn present" data-status="Present" title="Mark Present">P</button>
                    <button class="attendance-btn absent" data-status="Absent" title="Mark Absent">A</button>
                    <button class="attendance-btn leave" data-status="Leave" title="Mark Leave">L</button>
                </div>
            </td>
        `;

        attendanceMarkTableBody.appendChild(markRow);


        addEmployeeForm.reset();

        addEmployeeModalEl.classList.remove("active");

    });

}


/* =====================================================
   ADMIN QUICK ACTIONS - ADD INTERVIEWER
===================================================== */

const addInterviewerModalEl =
    setupModal("addInterviewerModal", "closeAddInterviewer");

const addInterviewerButton =
    document.getElementById("addInterviewerButton");

if (addInterviewerButton) {

    addInterviewerButton.addEventListener("click", () => {

        document.getElementById("addInterviewerStatus").textContent = "";

        openModal(addInterviewerModalEl);

    });

}


const addInterviewerForm =
    document.getElementById("addInterviewerForm");

if (addInterviewerForm) {

    addInterviewerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const id =
            document.getElementById("newInterviewerId").value.trim();

        const name =
            document.getElementById("newInterviewerName").value.trim();

        const dept =
            document.getElementById("newInterviewerDept").value.trim();

        const status =
            document.getElementById("newInterviewerStatus").value;

        const statusLabel =
            document.getElementById("addInterviewerStatus");


        if (id === "" || name === "" || dept === "") {

            statusLabel.textContent =
                "Please fill in every field.";

            statusLabel.style.color = "#C23A3A";

            return;

        }


        const badgeClass =
            status === "Active" ? "upcoming" : "progress";

        const interviewersTableBody =
            document.getElementById("interviewersTableBody");

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${dept}</td>
            <td>0</td>
            <td><span class="badge ${badgeClass}">${status}</span></td>
        `;

        interviewersTableBody.appendChild(row);


        addInterviewerForm.reset();

        addInterviewerModalEl.classList.remove("active");

    });

}


/* =====================================================
   ADMIN SETTINGS FORM
===================================================== */

const adminSettingsForm =
    document.getElementById("adminSettingsForm");

if (adminSettingsForm) {

    adminSettingsForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const status =
            document.getElementById("adminSettingsStatus");

        status.textContent =
            "Settings saved.";

        status.style.color = "#1B8A5A";

    });

}


/* =====================================================
   INTERVIEW GUIDE MODAL
===================================================== */

const guideButton =
    document.getElementById("guideButton");

const guideModal =
    document.getElementById("guideModal");

const closeGuide =
    document.getElementById("closeGuide");


guideButton.addEventListener("click", () => {

    guideModal.classList.add("active");

});


closeGuide.addEventListener("click", () => {

    guideModal.classList.remove("active");

});


/* Close modal when clicking outside */

guideModal.addEventListener("click", event => {

    if (event.target === guideModal) {

        guideModal.classList.remove("active");

    }

});


/* =====================================================
   LOGOUT (INTERVIEWER)
===================================================== */

const logoutButton =
    document.getElementById("logoutButton");


logoutButton.addEventListener("click", () => {

    // Hide dashboard

    interviewerDashboard.classList.remove("active");


    // Show login page

    loginPage.style.display = "flex";


    // Clear login fields

    document.getElementById("interviewerId").value = "";

    document.getElementById("interviewerPassword").value = "";


    // Reset sidebar to Dashboard

    sideMenuButtons.forEach(button => {

        button.classList.remove("active");

    });

    contentSections.forEach(section => {

        section.classList.remove("active");

    });


    document
        .querySelector('#interviewerDashboard [data-section="dashboard"]')
        .classList.add("active");


    document
        .getElementById("section-dashboard")
        .classList.add("active");

});


/* =====================================================
   LOGOUT (EMPLOYEE)
===================================================== */

const employeeLogoutButton =
    document.getElementById("employeeLogoutButton");


employeeLogoutButton.addEventListener("click", () => {

    // Hide dashboard

    employeeDashboard.classList.remove("active");


    // Show login page

    loginPage.style.display = "flex";


    // Clear login fields

    document.getElementById("employeeId").value = "";

    document.getElementById("employeePassword").value = "";


    // Reset sidebar to Dashboard

    employeeSideMenuButtons.forEach(button => {

        button.classList.remove("active");

    });

    employeeContentSections.forEach(section => {

        section.classList.remove("active");

    });


    document
        .querySelector('#employeeDashboard [data-emp-section="dashboard"]')
        .classList.add("active");


    document
        .getElementById("emp-section-dashboard")
        .classList.add("active");


    // Reset check-in state

    hasCheckedIn = false;

    checkInTimeLabel.textContent = "--:--";

    attendanceStatusLabel.textContent = "Not Checked In";

    attendanceStatusLabel.classList.remove("status-green");

    attendanceStatusLabel.classList.add("status-orange");

    checkInButton.textContent = "Check In";

    checkInButton.classList.remove("checked-in");

});


/* =====================================================
   LOGOUT (ADMIN)
===================================================== */

const adminLogoutButton =
    document.getElementById("adminLogoutButton");


adminLogoutButton.addEventListener("click", () => {

    // Hide dashboard

    adminDashboard.classList.remove("active");


    // Show login page

    loginPage.style.display = "flex";


    // Clear login fields

    document.getElementById("adminId").value = "";

    document.getElementById("adminPassword").value = "";


    // Reset sidebar to Dashboard

    adminSideMenuButtons.forEach(button => {

        button.classList.remove("active");

    });

    adminContentSections.forEach(section => {

        section.classList.remove("active");

    });


    document
        .querySelector('#adminDashboard [data-admin-section="dashboard"]')
        .classList.add("active");


    document
        .getElementById("admin-section-dashboard")
        .classList.add("active");

});