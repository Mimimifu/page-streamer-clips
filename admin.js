let clips = [];

// Carregar clipes existentes
function loadClips() {
    const stored = localStorage.getItem('streamerClips');
    if (stored) {
        clips = JSON.parse(stored);
    } else {
        clips = [];
    }
    displayAdminClips();
}

// Salvar no localStorage
function saveClips() {
    localStorage.setItem('streamerClips', JSON.stringify(clips));
    displayAdminClips();
}

// Detectar plataforma automaticamente
function detectPlatform(url) {
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'YouTube 🎬';
    if (url.includes('twitch.tv')) return 'Twitch 🎮';
    if (url.includes('kick.com')) return 'Kick 🦵';
    if (url.includes('vimeo.com')) return 'Vimeo 🎥';
    if (url.includes('facebook.com')) return 'Facebook 📘';
    if (url.includes('tiktok.com')) return 'TikTok 🎵';
    if (url.includes('instagram.com')) return 'Instagram 📸';
    if (url.includes('streamable.com')) return 'Streamable 📹';
    if (url.match(/\.(mp4|webm|ogg)$/i)) return 'Vídeo Direto 🎬';
    if (url.match(/\.(gif|jpg|jpeg|png|webp)$/i)) return 'Imagem 🖼️';
    return 'Link Externo 🔗';
}

// Adicionar clipe
document.getElementById('clipForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const videoUrl = document.getElementById('videoUrl').value;
    const platform = detectPlatform(videoUrl);
    
    const newClip = {
        id: Date.now(),
        title: document.getElementById('title').value,
        game: document.getElementById('game').value,
        videoUrl: videoUrl,
        description: document.getElementById('description').value,
        date: document.getElementById('date').value,
        platform: platform
    };
    
    clips.push(newClip);
    saveClips();
    e.target.reset();
    
    // Mostrar confirmação com a plataforma detectada
    alert(`✅ Clipe adicionado!\n📱 Plataforma detectada: ${platform}`);
});

// Exibir clipes no admin
function displayAdminClips() {
    const list = document.getElementById('adminClipsList');
    
    if (clips.length === 0) {
        list.innerHTML = '<p>Nenhum clipe cadastrado. Adicione seu primeiro clipe! 🎉</p>';
        return;
    }
    
    list.innerHTML = clips.map(clip => `
        <div class="clip-item">
            <div>
                <strong>${escapeHtml(clip.title)}</strong><br>
                <small>🎮 ${escapeHtml(clip.game)}</small><br>
                <small>📅 ${clip.date}</small><br>
                <small>${clip.platform || detectPlatform(clip.videoUrl)}</small>
            </div>
            <button onclick="deleteClip(${clip.id})">🗑️ Remover</button>
        </div>
    `).join('');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Deletar clipe
function deleteClip(id) {
    if (confirm('Tem certeza que quer remover este clipe?')) {
        clips = clips.filter(clip => clip.id !== id);
        saveClips();
    }
}

// Exportar para JSON
document.getElementById('exportJson').addEventListener('click', () => {
    const dataStr = JSON.stringify(clips, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'clips.json');
    linkElement.click();
    
    alert('📦 JSON exportado! Faça upload deste arquivo para o GitHub.');
});

// Backup completo
document.getElementById('downloadBackup').addEventListener('click', () => {
    const backup = {
        clips: clips,
        exportDate: new Date().toISOString(),
        totalClips: clips.length
    };
    const dataStr = JSON.stringify(backup, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', `backup_clips_${Date.now()}.json`);
    linkElement.click();
    
    alert('💾 Backup completo salvo!');
});

// Inicializar
loadClips();
