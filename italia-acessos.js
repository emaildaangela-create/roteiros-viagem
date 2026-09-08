// Instruções práticas de chegada e entrada: onde estacionar, por onde entrar e o que procurar.
(function(){
  const accessGuide={
    'Napoli Centrale — embarque':{
      getting:'Da hospedagem, ir de táxi até Napoli Centrale / Piazza Garibaldi e tentar estar no saguão por volta de 14:15 para o trem das 15:06.',
      entry:'Entrar no saguão principal e olhar os monitores PARTENZE. Procurar “Regionale 21151 / CASERTA / 15:06”. O binário pode ser anunciado perto do horário. Não há controle de segurança como em aeroporto: quando o binário aparecer, basta seguir as placas e ir à plataforma com o bilhete aberto no celular.'
    },
    'Regionale 21151 Napoli → Caserta':{
      entry:'No Regionale, embarquem assim que a composição estiver disponível. Se o bilhete não mostrar assento, vocês podem sentar em qualquer lugar livre da classe comprada. O bilhete digital da Trenitalia é validado eletronicamente conforme as regras do aplicativo; levem documento porque os títulos são nominativos.'
    },
    'Troca em Caserta':{
      getting:'O Regionale 21151 chega a Caserta por volta de 15:55. O Frecciarossa 8315 passa poucos minutos depois. Ao descer, não parem para café nem banheiro: vão direto ao painel PARTENZE.',
      entry:'No painel, procurar “FR 8315 / LECCE”. Confirmem o binário ali — ele pode mudar. Depois, no bilhete do Frecciarossa, localizem CARROZZA e POSTO. Fiquem no setor da plataforma correspondente à carrozza para não precisar atravessar o trem com malas.'
    },
    'Frecciarossa 8315 Caserta → Bari':{
      entry:'O Frecciarossa tem assentos marcados. Entrem na carrozza indicada e procurem os números de posto. Guardem as malas nos racks próximos às portas ou acima dos assentos, sem bloquear o corredor. O fiscal pode pedir bilhete e documento.'
    },
    'Bari Centrale — chegada':{
      entry:'Descer em Bari Centrale porque o bilhete mostrado termina ali. Seguir as placas USCITA / Piazza Aldo Moro. O mesmo FR 8315 continua para Monopoli, mas só permaneçam a bordo se tiverem um título válido até Monopoli.'
    },
    'Centauro Bari Aeroporto':{
      getting:'De Bari Centrale, seguir para Bari Aeroporto pelo trem aeroportuário. A viagem ferroviária até o aeroporto leva cerca de 15 minutos. Depois, dentro do terminal, seguir para a saída 2.',
      entry:'Ao sair pela porta 2, virar à esquerda e caminhar cerca de 200 m até o estacionamento com a placa vermelha “Rent a Car”. Esperar ali o shuttle da Centauro, que passa aproximadamente a cada 10–15 minutos e leva ao escritório da locadora. A loja oficial de Bari fica em Str. del Baraccone, 2, perto do aeroporto.'
    },
    'Color Dream Residence — Capitolo':{
      getting:'A hospedagem fica em Località Capitolo, na costa ao sul de Monopoli, e não no centro histórico. O endereço é Contrada Lamandia, 3/T. Depois de retirar o carro, seguir diretamente para lá.',
      entry:'Não entrem no centro histórico de Monopoli para procurar a hospedagem. Coloquem “Color Dream Residence, Contrada Lamandia 3/T” no mapa. Antes do dia 13, avisem a propriedade sobre a chegada noturna e peçam as instruções de check-in e estacionamento.'
    },
    'Trulli de Alberobello':{
      getting:'Do Color Dream Residence, ir de carro até Alberobello. Ao chegar, não tentem dirigir pelas ruas dos trulli: estacionem na parte baixa, fora da área histórica, e caminhem até Largo Martellotta.',
      entry:'Não existe portão nem ingresso geral. Rione Monti e Aia Piccola são bairros abertos: vocês simplesmente entram caminhando. Comecem em Largo Martellotta, subam pelo Rione Monti e depois atravessem para Aia Piccola. Só museus ou alguns trulli visitáveis cobram entrada.'
    },
    'Centro histórico de Monopoli':{
      getting:'Do Color Dream Residence, ir de carro até Monopoli e estacionar fora da ZTL do centro histórico. O hotel fica em Capitolo, portanto não é um trajeto para fazer a pé.',
      entry:'O centro histórico não tem bilheteria. Depois de estacionar, entrem a pé pela região de Porta Vecchia / Piazza Garibaldi e deixem o carro fora da ZTL. A partir daí, façam tudo caminhando.'
    },
    'Porto Antico di Monopoli':{
      getting:'Já dentro do centro histórico, caminhem em direção a Piazza Garibaldi e desçam para o porto. É um deslocamento curto e totalmente a pé.',
      entry:'É um porto aberto, sem ingresso. O melhor é chegar pela parte alta do centro, descer até os barcos e caminhar pela borda do porto com calma.'
    },
    'Cala Porta Vecchia':{
      getting:'Do Porto Antico, seguir a pé pelas muralhas em direção à praia de Porta Vecchia.',
      entry:'É praia pública, sem ingresso. O acesso é feito pelas descidas públicas junto às muralhas. Se forem só para ver o pôr do sol, não precisam levar estrutura de praia.'
    },
    'Polignano a Mare':{
      getting:'Do Color Dream Residence, ir de carro para Polignano a Mare e estacionar fora do centro histórico. Depois, seguir a pé até Piazza Vittorio Emanuele II.',
      entry:'O centro antigo é aberto e gratuito. Entrem pelo Arco Marchesale, a antiga porta da cidade, e sigam pelas ruelas até os mirantes sobre Lama Monachile. Não há bilhete para circular no centro.'
    },
    'Lido em Polignano':{
      entry:'O acesso depende do lido escolhido. Em geral, vocês chegam à recepção, informam a reserva/nome e recebem indicação de espreguiçadeiras e guarda-sol. Confirmem antes se o estacionamento está incluído e se fornecem toalhas.'
    },
    'Ostuni — Cidade Branca':{
      getting:'Ir de carro desde Capitolo/Monopoli e estacionar abaixo do centro histórico. Evitem tentar subir de carro pelas ruas antigas.',
      entry:'Não há ingresso geral. Comecem em Piazza della Libertà e subam a pé em direção à Catedral pela Via Cattedrale. A graça é justamente entrar nas vielas brancas e se perder um pouco sem roteiro rígido.'
    },
    'Grotte di Castellana':{
      getting:'Ir de carro até o complexo das Grotte di Castellana e chegar pelo menos 15 minutos antes do horário reservado. Há área de estacionamento próxima ao centro de visitantes.',
      entry:'A visita é guiada. Primeiro apresentem o ingresso/QR code na área de recepção/bilheteria e depois aguardem a chamada do grupo. Vocês não entram sozinhos na caverna. Se escolherem o percurso completo, reservem cerca de 100 minutos e usem calçado firme.'
    },
    'Sassi di Matera':{
      getting:'Ir de carro desde Monopoli/Capitolo até Matera e estacionar na cidade moderna, fora da área dos Sassi. Não tentem entrar de carro no núcleo histórico.',
      entry:'Os Sassi são bairros abertos e não exigem ingresso geral. Um ótimo ponto de entrada é Piazza Vittorio Veneto: dali vocês veem o conjunto do alto e descem a pé. Igrejas rupestres, casas-caverna e museus específicos têm bilhetes próprios.'
    },
    'Casa Grotta':{
      entry:'Escolham uma Casa Grotta que esteja no caminho de vocês. A entrada é individual: comprem o bilhete na pequena bilheteria do local e façam a visita curta. Não vale atravessar os Sassi para buscar uma casa específica.'
    },
    'Bari Vecchia':{
      getting:'No dia do voo, estacionem fora do núcleo antigo ou deixem o carro em área autorizada e sigam a pé. Se estiverem em Bari Centrale sem carro, a caminhada até a entrada do centro antigo é simples pelo eixo do centro moderno.',
      entry:'Bari Vecchia é um bairro aberto, sem ingresso. Entrem pela região de Piazza del Ferrarese / Piazza Mercantile e caminhem até a Basílica de San Nicola. Igrejas têm regras próprias de visita; respeitem silêncio e vestimenta adequada.'
    }
  };

  function escapeHtml(value){
    return String(value??'').replace(/[&<>'\"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','\"':'&quot;'}[ch]));
  }

  const priorRenderDetail=renderDetail;
  renderDetail=function(option){
    priorRenderDetail(option);
    if(!option) return;
    const extra=accessGuide[option.name];
    if(!extra) return;
    const panel=document.getElementById('detailPanel');
    if(!panel) return;
    const cards=[...panel.querySelectorAll('.guide-card')];
    const gettingCard=cards.find(card=>card.querySelector('h4')?.textContent.includes('Como chegar'));
    if(gettingCard&&extra.getting){
      const p=gettingCard.querySelector('p');
      if(p) p.textContent=extra.getting;
    }
    if(extra.entry){
      const entryCard=document.createElement('div');
      entryCard.className='guide-card';
      entryCard.innerHTML=`<h4>🚪 Como entrar / por onde começar</h4><p>${escapeHtml(extra.entry)}</p>`;
      if(gettingCard) gettingCard.insertAdjacentElement('afterend',entryCard);
      else panel.querySelector('.tour-guide')?.appendChild(entryCard);
    }
    const share=panel.querySelector('.whatsapp-share');
    if(share&&extra.entry){
      try{
        const url=new URL(share.href);
        const current=url.searchParams.get('text')||'';
        url.searchParams.set('text',`${current}\n\nComo entrar / por onde começar: ${extra.entry}`);
        share.href=url.toString();
      }catch(e){}
    }
  };
  render();
})();