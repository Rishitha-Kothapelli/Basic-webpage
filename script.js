// State management
const state = {
    useCustomModal: false
};

// DOM Elements
const ctaBtn = document.getElementById('cta-btn');
const alertToggle = document.getElementById('alert-toggle');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const modalConfirm = document.getElementById('modal-confirm');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    ctaBtn.addEventListener('click', handleCTA);
    alertToggle.addEventListener('change', handleToggle);
    modalClose.addEventListener('click', closeModal);
    modalConfirm.addEventListener('click', closeModal);
    modal.addEventListener('click', handleModalBackdrop);
});

// Handle CTA Button
function handleCTA() {
    if (state.useCustomModal) {
        openModal();
    } else {
        showNativeAlert();
    }
}

// Show Native Alert
function showNativeAlert() {
    alert('🚀 Welcome to DevWeb!\n\nYou\'ve successfully triggered an alert. Explore the features by checking out the cards below!');
}

// Toggle between native alert and custom modal
function handleToggle(e) {
    state.useCustomModal = e.target.checked;
    const label = e.target.nextElementSibling;
    label.textContent = state.useCustomModal ? 'Use Native Alert' : 'Use Custom Modal';
}

// Open Custom Modal
function openModal() {
    modal.classList.add('active');
}

// Close Custom Modal
function closeModal() {
    modal.classList.remove('active');
}

// Close modal on backdrop click
function handleModalBackdrop(e) {
    if (e.target === modal) {
        closeModal();
    }
}
