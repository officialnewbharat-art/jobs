const memberRecords = {
    "1001": { name: "Ram Sharma", role: "Campus Ambassador", pending: "₹1,200", settled: "₹15,000", photo: "https://i.pravatar.cc/150?u=ram", pass: "101112" },
    "1002": { name: "Sneha Patil", role: "Marketing Lead", pending: "₹4,500", settled: "₹9,800", photo: "https://i.pravatar.cc/150?u=sneha", pass: "sneha99" },
    "1003": { name: "Vikram Singh", role: "Lead Generator", pending: "₹0", settled: "₹3,200", photo: "https://i.pravatar.cc/150?u=vikram", pass: "vik123" },
    "1004": { name: "Ananya Iyer", role: "Senior Coordinator", pending: "₹10,000", settled: "₹52,000", photo: "https://i.pravatar.cc/150?u=ananya", pass: "iyear10" },
    "1005": { name: "Rahul Das", role: "Outreach Intern", pending: "₹500", settled: "₹1,400", photo: "https://i.pravatar.cc/150?u=rahul", pass: "rahul05" }
};

function openLogin() { document.getElementById('loginModal').style.display = 'flex'; }
function closeLogin() { document.getElementById('loginModal').style.display = 'none'; }

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('memberId').value;
    const pass = document.getElementById('password').value;

    if (memberRecords[id] && memberRecords[id].pass === pass) {
        generateMemberDashboard(memberRecords[id], id);
    } else {
        document.getElementById('error').innerText = "Incorrect ID or Password.";
    }
});

function generateMemberDashboard(user, id) {
    const dashboard = `
        <div class="member-dashboard">
            <div class="prof-card">
                <div class="prof-header">
                    <i class="fas fa-certificate verified-tag"></i>
                    <img src="${user.photo}" class="prof-img">
                </div>
                <div class="prof-body">
                    <h2 style="font-size: 1.6rem; font-weight: 800;">${user.name}</h2>
                    <p style="color: #4338ca; font-weight: 700; margin-top: 5px;">${user.role}</p>
                    <p style="font-size: 0.8rem; color: #64748b; margin-top: 10px;">MEMBER ID: ${id} • Verified</p>
                    
                    <div class="amt-grid">
                        <div class="amt-item">
                            <p style="font-size: 0.7rem; color: #64748b; font-weight: 700;">PENDING</p>
                            <span style="font-size: 1.2rem; font-weight: 800; color: #dc2626;">${user.pending}</span>
                        </div>
                        <div class="amt-item">
                            <p style="font-size: 0.7rem; color: #64748b; font-weight: 700;">SETTLED</p>
                            <span style="font-size: 1.2rem; font-weight: 800; color: #059669;">${user.settled}</span>
                        </div>
                    </div>
                    <button class="btn-primary" style="margin-top: 25px; width: 100%; background: #0f172a;" onclick="location.reload()">Logout</button>
                </div>
            </div>
        </div>
    `;
    document.getElementById('mainContainer').innerHTML = dashboard;
    closeLogin();
}
