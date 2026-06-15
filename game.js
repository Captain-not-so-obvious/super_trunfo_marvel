// ==========================================
// MARVEL SUPER TRUNFO - GAME ENGINE
// ==========================================

// Static images map is loaded via data/images.js as MARVEL_IMAGES

// Map of attribute numerical ID to name and color properties
const ATTRIBUTES = {
    1: { key: 'inteligencia', label: 'Inteligência', icon: '🧠', class: 'card-theme-int' },
    2: { key: 'forca', label: 'Força', icon: '💪', class: 'card-theme-for' },
    3: { key: 'velocidade', label: 'Velocidade', icon: '⚡', class: 'card-theme-vel' },
    4: { key: 'durabilidade', label: 'Durabilidade', icon: '🛡️', class: 'card-theme-dur' },
    5: { key: 'projecaoEnergia', label: 'Projeção de Energia', icon: '💥', class: 'card-theme-ene' },
    6: { key: 'combate', label: 'Combate', icon: '⚔️', class: 'card-theme-cmb' }
};

// Web Audio API Sound System
let audioCtx = null;
let audioMuted = false;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playSound(type) {
    if (audioMuted) return;
    initAudio();
    if (!audioCtx) return;
    
    try {
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        
        const now = audioCtx.currentTime;
        
        if (type === 'roll') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(120, now);
            osc.frequency.exponentialRampToValueAtTime(60, now + 0.12);
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
            osc.start(now);
            osc.stop(now + 0.12);
        } else if (type === 'land') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(320, now);
            osc.frequency.setValueAtTime(160, now + 0.05);
            gain.gain.setValueAtTime(0.25, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
            osc.start(now);
            osc.stop(now + 0.08);
        } else if (type === 'flip') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(100, now);
            osc.frequency.exponentialRampToValueAtTime(450, now + 0.22);
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);
            osc.start(now);
            osc.stop(now + 0.22);
        } else if (type === 'win') {
            // Ascending triad
            const notes = [261.63, 329.63, 392.00, 523.25]; // C E G C
            notes.forEach((freq, idx) => {
                const noteOsc = audioCtx.createOscillator();
                const noteGain = audioCtx.createGain();
                noteOsc.type = 'sine';
                noteOsc.frequency.setValueAtTime(freq, now + idx * 0.07);
                noteOsc.connect(noteGain);
                noteGain.connect(audioCtx.destination);
                noteGain.gain.setValueAtTime(0.15, now + idx * 0.07);
                noteGain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.07 + 0.22);
                noteOsc.start(now + idx * 0.07);
                noteOsc.stop(now + idx * 0.07 + 0.22);
            });
        } else if (type === 'lose') {
            // Descending pitch
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(220, now);
            osc.frequency.linearRampToValueAtTime(110, now + 0.35);
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
            osc.start(now);
            osc.stop(now + 0.4);
        } else if (type === 'tie') {
            // Two rapid high notes
            const osc1 = audioCtx.createOscillator();
            const gain1 = audioCtx.createGain();
            osc1.type = 'sine';
            osc1.frequency.setValueAtTime(380, now);
            osc1.connect(gain1);
            gain1.connect(audioCtx.destination);
            gain1.gain.setValueAtTime(0.15, now);
            gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.07);
            
            const osc2 = audioCtx.createOscillator();
            const gain2 = audioCtx.createGain();
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(380, now + 0.1);
            osc2.connect(gain2);
            gain2.connect(audioCtx.destination);
            gain2.gain.setValueAtTime(0.15, now + 0.1);
            gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.17);
            
            osc1.start(now);
            osc1.stop(now + 0.07);
            osc2.start(now + 0.1);
            osc2.stop(now + 0.17);
        } else if (type === 'victory') {
            // Triumphant arpeggios
            const melody = [
                { f: 261.63, d: 0.12 },
                { f: 329.63, d: 0.12 },
                { f: 392.00, d: 0.12 },
                { f: 523.25, d: 0.25 },
                { f: 392.00, d: 0.12 },
                { f: 523.25, d: 0.5 }
            ];
            let offset = 0;
            melody.forEach((note) => {
                const noteOsc = audioCtx.createOscillator();
                const noteGain = audioCtx.createGain();
                noteOsc.type = 'sine';
                noteOsc.frequency.setValueAtTime(note.f, now + offset);
                noteOsc.connect(noteGain);
                noteGain.connect(audioCtx.destination);
                noteGain.gain.setValueAtTime(0.12, now + offset);
                noteGain.gain.exponentialRampToValueAtTime(0.01, now + offset + note.d);
                noteOsc.start(now + offset);
                noteOsc.stop(now + offset + note.d);
                offset += note.d + 0.02;
            });
        } else if (type === 'gameover') {
            const melody = [
                { f: 220.00, d: 0.22 },
                { f: 207.65, d: 0.22 },
                { f: 196.00, d: 0.22 },
                { f: 174.61, d: 0.55 }
            ];
            let offset = 0;
            melody.forEach((note) => {
                const noteOsc = audioCtx.createOscillator();
                const noteGain = audioCtx.createGain();
                noteOsc.type = 'triangle';
                noteOsc.frequency.setValueAtTime(note.f, now + offset);
                noteOsc.connect(noteGain);
                noteGain.connect(audioCtx.destination);
                noteGain.gain.setValueAtTime(0.12, now + offset);
                noteGain.gain.exponentialRampToValueAtTime(0.01, now + offset + note.d);
                noteOsc.start(now + offset);
                noteOsc.stop(now + offset + note.d);
                offset += note.d + 0.02;
            });
        }
    } catch (e) {
        console.warn("Audio Context blocked:", e);
    }
}

