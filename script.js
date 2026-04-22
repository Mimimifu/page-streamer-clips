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

// Função universal para converter qualquer URL em embed
function getVideoEmbed(url) {
    // Remove espaços e quebras de linha
    url = url.trim();
    
    // YOUTUBE
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
        let videoId = '';
        if (url.includes('youtube.com/watch?v=')) {
            videoId = url.split('v=')[1];
            const ampersandPosition = videoId.indexOf('&');
            if (ampersandPosition !== -1) videoId = videoId.substring(0, ampersandPosition);
        } else if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1];
            const questionPosition = videoId.indexOf('?');
            if (questionPosition !== -1) videoId = videoId.substring(0, questionPosition);
        } else if (url.includes('youtube.com/embed/')) {
            videoId = url.split('embed/')[1];
        }
        return `<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
    
    // TWITCH CLIPE
    if (url.includes('twitch.tv') && url.includes('/clip/')) {
        let clipId = url.split('/clip/')[1];
        clipId = clipId.split('?')[0];
        return `<iframe src="https://clips.twitch.tv/embed?clip=${clipId}&parent=${window.location.hostname}" frameborder="0" allowfullscreen scrolling="no"></iframe>`;
    }
    
    // TWITCH VOD (vídeo)
    if (url.includes('twitch.tv/videos/')) {
        let videoId = url.split('/videos/')[1];
        videoId = videoId.split('?')[0];
        return `<iframe src="https://player.twitch.tv/?video=${videoId}&parent=${window.location.hostname}&autoplay=false" frameborder="0" allowfullscreen scrolling="no"></iframe>`;
    }
    
    // TWITCH CANAL (live)
    if (url.includes('twitch.tv/') && !url.includes('/clip/') && !url.includes('/videos/')) {
        let channel = url.split('twitch.tv/')[1];
        channel = channel.split('/')[0];
        return `<iframe src="https://player.twitch.tv/?channel=${channel}&parent=${window.location.hostname}" frameborder="0" allowfullscreen scrolling="no"></iframe>`;
    }
    
    // KICK
    if (url.includes('kick.com')) {
        if (url.includes('/video/')) {
            let videoId = url.split('/video/')[1];
            videoId = videoId.split('?')[0];
            return `<iframe src="https://player.kick.com/${videoId}" frameborder="0" allowfullscreen></iframe>`;
        } else if (url.includes('/clip/')) {
            let clipId = url.split('/clip/')[1];
            clipId = clipId.split('?')[0];
            return `<iframe src="https://clips.kick.com/${clipId}" frameborder="0" allowfullscreen></iframe>`;
        } else {
            let channel = url.split('kick.com/')[1];
            channel = channel.split('/')[0];
            return `<iframe src="https://player.kick.com/${channel}" frameborder="0" allowfullscreen></iframe>`;
        }
    }
    
    // VIMEO
    if (url.includes('vimeo.com')) {
        let videoId = url.split('vimeo.com/')[1];
        videoId = videoId.split('?')[0];
        return `<iframe src="https://player.vimeo.com/video/${videoId}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    }
    
    // FACEBOOK WATCH
    if (url.includes('facebook.com') && url.includes('/videos/')) {
        let videoId = url.split('/videos/')[1];
        videoId = videoId.split('?')[0];
        return `<iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=${videoId}&show_text=false" frameborder="0" allowfullscreen></iframe>`;
    }
    
    // TIKTOK
    if (url.includes('tiktok.com')) {
        return `<div style="padding: 20px; text-align: center; background: #010101; color: white;">
                    <p>🎵 TikTok: <a href="${url}" target="_blank" style="color: #25F4EE;">Clique aqui para assistir</a></p>
                    <small style="color: gray;">TikTok não permite embed, mas você pode clicar no link!</small>
                </div>`;
    }
    
    // INSTAGRAM REEL
    if (url.includes('instagram.com/reel/')) {
        let reelId = url.split('/reel/')[1];
        reelId = reelId.split('/')[0];
        return `<iframe src="https://www.instagram.com/p/${reelId}/embed" frameborder="0" allowfullscreen></iframe>`;
    }
    
    // STREAMABLE
    if (url.includes('streamable.com')) {
        let videoId = url.split('streamable.com/')[1];
        videoId = videoId.split('?')[0];
        return `<iframe src="https://streamable.com/o/${videoId}" frameborder="0" allowfullscreen></iframe>`;
    }
    
    // VIDEO MP4 DIRETO
    if (url.match(/\.(mp4|webm|ogg)$/i)) {
        return `<video controls width="100%">
                    <source src="${url}" type="video/mp4">
                    Seu navegador não suporta vídeo.
                </video>`;
    }
    
    // GIF / IMAGEM
    if (url.match(/\.(gif|jpg|jpeg|png|webp)$/i)) {
        return `<img src="${url}" alt="Clip" style="width:100%; height:200px; object-fit:cover;">`;
    }
    
    // QUALQUER OUTRO LINK - Mostra link clicável
    return `<div style="padding: 20px; text-align: center; background: #f0f0f0; border-radius: 8px;">
                <p>🔗 <a href="${url}" target="_blank" style="color: #667eea;">Clique aqui para assistir o vídeo</a></p>
                <small style="color: gray;">O vídeo está hospedado em: ${new URL(url).hostname}</small>
            </div>`;
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
                <h3>${escapeHtml(clip.title)}</h3>
                <span class="clip-game">🎮 ${escapeHtml(clip.game)}</span>
                <p>${escapeHtml(clip.description || '')}</p>
                <span class="clip-date">📅 ${clip.date}</span>
            </div>
        </div>
    `).join('');
}

// Função para evitar XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
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
                             (clip.description && clip.description.toLowerCase().includes(searchTerm)) ||
                             clip.game.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'todos' || clip.game === category;
        return matchesSearch && matchesCategory;
    });
    
    displayClips(filtered);
}

// Inicializar
loadClips();
