// تتبع المهام المكتملة
let completedTasks = 0;
const totalTasks = 7;

function toggleTask(button) {
    const row = button.closest('tr');
    const statusSpan = row.querySelector('.status');
    const taskContent = row.querySelector('.task-content');
    
    if (statusSpan.classList.contains('pending')) {
        // Mark as completed
        statusSpan.textContent = 'Terminé';
        statusSpan.classList.remove('pending');
        statusSpan.classList.add('completed');
        button.textContent = 'Marquer non fait';
        taskContent.style.textDecoration = 'line-through';
        taskContent.style.color = '#888';
        completedTasks++;
    } else {
        // Mark as pending
        statusSpan.textContent = 'En attente';
        statusSpan.classList.remove('completed');
        statusSpan.classList.add('pending');
        button.textContent = 'Marquer fait';
        taskContent.style.textDecoration = 'none';
        taskContent.style.color = '#333';
        completedTasks--;
    }
    
    updateProgress();
}

function updateProgress() {
    const percentage = Math.round((completedTasks / totalTasks) * 100);
    const progressFill = document.getElementById('progress-fill');
    const progressPercentage = document.getElementById('progress-percentage');
    
    progressFill.style.width = percentage + '%';
    progressPercentage.textContent = percentage + '%';
    
    // تغيير لون شريط التقدم بناء على النسبة
    if (percentage === 100) {
        progressFill.style.background = 'linear-gradient(135deg, #32cd32 0%, #228b22 100%)';
    } else if (percentage >= 50) {
        progressFill.style.background = 'linear-gradient(135deg, #ffb6c1 0%, #ff69b4 100%)';
    } else {
        progressFill.style.background = 'linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)';
    }
}

// تهيئة الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Site universitaire chargé avec succès!');
    updateProgress();
});
