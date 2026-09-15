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


  // Roteiro recalculado em 15/09 após a perda do dia 14.
  const dia15=days.find(d=>d.id==='15');
  if(dia15){
    dia15.title='Alberobello + Monopoli';
    dia15.mood='Recuperar o passeio perdido de ontem sem atravessar a região: trulli primeiro e Monopoli no fim da tarde.';
    dia15.facts=['Saída assim que o carro estiver liberado','Ideal: deixar Capitolo até 10:30','Alberobello a pé','Monopoli no fim da tarde','Atenção à possibilidade de chuva'];
    dia15.slots=[
      slot('10:30','Capitolo → Alberobello','Saída ajustável conforme a liberação do carro; evitem entrar nas ZTL.',[
        p('Carro até Alberobello','rotina','Trajeto curto desde a hospedagem para recuperar a programação perdida do dia 14.','Combustível e estacionamento','Não precisa','Sair do Color Dream Residence e estacionar fora da área dos trulli. Se o carro só for liberado depois de 13:30, priorizar Monopoli hoje e transferir Alberobello para a manhã do dia 16.','https://www.google.com/maps/dir/Color+Dream+Residence+Monopoli/Alberobello')
      ]),
      slot('11:15','Rione Monti + Aia Piccola','Percorrer os dois conjuntos de trulli sem transformar o passeio em corrida.',[
        p('Trulli de Alberobello','visita','Casas de pedra com telhados cônicos, Patrimônio Mundial da UNESCO.','Grátis nas ruas; interiores à parte','Não precisa','Começar no Largo Martellotta, subir pelo Rione Monti e atravessar para Aia Piccola.','https://www.google.com/maps/search/?api=1&query=Rione+Monti+Alberobello')
      ]),
      slot('14:00','Almoço em Alberobello','Fazer uma refeição simples antes de voltar para Capitolo.',[
        p('Almoço em Alberobello','comida','Orecchiette e pratos puglianos no centro.','€€','Reserva recomendada','Escolher um restaurante perto do Largo Martellotta para não perder tempo com deslocamento.','https://www.google.com/maps/search/?api=1&query=ristoranti+Largo+Martellotta+Alberobello')
      ]),
      slot('16:00','Pausa no Color Dream','Descansar e sair novamente no melhor horário para Monopoli.',[
        p('Color Dream Residence — pausa','rotina','Volta curta à hospedagem para descansar antes do passeio urbano.','Sem custo','Não precisa','Alberobello → Capitolo de carro.','https://www.google.com/maps/dir/Alberobello/Color+Dream+Residence+Monopoli')
      ]),
      slot('17:30','Centro histórico + Porto Antico','Conhecer Monopoli com luz bonita e temperatura mais agradável.',[
        p('Centro histórico de Monopoli','visita','Vielas claras, muralhas e praças junto ao Adriático.','Grátis','Não precisa','Estacionar fora da ZTL e entrar a pé pela região de Porta Vecchia.','https://www.google.com/maps/search/?api=1&query=Centro+Storico+Monopoli'),
        p('Porto Antico di Monopoli','visita','Pequeno porto de pescadores com barcos azuis tradicionais.','Grátis','Não precisa','Seguir a pé desde Piazza Garibaldi.','https://www.google.com/maps/search/?api=1&query=Porto+Antico+Monopoli')
      ]),
      slot('19:30','Jantar em Monopoli','Encerrar o dia perto da hospedagem.',[
        p('Jantar em Monopoli','comida','Pizza, massa ou frutos do mar no centro histórico.','€€','Reserva recomendada','Escolher um restaurante dentro do centro para continuar a pé.','https://www.google.com/maps/search/?api=1&query=ristoranti+Centro+Storico+Monopoli')
      ])
    ];
  }

  const dia16=days.find(d=>d.id==='16');
  if(dia16){
    dia16.title='Polignano a Mare + praia + Ostuni';
    dia16.mood='Praia no melhor período do dia e Ostuni no fim da tarde, juntando dois passeios costeiros sem grande desvio.';
    dia16.facts=['Polignano pela manhã','Lido com banheiro e estrutura','Banho e troca de roupa antes de Ostuni','Ostuni no fim da tarde','Levar roupa seca'];
    dia16.slots=[
      slot('08:45','Capitolo → Polignano a Mare','Chegar antes do movimento maior e estacionar fora do centro.',[
        p('Carro até Polignano a Mare','rotina','Trajeto curto pela costa desde Capitolo.','Combustível e estacionamento','Não precisa','Procurar estacionamento fora da ZTL e seguir a pé.','https://www.google.com/maps/dir/Color+Dream+Residence+Monopoli/Polignano+a+Mare')
      ]),
      slot('09:30','Centro histórico e mirantes','Passear pela aldeia sobre as falésias antes da praia.',[
        p('Polignano a Mare','visita','Centro branco, falésias e mirantes sobre Lama Monachile.','Grátis','Não precisa','Fazer o percurso a pé e deixar o banho de mar para um lido com apoio.','https://www.google.com/maps/search/?api=1&query=Centro+Storico+Polignano+a+Mare')
      ]),
      slot('11:30','Lido com estrutura','Praia com banheiro, ducha e lugar para trocar de roupa.',[
        p('Lido em Polignano','visita','Estrutura mais confortável para a família antes de seguir para outra cidade.','Pago; consultar diária','Reservar recomendado','Escolher um lido com estacionamento, ducha e cabine. Tomar banho e vestir roupa seca antes de sair.','https://www.google.com/maps/search/?api=1&query=lido+con+doccia+Polignano+a+Mare')
      ]),
      slot('15:30','Polignano → Ostuni','Seguir para a Cidade Branca depois de todos já estarem secos e trocados.',[
        p('Carro até Ostuni','rotina','Deslocamento costeiro de aproximadamente 45–55 minutos.','Combustível e estacionamento','Não precisa','Estacionar fora do centro histórico; não entrar na ZTL.','https://www.google.com/maps/dir/Polignano+a+Mare/Ostuni')
      ]),
      slot('16:30','Ostuni — Cidade Branca','Caminhar pelas ruas caiadas e ver o fim de tarde nos mirantes.',[
        p('Centro histórico de Ostuni','visita','Casario branco medieval, escadarias e vistas sobre oliveiras até o Adriático.','Grátis','Não precisa','Subir a pé até a Catedral e voltar pelas vielas e mirantes.','https://www.google.com/maps/search/?api=1&query=Centro+Storico+Ostuni')
      ]),
      slot('19:00','Jantar em Ostuni','Jantar cedo antes do retorno a Capitolo.',[
        p('Jantar em Ostuni','comida','Cozinha pugliana no centro histórico.','€€','Reserva recomendada','Escolher mesa no centro e retornar depois pela estrada costeira.','https://www.google.com/maps/search/?api=1&query=ristoranti+Centro+Storico+Ostuni')
      ])
    ];
  }

  const dia17=days.find(d=>d.id==='17');
  if(dia17){
    dia17.title='Matera — dia inteiro';
    dia17.mood='Deixar Matera sozinha no dia para caminhar pelos Sassi com calma e sem encaixes artificiais.';
    dia17.facts=['Saída às 08:00','Cerca de 1h15 de carro','Sassi a pé','Tênis firme','Casa Grotta opcional'];
    dia17.slots=[
      slot('08:00','Capitolo → Matera','Sair cedo e estacionar fora dos Sassi e da ZTL.',[
        p('Carro até Matera','rotina','Bate-volta até a Basilicata.','Combustível e estacionamento à parte','Não precisa','Usar estacionamento fora do centro histórico e seguir a pé.','https://www.google.com/maps/dir/Color+Dream+Residence+Monopoli/Matera')
      ]),
      slot('09:30','Belvedere + Sassi','Começar pela vista geral e descer com calma pelos bairros históricos.',[
        p('Sassi di Matera','visita','Bairros escavados na rocha e ocupados há milênios, Patrimônio Mundial.','Grátis nas áreas públicas','Não precisa','Percurso com pedras, escadas e ladeiras; usar tênis firme.','https://www.google.com/maps/search/?api=1&query=Sassi+di+Matera')
      ]),
      slot('12:30','Almoço em Matera','Pausa no meio do percurso.',[
        p('Almoço com vista para os Sassi','comida','Cozinha local em uma área histórica singular.','€€','Reserva recomendada','Reservar mesa perto do percurso para evitar subidas extras.','https://www.google.com/maps/search/?api=1&query=ristorante+vista+Sassi+Matera')
      ]),
      slot('14:30','Casa Grotta + igrejas rupestres','Entender como as famílias viviam e completar o passeio histórico.',[
        p('Casa Grotta','visita','Pequeno museu dentro de uma antiga casa-caverna mobiliada.','Ingresso pago','Normalmente na hora','Escolher uma opção próxima ao percurso dos Sassi.','https://www.google.com/maps/search/?api=1&query=Casa+Grotta+Matera'),
        p('Igreja rupestre','opcional','Templo escavado na rocha, característico da história religiosa de Matera.','Ingresso pago','Consultar no local','Escolher apenas uma para preservar o ritmo do dia.','https://www.google.com/maps/search/?api=1&query=chiesa+rupestre+Matera')
      ]),
      slot('17:00','Retorno a Capitolo','Voltar antes de escurecer e preparar as malas.',[
        p('Matera → Color Dream Residence','rotina','Retorno à hospedagem para a última noite.','Combustível','Não precisa','Prever cerca de 1h15–1h30 e deixar as malas organizadas para o check-out.','https://www.google.com/maps/dir/Matera/Color+Dream+Residence+Monopoli')
      ])
    ];
  }

  const dia18=days.find(d=>d.id==='18');
  if(dia18){
    dia18.title='Bari Vecchia + aeroporto';
    dia18.mood='Última visita totalmente urbana: nada de praia, para seguir direto ao aeroporto sem precisar tomar banho.';
    dia18.facts=['Check-out às 08:00','Passeio sem praia','Bari Vecchia a pé','Devolver carro às 14:30','Voo AF1289 às 17:30'];
    dia18.slots=[
      slot('08:00','Check-out e saída para Bari','Sair com as malas prontas e seguir diretamente para a cidade.',[
        p('Color Dream Residence — check-out','rotina','Encerrar a estadia em Capitolo e colocar toda a bagagem no carro.','Já pago','Já reservado','Conferir quartos, documentos, carregadores e itens de Valentina antes de sair.','https://www.google.com/maps/dir/Color+Dream+Residence+Monopoli/Bari')
      ]),
      slot('09:15','Bari Vecchia','Passeio urbano pelas ruas antigas, sem banho de mar.',[
        p('Bari Vecchia','visita','Centro histórico de Bari, com vielas, igrejas e mulheres fazendo orecchiette nas portas das casas.','Grátis','Não precisa','Estacionar fora da ZTL; não deixar itens visíveis dentro do carro. Seguir a pé.','https://www.google.com/maps/search/?api=1&query=Bari+Vecchia'),
        p('Basílica de San Nicola','visita','Basílica românica que guarda as relíquias de São Nicolau.','Grátis','Não precisa','Fica dentro de Bari Vecchia e entra naturalmente no percurso a pé.','https://www.google.com/maps/search/?api=1&query=Basilica+San+Nicola+Bari')
      ]),
      slot('11:30','Focaccia e almoço leve','Comer antes de seguir ao aeroporto.',[
        p('Focaccia barese','comida','Especialidade local prática para o último almoço.','€','Não precisa','Parar em uma padaria dentro de Bari Vecchia; evitar almoço demorado.','https://www.google.com/maps/search/?api=1&query=focaccia+barese+Bari+Vecchia')
      ]),
      slot('12:30','Passeio final + saída','Última caminhada curta e retorno ao carro com folga.',[
        p('Lungomare de Bari','visita','Calçadão urbano com vista do Adriático, sem entrar na praia.','Grátis','Não precisa','Fazer apenas um trecho curto e sair de Bari até 13:30.','https://www.google.com/maps/search/?api=1&query=Lungomare+di+Bari')
      ]),
      slot('13:30','Bari → Aeroporto BRI','Seguir para a locadora, prevendo trânsito e abastecimento.',[
        p('Deslocamento ao aeroporto','rotina','Margem para abastecer corretamente, devolver o carro e usar o shuttle.','Combustível final','Não precisa','Confirmar no contrato qual combustível usar e guardar o comprovante do último abastecimento.','https://www.google.com/maps/dir/Bari+Vecchia/Bari+Airport')
      ]),
      slot('14:30','Devolução do carro — Centauro','Chegar com três horas de antecedência para vistoria e traslado ao terminal.',[
        p('Centauro Bari Aeroporto','rotina','Devolução do carro e shuttle até o terminal.','Incluído no aluguel','Já reservado','Fotografar carro, painel e nível de combustível antes de entregar; guardar o comprovante.','https://www.google.com/maps/search/?api=1&query=Centauro+Bari+Airport')
      ]),
      slot('17:30','Voo Bari → Paris-CDG','Voo direto Air France AF1289.',[
        p('Air France AF1289','rotina','Voo para Paris, chegada prevista às 20:05 no Terminal 2F.','Já comprado','Já reservado','Check-in limite 16:50; seguir para o portão indicado no aplicativo.','https://www.airfrance.com.br')
      ])
    ];
  }


  // Ajuste final: Alberobello no dia do aeroporto; 15/09 fica próximo da base.
  if(dia15){
    dia15.title='Monopoli + Ostuni';
    dia15.mood='Começar perto da hospedagem enquanto o carro é resolvido e seguir para Ostuni no meio da tarde.';
    dia15.facts=['Manhã flexível em Monopoli','Sem praia','Ostuni no fim da tarde','Plano compatível com eventual atraso do carro','Atenção à possibilidade de chuva'];
    dia15.slots=[
      slot('10:30','Monopoli — centro histórico e porto','Começar pelo passeio mais próximo da hospedagem; o horário pode avançar se o carro demorar.',[
        p('Centro histórico de Monopoli','visita','Vielas claras, muralhas e pequenas praças junto ao Adriático.','Grátis','Não precisa','Ir de Capitolo até a borda do centro, estacionar fora da ZTL e entrar a pé por Porta Vecchia.','https://www.google.com/maps/search/?api=1&query=Centro+Storico+Monopoli'),
        p('Porto Antico di Monopoli','visita','Porto de pescadores com barcos azuis tradicionais aos pés da cidade antiga.','Grátis','Não precisa','Seguir a pé desde Piazza Garibaldi.','https://www.google.com/maps/search/?api=1&query=Porto+Antico+Monopoli')
      ]),
      slot('13:00','Almoço em Monopoli','Comer no centro antes de pegar a estrada.',[
        p('Almoço em Monopoli','comida','Pizza, massa ou frutos do mar em um ponto central.','€€','Reserva recomendada','Escolher um restaurante dentro do centro histórico e retornar ao carro depois.','https://www.google.com/maps/search/?api=1&query=ristoranti+Centro+Storico+Monopoli')
      ]),
      slot('15:00','Monopoli → Ostuni','Seguir para a Cidade Branca e estacionar fora da ZTL.',[
        p('Carro até Ostuni','rotina','Deslocamento de aproximadamente 35–45 minutos.','Combustível e estacionamento','Não precisa','Usar um estacionamento fora do centro histórico e fazer o restante a pé.','https://www.google.com/maps/dir/Monopoli/Ostuni')
      ]),
      slot('16:00','Ostuni — Cidade Branca','Caminhar pelas ruas caiadas, escadarias e mirantes.',[
        p('Centro histórico de Ostuni','visita','Casario branco medieval e vistas sobre o vale de oliveiras até o Adriático.','Grátis','Não precisa','Subir a pé até a Catedral e descer pelas vielas e mirantes.','https://www.google.com/maps/search/?api=1&query=Centro+Storico+Ostuni')
      ]),
      slot('19:00','Jantar em Ostuni','Jantar cedo antes de voltar para Capitolo.',[
        p('Jantar em Ostuni','comida','Cozinha pugliana no centro histórico.','€€','Reserva recomendada','Escolher mesa no centro e retornar depois para a hospedagem.','https://www.google.com/maps/search/?api=1&query=ristoranti+Centro+Storico+Ostuni')
      ])
    ];
  }

  if(dia18){
    dia18.title='Alberobello + aeroporto';
    dia18.mood='Última visita seca e compacta entre o check-out e o voo, seguindo depois diretamente ao aeroporto sem precisar tomar banho.';
    dia18.facts=['Check-out às 08:00','Alberobello pela manhã','Nada de praia','Sair para o aeroporto até 12:30','Devolver carro às 14:00','Voo AF1289 às 17:30'];
    dia18.slots=[
      slot('08:00','Check-out em Capitolo','Colocar as malas no carro e conferir todos os quartos antes de sair.',[
        p('Color Dream Residence — check-out','rotina','Encerrar a estadia e deixar toda a bagagem pronta para o voo.','Já pago','Já reservado','Conferir documentos, carregadores e itens de Valentina. Não deixar objetos visíveis no carro durante o passeio.','https://www.google.com/maps/dir/Color+Dream+Residence+Monopoli/Alberobello')
      ]),
      slot('08:45','Capitolo → Alberobello','Chegar cedo, estacionar fora da zona histórica e entrar a pé.',[
        p('Carro até Alberobello','rotina','Primeiro trecho do dia da volta, antes de seguir ao aeroporto.','Combustível e estacionamento','Não precisa','Usar estacionamento oficial próximo ao Largo Martellotta e evitar qualquer ZTL.','https://www.google.com/maps/dir/Color+Dream+Residence+Monopoli/Alberobello')
      ]),
      slot('09:30','Rione Monti + Aia Piccola','Ver os trulli principais em um percurso concentrado de cerca de duas horas.',[
        p('Trulli de Alberobello','visita','Bairros de casas de pedra com telhados cônicos, Patrimônio Mundial da UNESCO.','Grátis nas ruas; interiores à parte','Não precisa','Começar pelo Largo Martellotta, subir pelo Rione Monti e atravessar para Aia Piccola. Não encaixar museus longos neste dia.','https://www.google.com/maps/search/?api=1&query=Rione+Monti+Alberobello')
      ]),
      slot('11:30','Almoço rápido em Alberobello','Fazer uma refeição simples antes de pegar a estrada.',[
        p('Almoço rápido','comida','Focaccia, panzerotto ou massa sem serviço demorado.','€–€€','Não precisa','Comer perto do estacionamento e estar de volta ao carro até 12:30.','https://www.google.com/maps/search/?api=1&query=pranzo+veloce+Alberobello')
      ]),
      slot('12:30','Alberobello → Aeroporto de Bari','Sair com margem ampla para estrada, abastecimento correto e devolução.',[
        p('Deslocamento ao aeroporto BRI','rotina','Trajeto direto de Alberobello ao Aeroporto de Bari.','Combustível final','Não precisa','Prever cerca de 1h10, confirmar no contrato o combustível correto e guardar o comprovante.','https://www.google.com/maps/dir/Alberobello/Bari+Airport')
      ]),
      slot('14:00','Devolução do carro — Centauro','Chegar com bastante folga para vistoria e shuttle até o terminal.',[
        p('Centauro Bari Aeroporto','rotina','Devolução do carro antes do voo para Paris.','Incluído no aluguel','Já reservado','Fotografar o carro, o painel e o nível do combustível antes da entrega; guardar o comprovante.','https://www.google.com/maps/search/?api=1&query=Centauro+Bari+Airport')
      ]),
      slot('17:30','Voo Bari → Paris-CDG','Voo direto Air France AF1289.',[
        p('Air France AF1289','rotina','Voo para Paris, chegada prevista às 20:05 no Terminal 2F.','Já comprado','Já reservado','Check-in limite 16:50; seguir para o portão indicado no aplicativo.','https://www.airfrance.com.br')
      ])
    ];
  }


  // Encaixe solicitado: Grotte di Castellana + praia em Polignano no mesmo dia.
  if(dia16){
    dia16.title='Castellana Grotte + Polignano + praia';
    dia16.mood='A gruta é a prioridade da manhã; depois, almoço e praia com estrutura em Polignano a Mare.';
    dia16.facts=['Comprar ingresso da gruta antes','Preferência pelo percurso completo','Levar tênis e casaco leve','Polignano depois do almoço','Lido com ducha e cabine','Levar roupa seca'];
    dia16.slots=[
      slot('08:30','Capitolo → Castellana Grotte','Sair cedo para estacionar e chegar antes do horário marcado.',[
        p('Carro até Grotte di Castellana','rotina','Trajeto curto para o interior da Puglia.','Combustível e estacionamento','Não precisa','Sair do Color Dream Residence com margem e seguir diretamente à entrada oficial das grutas.','https://www.google.com/maps/dir/Color+Dream+Residence+Monopoli/Grotte+di+Castellana')
      ]),
      slot('09:30','Chegada e retirada dos ingressos','Usar banheiro, organizar casacos e apresentar-se antes do passeio.',[
        p('Grotte di Castellana — entrada','rotina','Complexo turístico com visitas guiadas em horários determinados.','Conforme ingresso','Comprar antes','Chegar pelo menos 20–30 minutos antes do horário escolhido. Confirmar o idioma da visita e o ponto de encontro.','https://www.grottedicastellana.it/en/')
      ]),
      slot('10:00','Percurso completo das grutas','Fazer a visita principal, incluindo as formações mais marcantes e a Gruta Branca.',[
        p('Grotte di Castellana — percurso completo','visita','Sistema de cavernas com grandes salões, estalactites, estalagmites e a famosa Gruta Branca.','Family: consultar valor atual no site','Reservar para a manhã de 16/09','O percurso completo leva aproximadamente 1h40. Usar tênis com boa aderência e levar casaco leve: o interior é fresco e úmido.','https://www.grottedicastellana.it/en/')
      ]),
      slot('12:00','Castellana → Polignano a Mare','Seguir para a costa depois da visita.',[
        p('Carro até Polignano a Mare','rotina','Deslocamento curto entre as grutas e a costa.','Combustível e estacionamento','Não precisa','Prever cerca de 25–30 minutos e estacionar fora da ZTL.','https://www.google.com/maps/dir/Grotte+di+Castellana/Polignano+a+Mare')
      ]),
      slot('12:45','Almoço em Polignano','Comer antes de ir para o lido.',[
        p('Almoço em Polignano','comida','Refeição simples para não reduzir demais o tempo de praia.','€–€€','Reserva recomendada','Escolher restaurante próximo ao estacionamento ou ao lido.','https://www.google.com/maps/search/?api=1&query=ristoranti+Polignano+a+Mare')
      ]),
      slot('14:00','Praia com estrutura','Passar a tarde em um lido com banheiro, ducha e cabine.',[
        p('Lido em Polignano','visita','Praia com espreguiçadeiras e estrutura para a família.','Pago; consultar diária','Reservar recomendado','Escolher um lido com estacionamento, ducha e cabine; confirmar que ainda funciona em setembro.','https://www.google.com/maps/search/?api=1&query=lido+con+doccia+Polignano+a+Mare')
      ]),
      slot('17:30','Centro histórico e mirantes','Tomar banho no lido, trocar de roupa e terminar o dia no centro.',[
        p('Centro histórico de Polignano a Mare','visita','Vielas brancas e mirantes sobre as falésias e Lama Monachile.','Grátis','Não precisa','Ir ao centro somente depois de todos estarem secos e trocados.','https://www.google.com/maps/search/?api=1&query=Centro+Storico+Polignano+a+Mare')
      ]),
      slot('19:00','Gelato ou jantar','Encerrar o passeio antes de voltar a Capitolo.',[
        p('Gelato em Polignano','comida','Pausa rápida no centro histórico.','€','Não precisa','Fazer a parada a pé durante o passeio final.','https://www.google.com/maps/search/?api=1&query=gelato+Polignano+a+Mare'),
        p('Jantar em Polignano','comida','Alternativa se quiserem ficar até a noite.','€€','Reserva recomendada','Escolher perto do centro e voltar depois para Capitolo.','https://www.google.com/maps/search/?api=1&query=ristoranti+Centro+Storico+Polignano+a+Mare')
      ])
    ];
  }


  // Ajuste após conclusão de Alberobello e Monopoli em 15/09.
  if(dia15){
    dia15.title='✅ Alberobello + Monopoli';
    dia15.mood='Passeios concluídos em 15/09.';
    dia15.facts=['Alberobello visitada','Rione Monti e Aia Piccola','Monopoli visitada','Centro histórico e Porto Antico'];
  }

  if(dia18){
    dia18.title='Ostuni + aeroporto';
    dia18.mood='Última visita urbana e sem praia: conhecer a Cidade Branca e seguir diretamente ao aeroporto.';
    dia18.facts=['Check-out às 08:00','Ostuni pela manhã','Nada de praia','Sair para o aeroporto até 12:30','Devolver carro às 14:00','Voo AF1289 às 17:30'];
    dia18.slots=[
      slot('08:00','Check-out em Capitolo','Colocar as malas no carro e conferir toda a hospedagem antes de sair.',[
        p('Color Dream Residence — check-out','rotina','Encerrar a estadia e deixar toda a bagagem pronta para o voo.','Já pago','Já reservado','Conferir documentos, carregadores e itens de Valentina. Não deixar objetos visíveis no carro durante o passeio.','https://www.google.com/maps/dir/Color+Dream+Residence+Monopoli/Ostuni')
      ]),
      slot('08:40','Capitolo → Ostuni','Seguir para a Cidade Branca e estacionar fora da ZTL.',[
        p('Carro até Ostuni','rotina','Deslocamento curto para o último passeio da Puglia.','Combustível e estacionamento','Não precisa','Usar estacionamento fora do centro histórico e manter as malas fora da vista.','https://www.google.com/maps/dir/Color+Dream+Residence+Monopoli/Ostuni')
      ]),
      slot('09:30','Centro histórico de Ostuni','Caminhar pelas ruas caiadas, escadarias e mirantes.',[
        p('Ostuni — Cidade Branca','visita','Casario branco medieval sobre uma colina, com vistas das oliveiras até o Adriático.','Grátis','Não precisa','Começar pela Piazza della Libertà, subir até a Catedral e retornar pelas vielas.','https://www.google.com/maps/search/?api=1&query=Centro+Storico+Ostuni'),
        p('Catedral de Ostuni','visita','Catedral do século XV com fachada ornamentada e grande rosácea.','Entrada geralmente gratuita','Não precisa','Fica no ponto alto do centro histórico e entra naturalmente no percurso.','https://www.google.com/maps/search/?api=1&query=Cattedrale+di+Ostuni')
      ]),
      slot('11:30','Almoço rápido em Ostuni','Comer sem serviço demorado antes da estrada.',[
        p('Almoço rápido','comida','Focaccia, panzerotto ou massa em uma refeição curta.','€–€€','Não precisa','Escolher perto do estacionamento e estar no carro até 12:30.','https://www.google.com/maps/search/?api=1&query=pranzo+veloce+Ostuni')
      ]),
      slot('12:30','Ostuni → Aeroporto de Bari','Sair com margem para estrada, abastecimento correto e devolução.',[
        p('Deslocamento ao aeroporto BRI','rotina','Trajeto direto de Ostuni ao Aeroporto de Bari.','Combustível final','Não precisa','Prever aproximadamente 1h15. Confirmar no contrato o combustível correto e guardar o comprovante.','https://www.google.com/maps/dir/Ostuni/Bari+Airport')
      ]),
      slot('14:00','Devolução do carro — Centauro','Chegar com bastante folga para vistoria e shuttle até o terminal.',[
        p('Centauro Bari Aeroporto','rotina','Devolução do carro antes do voo para Paris.','Incluído no aluguel','Já reservado','Fotografar o carro, o painel e o nível do combustível antes da entrega; guardar o comprovante.','https://www.google.com/maps/search/?api=1&query=Centauro+Bari+Airport')
      ]),
      slot('17:30','Voo Bari → Paris-CDG','Voo direto Air France AF1289.',[
        p('Air France AF1289','rotina','Voo para Paris, chegada prevista às 20:05 no Terminal 2F.','Já comprado','Já reservado','Check-in limite 16:50; seguir para o portão indicado no aplicativo.','https://www.airfrance.com.br')
      ])
    ];
  }

  selected=null;
  render();
})();