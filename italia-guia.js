// Camada de guia turístico + compartilhamento via WhatsApp.
(function(){
  const guide = {
    'Borgo di Marechiaro': {
      what:'Marechiaro é um pequeno borgo de pescadores em Posillipo, famoso pela vista do Golfo, pelas escadinhas junto ao mar e pela Fenestella, uma janela ligada à canção napolitana Marechiare.',
      do:'Desçam sem pressa pela Calata Ponticello, vejam a Fenestella, caminhem até a água, observem os barcos e aproveitem o cenário antes do almoço. É um passeio de atmosfera, não de “checklist”.',
      time:'1h a 1h30 antes do almoço.',
      tips:'Sapato confortável para as escadas. Aqui vale mais sentar, olhar o mar e fotografar do que tentar encaixar muitas coisas.'
    },
    'Gaiola': {
      what:'A Gaiola é uma área marinha protegida de Posillipo, diante de duas pequenas ilhas ligadas por uma ponte. A graça é nadar em água clara com um cenário arqueológico e natural muito diferente do Centro Storico.',
      do:'Entrem no turno reservado, escolham um ponto para deixar as coisas e aproveitem o banho de mar. Se levarem máscara de snorkel, melhor ainda. Não programem outra atração apertada logo depois.',
      time:'2h30 a 3h30 dentro do turno.',
      buy:'A entrada é gratuita, mas o acesso é controlado e exige reserva online no período de verão. Priorizar o turno 14:00–18:00 neste roteiro.',
      tips:'Levar roupa de banho, toalha, água e calçado firme para a descida. Acesso oficial: https://www.areamarinaprotettagaiola.it/prenotazione'
    },
    'Parco Virgiliano': {
      what:'Parque panorâmico no alto de Posillipo, com vários terraços voltados para o Golfo. Em dias limpos dá para enxergar Nisida, Procida, Ischia, Capri e a costa.',
      do:'Não precisa percorrer o parque inteiro. Escolham os mirantes voltados para o mar, caminhem um pouco e usem o lugar como encerramento do dia.',
      time:'45 min a 1h.',
      tips:'É especialmente bom no fim da tarde; se estiverem cansados depois da Gaiola, é opcional.'
    },
    'Vesúvio — Gran Cono': {
      what:'O Gran Cono é a trilha oficial que leva até a borda da cratera do Vesúvio, o vulcão que entrou em erupção em 79 d.C. e soterrou Pompeia e Herculano.',
      do:'Subam no próprio ritmo, parem nos pontos de vista e, chegando à borda, observem o interior do cratera e a vista para a Baía de Nápoles. A experiência é a paisagem e a ideia de estar sobre um vulcão ativo.',
      time:'Cerca de 1h30 a 2h contando subida, paradas e descida.',
      buy:'Ingresso do Gran Cono é somente por pré-compra online e com horário de acesso. Não contem com comprar na chegada.',
      tips:'Tênis com boa aderência, água, protetor solar e uma camada leve de roupa. O terreno tem cascalho e inclinação. Site oficial do parque: https://www.parconazionaledelvesuvio.it/en/visit-the-park/the-paths/the-great-cono-of-vesuvius/'
    },
    'Parque Arqueológico de Pompeia': {
      what:'Pompeia é uma cidade romana preservada pela erupção do Vesúvio em 79 d.C. O valor da visita não está só nas ruínas: vocês caminham por ruas, casas, termas, templos, lojas e espaços públicos de uma cidade real de quase dois mil anos atrás.',
      do:'Com pouco tempo, priorizem o Fórum e seus templos, as termas, algumas casas com afrescos/mosaicos, os espaços comerciais, os moldes das vítimas quando acessíveis e o Anfiteatro. Não tentem ver tudo: o sítio é enorme.',
      time:'3h30 a 4h é um bom recorte depois do Vesúvio.',
      buy:'Comprar ingresso oficial com antecedência é recomendável. Em 2026 os ingressos são nominativos e há limite diário de visitantes.',
      tips:'Levar água, chapéu e tênis. Há muita pedra irregular e pouca sombra. Site oficial: https://pompeiisites.org/en/visiting-info/timetables-and-tickets/'
    },
    'Terra Murata': {
      what:'Terra Murata é o núcleo histórico mais antigo de Procida e fica no ponto mais alto da ilha. É o melhor lugar para entender a geografia de Procida antes de descer para a Corricella.',
      do:'Subam até o belvedere, parem para ver a Corricella de cima e caminhem pelas ruelas do núcleo antigo. O antigo Palazzo d’Avalos é opcional se vocês quiserem uma visita histórica mais longa.',
      time:'1h a 1h30.',
      tips:'A subida pode cansar; se quiserem economizar pernas para o resto do dia, usem ônibus/táxi na ida e desçam a pé.'
    },
    'Marina Corricella': {
      what:'A Corricella é o antigo porto de pescadores de Procida, conhecido pelas fachadas em tons pastel empilhadas na encosta. É provavelmente o cenário mais bonito e característico da ilha.',
      do:'Desçam pelas escadarias, caminhem pela marina, fotografem as casas e barcos e fiquem para almoçar à beira d’água. Aqui o programa é desacelerar.',
      time:'1h30 de passeio + almoço.',
      tips:'Não tentem “passar rápido”. O charme está justamente em ficar um pouco sem fazer nada.'
    },
    'Spiaggia della Chiaiolella': {
      what:'A Chiaiolella é uma das praias mais longas e estruturadas de Procida, com trechos de areia vulcânica, lidos, bares e vista para Vivara e Ischia. O fundo costuma ser mais raso, o que a torna uma boa escolha em família.',
      do:'Escolham entre praia livre e lido, deixem a tarde sem roteiro e aproveitem o mar. Se houver vento forte no fim do dia, avaliem encurtar o banho.',
      time:'2h30 a 3h.',
      tips:'Levar chinelo, toalha e protetor. Há estrutura de alimentação por perto.'
    },
    'Centro de Positano': {
      what:'Positano é a vila mais icônica da Costa Amalfitana: casas coloridas descendo pela montanha até o mar, vielas inclinadas, lojas, igreja e praia aos pés da encosta.',
      do:'Subam um pouco a partir do porto para ganhar perspectiva, caminhem pelas vielas, vejam a igreja de Santa Maria Assunta e depois desçam para a Spiaggia Grande. O passeio é mais bonito quando vocês alternam rua e mirante.',
      time:'2h a 3h antes ou depois do almoço.',
      tips:'Há muitas escadas e ladeiras. Sapato confortável e pouca pressa fazem diferença.'
    },
    'Ravello': {
      what:'Ravello fica no alto da Costa Amalfitana e é conhecida pelos jardins históricos e vistas suspensas sobre o mar. É mais silenciosa e elegante que Positano e Amalfi.',
      do:'Se decidirem ir, escolham uma das duas grandes visitas: Villa Rufolo ou Villa Cimbrone. Não tentem encaixar as duas se o transporte estiver apertado.',
      time:'2h30 a 3h, além dos deslocamentos.',
      tips:'Neste roteiro Ravello é opcional porque exige conexão adicional. Só vale se os horários permitirem sem transformar o dia em corrida.'
    },
    'Praia de Positano': {
      what:'A Spiaggia Grande é a praia principal de Positano, aos pés da vila e diante das casas coloridas na encosta. É mais famosa pelo cenário do que por ser a melhor praia para nadar.',
      do:'Use como pausa para molhar os pés, tomar um banho de mar e fotografar Positano de baixo para cima. Para ficar horas, um lido pode ser mais confortável.',
      time:'45 min a 1h30.',
      tips:'Ótima alternativa se vocês preferirem desacelerar em vez de correr para Ravello.'
    },
    'Trulli de Alberobello': {
      what:'Os trulli são construções tradicionais de pedra calcária com telhados cônicos, típicas do Vale d’Itria e reconhecidas como Patrimônio Mundial. Alberobello concentra centenas delas.',
      do:'Comecem pelo Rione Monti, mas não fiquem só na rua mais comercial. Caminhem também até o Rione Aia Piccola, mais residencial e tranquilo, para perceber melhor como é o conjunto urbano.',
      time:'2h30 a 3h.',
      tips:'Chegar cedo continua sendo importante: depois das 10h o trecho mais famoso costuma ficar bem mais cheio.'
    },
    'Polignano a Mare': {
      what:'Polignano a Mare é uma cidade costeira construída sobre falésias de calcário, com um centro histórico branco cheio de varandas e mirantes sobre o Adriático.',
      do:'Entrem pelo centro histórico, procurem os mirantes voltados para Lama Monachile e para as falésias, caminhem sem roteiro rígido e parem para um café ou gelato antes da praia.',
      time:'1h30 a 2h antes do almoço.',
      tips:'É pequena e muito fotogênica; não precisa madrugar para “dar conta”, por isso encaixa bem depois do PHzinho e do treino.'
    },
    'Ostuni — Cidade Branca': {
      what:'Ostuni é uma cidade medieval no alto de uma colina, famosa pelo emaranhado de casas caiadas de branco, escadarias e vistas para o vale de oliveiras até o Adriático.',
      do:'Subam pelo centro antigo sem perseguir uma rota exata, cheguem à Catedral, circulem pelas ruelas brancas e parem nos pontos em que a vista se abre para o vale.',
      time:'2h30 a 3h.',
      tips:'Há muitas ladeiras. Estacionem fora do centro e usem calçado confortável.'
    },
    'Grotte di Castellana': {
      what:'As Grotte di Castellana formam um grande sistema de cavernas cársticas com estalactites, estalagmites, cânions subterrâneos e a famosa Grotta Bianca.',
      do:'Se houver tempo e disposição, prefiram o percurso completo: são cerca de 3 km e 100 minutos e ele chega à Grotta Bianca. O percurso parcial tem cerca de 1 km e 50 minutos.',
      time:'100 min no percurso completo; 50 min no parcial, além de chegada e espera.',
      buy:'Comprar online até o dia anterior é recomendado para garantir o horário. Chegar pelo menos 15 minutos antes do início da visita.',
      tips:'Calçado firme e uma camada de roupa: a temperatura subterrânea é mais baixa. Site oficial: https://www.grottedicastellana.it/en/information/timetables-and-prices/'
    },
    'Sassi di Matera': {
      what:'Os Sassi são bairros históricos escavados e construídos na rocha de Matera. Casas, igrejas rupestres, becos e terraços formam uma paisagem urbana contínua que parece esculpida na encosta.',
      do:'Comecem de um mirante alto para entender o conjunto, depois desçam a pé por um dos Sassi, entrem em pelo menos uma casa-caverna ou igreja rupestre e parem algumas vezes para olhar o percurso de longe.',
      time:'3h30 a 4h com almoço no meio.',
      tips:'Não é um lugar para seguir Google Maps de forma literal: as passagens mudam de nível e têm muitas escadas. Use o mapa mais para orientação geral.'
    },
    'Casa Grotta': {
      what:'Uma Casa Grotta recria o interior de uma antiga moradia dos Sassi, mostrando como famílias e animais dividiam espaços escavados na rocha até meados do século XX.',
      do:'Entrem em uma casa-caverna próxima da rota de vocês e observem cozinha, cama, ferramentas e organização doméstica. É uma visita curta, mas ajuda muito a entender Matera.',
      time:'20 a 30 min.',
      tips:'Escolham pela proximidade; não vale atravessar Matera só por uma Casa Grotta específica.'
    },
    'Bari Vecchia': {
      what:'Bari Vecchia é o núcleo medieval de Bari, um labirinto de vielas entre o Castelo, a Basílica de San Nicola e a Catedral. Ainda é um bairro vivo, não um centro histórico cenográfico.',
      do:'Façam uma volta curta pelas ruelas, passem pela Basílica de San Nicola e procurem a famosa área onde moradoras preparam orecchiette à mão antes de seguir para o aeroporto.',
      time:'1h30 a 2h.',
      tips:'Como é dia de voo, não transformem a visita em maratona. O objetivo é sentir Bari e comer uma focaccia antes de partir.'
    }
  };

  function escapeHtml(value){
    return String(value ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  }

  function contextFor(option){
    for (const day of days) {
      for (let i=0;i<day.slots.length;i++) {
        const currentSlot = day.slots[i];
        if (currentSlot.options.includes(option) || currentSlot.options.some(x => x.name === option.name)) {
          return {day, slot:currentSlot, index:i};
        }
      }
    }
    return {day:days.find(d=>d.id===active), slot:null, index:-1};
  }

  function guideFor(option){
    const ctx = contextFor(option);
    const custom = guide[option.name] || {};
    const categoryTip = option.category === 'comida'
      ? 'Aqui a ideia é usar a parada como parte do passeio, não como obrigação. Se o lugar estiver lotado e houver boa alternativa ao lado, priorizem a experiência.'
      : option.category === 'rotina'
        ? 'Deixem documentos, ingressos e endereço já abertos no celular antes de sair.'
        : 'Fotografem, mas reservem alguns minutos para simplesmente olhar o lugar sem o celular.';
    return {
      ctx,
      what: custom.what || option.description || (ctx.slot ? ctx.slot.note : ''),
      getting: custom.getting || option.transport || 'Seguir a logística indicada na programação do dia.',
      buy: custom.buy || `${option.booking || 'Não precisa reservar.'}${option.cost ? ` Custo: ${option.cost}.` : ''}`,
      do: custom.do || (ctx.slot ? ctx.slot.note : `Aproveitar ${option.name} sem pressa.`),
      time: custom.time || 'Usar o tempo reservado na programação do dia; não é necessário correr.',
      tips: custom.tips || categoryTip
    };
  }

  function baseUrl(){ return location.href.split('#')[0]; }
  function whatsappUrl(text){ return `https://wa.me/?text=${encodeURIComponent(text)}`; }
  function dayShareLink(day){ return `${baseUrl()}#dia=${encodeURIComponent(day.id)}`; }
  function attractionShareLink(day, option){ return `${baseUrl()}#dia=${encodeURIComponent(day.id)}&atracao=${encodeURIComponent(option.name)}`; }

  function attractionShareText(option, g){
    const day = g.ctx.day;
    const slot = g.ctx.slot;
    return `🇮🇹 Sul da Itália 2026\n\n📍 ${option.name}\n📅 ${day ? `${day.weekday}, ${day.date}` : ''}${slot ? ` · ${slot.time}` : ''}\n\nO que é: ${g.what}\n\nComo chegar: ${g.getting}\n\nO que comprar/reservar: ${g.buy}\n\nO que fazer: ${g.do}\n\nTempo: ${g.time}\n\nDica: ${g.tips}\n\n🔗 ${day ? attractionShareLink(day, option) : baseUrl()}`;
  }

  function dayShareText(day){
    const agenda = day.slots.map(s => `• ${s.time} — ${s.title}`).join('\n');
    return `🇮🇹 Sul da Itália 2026\n\n📅 ${day.weekday}, ${day.date}\n${day.title}\n\n${day.mood}\n\nAgenda:\n${agenda}\n\n🔗 ${dayShareLink(day)}`;
  }

  const originalRenderSummary = renderSummary;
  renderSummary = function(day){
    originalRenderSummary(day);
    const panel = document.getElementById('daySummary');
    if (!panel || !day) return;
    const share = document.createElement('a');
    share.className = 'link-button whatsapp-share day-share-button';
    share.target = '_blank';
    share.rel = 'noopener';
    share.href = whatsappUrl(dayShareText(day));
    share.textContent = 'Compartilhar este dia no WhatsApp';
    const firstList = panel.querySelector('.summary-list');
    if (firstList) panel.insertBefore(share, firstList);
    else panel.appendChild(share);
  };

  const originalRenderDetail = renderDetail;
  renderDetail = function(option){
    originalRenderDetail(option);
    if (!option) return;
    const panel = document.getElementById('detailPanel');
    if (!panel) return;
    const g = guideFor(option);
    const logistics = panel.querySelector('.logistics');
    const guideSection = document.createElement('section');
    guideSection.className = 'tour-guide';
    guideSection.innerHTML = `
      <div class="guide-intro">
        <p class="eyebrow">Seu guia</p>
        <h3>O que é e o que fazer</h3>
      </div>
      <div class="guide-card"><h4>📍 O que é</h4><p>${escapeHtml(g.what)}</p></div>
      <div class="guide-card"><h4>🚕 Como chegar</h4><p>${escapeHtml(g.getting)}</p></div>
      <div class="guide-card"><h4>🎟️ O que comprar ou reservar</h4><p>${escapeHtml(g.buy)}</p></div>
      <div class="guide-card"><h4>👣 O que fazer lá</h4><p>${escapeHtml(g.do)}</p></div>
      <div class="guide-card guide-mini"><h4>⏱️ Quanto tempo</h4><p>${escapeHtml(g.time)}</p></div>
      <div class="guide-card guide-mini"><h4>💡 Dica do guia</h4><p>${escapeHtml(g.tips)}</p></div>`;
    if (logistics) panel.insertBefore(guideSection, logistics);
    else panel.appendChild(guideSection);

    const actions = panel.querySelector('.action-row') || panel;
    const share = document.createElement('a');
    share.className = 'link-button whatsapp-share';
    share.target = '_blank';
    share.rel = 'noopener';
    share.href = whatsappUrl(attractionShareText(option, g));
    share.textContent = 'Compartilhar no WhatsApp';
    actions.appendChild(share);
  };

  function openDeepLink(){
    if (!location.hash || !location.hash.includes('=')) return;
    const params = new URLSearchParams(location.hash.slice(1));
    const dayId = params.get('dia');
    const attraction = params.get('atracao');
    if (dayId && days.some(d => d.id === dayId)) active = dayId;
    selected = null;
    render();
    if (attraction) {
      const day = days.find(d => d.id === active);
      const option = day && day.slots.flatMap(s => s.options).find(o => o.name === attraction);
      if (option) {
        selected = option;
        render();
        showModal();
      }
    }
  }

  render();
  setTimeout(openDeepLink, 0);
})();