// Game State variables
let playerDeck = [];
let cpuDeck = [];
let roundPile = [];
let activePlayerCard = null;
let activeCpuCard = null;
let isRolling = false;
let currentAtributeId = null;

// Get character image from static mapping
function getCharacterImage(characterName) {
    if (typeof MARVEL_IMAGES !== 'undefined' && MARVEL_IMAGES[characterName]) {
        return MARVEL_IMAGES[characterName];
    }
    return null;
}

// Helper to determine the theme styling of a card based on its highest attribute
function getCardTheme(character) {
    const attrs = [
        { id: 1, val: character.inteligencia },
        { id: 2, val: character.forca },
        { id: 3, val: character.velocidade },
        { id: 4, val: character.durabilidade },
        { id: 5, val: character.projecaoEnergia },
        { id: 6, val: character.combate }
    ];
    // Sort descending by value
    attrs.sort((a, b) => b.val - a.val);
    const highestId = attrs[0].id;
    
    // Gradients based on highest attribute
    let gradient = 'linear-gradient(135deg, #1e272e 0%, #0f1418 100%)';
    switch (highestId) {
        case 1: gradient = 'linear-gradient(135deg, #0a2342 0%, #0f3a60 100%)'; break; // Int Blue
        case 2: gradient = 'linear-gradient(135deg, #440a0a 0%, #7d1212 100%)'; break; // Forca Red
        case 3: gradient = 'linear-gradient(135deg, #4d2d00 0%, #8c5300 100%)'; break; // Velocidade Yellow/Orange
        case 4: gradient = 'linear-gradient(135deg, #0a3a1d 0%, #1c6b3b 100%)'; break; // Durabilidade Green
        case 5: gradient = 'linear-gradient(135deg, #320d47 0%, #5d1b80 100%)'; break; // Energia Purple
        case 6: gradient = 'linear-gradient(135deg, #2c3238 0%, #46515c 100%)'; break; // Combate Steel Grey
    }

    return {
        themeClass: ATTRIBUTES[highestId].class,
        gradient: gradient,
        badgeName: ATTRIBUTES[highestId].label
    };
}

