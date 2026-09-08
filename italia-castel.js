// Castel dell'Ovo no dia 13: despedida de Nápoles antes do trem para Bari.
(function(){
  const dia13 = days.find(d => d.id === '13');
  if (dia13 && !dia13.slots.some(s => s.options.some(o => o.name === 'Castel dell’Ovo + Borgo Marinari'))) {
    const castleSlot = slot(
      '10:30',
      'Castel dell’Ovo + Borgo Marinari — opcional',
      'Passeio curto e bonito de despedida de Nápoles. Ver o castelo, o pequeno Borgo Marinari e a Baía; entrar no castelo somente se o acesso interno estiver aberto no dia.',
      [p(
        'Castel dell’Ovo + Borgo Marinari',
        'opcional',
        'O Castel dell’Ovo ocupa o antigo ilhéu de Megaride e é o castelo mais antigo de Nápoles. O nome vem da lenda de que o poeta Virgílio teria escondido um ovo mágico em suas fundações: enquanto o ovo permanecesse intacto, a cidade estaria protegida. Aos pés do castelo fica o pequeno Borgo Marinari, cercado pelo mar e por barcos.',
        'Área externa e Borgo Marinari gratuitos; eventual acesso interno depende da abertura vigente',
        'Não comprar nada antes. Confirmar na manhã do dia 13 se o interior do castelo está aberto ao público',
        'Depois de deixar as malas guardadas na hospedagem, pegar táxi até “Castel dell’Ovo / Borgo Marinari, Via Eldorado”. Descer junto à entrada do Borgo Marinari, atravessar a ligação para o ilhéu e seguir as placas do castelo. Reservar saída dali por volta de 11:35–11:40 para não comprometer o almoço e o trem.',
        'https://www.google.com/maps/search/?api=1&query=Castel+dell%27Ovo+Napoli'
      )]
    );

    // Entra depois do check-out e antes do almoço.
    dia13.slots.splice(1, 0, castleSlot);
    dia13.title = 'Castel dell’Ovo + trem para a Puglia';
    dia13.mood = 'Uma despedida bonita de Nápoles pela manhã e, depois, viagem de trem já comprada para Bari com troca rápida em Caserta.';
    dia13.facts = [
      'Castel dell’Ovo opcional pela manhã',
      'Bilhete Trenitalia já comprado',
      '15:06 Napoli Centrale',
      'Troca em Caserta',
      '19:20 Bari Centrale'
    ];
  }

  const castleGuide = {
    what: 'O Castel dell’Ovo é o castelo mais antigo de Nápoles e ocupa o antigo ilhéu de Megaride, diante do Lungomare. O nome está ligado à lenda medieval de um “ovo mágico” escondido nas fundações pelo poeta Virgílio. Mesmo sem entrar, a combinação do castelo, do Borgo Marinari, do Vesúvio ao fundo e da Baía de Nápoles faz o passeio valer.',
    getting: 'Depois do check-out, deixem as malas guardadas na hospedagem e peguem um táxi até “Castel dell’Ovo / Borgo Marinari, Via Eldorado”. O táxi deixa vocês junto ao acesso do Borgo Marinari. A partir dali, tudo é a pé.',
    entry: 'Entrem pelo acesso do Borgo Marinari, ligado ao Lungomare por uma pequena passagem/ponte. Caminhem até o castelo e sigam a sinalização da entrada. Se os portões internos estiverem fechados por obras ou restrição de acesso, façam o passeio externo e pelo Borgo Marinari — não vale perder tempo tentando contornar o bloqueio.',
    buy: 'Não é necessário comprar ingresso antecipado para o passeio externo. Na manhã do dia 13, confirmem apenas se o acesso interno ao castelo está aberto e se existe alguma regra de entrada naquele dia.',
    do: 'Primeiro observem o castelo do lado do Lungomare e fotografem a vista da baía. Depois entrem no Borgo Marinari, caminhem junto aos barcos e sigam até o castelo. Se o interior estiver aberto, façam uma visita curta e priorizem os pontos de vista para o Golfo e o Vesúvio. Se estiver fechado, o passeio externo já cumpre bem o papel.',
    time: 'Cerca de 1h a 1h10. A meta é sair da região por volta de 11:35–11:40.',
    tips: 'Este é um bônus de despedida, não uma atração para atrasar o trem. Se houver fila, chuva forte, acesso complicado ou qualquer atraso pela manhã, pulem a parte interna sem culpa e fiquem só com o Borgo Marinari e as vistas.'
  };

  const previousRenderDetail = renderDetail;
  renderDetail = function(option){
    previousRenderDetail(option);
    if (!option || option.name !== 'Castel dell’Ovo + Borgo Marinari') return;
    const panel = document.getElementById('detailPanel');
    if (!panel) return;
    const cards = [...panel.querySelectorAll('.guide-card')];
    const setCard = (label, text) => {
      const card = cards.find(c => c.querySelector('h4')?.textContent.includes(label));
      if (card) {
        const paragraph = card.querySelector('p');
        if (paragraph) paragraph.textContent = text;
      }
      return card;
    };
    setCard('O que é', castleGuide.what);
    const gettingCard = setCard('Como chegar', castleGuide.getting);
    setCard('O que comprar', castleGuide.buy);
    setCard('O que fazer', castleGuide.do);
    setCard('Quanto tempo', castleGuide.time);
    setCard('Dica do guia', castleGuide.tips);

    if (!cards.some(c => c.querySelector('h4')?.textContent.includes('Como entrar'))) {
      const entryCard = document.createElement('div');
      entryCard.className = 'guide-card';
      entryCard.innerHTML = '<h4>🚪 Como entrar / por onde começar</h4><p></p>';
      entryCard.querySelector('p').textContent = castleGuide.entry;
      if (gettingCard) gettingCard.insertAdjacentElement('afterend', entryCard);
      else panel.querySelector('.tour-guide')?.appendChild(entryCard);
    }

    const share = panel.querySelector('.whatsapp-share');
    if (share) {
      const day = days.find(d => d.id === '13');
      const text = `🇮🇹 Sul da Itália 2026\n\n📍 Castel dell’Ovo + Borgo Marinari\n📅 ${day ? `${day.weekday}, ${day.date}` : '13/09'} · 10:30\n\nO que é: ${castleGuide.what}\n\nComo chegar: ${castleGuide.getting}\n\nComo entrar: ${castleGuide.entry}\n\nO que comprar/reservar: ${castleGuide.buy}\n\nO que fazer: ${castleGuide.do}\n\nTempo: ${castleGuide.time}\n\nDica: ${castleGuide.tips}\n\n🔗 ${location.href.split('#')[0]}#dia=13&atracao=${encodeURIComponent('Castel dell’Ovo + Borgo Marinari')}`;
      share.href = `https://wa.me/?text=${encodeURIComponent(text)}`;
    }
  };

  selected = null;
  render();
})();
