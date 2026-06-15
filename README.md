# 🦸‍♂️ Marvel Super Trunfo | D6 Edition

Um jogo de cartas interativo para navegadores baseado no universo clássico do Super Trunfo da Marvel. O jogo utiliza uma planilha contendo a pontuação de habilidades (escala de 1 a 7) de **150 personagens** para gerar batalhas dinâmicas comandadas por um dado D6 virtual.

---

## 🎮 Funcionalidades & Recursos

*   **Dado Virtual 3D**: Rotação tridimensional fluida em CSS3 que define randomicamente o atributo da disputa a cada rodada.
*   **Baralho Dinâmico de 30 Cartas**: A cada início de partida, 30 personagens são sorteados aleatoriamente do banco de dados de 150 e distribuídos igualmente entre o jogador e a Inteligência Artificial.
*   **Revelação em Suspense**: O jogador humano só visualiza sua própria carta. A carta do oponente (CPU) permanece oculta (face para baixo) e é revelada com uma animação 3D de *flip* apenas após a rolagem do dado.
*   **Trilha Sonora Dinâmica**: Sons de cliques, rolagem do dado, virada de cartas, vitórias, derrotas e empates gerados sinteticamente em tempo real usando a **Web Audio API** nativa (sem dependências de arquivos de som externos).
*   **Imagens Integradas via CDN**: Mapeamento seguro integrado com a base de dados do **Superhero API**, baixando imagens reais dos heróis e vilões de forma síncrona.
*   **Placeholders Premium**: Para os personagens secundários que não possuem correspondência direta na API de imagens, o jogo gera automaticamente degradês dinâmicos e iniciais estilizadas baseadas no atributo mais alto da carta.
*   **Pote de Empate (Acúmulo)**: Quando os atributos de ambas as cartas são iguais, a rodada empata e as cartas em disputa ficam acumuladas no "Pote". O vencedor da rodada seguinte leva todo o montante!

---

## 🛠️ Regras do Jogo

O dado virtual D6 decide qual atributo será comparado na rodada:
1.  🧠 **Inteligência** (Cor Azul)
2.  💪 **Força** (Cor Vermelha)
3.  ⚡ **Velocidade** (Cor Amarela)
4.  🛡️ **Durabilidade** (Cor Verde)
5.  💥 **Projeção de Energia** (Cor Roxa)
6.  ⚔️ **Combate** (Cor Cinza)

Quem possuir a carta com o maior valor no atributo sorteado vence a rodada e leva a carta do oponente (além de eventuais cartas que estejam acumuladas no pote). O jogo termina quando um dos dois lados conquistar todas as cartas do baralho.

---

## 📂 Estrutura do Projeto

```bash
├── data/
│   ├── characters.js  # Banco de dados estruturado dos 150 personagens extraídos do ODS
│   └── images.js      # Mapeamento local estático de imagens do Superhero API
├── index.html         # Estrutura HTML do jogo e modal informativo de regras
├── styles.css         # Estilização completa do jogo (cyberpunk, glassmorphism e efeitos 3D)
├── game.js           # Lógica dos turnos, dado virtual, efeitos sonoros e controle do placar
├── characters.json    # JSON intermediário com os dados dos personagens
├── Marvel.ods         # Planilha original com as pontuações brutas dos personagens
└── .gitignore         # Arquivo para impedir o envio de backups e variáveis locais
```

---

## 🚀 Como Executar

O projeto foi construído puramente com tecnologias web nativas (**HTML5**, **CSS3** e **Vanilla JavaScript**). Não há necessidade de instalar dependências, servidores ou compiladores.

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` diretamente em qualquer navegador moderno (Chrome, Firefox, Edge, Safari, Brave, etc.).
3. Divirta-se!
