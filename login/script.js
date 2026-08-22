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

        status.style.color = "red";

        return;
    }


    // Successful login

    status.textContent =
        "Login successful!";

    status.style.color = "green";


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

        status.style.color = "red";

        return;
    }


    status.textContent =
        "Employee login successful.";

    status.style.color = "green";


    /*
       Employee dashboard can be connected here later.

       Example:

       window.location.href = "employee.html";
    */

    alert(
        "Employee login successful.\nEmployee dashboard can be connected here."
    );

});


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

        status.style.color = "red";

        return;
    }


    status.textContent =
        "Admin login successful.";

    status.style.color = "green";


    /*
       Admin dashboard can be connected here later.

       Example:

       window.location.href = "admin.html";
    */

    alert(
        "Admin login successful.\nAdmin dashboard can be connected here."
    );

});


/* =====================================================
   SIDEBAR MODULE NAVIGATION
===================================================== */

const sideMenuButtons =
    document.querySelectorAll(".side-menu");

const contentSections =
    document.querySelectorAll(".content-section");


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
   LIVE CLOCK
===================================================== */

const currentTime =
    document.getElementById("currentTime");


function updateClock() {

    const now = new Date();

    let hours = now.getHours();

    let minutes = now.getMinutes();

    let seconds = now.getSeconds();

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    hours = hours ? hours : 12;

    hours = String(hours).padStart(2, "0");

    minutes = String(minutes).padStart(2, "0");

    seconds = String(seconds).padStart(2, "0");


    currentTime.textContent =
        `${hours}:${minutes}:${seconds} ${ampm}`;

}


updateClock();

setInterval(updateClock, 1000);


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
   LOGOUT
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
        .querySelector('[data-section="dashboard"]')
        .classList.add("active");


    document
        .getElementById("section-dashboard")
        .classList.add("active");

});