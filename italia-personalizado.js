// Ajustes feitos durante a viagem: menos muvuca, mais mar, paisagem e lugares encantadores.
(function(){
  const dia09 = days.find(d=>d.id==='09');
  if (dia09) {
    dia09.title='Posillipo + Gaiola + Marechiaro';
    dia09.mood='Trocar o Centro Storico cheio por mar, paisagem e um Nápoles muito mais bonito e tranquilo.';
    dia09.facts=['Reserva obrigatória na Gaiola','Levar roupa de banho e toalha','Almoço com vista para o mar','Fim de tarde em Marechiaro ou Virgiliano'];
    dia09.slots=[
      slot('08:00','Saída para Posillipo','Ir cedo para aproveitar a Gaiola com calma e evitar o horário mais cheio.',[
        p('Táxi até a Gaiola','rotina','A forma mais simples para três pessoas saindo do Centro Storico.','Táxi local','Na hora','Pedir destino: Parco Sommerso di Gaiola / Discesa Gaiola. Depois há descida a pé até a área de banho.','https://www.google.com/maps/search/?api=1&query=Parco+Sommerso+di+Gaiola+Napoli')
      ]),
      slot('09:00','Parco Sommerso di Gaiola','Manhã de banho de mar em uma das paisagens mais bonitas de Nápoles.',[
        p('Gaiola','visita','Área marinha protegida em Posillipo, diante das ilhotas da Gaiola, com água clara e paisagem muito diferente do Centro Storico.','Grátis','Reserva online obrigatória entre 1º de maio e 30 de setembro; escolher 09:00-13:00','Chegar pela Discesa Gaiola. A entrada é controlada e limitada.','https://www.areamarinaprotettagaiola.it/prenotazione')
      ]),
      slot('13:15','Marechiaro + almoço','Depois do banho, seguir para o pequeno borgo de pescadores de Marechiaro.',[
        p('Borgo di Marechiaro','visita','Escadarias, barcos, a famosa Fenestella e vista para o Golfo. É um dos cantos mais românticos de Posillipo.','Grátis','Não precisa','Táxi curto desde a região da Gaiola; descer a pé pela Calata Ponticello.','https://www.google.com/maps/search/?api=1&query=Marechiaro+Napoli'),
        p('Almoço em Marechiaro','comida','Escolher um restaurante à beira-mar e privilegiar peixe, massas e pratos simples com vista.','€€-€€€','Reserva recomendada se escolher mesa com vista','Ficar no próprio borgo para não perder tempo em deslocamentos.','https://www.google.com/maps/search/?api=1&query=ristoranti+Marechiaro+Napoli')
      ]),
      slot('15:30','Scoglione de Marechiaro — opcional','Se ainda quiserem mar, pegar o barquinho local até o grande rochedo para nadar.',[
        p('Scoglione di Marechiaro','opcional','Grande plataforma de tufo usada pelos napolitanos para tomar sol e mergulhar em água transparente.','Barquinho local cerca de €5 por trecho','Na hora; depende do mar','Os barcaioli saem de Marechiaro. Levar água e o essencial, pois a estrutura é simples.','https://www.google.com/maps/search/?api=1&query=Scoglione+di+Marechiaro')
      ]),
      slot('17:30','Parco Virgiliano ou pôr do sol em Marechiaro','Encerrar o dia com paisagem, sem voltar para as ruas mais caóticas.',[
        p('Parco Virgiliano','opcional','Parque panorâmico no alto de Posillipo, com vistas para Nisida, Capri, Procida, Ischia e o Golfo.','Grátis','Não precisa','Táxi curto desde Marechiaro. Se estiverem cansados, ficar em Marechiaro para o pôr do sol.','https://www.google.com/maps/search/?api=1&query=Parco+Virgiliano+Napoli')
      ])
    ];
  }

  const dia11 = days.find(d=>d.id==='11');
  if (dia11) {
    dia11.title='Procida — ilha colorida + praia';
    dia11.mood='Um dia fora da muvuca de Nápoles: casinhas coloridas, vila de pescadores, mar e ritmo lento.';
    dia11.facts=['Aliscafo pelo Molo Beverello','Corricella é prioridade','Praia se o tempo estiver bom','Voltar sem pressa no início da noite'];
    dia11.slots=[
      slot('07:45','Molo Beverello','Chegar cedo para embarcar com tranquilidade.',[
        p('Molo Beverello','rotina','Terminal dos aliscafos para Procida.','Transporte local à parte','Comprar passagem antes é recomendado','Táxi curto desde a hospedagem.','https://www.google.com/maps/search/?api=1&query=Molo+Beverello+Napoli')
      ]),
      slot('08:40','Aliscafo Nápoles → Procida','Travessia rápida de cerca de 45 minutos.',[
        p('Caremar Nápoles → Procida','rotina','O horário regular de 08:40 chega por volta de 09:25; confirmar disponibilidade no dia anterior.','Tarifa vigente da Caremar','Comprar antes recomendado','Embarque no Molo Beverello.','https://easy.caremar.it/en/route-timetable/Napoli-Procida/')
      ]),
      slot('09:30','Marina Grande → Terra Murata','Subir devagar até a parte alta da ilha para começar pelas vistas.',[
        p('Terra Murata','visita','Núcleo histórico no ponto mais alto de Procida, com vistas abertas para o mar e para a Corricella.','Grátis','Não precisa','Pode subir de ônibus/local ou caminhar conforme o ritmo.','https://www.google.com/maps/search/?api=1&query=Terra+Murata+Procida')
      ]),
      slot('11:00','Marina Corricella','A parte mais encantadora da ilha: porto de pescadores com fachadas em tons pastel.',[
        p('Marina Corricella','visita','Casas coloridas, barcos e restaurantes em um cenário que parece de filme.','Grátis','Não precisa','Descer a pé desde Terra Murata pelas escadarias.','https://www.google.com/maps/search/?api=1&query=Marina+Corricella+Procida')
      ]),
      slot('12:30','Almoço na Corricella','Almoçar olhando os barcos e sem pressa.',[
        p('Almoço na Marina Corricella','comida','Priorizar peixe, massa com frutos do mar e pratos locais, escolhendo pela mesa e pelo clima do dia.','€€-€€€','Reserva recomendada para mesa externa','Ficar na própria marina.','https://www.google.com/maps/search/?api=1&query=ristoranti+Marina+Corricella+Procida')
      ]),
      slot('14:30','Praia da Chiaiolella','Passar a tarde em uma praia com água rasa e estrutura, boa para a Valentina.',[
        p('Spiaggia della Chiaiolella','visita','Praia de areia vulcânica com fundo geralmente raso, lidos e vista para Vivara e Ischia.','Praia livre; lidos pagos','Não precisa para a praia livre; lido pode ser reservado','Ônibus L1/L2 ou táxi local a partir da região central da ilha.','https://www.google.com/maps/search/?api=1&query=Spiaggia+della+Chiaiolella+Procida')
      ]),
      slot('17:30','Retorno ao porto e Nápoles','Voltar com margem e escolher o primeiro aliscafo conveniente.',[
        p('Procida → Nápoles','rotina','Há várias saídas ao longo do fim da tarde; confirmar no dia.','Tarifa vigente da Caremar','Comprar antes recomendado','Retorno ao Molo Beverello.','https://easy.caremar.it/en/route-timetable/Napoli-Procida/')
      ])
    ];
  }

  // A viagem já está na Itália: abrir no próximo dia útil do roteiro, não mais no dia de chegada.
  active='09';
  selected=null;
  render();
})();
