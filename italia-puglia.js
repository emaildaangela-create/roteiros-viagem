// Correções e detalhamento da etapa da Puglia com base nas reservas reais da viagem.
(function(){
  // A hospedagem fica em Capitolo, fora do centro histórico de Monopoli.
  monopoliBase.title='Color Dream Residence — Capitolo, Monopoli';
  monopoliBase.facts=[
    '<strong>Endereço:</strong> Contrada Lamandia, 3/T · Località Capitolo · Monopoli',
    '<strong>Período:</strong> 13-18 setembro · 5 noites',
    '<strong>Importante:</strong> não fica no centro histórico; o carro será útil para os passeios e para ir ao centro de Monopoli',
    '<strong>Estacionamento:</strong> confirmar vaga/condições com a hospedagem antes da chegada'
  ];

  const dia13=days.find(d=>d.id==='13');
  if(dia13){
    dia13.title='Nápoles → Caserta → Bari → Capitolo';
    dia13.mood='Manhã tranquila em Nápoles e viagem de trem já comprada à tarde, com uma troca curta em Caserta. Depois, seguir para a hospedagem em Capitolo.';
    dia13.facts=['Bilhete Trenitalia já comprado','15:06 Napoli Centrale','Troca em Caserta','19:20 Bari Centrale','Levar documento de identificação'];
    dia13.slots=[
      slot('10:00','Check-out + malas','Encerrar a hospedagem sem pressa e combinar onde deixar as malas até a hora de ir para a estação.',[
        p('VAN Vieni a Napoli — check-out','rotina','Fazer o check-out e confirmar com o anfitrião se as malas podem ficar guardadas até o início da tarde.','Já pago','Confirmar guarda das malas','Separar documentos, bilhetes e carregadores antes de sair.','')
      ]),
      slot('12:00','Almoço leve perto da hospedagem','Comer antes da viagem para não depender da estação.',[
        p('Almoço antes do trem','comida','Preferir uma refeição simples e sem fila para voltar, pegar as malas e sair com margem.','€-€€','Não precisa','Ficar perto da hospedagem e evitar atravessar a cidade.','https://www.google.com/maps/search/?api=1&query=ristoranti+Vico+San+Domenico+Soriano+Napoli')
      ]),
      slot('13:40','Pegar malas + táxi para Napoli Centrale','Sair cedo o bastante para estar dentro da estação por volta de 14:15.',[
        p('Táxi → Napoli Centrale','rotina','Com malas e três pessoas, é a opção mais simples para chegar à estação sem depender de conexões locais.','Táxi local','Na hora','Pedir “Napoli Centrale, ingresso principale, Piazza Garibaldi”. Ao chegar, entrar no salão principal e procurar os painéis PARTENZE.','https://www.google.com/maps/dir/Vico+San+Domenico+Soriano+20+Napoli/Napoli+Centrale')
      ]),
      slot('14:15','Napoli Centrale — localizar o trem','Usar esta margem para achar o binário com calma e deixar o bilhete já aberto no celular.',[
        p('Napoli Centrale — embarque','rotina','Estação principal de Nápoles. O primeiro trem da viagem é o Regionale 21151 com destino a Caserta.','Bilhete já comprado','Nada a comprar','Entrar pelo saguão principal, olhar os monitores PARTENZE e procurar “21151 / CASERTA / 15:06”. O binário pode aparecer só perto do horário; seguir as placas quando for anunciado.','https://www.google.com/maps/search/?api=1&query=Napoli+Centrale')
      ]),
      slot('15:06','Regionale 21151 — Napoli → Caserta','Primeiro trecho da viagem. Descer em Caserta e preparar-se para uma troca rápida.',[
        p('Regionale 21151 Napoli → Caserta','rotina','Trem regional que sai de Napoli Centrale e termina em Caserta, onde vocês fazem a única baldeação.','Já comprado','Bilhete eletrônico; levar documento','Entrar no vagão indicado/aberto para embarque. No Regionale não há necessidade de procurar assento reservado se o bilhete não indicar lugar. Fiquem atentos à chegada em Caserta.','https://www.trenitalia.com/')
      ]),
      slot('15:55','Troca em Caserta','A conexão é curta: descer, olhar imediatamente o painel e seguir para o Frecciarossa 8315.',[
        p('Troca em Caserta','rotina','É a única baldeação do trajeto. O Frecciarossa 8315 passa por Caserta poucos minutos depois e segue para Bari.','Incluído na viagem','Nada a comprar','Assim que descerem, procurem no painel PARTENZE “FR 8315 / LECCE”. Não confiem em número de plataforma salvo com antecedência: confirmem no painel. Se o primeiro trem atrasar, procurem imediatamente um funcionário da Trenitalia.','https://www.google.com/maps/search/?api=1&query=Caserta+Train+Station')
      ]),
      slot('16:06','Frecciarossa 8315 — Caserta → Bari','Trecho longo e confortável até Bari Centrale.',[
        p('Frecciarossa 8315 Caserta → Bari','rotina','Trem de alta velocidade que segue de Caserta por Benevento, Foggia e Barletta até Bari.','Já comprado','Assentos reservados no bilhete','Localizar o número da carrozza e os assentos no aplicativo; ficar no trecho da plataforma correspondente à carrozza e embarcar. Mostrar bilhete e documento se solicitado.','https://www.trenitalia.com/')
      ]),
      slot('19:20','Chegada a Bari Centrale','O bilhete mostrado termina em Bari. A partir daqui começa a logística do carro/hospedagem.',[
        p('Bari Centrale — chegada','rotina','Estação central de Bari, em Piazza Aldo Moro. O Frecciarossa 8315 continua depois para Monopoli, mas o bilhete mostrado termina em Bari Centrale.','Sem custo extra','Não permanecer no trem sem bilhete válido além de Bari','Descer em Bari e seguir as placas USCITA / Piazza Aldo Moro. Se decidirem continuar de trem até Monopoli em vez de retirar carro, comprem ou alterem o bilhete antes de permanecer a bordo.','https://www.google.com/maps/search/?api=1&query=Bari+Centrale')
      ]),
      slot('19:30','Retirada do carro — confirmar a reserva','A Centauro de Bari fica na região do aeroporto, não dentro de Bari Centrale.',[
        p('Centauro Bari Aeroporto','rotina','Se esta for a locadora reservada por vocês, a loja oficial fica perto do Aeroporto de Bari e funciona com shuttle próprio a partir do terminal.','Conforme reserva','Confirmar reserva e horário antes do dia 13','De Bari Centrale, seguir para Bari Aeroporto pelo trem aeroportuário. No aeroporto, sair pela porta 2, virar à esquerda e caminhar cerca de 200 m até a área com placa vermelha “Rent a Car”; aguardar o shuttle Centauro, que leva ao escritório.','https://www.centauro.net/pt/aluguer-de-carros-baratos/italia/bari/aeroporto/')
      ]),
      slot('21:15','Chegada ao Color Dream Residence','A hospedagem fica em Capitolo, ao sul de Monopoli. Avisar previamente que vocês chegarão à noite.',[
        p('Color Dream Residence — Capitolo','rotina','Residência próxima ao mar em Località Capitolo, fora do centro urbano de Monopoli.','Já pago · €819 total','Já reservado; confirmar instruções de chegada noturna','Endereço: Contrada Lamandia, 3/T, Località Capitolo. Ir de carro e seguir as instruções da propriedade para estacionamento/check-in. Contatar a hospedagem antes do dia 13 para avisar da chegada após o trem.','https://www.google.com/maps/search/?api=1&query=Color+Dream+Residence+Monopoli')
      ])
    ];
  }

  const dia14=days.find(d=>d.id==='14');
  if(dia14){
    dia14.title='Alberobello + Monopoli no fim da tarde';
    dia14.mood='Chegar cedo aos trulli e, depois do descanso, conhecer Monopoli com calma no melhor horário do dia.';
    dia14.facts=['Alberobello cedo','Centro dos trulli a pé','Volta à hospedagem para pausa','Monopoli no fim da tarde'];
    dia14.slots=[
      slot('08:30','Saída de Capitolo para Alberobello','Ir de carro e chegar antes do pico de visitantes.',[
        p('Carro até Alberobello','rotina','Bate-volta curto desde o Color Dream Residence.','Combustível/estacionamento','Não precisa','Sair de Contrada Lamandia e seguir para Alberobello. Estacionar fora da área dos trulli e entrar a pé.','https://www.google.com/maps/dir/Color+Dream+Residence+Monopoli/Alberobello')
      ]),
      slot('09:15','Rione Monti + Aia Piccola','Ver os trulli mais famosos e depois atravessar para a parte mais tranquila.',[
        p('Trulli de Alberobello','visita','Bairros inteiros construídos com casas de pedra de telhado cônico, Patrimônio Mundial.','Grátis nas ruas; atrações internas podem cobrar','Não precisa para caminhar pelos bairros','Começar pelo Largo Martellotta, subir pelo Rione Monti e depois atravessar para Aia Piccola, que é mais residencial e menos comercial.','https://www.google.com/maps/search/?api=1&query=Rione+Monti+Alberobello')
      ]),
      slot('12:30','Almoço em Alberobello','Comer antes de voltar à hospedagem.',[
        p('La Cantina di Dio Vincenzo','comida','Cozinha pugliana com massas e pratos locais.','€€','Reserva recomendada','No centro de Alberobello; seguir a pé a partir da área dos trulli.','https://www.google.com/maps/search/?api=1&query=La+Cantina+di+Dio+Vincenzo+Alberobello')
      ]),
      slot('14:30','Volta ao Color Dream + pausa','Descansar, tomar banho e sair novamente no fim da tarde.',[
        p('Color Dream Residence — pausa','rotina','Voltar para Capitolo antes de conhecer Monopoli.','Sem custo','Não precisa','Alberobello → Color Dream Residence de carro.','https://www.google.com/maps/dir/Alberobello/Color+Dream+Residence+Monopoli')
      ]),
      slot('17:00','Monopoli — centro histórico + porto','Passeio bonito e simples, sem transformar a cidade em checklist.',[
        p('Centro histórico de Monopoli','visita','Núcleo antigo de casas claras, vielas de pedra e pequenas praças junto ao mar.','Grátis','Não precisa','Do Color Dream, ir de carro até a borda do centro e estacionar fora da ZTL. Entrar a pé pela região de Porta Vecchia/Piazza Garibaldi.','https://www.google.com/maps/search/?api=1&query=Centro+Storico+Monopoli'),
        p('Porto Antico di Monopoli','visita','Pequeno porto de pescadores com barcos coloridos aos pés do centro antigo.','Grátis','Não precisa','A pé dentro do centro histórico; descer em direção ao porto pela região de Piazza Garibaldi.','https://www.google.com/maps/search/?api=1&query=Porto+Antico+Monopoli'),
        p('Cala Porta Vecchia','opcional','Praia urbana encaixada sob as muralhas do centro histórico, boa para ver o pôr do sol ou molhar os pés.','Grátis','Não precisa','A pé desde o Porto Antico pelas muralhas; acesso público por escadas/rampas.','https://www.google.com/maps/search/?api=1&query=Cala+Porta+Vecchia+Monopoli')
      ]),
      slot('19:30','Jantar em Monopoli','Ficar pelo centro para jantar antes de voltar a Capitolo.',[
        p('My Wine — Il Piacere del Palato','comida','Wine bar e cozinha contemporânea; opção para um jantar mais arrumadinho.','€€','Reserva recomendada','No centro de Monopoli; confirmar mesa no mesmo dia.','https://www.google.com/maps/search/?api=1&query=My+Wine+Il+Piacere+del+Palato+Monopoli'),
        p('Al Mare','comida','Pizzaria-bistrô e frutos do mar; alternativa simples para a família.','€€','Reserva recomendada','Seguir de carro ou a pé conforme o ponto onde estacionarem.','https://www.google.com/maps/search/?api=1&query=Al+Mare+Monopoli')
      ])
    ];
  }

  selected=null;
  render();
})();