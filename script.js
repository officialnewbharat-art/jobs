const memberData = {
    "1001": {
        name: "Aman Verma",
        photo: "https://i.pravatar.cc/150?u=1001",
        position: "Campus Lead",
        pending: "₹2,500",
        settled: "₹12,000",
        pass: "adda2025"
    },
    "1002": {
        name: "Priya Sharma",
        photo: "https://i.pravatar.cc/150?u=1002",
        position: "Strategy Associate",
        pending: "₹4,200",
        settled: "₹8,500",
        pass: "priya123"
    },
    "1003": {
        name: "Rahul Singh",
        photo: "https://i.pravatar.cc/150?u=1003",
        position: "Marketing Intern",
        pending: "₹1,100",
        settled: "₹3,200",
        pass: "rahul99"
    },
    "1004": {
        name: "Sneha Kapoor",
        photo: "https://i.pravatar.cc/150?u=1004",
        position: "Lead Converter",
        pending: "₹8,000",
        settled: "₹25,000",
        pass: "sneha_work"
    },
    "1005": {
        name: "Vikram Jha",
        photo: "https://i.pravatar.cc/150?u=1005",
        position: "Community Manager",
        pending: "₹500",
        settled: "₹15,700",
        pass: "vikram007"
    }
};

function openLogin() { document.getElementById('loginModal').style.display = 'block'; }
function closeLogin() { document.getElementById('loginModal').style.display = 'none'; }

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('memberId').value;
    const pass = document.getElementById('password').value;

    if (memberData[id] && memberData[id].pass === pass) {
        renderDashboard(memberData[id], id);
    } else {
        document.getElementById('error').innerText = "Invalid Member Credentials";
    }
});

function renderDashboard(user, id) {
    const content = `
        <div class="id-card">
            <div class="card-header">
                <i class="fas fa-check-circle verified-seal"></i>
                <div style="font-weight:700; letter-spacing:2px; font-size:0.8rem; opacity:0.7; margin-bottom:40px;">MEMBER ID: ${id}</div>
            </div>
            <div class="card-body">
                <img src="${user.photo}" class="profile-img">
                <h2 style="margin:15px 0 5px;">${user.name}</h2>
                <div class="status-badge">${user.position}</div>
                <p style="color:#64748b; font-size:0.9rem; margin-top:10px;">Internadda Official Staff</p>
                
                <div class="payment-info">
                    <div>
                        <span class="label">Pending</span>
                        <span class="amount" style="color:#e11d48;">${user.pending}</span>
                    </div>
                    <div>
                        <span class="label">Settled</span>
                        <span class="amount" style="color:#059669;">${user.settled}</span>
                    </div>
                </div>
                
                <div style="margin-top:20px; border-top:1px dashed #cbd5e1; padding-top:15px;">
                    <img src="https://internadda.com/images/logo.jpg" style="height:30px; filter: grayscale(1);">
                </div>
            </div>
        </div>
    `;
    document.getElementById('dashboardContent').innerHTML = content;
    document.getElementById('dashboard').style.display = 'block';
    closeLogin();
}

function logout() { location.reload(); }
function startTest(field) { alert("Starting your " + field + " internship test. Complete it to get your own ID!"); }