// Render Card HTML elements
async function createCardElement(character, isCpuHidden = false) {
    const theme = getCardTheme(character);
    const initial = character.nome.charAt(0);
    
    const cardEl = document.createElement('div');
    cardEl.className = `card-wrapper ${isCpuHidden ? '' : 'flipped'}`;
    
    // Set card back HTML
    const cardBackHtml = `
        <div class="card-face card-back">
            <div class="card-back-pattern">
                <span class="card-back-logo">M</span>
            </div>
            <div class="card-back-text">SUPER TRUNFO</div>
        </div>
    `;
    
    // Set card front HTML
    let statsHtml = '';
    for (let id = 1; id <= 6; id++) {
        const attr = ATTRIBUTES[id];
        const val = character[attr.key];
        statsHtml += `
            <div class="stat-row" data-attr="${id}">
                <div class="stat-info">
                    <span class="stat-icon">${attr.icon}</span>
                    <span class="stat-name">${attr.label}</span>
                </div>
                <div class="stat-value-container">
                    <div class="stat-bar">
                        <div class="stat-fill" style="--val: ${val}"></div>
                    </div>
                    <span class="stat-value">${val}</span>
                </div>
            </div>
        `;
    }
    
    const cardFrontHtml = `
        <div class="card-face card-front ${theme.themeClass}">
            <div class="card-header">
                <h3 class="card-name" title="${character.nome}">${character.nome}</h3>
                <span class="card-badge">${theme.badgeName}</span>
            </div>
            <div class="card-visual" style="--gradient-theme: ${theme.gradient}">
                <div class="card-placeholder-art">
                    <div class="placeholder-glow"></div>
                    <span class="placeholder-initial">${initial}</span>
                </div>
                <img class="card-visual-img" src="" alt="${character.nome}" style="opacity: 0;">
            </div>
            <div class="card-stats">
                ${statsHtml}
            </div>
        </div>
    `;
    
    cardEl.innerHTML = cardBackHtml + cardFrontHtml;
    
    // Try to load image synchronously
    const imgUrl = getCharacterImage(character.nome);
    if (imgUrl) {
        const imgEl = cardEl.querySelector('.card-visual-img');
        if (imgEl) {
            imgEl.src = imgUrl;
            imgEl.style.opacity = 1;
        }
    }
    
    return cardEl;
}

// Update HUD stats
function updateHUD() {
    const pScore = document.getElementById('player-score');
    const cScore = document.getElementById('cpu-score');
    const pileScore = document.getElementById('pile-score');
    
    pScore.textContent = playerDeck.length;
    cScore.textContent = cpuDeck.length;
    
    const pileLen = roundPile.length;
    pileScore.textContent = pileLen;
    if (pileLen > 0) {
        pileScore.classList.remove('empty');
    } else {
        pileScore.classList.add('empty');
    }
    
    // Update deck progress bars (out of 30 starting total cards)
    const pDeckBar = document.querySelector('.player-deck');
    const cDeckBar = document.querySelector('.cpu-deck');
    
    const pPct = (playerDeck.length / 30) * 100;
    const cPct = (cpuDeck.length / 30) * 100;
    
    pDeckBar.style.setProperty('--deck-pct', `${pPct}%`);
    cDeckBar.style.setProperty('--deck-pct', `${cPct}%`);
}

// Setup the initial cards for player and CPU
async function setupTurn() {
    if (playerDeck.length === 0 || cpuDeck.length === 0) {
        endGame();
        return;
    }
    
    currentAtributeId = null;
    
    // Get top cards
    activePlayerCard = playerDeck[0];
    activeCpuCard = cpuDeck[0];
    
    // Clear containers
    const pContainer = document.getElementById('player-card-container');
    const cContainer = document.getElementById('cpu-card-container');
    
    pContainer.innerHTML = '';
    cContainer.innerHTML = '';
    
    // Render player card (flipped open)
    const pCardEl = await createCardElement(activePlayerCard, false);
    pContainer.appendChild(pCardEl);
    
    // Render CPU card (face down)
    const cCardEl = await createCardElement(activeCpuCard, true);
    cContainer.appendChild(cCardEl);
    
    // Set interface buttons
    document.getElementById('btn-roll').disabled = false;
    document.getElementById('btn-roll').classList.remove('hidden');
    document.getElementById('btn-next').classList.add('hidden');
    
    // Set turn instructions
    const statusText = document.getElementById('game-status');
    statusText.className = 'status-banner';
    statusText.innerHTML = `Sua vez! Role o dado 🎲 para definir qual atributo será disputado.`;
    
    playSound('flip');
}

