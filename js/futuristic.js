function openModal() {
    document.getElementById('modalOverlay').classList.add('active');
    document.getElementById('modal').classList.add('active');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.getElementById('modal').classList.remove('active');
}

// Make modal draggable
// let isDragging = false;
// let currentX;
// let currentY;
// let initialX;
// let initialY;
// let xOffset = 0;
// let yOffset = 0;

// const modal = document.getElementById('modal');
// const modalHeader = document.getElementById('modalHeader');

// modalHeader.addEventListener('mousedown', dragStart);
// document.addEventListener('mousemove', drag);
// document.addEventListener('mouseup', dragEnd);

// function dragStart(e) {
//     initialX = e.clientX - xOffset;
//     initialY = e.clientY - yOffset;

//     if (e.target === modalHeader || modalHeader.contains(e.target)) {
//         isDragging = true;
//     }
// }

// function drag(e) {
//     if (isDragging) {
//         e.preventDefault();
//         currentX = e.clientX - initialX;
//         currentY = e.clientY - initialY;
//         xOffset = currentX;
//         yOffset = currentY;

//         modal.style.transform = `translateX(calc(-50% + ${currentX}px)) translateY(${currentY}px)`;
//     }
// }

// function dragEnd(e) {
//     initialX = currentX;
//     initialY = currentY;
//     isDragging = false;
// }

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});