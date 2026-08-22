/* =====================================================
   LOGIN TAB SWITCHING
===================================================== */

const loginTabs = document.querySelectorAll(".tab");
const loginPanels = document.querySelectorAll(".login-panel");

loginTabs.forEach(tab => {
    tab.addEventListener("click", () => {

        const targetPanel = tab.dataset.panel;

        loginTabs.forEach(item => {
            item.classList.remove("active");
        });

        loginPanels.forEach(panel => {
            panel.classList.remove("active");
        });

        tab.classList.add("active");

        const panel = document.getElementById(targetPanel);

        if (panel) {
            panel.classList.add("active");
        }
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

        if (!passwordInput) return;

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

if (interviewerForm) {

    interviewerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const id =
            document.getElementById("interviewerId").value.trim();

        const password =
            document.getElementById("interviewerPassword").value.trim();

        const status =
            document.getElementById("interviewerStatus");

        if (id === "" || password === "") {

            status.textContent =
                "Please enter both ID and password.";

            status.style.color = "#C23A3A";

            return;
        }

        status.textContent =
            "Login successful!";

        status.style.color = "#1B8A5A";

        if (loggedInterviewerId)
            loggedInterviewerId.textContent = id;

        if (dashboardInterviewerId)
            dashboardInterviewerId.textContent = id;

        if (profileId)
            profileId.textContent = id;

        loginPage.style.display = "none";

        interviewerDashboard.classList.add("active");

    });
}


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

if (employeeForm) {

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

        if (loggedEmployeeId)
            loggedEmployeeId.textContent = id;

        if (dashboardEmployeeId)
            dashboardEmployeeId.textContent = id;

        if (profileEmployeeId)
            profileEmployeeId.textContent = id;

        loginPage.style.display = "none";

        employeeDashboard.classList.add("active");

    });
}


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

if (adminForm) {

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

        if (loggedAdminId)
            loggedAdminId.textContent = id;

        if (dashboardAdminId)
            dashboardAdminId.textContent = id;

        if (profileAdminId)
            profileAdminId.textContent = id;

        loginPage.style.display = "none";

        adminDashboard.classList.add("active");

    });
}


/* =====================================================
   SIDEBAR MODULE NAVIGATION - INTERVIEWER
===================================================== */

const sideMenuButtons =
    document.querySelectorAll("#interviewerDashboard .side-menu");

const contentSections =
    document.querySelectorAll("#interviewerDashboard .content-section");