// 3D Dice Roll Animation and attribute determination
function rollDice() {
    if (isRolling) return;
    
    isRolling = true;
    document.getElementById('btn-roll').disabled = true;
    playSound('roll');
    
    const dice = document.getElementById('dice');
    const statusText = document.getElementById('game-status');
    
    statusText.textContent = "Lançando dado...";
    
    // Start fast infinite rotation
    dice.className = 'dice rolling';
    
    // Sound loop during roll
    const rollSoundInterval = setInterval(() => {
        if (isRolling) playSound('roll');
    }, 150);
    
    // Settle on value after 1.5 seconds
    setTimeout(async () => {
        clearInterval(rollSoundInterval);
        isRolling = false;
        
        // Random outcome 1 to 6
        const face = Math.floor(Math.random() * 6) + 1;
        currentAtributeId = face;
        const attr = ATTRIBUTES[face];
        
        // Remove rolling animation and apply final face class
        dice.className = `dice show-${face}`;
        playSound('land');
        
        statusText.innerHTML = `Dado caiu em: <strong style="color: var(--color-${attr.key.slice(0,3)})">${attr.label.toUpperCase()}</strong>!`;
        
        // Brief delay before showing CPU card
        setTimeout(async () => {
            await revealCPUCardAndCompare();
        }, 1200);
        
    }, 1500);
}

// Reveal CPU Card and compute the battle outcome
async function revealCPUCardAndCompare() {
    const cWrapper = document.querySelector('#cpu-card-container .card-wrapper');
    if (cWrapper) {
        cWrapper.classList.add('flipped');
        playSound('flip');
    }
    
    const attr = ATTRIBUTES[currentAtributeId];
    const playerVal = activePlayerCard[attr.key];
    const cpuVal = activeCpuCard[attr.key];
    
    // Highlight the selected rows on both cards
    document.querySelectorAll(`.stat-row[data-attr="${currentAtributeId}"]`).forEach(row => {
        row.classList.add('selected');
    });
    
    const statusText = document.getElementById('game-status');
    
    // Pop current round cards into local round pile
    const cardFromPlayer = playerDeck.shift();
    const cardFromCpu = cpuDeck.shift();
    roundPile.push(cardFromPlayer, cardFromCpu);
    
    setTimeout(() => {
        if (playerVal > cpuVal) {
            // Player wins round
            statusText.className = 'status-banner highlight-win';
            statusText.innerHTML = `Você Venceu a rodada!<br><strong>${activePlayerCard.nome}</strong> (${playerVal}) venceu <strong>${activeCpuCard.nome}</strong> (${cpuVal}) em ${attr.label}.`;
            playSound('win');
            
            // Add pile to Player deck
            playerDeck.push(...roundPile);
            roundPile = [];
        } else if (cpuVal > playerVal) {
            // CPU wins round
            statusText.className = 'status-banner highlight-lose';
            statusText.innerHTML = `CPU Venceu a rodada!<br><strong>${activeCpuCard.nome}</strong> (${cpuVal}) venceu <strong>${activePlayerCard.nome}</strong> (${playerVal}) em ${attr.label}.`;
            playSound('lose');
            
            // Add pile to CPU deck
            cpuDeck.push(...roundPile);
            roundPile = [];
        } else {
            // Tie / Draw
            statusText.className = 'status-banner highlight-tie';
            statusText.innerHTML = `Empate em ${attr.label} (${playerVal} x ${cpuVal})!<br>Cartas de <strong>${activePlayerCard.nome}</strong> e <strong>${activeCpuCard.nome}</strong> acumuladas no Pote!`;
            playSound('tie');
            // Cards remain in roundPile
        }
        
        updateHUD();
        
        // Hide roll button and show Next Round button
        document.getElementById('btn-roll').classList.add('hidden');
        document.getElementById('btn-next').classList.remove('hidden');
    }, 800);
}

