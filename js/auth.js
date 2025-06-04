// Initialize Google Sign-In
function handleCredentialResponse(response) {
    // Handle the response
    const user = {
        email: response.credential.email,
        name: response.credential.name,
        picture: response.credential.picture
    };
    
    // Store user info in localStorage
    localStorage.setItem('user', JSON.stringify(user));
    
    // Update UI
    updateAuthUI(user);
}

// Update UI after authentication
function updateAuthUI(user) {
    const authButtons = document.querySelector('.auth-buttons');
    if (user) {
        // Remove sign-in button
        authButtons.innerHTML = '';
        
        // Add welcome message
        const welcomeDiv = document.createElement('div');
        welcomeDiv.className = 'welcome-message';
        welcomeDiv.innerHTML = `
            <img src="${user.picture}" alt="${user.name}" class="user-avatar">
            <span>Welcome, ${user.name}!</span>
        `;
        authButtons.appendChild(welcomeDiv);
    } else {
        // Show sign-in button
        authButtons.innerHTML = `
            <div id="g_id_onload"
                data-client_id="51130641645-55rohrtlpi228fu4i5nd410mg5td6vch.apps.googleusercontent.com"
                data-context="signin"
                data-ux_mode="popup"
                data-callback="handleCredentialResponse"
                data-itp_support="true">
            </div>
            <div class="g_id_signin"
                data-type="standard"
                data-shape="rectangular"
                data-theme="outline"
                data-text="signin_with"
                data-size="large"
                data-logo_alignment="left">
            </div>
        `;
    }
}

// Check if user is already signed in
document.addEventListener('DOMContentLoaded', () => {
    const user = localStorage.getItem('user');
    if (user) {
        updateAuthUI(JSON.parse(user));
    }
});
