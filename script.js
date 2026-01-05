// Database of 5 Professional Members
const members = {
    "1001": { name: "Aditya Roy", role: "Growth Ambassador", pending: "₹1,500", settled: "₹12,400", photo: "https://i.pravatar.cc/150?u=1", pass: "adda1" },
    "1002": { name: "Megha Gupta", role: "Campus Lead", pending: "₹4,200", settled: "₹8,900", photo: "https://i.pravatar.cc/150?u=2", pass: "adda2" },
    "1003": { name: "Sahil Khan", role: "Lead Specialist", pending: "₹0", settled: "₹5,200", photo: "https://i.pravatar.cc/150?u=3", pass: "adda3" },
    "1004": { name: "Riya Sharma", role: "Conversion Expert", pending: "₹9,800", settled: "₹34,000", photo: "https://i.pravatar.cc/150?u=4", pass: "adda4" },
    "1005": { name: "Arjun Vats", role: "Strategy Intern", pending: "₹750", settled: "₹2,100", photo: "https://i.pravatar.cc/150?u=5", pass: "adda5" }
};

function openLogin() { document.getElementById('loginModal').style.display = 'flex'; }
function closeLogin() { document.getElementById('loginModal').style.display = 'none'; }

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('memberId').value;
    const pass = document.getElementById('password').value;

    if (members[id] && members[id].pass === pass) {
        loadDashboard(members[id], id);
    } else {
        document.getElementById('error').innerText = "❌ Invalid Credentials. Try ID 1001 / adda1";
    }
});

function loadDashboard(user, id) {
    const dashboardHTML = `
        <div class="member-page">
            <div class="id-card">
                <div class="card-banner">
                    <i class="fas fa-check-circle verified-seal"></i>
                    <img src="${user.photo}" class="profile-img">
                </div>
                <div class="card-main">
                    <h2 style="font-size: 1.8rem; font-weight: 800;">${user.name}</h2>
                    <p style="color: #4338ca; font-weight: 700; margin-top: 5px; text-transform: uppercase; font-size: 0.85rem;">${user.role}</p>
                    <p style="color: #64748b; font-size: 0.85rem; margin-top: 10px;">Member ID: ${id} • Internadda Verified</p>
                    
                    <div class="payment-grid">
                        <div class="pay-item">
                            <span style="font-size: 0.7rem; color: #64748b; font-weight: 700;">PENDING</span>
                            <span class="amt" style="color: #dc2626;">${user.pending}</span>
                        </div>
                        <div class="pay-item">
                            <span style="font-size: 0.7rem; color: #64748b; font-weight: 700;">SETTLED</span>
                            <span class="amt" style="color: #059669;">${user.settled}</span>
                        </div>
                    </div>
                    
                    <div style="margin-top: 30px; border-top: 1px dashed #e2e8f0; padding-top: 20px;">
                        <button class="btn-primary" style="width: 100%; background: #0f172a;" onclick="location.reload()">Return to Tasks</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.getElementById('mainContent').innerHTML = dashboardHTML;
    closeLogin();
    window.scrollTo(0, 0);
}

function startInternship(field) {
    alert("Internship in " + field + " started! Complete the task of informing students to receive your personal Member ID.");
}