// End of game evaluation
function endGame() {
    const statusText = document.getElementById('game-status');
    document.getElementById('btn-roll').classList.add('hidden');
    document.getElementById('btn-next').classList.add('hidden');
    
    if (playerDeck.length === 0 && cpuDeck.length === 0) {
        statusText.innerHTML = `<h3>Empate Inacreditável!</h3>Ambos os jogadores ficaram sem cartas.`;
        playSound('tie');
    } else if (playerDeck.length === 0) {
        statusText.className = 'status-banner highlight-lose';
        statusText.innerHTML = `<h3>Fim de Jogo: Derrota!</h3>A CPU conquistou todas as cartas do baralho.`;
        playSound('gameover');
    } else {
        statusText.className = 'status-banner highlight-win';
        statusText.innerHTML = `<h3>Fim de Jogo: Vitória!</h3>Você conquistou todas as cartas e derrotou a Inteligência Artificial!`;
        playSound('victory');
    }
}

// Initialize a new game
function restartGame() {
    // Check if characters database loaded correctly
    if (typeof MARVEL_CHARACTERS === 'undefined' || MARVEL_CHARACTERS.length === 0) {
        alert('Erro: Banco de dados de personagens não carregado.');
        return;
    }
    
    // Copy characters list and shuffle
    const deck = [...MARVEL_CHARACTERS];
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    
    // Distribute 30 cards total (15 to each)
    playerDeck = deck.slice(0, 15);
    cpuDeck = deck.slice(15, 30);
    roundPile = [];
    
    // Set scores and setup HUD
    updateHUD();
    
    // Reset dice UI
    const dice = document.getElementById('dice');
    dice.className = 'dice show-1';
    
    // Start Turn 1
    setupTurn();
}

// Modal Config Event Handlers
function setupConfigModal() {
    const modal = document.getElementById('modal-config');
    const btnConfig = document.getElementById('btn-config');
    const closeBtn = document.querySelector('.close-button');
    
    // Open Modal
    btnConfig.addEventListener('click', () => {
        modal.classList.add('show');
    });
    
    // Close Modal
    const closeModal = () => modal.classList.remove('show');
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// Audio Toggle Button configuration
function setupAudioToggle() {
    const btnAudio = document.getElementById('btn-audio');
    const audioIcon = document.getElementById('audio-icon');
    
    // Read cached audio state
    const cachedMute = localStorage.getItem('marvel_audio_muted') === 'true';
    audioMuted = cachedMute;
    if (audioMuted) {
        btnAudio.classList.add('muted');
        audioIcon.innerHTML = `<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>`;
    }
    
    btnAudio.addEventListener('click', () => {
        audioMuted = !audioMuted;
        localStorage.setItem('marvel_audio_muted', audioMuted);
        
        if (audioMuted) {
            btnAudio.classList.add('muted');
            audioIcon.innerHTML = `<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>`;
        } else {
            btnAudio.classList.remove('muted');
            audioIcon.innerHTML = `<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>`;
            // Trigger audio init
            initAudio();
            playSound('land');
        }
    });
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
    // Add click listeners to buttons
    document.getElementById('btn-roll').addEventListener('click', rollDice);
    document.getElementById('btn-next').addEventListener('click', setupTurn);
    document.getElementById('btn-restart').addEventListener('click', restartGame);
    
    // Set up modal configuration dialog
    setupConfigModal();
    
    // Set up audio controls
    setupAudioToggle();
    
    // Auto start game
    restartGame();
});