sideMenuButtons.forEach(button => {

    button.addEventListener("click", () => {

        const sectionName =
            button.dataset.section;

        sideMenuButtons.forEach(item => {
            item.classList.remove("active");
        });

        contentSections.forEach(section => {
            section.classList.remove("active");
        });

        button.classList.add("active");

        const selectedSection =
            document.getElementById(
                "section-" + sectionName
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
   SIDEBAR MODULE NAVIGATION - EMPLOYEE
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
   SIDEBAR MODULE NAVIGATION - ADMIN
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


/* =====================================================
   EMPLOYEE ANNOUNCEMENT SHORTCUT
===================================================== */

const employeeAnnouncementButton =
    document.getElementById("employeeAnnouncementButton");

if (employeeAnnouncementButton) {

    employeeAnnouncementButton.addEventListener("click", () => {

        const announcementsButton =
            document.querySelector(
                '[data-emp-section="announcements"]'
            );

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

    const ampm =
        hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    hours =
        String(hours).padStart(2, "0");

    minutes =
        String(minutes).padStart(2, "0");

    seconds =
        String(seconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds} ${ampm}`;

}


function updateClock() {

    const now = new Date();

    const formatted =
        formatClock(now);

    if (currentTime)
        currentTime.textContent = formatted;

    if (employeeCurrentTime)
        employeeCurrentTime.textContent = formatted;

    if (adminCurrentTime)
        adminCurrentTime.textContent = formatted;

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

        if (checkInTimeLabel) {

            checkInTimeLabel.textContent =
                formatClock(now).replace(
                    /:\d\d( [AP]M)/,
                    "$1"
                );

        }

        if (attendanceStatusLabel) {

            attendanceStatusLabel.textContent =
                "Checked In";

            attendanceStatusLabel.classList.remove(
                "status-orange"
            );

            attendanceStatusLabel.classList.add(
                "status-green"
            );

        }

        checkInButton.textContent =
            "Checked In";

        checkInButton.classList.add(
            "checked-in"
        );

    });

}


/* =====================================================
   EMPLOYEE LEAVE REQUEST FORM
===================================================== */

const leaveForm =
    document.getElementById("leaveForm");

if (leaveForm) {

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

        const historyBody =
            document.getElementById("leaveHistoryBody");

        if (historyBody) {

            const row =
                document.createElement("tr");

            row.innerHTML = `
                <td>${type}</td>
                <td>${from}</td>
                <td>${to}</td>
                <td>
                    <span class="badge progress">
                        Pending
                    </span>
                </td>
            `;

            historyBody.prepend(row);

        }

        leaveForm.reset();

    });

}


/* =====================================================
   GENERIC MODAL HELPER
===================================================== */

function setupModal(modalId, closeButtonId) {

    const modal =
        document.getElementById(modalId);

    const closeButton =
        document.getElementById(closeButtonId);

    if (!modal) {
        return null;
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

    const parts =
        name.trim().split(/\s+/);

    const first =
        parts[0] ? parts[0][0] : "";

    const last =
        parts.length > 1
            ? parts[parts.length - 1][0]
            : "";

    return (first + last).toUpperCase();

}


/* =====================================================
   INTERVIEWER EDIT PROFILE
===================================================== */

const interviewerEditModalEl =
    setupModal(
        "interviewerEditModal",
        "closeInterviewerEdit"
    );

const interviewerEditButton =
    document.getElementById("interviewerEditButton");

if (interviewerEditButton) {

    interviewerEditButton.addEventListener("click", () => {

        document.getElementById(
            "interviewerEditName"
        ).value =
            document.getElementById(
                "interviewerNameProfile"
            ).textContent.trim();

        document.getElementById(
            "interviewerEditEmail"
        ).value =
            document.getElementById(
                "interviewerEmailField"
            ).textContent.trim();

        document.getElementById(
            "interviewerEditDept"
        ).value =
            document.getElementById(
                "interviewerDeptField"
            ).textContent.trim();

        document.getElementById(
            "interviewerEditPhone"
        ).value =
            document.getElementById(
                "interviewerPhoneField"
            ).textContent.trim();

        document.getElementById(
            "interviewerEditExperience"
        ).value =
            document.getElementById(
                "interviewerExperienceField"
            ).textContent.trim();

        document.getElementById(
            "interviewerEditStatus"
        ).textContent = "";

        openModal(interviewerEditModalEl);

    });

}


const interviewerEditForm =
    document.getElementById("interviewerEditForm");

if (interviewerEditForm) {

    interviewerEditForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document.getElementById(
                    "interviewerEditName"
                ).value.trim();

            const email =
                document.getElementById(
                    "interviewerEditEmail"
                ).value.trim();

            const dept =
                document.getElementById(
                    "interviewerEditDept"
                ).value.trim();

            const phone =
                document.getElementById(
                    "interviewerEditPhone"
                ).value.trim();

            const experience =
                document.getElementById(
                    "interviewerEditExperience"
                ).value.trim();

            if (name === "" || email === "") {

                const status =
                    document.getElementById(
                        "interviewerEditStatus"
                    );

                status.textContent =
                    "Name and email are required.";

                status.style.color =
                    "#C23A3A";

                return;

            }

            const initials =
                initialsFromName(name);

            document.getElementById(
                "interviewerNameDash"
            ).textContent = name;

            document.getElementById(
                "interviewerEmailDash"
            ).textContent = email;

            document.getElementById(
                "interviewerDeptDash"
            ).textContent = dept;

            document.getElementById(
                "interviewerPhoneDash"
            ).textContent = phone;

            document.getElementById(
                "interviewerAvatarDash"
            ).textContent = initials;

            document.getElementById(
                "interviewerNameProfile"
            ).textContent = name;

            document.getElementById(
                "interviewerNameField"
            ).textContent = name;

            document.getElementById(
                "interviewerEmailField"
            ).textContent = email;

            document.getElementById(
                "interviewerDeptField"
            ).textContent = dept;

            document.getElementById(
                "interviewerPhoneField"
            ).textContent = phone;

            document.getElementById(
                "interviewerExperienceField"
            ).textContent = experience;

            document.getElementById(
                "interviewerAvatarProfile"
            ).textContent = initials;

            if (interviewerEditModalEl) {
                interviewerEditModalEl.classList.remove("active");
            }

        }
    );

}


/* =====================================================
   EMPLOYEE EDIT PROFILE
===================================================== */

const employeeEditModalEl =
    setupModal(
        "employeeEditModal",
        "closeEmployeeEdit"
    );

const employeeEditButton =
    document.getElementById("employeeEditButton");

if (employeeEditButton) {

    employeeEditButton.addEventListener("click", () => {

        document.getElementById(
            "employeeEditName"
        ).value =
            document.getElementById(
                "employeeNameProfile"
            ).textContent.trim();

        document.getElementById(
            "employeeEditEmail"
        ).value =
            document.getElementById(
                "employeeEmailField"
            ).textContent.trim();

        document.getElementById(
            "employeeEditDept"
        ).value =
            document.getElementById(
                "employeeDeptField"
            ).textContent.trim();

        document.getElementById(
            "employeeEditPhone"
        ).value =
            document.getElementById(
                "employeePhoneField"
            ).textContent.trim();

        document.getElementById(
            "employeeEditType"
        ).value =
            document.getElementById(
                "employeeTypeField"
            ).textContent.trim();

        document.getElementById(
            "employeeEditStatus"
        ).textContent = "";

        openModal(employeeEditModalEl);

    });

}


const employeeEditForm =
    document.getElementById("employeeEditForm");

if (employeeEditForm) {

    employeeEditForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document.getElementById(
                    "employeeEditName"
                ).value.trim();

            const email =
                document.getElementById(
                    "employeeEditEmail"
                ).value.trim();

            const dept =
                document.getElementById(
                    "employeeEditDept"
                ).value.trim();

            const phone =
                document.getElementById(
                    "employeeEditPhone"
                ).value.trim();

            const type =
                document.getElementById(
                    "employeeEditType"
                ).value;

            if (name === "" || email === "") {

                const status =
                    document.getElementById(
                        "employeeEditStatus"
                    );

                status.textContent =
                    "Name and email are required.";

                status.style.color =
                    "#C23A3A";

                return;

            }

            const initials =
                initialsFromName(name);

            document.getElementById(
                "employeeNameDash"
            ).textContent = name;

            document.getElementById(
                "employeeEmailDash"
            ).textContent = email;

            document.getElementById(
                "employeeDeptDash"
            ).textContent = dept;

            document.getElementById(
                "employeePhoneDash"
            ).textContent = phone;

            document.getElementById(
                "employeeAvatarDash"
            ).textContent = initials;

            document.getElementById(
                "employeeNameProfile"
            ).textContent = name;

            document.getElementById(
                "employeeNameField"
            ).textContent = name;

            document.getElementById(
                "employeeEmailField"
            ).textContent = email;

            document.getElementById(
                "employeeDeptField"
            ).textContent = dept;

            document.getElementById(
                "employeePhoneField"
            ).textContent = phone;

            document.getElementById(
                "employeeTypeField"
            ).textContent = type;

            document.getElementById(
                "employeeAvatarProfile"
            ).textContent = initials;

            if (employeeEditModalEl) {
                employeeEditModalEl.classList.remove("active");
            }

        }
    );

}


/* =====================================================
   ADMIN EDIT PROFILE
===================================================== */

const adminEditModalEl =
    setupModal(
        "adminEditModal",
        "closeAdminEdit"
    );

const adminEditButton =
    document.getElementById("adminEditButton");

if (adminEditButton) {

    adminEditButton.addEventListener("click", () => {

        document.getElementById(
            "adminEditName"
        ).value =
            document.getElementById(
                "adminNameProfile"
            ).textContent.trim();

        document.getElementById(
            "adminEditEmail"
        ).value =
            document.getElementById(
                "adminEmailField"
            ).textContent.trim();

        document.getElementById(
            "adminEditDept"
        ).value =
            document.getElementById(
                "adminDeptField"
            ).textContent.trim();

        document.getElementById(
            "adminEditPhone"
        ).value =
            document.getElementById(
                "adminPhoneField"
            ).textContent.trim();

        document.getElementById(
            "adminEditAccess"
        ).value =
            document.getElementById(
                "adminAccessField"
            ).textContent.trim();

        document.getElementById(
            "adminEditStatus"
        ).textContent = "";

        openModal(adminEditModalEl);

    });

}


const adminEditForm =
    document.getElementById("adminEditForm");

if (adminEditForm) {

    adminEditForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document.getElementById(
                    "adminEditName"
                ).value.trim();

            const email =
                document.getElementById(
                    "adminEditEmail"
                ).value.trim();

            const dept =
                document.getElementById(
                    "adminEditDept"
                ).value.trim();

            const phone =
                document.getElementById(
                    "adminEditPhone"
                ).value.trim();

            const access =
                document.getElementById(
                    "adminEditAccess"
                ).value;

            if (name === "" || email === "") {

                const status =
                    document.getElementById(
                        "adminEditStatus"
                    );

                status.textContent =
                    "Name and email are required.";

                status.style.color =
                    "#C23A3A";

                return;

            }

            const initials =
                initialsFromName(name);

            document.getElementById(
                "adminNameDash"
            ).textContent = name;

            document.getElementById(
                "adminEmailDash"
            ).textContent = email;

            document.getElementById(
                "adminDeptDash"
            ).textContent = dept;

            document.getElementById(
                "adminPhoneDash"
            ).textContent = phone;

            document.getElementById(
                "adminAvatarDash"
            ).textContent = initials;

            document.getElementById(
                "adminNameProfile"
            ).textContent = name;

            document.getElementById(
                "adminNameField"
            ).textContent = name;

            document.getElementById(
                "adminEmailField"
            ).textContent = email;

            document.getElementById(
                "adminDeptField"
            ).textContent = dept;

            document.getElementById(
                "adminPhoneField"
            ).textContent = phone;

            document.getElementById(
                "adminAccessField"
            ).textContent = access;

            document.getElementById(
                "adminAvatarProfile"
            ).textContent = initials;

            if (adminEditModalEl) {
                adminEditModalEl.classList.remove("active");
            }

        }
    );

}


/* =====================================================
   EMPLOYEE DATA STORE - ADMIN
===================================================== */

const TOTAL_WORKING_DAYS = 22;

const employeeData = {

    EMP001: {
        name: "Priya Menon",
        dept: "Product Design",
        role: "Senior Product Designer",
        status: "Active",
        present: 18,
        todayStatus: null
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
   MARK TODAY'S ATTENDANCE - ADMIN
===================================================== */

const attendanceMarkTableBody =
    document.getElementById("employeesTableBody");


function renderAttendanceBadge(id) {

    const employee =
        employeeData[id];

    if (!employee || !attendanceMarkTableBody) {
        return;
    }

    const row =
        attendanceMarkTableBody.querySelector(
            `tr[data-emp-id="${id}"]`
        );

    if (!row) {
        return;
    }

    const badge =
        row.querySelector(".attendance-badge");

    const buttons =
        row.querySelectorAll(".attendance-btn");

    if (badge) {

        if (employee.todayStatus) {

            badge.textContent =
                employee.todayStatus;

            badge.className =
                "badge attendance-badge " +
                employee.todayStatus.toLowerCase();

        } else {

            badge.textContent =
                "Not Marked";

            badge.className =
                "badge unmarked attendance-badge";

        }

    }

    buttons.forEach(button => {

        button.classList.toggle(
            "is-active",
            button.dataset.status ===
            employee.todayStatus
        );

    });

}


function markAttendance(id, status) {

    const employee =
        employeeData[id];

    if (!employee) {
        return;
    }

    const previousStatus =
        employee.todayStatus;

    const nextStatus =
        previousStatus === status
            ? null
            : status;

    if (
        previousStatus === "Present" &&
        nextStatus !== "Present"
    ) {

        employee.present =
            Math.max(
                employee.present - 1,
                0
            );

    }

    if (
        nextStatus === "Present" &&
        previousStatus !== "Present"
    ) {

        employee.present =
            Math.min(
                employee.present + 1,
                TOTAL_WORKING_DAYS
            );

    }

    employee.todayStatus =
        nextStatus;

    renderAttendanceBadge(id);

}


if (attendanceMarkTableBody) {

    attendanceMarkTableBody.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    ".attendance-btn"
                );

            if (!button) {
                return;
            }

            const row =
                button.closest(
                    "tr[data-emp-id]"
                );

            if (!row) {
                return;
            }

            const id =
                row.dataset.empId;

            markAttendance(
                id,
                button.dataset.status
            );

        }
    );

}


/* =====================================================
   VIEW EMPLOYEE MODAL - ADMIN
===================================================== */

let viewEmployeeChart = null;

const viewEmployeeModalEl =
    setupModal(
        "viewEmployeeModal",
        "closeViewEmployee"
    );

const employeesListTableBody =
    document.getElementById(
        "employeesListTableBody"
    );


function openViewEmployeeModal(id) {

    const employee =
        employeeData[id];

    if (!employee) {
        return;
    }

    const present =
        employee.present;

    const absent =
        Math.max(
            TOTAL_WORKING_DAYS - present,
            0
        );

    const initials =
        initialsFromName(employee.name);

    const avatar =
        document.getElementById(
            "viewEmployeeAvatar"
        );

    if (avatar)
        avatar.textContent = initials;

    const name =
        document.getElementById(
            "viewEmployeeName"
        );

    if (name)
        name.textContent = employee.name;

    const role =
        document.getElementById(
            "viewEmployeeRole"
        );

    if (role)
        role.textContent = employee.role;

    const idElement =
        document.getElementById(
            "viewEmployeeId"
        );

    if (idElement)
        idElement.textContent = id;

    const dept =
        document.getElementById(
            "viewEmployeeDept"
        );

    if (dept)
        dept.textContent = employee.dept;

    const status =
        document.getElementById(
            "viewEmployeeStatus"
        );

    if (status)
        status.textContent = employee.status;

    const presentElement =
        document.getElementById(
            "viewEmployeePresent"
        );

    if (presentElement)
        presentElement.textContent =
            `${present} / ${TOTAL_WORKING_DAYS}`;

    const todayElement =
        document.getElementById(
            "viewEmployeeToday"
        );

    if (todayElement)
        todayElement.textContent =
            employee.todayStatus ||
            "Not Marked";

    const chartCanvas =
        document.getElementById(
            "viewEmployeeChart"
        );

    if (
        chartCanvas &&
        typeof Chart !== "undefined"
    ) {

        if (viewEmployeeChart) {
            viewEmployeeChart.destroy();
        }

        viewEmployeeChart =
            new Chart(
                chartCanvas,
                {
                    type: "doughnut",

                    data: {
                        labels: [
                            "Present",
                            "Absent"
                        ],

                        datasets: [{
                            data: [
                                present,
                                absent
                            ],

                            backgroundColor: [
                                "#1B8A5A",
                                "#C23A3A"
                            ],

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

                                    font: {
                                        family:
                                            "IBM Plex Sans",
                                        size: 12
                                    },

                                    boxWidth: 12,
                                    padding: 16
                                }
                            }
                        }
                    }
                }
            );

    }

    openModal(viewEmployeeModalEl);

}


if (employeesListTableBody) {

    employeesListTableBody.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    ".view-button"
                );

            if (!button) {
                return;
            }

            const row =
                button.closest("tr");

            if (!row) {
                return;
            }

            const id =
                row.dataset.empId ||
                row.children[0]
                    .textContent
                    .trim();

            openViewEmployeeModal(id);

        }
    );

}


/* =====================================================
   ADMIN QUICK ACTIONS - ADD EMPLOYEE
===================================================== */

const addEmployeeModalEl =
    setupModal(
        "addEmployeeModal",
        "closeAddEmployee"
    );

const addEmployeeButton =
    document.getElementById(
        "addEmployeeButton"
    );

if (addEmployeeButton) {

    addEmployeeButton.addEventListener(
        "click",
        () => {

            const status =
                document.getElementById(
                    "addEmployeeStatus"
                );

            if (status)
                status.textContent = "";

            openModal(addEmployeeModalEl);

        }
    );

}


const addEmployeeForm =
    document.getElementById(
        "addEmployeeForm"
    );

if (addEmployeeForm) {

    addEmployeeForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const id =
                document.getElementById(
                    "newEmployeeId"
                ).value.trim();

            const name =
                document.getElementById(
                    "newEmployeeName"
                ).value.trim();

            const dept =
                document.getElementById(
                    "newEmployeeDept"
                ).value.trim();

            const role =
                document.getElementById(
                    "newEmployeeRole"
                ).value.trim();

            const status =
                document.getElementById(
                    "newEmployeeStatus"
                ).value;

            const statusLabel =
                document.getElementById(
                    "addEmployeeStatus"
                );

            if (
                id === "" ||
                name === "" ||
                dept === "" ||
                role === ""
            ) {

                statusLabel.textContent =
                    "Please fill in every field.";

                statusLabel.style.color =
                    "#C23A3A";

                return;
            }

            if (employeeData[id]) {

                statusLabel.textContent =
                    "That Employee ID already exists.";

                statusLabel.style.color =
                    "#C23A3A";

                return;
            }

            employeeData[id] = {

                name,
                dept,
                role,
                status,

                present: 0,

                todayStatus: null

            };

            const badgeClass =
                status === "Active"
                    ? "upcoming"
                    : "progress";

            if (employeesListTableBody) {

                const listRow =
                    document.createElement("tr");

                listRow.dataset.empId =
                    id;

                listRow.innerHTML = `
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${dept}</td>
                    <td>${role}</td>
                    <td>
                        <span class="badge ${badgeClass}">
                            ${status}
                        </span>
                    </td>
                    <td>
                        <button class="view-button">
                            View
                        </button>
                    </td>
                `;

                employeesListTableBody.appendChild(
                    listRow
                );

            }

            if (attendanceMarkTableBody) {

                const markRow =
                    document.createElement("tr");

                markRow.dataset.empId =
                    id;

                markRow.innerHTML = `
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${dept}</td>
                    <td>${role}</td>
                    <td>
                        <span class="badge unmarked attendance-badge">
                            Not Marked
                        </span>
                    </td>
                    <td>
                        <div class="attendance-actions">

                            <button
                                class="attendance-btn present"
                                data-status="Present"
                                title="Mark Present">
                                P
                            </button>

                            <button
                                class="attendance-btn absent"
                                data-status="Absent"
                                title="Mark Absent">
                                A
                            </button>

                            <button
                                class="attendance-btn leave"
                                data-status="Leave"
                                title="Mark Leave">
                                L
                            </button>

                        </div>
                    </td>
                `;

                attendanceMarkTableBody.appendChild(
                    markRow
                );

            }

            addEmployeeForm.reset();

            if (addEmployeeModalEl) {
                addEmployeeModalEl.classList.remove(
                    "active"
                );
            }

        }
    );

}


/* =====================================================
   ADMIN QUICK ACTIONS - ADD INTERVIEWER
===================================================== */

const addInterviewerModalEl =
    setupModal(
        "addInterviewerModal",
        "closeAddInterviewer"
    );

const addInterviewerButton =
    document.getElementById(
        "addInterviewerButton"
    );

if (addInterviewerButton) {

    addInterviewerButton.addEventListener(
        "click",
        () => {

            const status =
                document.getElementById(
                    "addInterviewerStatus"
                );

            if (status)
                status.textContent = "";

            openModal(
                addInterviewerModalEl
            );

        }
    );

}


const addInterviewerForm =
    document.getElementById(
        "addInterviewerForm"
    );

if (addInterviewerForm) {

    addInterviewerForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const id =
                document.getElementById(
                    "newInterviewerId"
                ).value.trim();

            const name =
                document.getElementById(
                    "newInterviewerName"
                ).value.trim();

            const dept =
                document.getElementById(
                    "newInterviewerDept"
                ).value.trim();

            const status =
                document.getElementById(
                    "newInterviewerStatus"
                ).value;

            const statusLabel =
                document.getElementById(
                    "addInterviewerStatus"
                );

            if (
                id === "" ||
                name === "" ||
                dept === ""
            ) {

                statusLabel.textContent =
                    "Please fill in every field.";

                statusLabel.style.color =
                    "#C23A3A";

                return;
            }

            const badgeClass =
                status === "Active"
                    ? "upcoming"
                    : "progress";

            const interviewersTableBody =
                document.getElementById(
                    "interviewersTableBody"
                );

            if (interviewersTableBody) {

                const row =
                    document.createElement("tr");

                row.innerHTML = `
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${dept}</td>
                    <td>0</td>
                    <td>
                        <span class="badge ${badgeClass}">
                            ${status}
                        </span>
                    </td>
                `;

                interviewersTableBody.appendChild(
                    row
                );

            }

            addInterviewerForm.reset();

            if (addInterviewerModalEl) {
                addInterviewerModalEl.classList.remove(
                    "active"
                );
            }

        }
    );

}


/* =====================================================
   ADMIN SETTINGS FORM
===================================================== */

const adminSettingsForm =
    document.getElementById(
        "adminSettingsForm"
    );

if (adminSettingsForm) {

    adminSettingsForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const status =
                document.getElementById(
                    "adminSettingsStatus"
                );

            if (status) {

                status.textContent =
                    "Settings saved.";

                status.style.color =
                    "#1B8A5A";

            }

        }
    );

}


/* =====================================================
   INTERVIEW GUIDE MODAL
===================================================== */

const guideButton =
    document.getElementById(
        "guideButton"
    );

const guideModal =
    document.getElementById(
        "guideModal"
    );

const closeGuide =
    document.getElementById(
        "closeGuide"
    );

if (guideButton && guideModal) {

    guideButton.addEventListener(
        "click",
        () => {

            guideModal.classList.add(
                "active"
            );

        }
    );

}

if (closeGuide && guideModal) {

    closeGuide.addEventListener(
        "click",
        () => {

            guideModal.classList.remove(
                "active"
            );

        }
    );

}

if (guideModal) {

    guideModal.addEventListener(
        "click",
        event => {

            if (event.target === guideModal) {

                guideModal.classList.remove(
                    "active"
                );

            }

        }
    );

}


/* =====================================================
   LOGOUT - INTERVIEWER
===================================================== */

const logoutButton =
    document.getElementById(
        "logoutButton"
    );

if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        () => {

            interviewerDashboard.classList.remove(
                "active"
            );

            loginPage.style.display =
                "flex";

            document.getElementById(
                "interviewerId"
            ).value = "";

            document.getElementById(
                "interviewerPassword"
            ).value = "";

            sideMenuButtons.forEach(
                button => {
                    button.classList.remove(
                        "active"
                    );
                }
            );

            contentSections.forEach(
                section => {
                    section.classList.remove(
                        "active"
                    );
                }
            );

            const dashboardButton =
                document.querySelector(
                    '#interviewerDashboard [data-section="dashboard"]'
                );

            const dashboardSection =
                document.getElementById(
                    "section-dashboard"
                );

            if (dashboardButton)
                dashboardButton.classList.add(
                    "active"
                );

            if (dashboardSection)
                dashboardSection.classList.add(
                    "active"
                );

        }
    );

}


/* =====================================================
   LOGOUT - EMPLOYEE
===================================================== */

const employeeLogoutButton =
    document.getElementById(
        "employeeLogoutButton"
    );

if (employeeLogoutButton) {

    employeeLogoutButton.addEventListener(
        "click",
        () => {

            employeeDashboard.classList.remove(
                "active"
            );

            loginPage.style.display =
                "flex";

            document.getElementById(
                "employeeId"
            ).value = "";

            document.getElementById(
                "employeePassword"
            ).value = "";

            employeeSideMenuButtons.forEach(
                button => {
                    button.classList.remove(
                        "active"
                    );
                }
            );

            employeeContentSections.forEach(
                section => {
                    section.classList.remove(
                        "active"
                    );
                }
            );

            const dashboardButton =
                document.querySelector(
                    '#employeeDashboard [data-emp-section="dashboard"]'
                );

            const dashboardSection =
                document.getElementById(
                    "emp-section-dashboard"
                );

            if (dashboardButton)
                dashboardButton.classList.add(
                    "active"
                );

            if (dashboardSection)
                dashboardSection.classList.add(
                    "active"
                );

            hasCheckedIn = false;

            if (checkInTimeLabel)
                checkInTimeLabel.textContent =
                    "--:--";

            if (attendanceStatusLabel) {

                attendanceStatusLabel.textContent =
                    "Not Checked In";

                attendanceStatusLabel.classList.remove(
                    "status-green"
                );

                attendanceStatusLabel.classList.add(
                    "status-orange"
                );

            }

            if (checkInButton) {

                checkInButton.textContent =
                    "Check In";

                checkInButton.classList.remove(
                    "checked-in"
                );

            }

        }
    );

}


/* =====================================================
   LOGOUT - ADMIN
===================================================== */

const adminLogoutButton =
    document.getElementById(
        "adminLogoutButton"
    );

if (adminLogoutButton) {

    adminLogoutButton.addEventListener(
        "click",
        () => {

            adminDashboard.classList.remove(
                "active"
            );

            loginPage.style.display =
                "flex";

            document.getElementById(
                "adminId"
            ).value = "";

            document.getElementById(
                "adminPassword"
            ).value = "";

            adminSideMenuButtons.forEach(
                button => {
                    button.classList.remove(
                        "active"
                    );
                }
            );

            adminContentSections.forEach(
                section => {
                    section.classList.remove(
                        "active"
                    );
                }
            );

            const dashboardButton =
                document.querySelector(
                    '#adminDashboard [data-admin-section="dashboard"]'
                );

            const dashboardSection =
                document.getElementById(
                    "admin-section-dashboard"
                );

            if (dashboardButton)
                dashboardButton.classList.add(
                    "active"
                );

            if (dashboardSection)
                dashboardSection.classList.add(
                    "active"
                );

        }
    );

}


/* =====================================================
   FASTAPI BACKEND CONNECTION
===================================================== */

const API_URL =
    "http://127.0.0.1:8000";


/* =====================================================
   TEST BACKEND CONNECTION
===================================================== */

async function testBackendConnection() {

    try {

        const response =
            await fetch(`${API_URL}/`);

        if (!response.ok) {
            throw new Error(
                "Backend returned an error"
            );
        }

        const data =
            await response.json();

        console.log(
            "FASTAPI CONNECTED:",
            data
        );

        return true;

    } catch (error) {

        console.error(
            "FASTAPI CONNECTION FAILED:",
            error
        );

        return false;

    }

}


/* =====================================================
   LOAD DASHBOARD FROM FASTAPI
===================================================== */

async function loadDashboardData() {

    try {

        const response =
            await fetch(
                `${API_URL}/dashboard`
            );

        if (!response.ok) {
            throw new Error(
                "Dashboard API failed"
            );
        }

        const data =
            await response.json();

        console.log(
            "Dashboard data from MySQL:",
            data
        );

        return data;

    } catch (error) {

        console.error(
            "Dashboard API error:",
            error
        );

        return null;

    }

}


/* =====================================================
   LOAD EMPLOYEES FROM FASTAPI
===================================================== */

async function loadEmployeesFromBackend() {

    try {

        const response =
            await fetch(
                `${API_URL}/employees`
            );

        if (!response.ok) {
            throw new Error(
                "Employees API failed"
            );
        }

        const employees =
            await response.json();

        console.log(
            "Employees from MySQL:",
            employees
        );

        return employees;

    } catch (error) {

        console.error(
            "Employee API error:",
            error
        );

        return [];

    }

}


/* =====================================================
   LOAD ATTENDANCE FROM FASTAPI
===================================================== */

async function loadAttendanceFromBackend() {

    try {

        const response =
            await fetch(
                `${API_URL}/attendance`
            );

        if (!response.ok) {
            throw new Error(
                "Attendance API failed"
            );
        }

        const attendance =
            await response.json();

        console.log(
            "Attendance from MySQL:",
            attendance
        );

        return attendance;

    } catch (error) {

        console.error(
            "Attendance API error:",
            error
        );

        return [];

    }

}


/* =====================================================
   LOAD LEAVES FROM FASTAPI
===================================================== */

async function loadLeavesFromBackend() {

    try {

        const response =
            await fetch(
                `${API_URL}/leaves`
            );

        if (!response.ok) {
            throw new Error(
                "Leaves API failed"
            );
        }

        const leaves =
            await response.json();

        console.log(
            "Leaves from MySQL:",
            leaves
        );

        return leaves;

    } catch (error) {

        console.error(
            "Leaves API error:",
            error
        );

        return [];

    }

}


/* =====================================================
   LOAD PAYROLL FROM FASTAPI
===================================================== */

async function loadPayrollFromBackend() {

    try {

        const response =
            await fetch(
                `${API_URL}/payroll`
            );

        if (!response.ok) {
            throw new Error(
                "Payroll API failed"
            );
        }

        const payroll =
            await response.json();

        console.log(
            "Payroll from MySQL:",
            payroll
        );

        return payroll;

    } catch (error) {

        console.error(
            "Payroll API error:",
            error
        );

        return [];

    }

}


/* =====================================================
   INITIAL BACKEND LOAD
===================================================== */

async function initializeBackend() {

    console.log(
        "Connecting to HRMS FastAPI backend..."
    );

    const connected =
        await testBackendConnection();

    if (!connected) {

        console.warn(
            "Backend is not running. Start FastAPI with:"
        );

        console.warn(
            "uvicorn app.main:app --reload"
        );

        return;

    }

    await loadDashboardData();

    await loadEmployeesFromBackend();

    await loadAttendanceFromBackend();

    await loadLeavesFromBackend();

    await loadPayrollFromBackend();

    console.log(
        "HRMS frontend successfully connected to FastAPI."
    );

}


/* Start backend connection */

initializeBackend();