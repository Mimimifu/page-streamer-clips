let clips = [];

// Carregar clipes do arquivo JSON
async function loadClips() {
    try {
        const response = await fetch('clips.json');
        clips = await response.json();
        displayClips(clips);
        populateCategories(clips);
    } catch (error) {
        console.log('Arquivo clips.json não encontrado. Adicione clipes pelo admin.');
        document.getElementById('clipsGrid').innerHTML = '<p style="color:white">Nenhum clipe cadastrado ainda.</p>';
    }
}

function displayClips(clipsToShow) {
    const grid = document.getElementById('clipsGrid');
    
    if (clipsToShow.length === 0) {
        grid.innerHTML = '<p style="color:white">Nenhum clipe encontrado.</p>';
        return;
    }
    
    grid.innerHTML = clipsToShow.map(clip => `
        <div class="clip-card">
            <div class="clip-video">
                ${getVideoEmbed(clip.videoUrl)}
            </div>
            <div class="clip-info">
                <h3>${clip.title}</h3>
                <span class="clip-game">🎮 ${clip.game}</span>
                <p>${clip.description || ''}</p>
                <span class="clip-date">📅 ${clip.date}</span>
            </div>
        </div>
    `).join('');
}

function getVideoEmbed(url) {
    // Suporte para YouTube e Twitch
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
        let videoId = url.split('v=')[1];
        if (!videoId) videoId = url.split('/').pop();
        const ampersandPosition = videoId.indexOf('&');
        if (ampersandPosition !== -1) videoId = videoId.substring(0, ampersandPosition);
        return `<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
    } else if (url.includes('twitch.tv')) {
        return `<iframe src="${url.replace('www.', 'player.')}/embed" frameborder="0" allowfullscreen></iframe>`;
    }
    return `<video controls width="100%"><source src="${url}" type="video/mp4"></video>`;
}

function populateCategories(clips) {
    const categories = [...new Set(clips.map(clip => clip.game))];
    const filter = document.getElementById('categoryFilter');
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        filter.appendChild(option);
    });
}

// Filtros
document.getElementById('searchInput').addEventListener('input', filterClips);
document.getElementById('categoryFilter').addEventListener('change', filterClips);

function filterClips() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    
    const filtered = clips.filter(clip => {
        const matchesSearch = clip.title.toLowerCase().includes(searchTerm) ||
                             (clip.description && clip.description.toLowerCase().includes(searchTerm));
        const matchesCategory = category === 'todos' || clip.game === category;
        return matchesSearch && matchesCategory;
    });
    
    displayClips(filtered);
}

// Inicializar
loadClips();
