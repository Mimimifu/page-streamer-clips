let clips = [];

// Carregar clipes existentes
function loadClips() {
    const stored = localStorage.getItem('streamerClips');
    if (stored) {
        clips = JSON.parse(stored);
    } else {
        // Clipes de exemplo
        clips = [
            {
                id: Date.now(),
                title: "Gameplay Épica",
                game: "Valorant",
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                description: "Momento incrível da live!",
                date: "15/01/2024"
            }
        ];
    }
    displayAdminClips();
}

// Salvar no localStorage
function saveClips() {
    localStorage.setItem('streamerClips', JSON.stringify(clips));
    displayAdminClips();
}

// Adicionar clipe
document.getElementById('clipForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newClip = {
        id: Date.now(),
        title: document.getElementById('title').value,
        game: document.getElementById('game').value,
        videoUrl: document.getElementById('videoUrl').value,
        description: document.getElementById('description').value,
        date: document.getElementById('date').value
    };
    
    clips.push(newClip);
    saveClips();
    e.target.reset();
    alert('Clipe adicionado com sucesso!');
});

// Exibir clipes no admin
function displayAdminClips() {
    const list = document.getElementById('adminClipsList');
    
    if (clips.length === 0) {
        list.innerHTML = '<p>Nenhum clipe cadastrado.</p>';
        return;
    }
    
    list.innerHTML = clips.map(clip => `
        <div class="clip-item">
            <div>
                <strong>${clip.title}</strong><br>
                <small>${clip.game} - ${clip.date}</small>
            </div>
            <button onclick="deleteClip(${clip.id})">🗑️ Remover</button>
        </div>
    `).join('');
}

// Deletar clipe
function deleteClip(id) {
    if (confirm('Tem certeza que quer remover este clipe?')) {
        clips = clips.filter(clip => clip.id !== id);
        saveClips();
    }
}

// Exportar para JSON (para fazer upload no GitHub)
document.getElementById('exportJson').addEventListener('click', () => {
    const dataStr = JSON.stringify(clips, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'clips.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
});

// Backup completo
document.getElementById('downloadBackup').addEventListener('click', () => {
    const backup = {
        clips: clips,
        exportDate: new Date().toISOString()
    };
    const dataStr = JSON.stringify(backup, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', `backup_clips_${Date.now()}.json`);
    linkElement.click();
});

// Inicializar
loadClips();
