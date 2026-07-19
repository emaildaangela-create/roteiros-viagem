const situations = [
  { id:'essenciais', label:'Essenciais', phrases:[
    f('Você','Bonjour, madame. Bonjour, monsieur.','bon-júr, ma-dám. bon-júr, mê-ciê.','Bom dia, senhora. Bom dia, senhor.'),
    f('Você','Bonsoir.','bon-suár.','Boa noite.'),
    f('Você','S’il vous plaît.','sil vu plé.','Por favor.'),
    f('Você','Merci beaucoup.','mér-ci bo-cú.','Muito obrigada.'),
    f('Você','Excusez-moi.','écs-cu-zê muá.','Com licença / desculpe.'),
    f('Você','Je suis désolée.','jâ suí dê-zo-lê.','Desculpe — dito por uma mulher.'),
    f('Rodrigo','Je suis désolé.','jâ suí dê-zo-lê.','Desculpe — dito por um homem.'),
    f('Você','Je ne parle pas très bien français.','jâ nâ parl pá tré biãn fran-cê.','Eu não falo francês muito bem.'),
    f('Você','Vous parlez anglais ?','vu par-lê an-glê?','Você fala inglês?'),
    f('Você','Plus lentement, s’il vous plaît.','plü lan-tâ-mãn, sil vu plé.','Mais devagar, por favor.'),
    f('Você','Pouvez-vous répéter ?','pu-vê vu rê-pê-tê?','Pode repetir?'),
    h('Vocês podem ouvir','Bien sûr. / D’accord.','biãn sür. / da-cór.','Claro. / Está bem.'),
    h('Vocês podem ouvir','Je vais vous aider.','jâ vé vu zê-dê.','Eu vou ajudar vocês.')
  ]},
  { id:'aeroporto', label:'Aeroporto e táxi', phrases:[
    f('Você','Nous sommes trois : deux adultes et un enfant.','nu som truá: dö za-dült ê ãn an-fan.','Somos três: dois adultos e uma criança.'),
    f('Você','Où est la sortie, s’il vous plaît ?','u é la sor-tí, sil vu plé?','Onde fica a saída, por favor?'),
    f('Você','Où peut-on prendre un taxi officiel ?','u pö-tõ pran-drãn tac-si ô-fi-ciél?','Onde podemos pegar um táxi oficial?'),
    f('Você','Nous allons au 1, rue Keller, dans le onzième.','nu za-lõ ô ün, rü ké-lér, dan lâ on-zi-ém.','Vamos para 1 Rue Keller, no 11º distrito.'),
    f('Você','Combien de temps faut-il ?','cõ-biãn dâ tãn fo-til?','Quanto tempo leva?'),
    f('Você','Combien ça coûte environ ?','cõ-biãn sá cut an-vi-rõ?','Quanto custa aproximadamente?'),
    f('Você','Pouvez-vous mettre les bagages dans le coffre ?','pu-vê vu mé-trê lê ba-gáj dan lâ cófr?','Pode colocar as malas no porta-malas?'),
    f('Você','Nous avons seulement des bagages à main.','nu za-võ söl-mãn dê ba-gáj a mã.','Temos somente bagagem de mão.'),
    h('Vocês podem ouvir','Vous avez des bagages en soute ?','vu za-vê dê ba-gáj an sut?','Vocês têm bagagem despachada?'),
    h('Vocês podem ouvir','Votre pièce d’identité, s’il vous plaît.','vó-trâ piéss di-dan-ti-tê, sil vu plé.','Seu documento de identidade, por favor.'),
    h('Vocês podem ouvir','L’embarquement commence dans vingt minutes.','lan-bar-câ-mãn cô-mãns dan van mi-nüt.','O embarque começa em vinte minutos.')
  ]},
  { id:'hospedagem', label:'Airbnb e hospedagem', phrases:[
    f('Você','Bonjour, nous avons une réservation au nom de…','bon-júr, nu za-võ ün rê-zér-va-ci-õ ô nõ dâ…','Olá, temos uma reserva em nome de…'),
    f('Você','Nous sommes arrivés pour l’enregistrement.','nu som za-ri-vê pur lan-rê-jis-trâ-mãn.','Chegamos para o check-in.'),
    f('Você','Pouvez-vous nous montrer comment fonctionne la clé ?','pu-vê vu nu mõ-trê co-mãn fonc-ci-ón la clê?','Pode nos mostrar como funciona a chave?'),
    f('Você','Quel est le mot de passe du Wi-Fi ?','quél é lâ mô dâ pás dü uí-fí?','Qual é a senha do Wi-Fi?'),
    f('Você','L’eau chaude ne fonctionne pas.','lô chôd nâ fonc-ci-ón pá.','A água quente não está funcionando.'),
    f('Você','Nous avons besoin de serviettes supplémentaires.','nu za-võ bâ-zuãn dâ sér-viét sü-plê-mãn-tér.','Precisamos de toalhas adicionais.'),
    f('Você','À quelle heure devons-nous quitter l’appartement ?','a quél âr dâ-võ nu ki-tê la-par-tâ-mãn?','A que horas devemos deixar o apartamento?'),
    h('Vocês podem ouvir','Le départ est avant onze heures.','lâ dê-par é a-van õz âr.','O check-out é antes das onze.'),
    h('Vocês podem ouvir','Voici les clés et le code de la porte.','vuá-ci lê clê ê lâ cód dâ la pórt.','Aqui estão as chaves e o código da porta.')
  ]},
  { id:'padaria', label:'Padaria, café e mercado', phrases:[
    f('Você','Je voudrais une baguette tradition, s’il vous plaît.','jâ vu-dré ün ba-guét tra-di-ci-õ, sil vu plé.','Eu gostaria de uma baguete tradition, por favor.'),
    f('Você','Je vais prendre deux croissants et un pain au chocolat.','jâ vé pran-drâ dö cruá-san ê ãn pãn ô cho-co-lá.','Vou querer dois croissants e um pain au chocolat.'),
    f('Você','Pour moi, un café au lait.','pur muá, ãn ca-fê ô lê.','Para mim, um café com leite.'),
    f('Rodrigo','Pour moi, un café, sans sucre.','pur muá, ãn ca-fê, san sücr.','Para mim, um café sem açúcar.'),
    f('Valentina','Je voudrais un chocolat chaud, s’il vous plaît.','jâ vu-dré ãn cho-co-lá chô, sil vu plé.','Eu gostaria de um chocolate quente, por favor.'),
    f('Você','C’est à emporter.','cé ta an-por-tê.','É para viagem.'),
    f('Você','C’est pour manger ici.','cé pur man-jê i-ci.','É para comer aqui.'),
    f('Você','Je peux avoir un sac, s’il vous plaît ?','jâ pö a-vuár ãn sac, sil vu plé?','Posso pegar uma sacola, por favor?'),
    f('Você','Où sont les produits sans lactose ?','u sõ lê pro-duí san lac-tóz?','Onde estão os produtos sem lactose?'),
    f('Você','Je voudrais deux cents grammes de ce fromage.','jâ vu-dré dö san grám dâ sâ fro-máj.','Eu gostaria de duzentos gramas deste queijo.'),
    h('Vocês podem ouvir','Avec ceci ?','a-véc sâ-ci?','Algo mais?'),
    h('Vocês podem ouvir','Sur place ou à emporter ?','sür pláss u a an-por-tê?','Para comer aqui ou para viagem?'),
    h('Vocês podem ouvir','Vous désirez autre chose ?','vu dê-zi-rê ô-trâ chôz?','Deseja mais alguma coisa?'),
    h('Vocês podem ouvir','Vous payez par carte ?','vu pê-iê par cart?','Vai pagar com cartão?')
  ]},
  { id:'restaurante', label:'Restaurantes', phrases:[
    f('Você','Bonsoir, nous avons une réservation au nom de…','bon-suár, nu za-võ ün rê-zér-va-ci-õ ô nõ dâ…','Boa noite, temos uma reserva em nome de…'),
    f('Você','Une table pour trois, s’il vous plaît.','ün tá-blâ pur truá, sil vu plé.','Uma mesa para três, por favor.'),
    f('Você','Avez-vous un menu enfant ?','a-vê vu ãn mâ-nü an-fan?','Vocês têm menu infantil?'),
    f('Você','Pour moi, je voudrais les pâtes à la viande.','pur muá, jâ vu-dré lê pat a la vi-ãnd.','Para mim, eu gostaria do macarrão com carne.'),
    f('Você, falando por Rodrigo','Pour lui, ce sera le poisson du jour.','pur lui, sâ sâ-rá lâ puá-sõ dü júr.','Para ele, será o peixe do dia.'),
    f('Você, falando por Valentina','Et pour elle, le menu enfant, s’il vous plaît.','ê pur él, lâ mâ-nü an-fan, sil vu plé.','E para ela, o menu infantil, por favor.'),
    f('Rodrigo','Je vais prendre le poisson du jour.','jâ vé pran-drâ lâ puá-sõ dü júr.','Eu vou querer o peixe do dia.'),
    f('Valentina','Je voudrais le menu enfant, s’il vous plaît.','jâ vu-dré lâ mâ-nü an-fan, sil vu plé.','Eu gostaria do menu infantil, por favor.'),
    f('Você','Sans oignons, s’il vous plaît.','san o-nhõ, sil vu plé.','Sem cebola, por favor.'),
    f('Você','La viande bien cuite, s’il vous plaît.','la vi-ãnd biãn cuít, sil vu plé.','A carne bem passada, por favor.'),
    f('Você','Est-ce que ce plat est épicé ?','és-câ sâ plá é té-pi-cê?','Este prato é apimentado?'),
    f('Você','Elle est allergique aux noix.','él é ta-lér-jic ô nuá.','Ela é alérgica a nozes.'),
    f('Você','Pourrions-nous avoir une carafe d’eau ?','pu-ri-õ nu za-vuár ün ca-ráf dô?','Poderíamos receber uma jarra de água?'),
    f('Você','Encore du pain, s’il vous plaît.','an-cór dü pãn, sil vu plé.','Mais pão, por favor.'),
    f('Você','L’addition, s’il vous plaît.','la-di-ci-õ, sil vu plé.','A conta, por favor.'),
    f('Você','Nous pouvons payer séparément ?','nu pu-võ pê-iê sê-pa-rê-mãn?','Podemos pagar separadamente?'),
    h('Vocês podem ouvir','Vous avez choisi ?','vu za-vê chuá-zi?','Vocês já escolheram?'),
    h('Vocês podem ouvir','Quelle cuisson pour la viande ?','quél cui-sõ pur la vi-ãnd?','Qual o ponto da carne?'),
    h('Vocês podem ouvir','Le plat du jour, c’est…','lâ plá dü júr, cé…','O prato do dia é…'),
    h('Vocês podem ouvir','Ça vous a plu ?','sá vu za plü?','Vocês gostaram?'),
    h('Vocês podem ouvir','Le service est compris.','lâ sér-víss é cõ-prí.','O serviço está incluído.')
  ]},
  { id:'transporte', label:'Metrô e deslocamentos', phrases:[
    f('Você','Où est la station de métro la plus proche ?','u é la sta-ci-õ dâ mê-trô la plü próch?','Onde fica a estação de metrô mais próxima?'),
    f('Você','Quelle ligne faut-il prendre pour aller à la Tour Eiffel ?','quél li-nhâ fo-til pran-drâ pur a-lê a la tur ê-fél?','Qual linha devemos pegar para ir à Torre Eiffel?'),
    f('Você','Est-ce que nous devons changer de ligne ?','és-câ nu dâ-võ chan-jê dâ li-nhâ?','Precisamos trocar de linha?'),
    f('Você','Ce train va à Marne-la-Vallée ?','sâ trãn vá a marn la va-lê?','Este trem vai para Marne-la-Vallée?'),
    f('Você','Trois billets, s’il vous plaît : deux adultes et un enfant.','truá bi-iê, sil vu plé: dö za-dült ê ãn an-fan.','Três bilhetes: dois adultos e uma criança.'),
    f('Você','À quel arrêt devons-nous descendre ?','a quél a-rê dâ-võ nu dê-san-drâ?','Em qual parada devemos descer?'),
    f('Você','Nous nous sommes trompés de direction.','nu nu som trõ-pê dâ di-réc-ci-õ.','Pegamos a direção errada.'),
    h('Vocês podem ouvir','Attention à la fermeture des portes.','a-tan-ci-õ a la fér-mâ-tür dê pórt.','Atenção ao fechamento das portas.'),
    h('Vocês podem ouvir','Prochain arrêt : Bastille.','pro-chãn a-rê: bas-tí.','Próxima parada: Bastille.'),
    h('Vocês podem ouvir','Le train est retardé.','lâ trãn é râ-tar-dê.','O trem está atrasado.')
  ]},
  { id:'atracoes', label:'Museus e passeios', phrases:[
    f('Você','Nous avons des billets pour dix heures trente.','nu za-võ dê bi-iê pur dís âr trãnt.','Temos ingressos para dez e meia.'),
    f('Você','Voici nos billets sur le téléphone.','vuá-ci nô bi-iê sür lâ tê-lê-fón.','Aqui estão nossos ingressos no celular.'),
    f('Você','Elle a neuf ans. L’entrée est gratuite pour elle ?','él a nöf an. lan-trê é gra-tuít pur él?','Ela tem nove anos. A entrada é gratuita para ela?'),
    f('Você','Où commence la visite ?','u cô-mãns la vi-zít?','Onde começa a visita?'),
    f('Você','Où sont les toilettes ?','u sõ lê tuá-lét?','Onde ficam os banheiros?'),
    f('Você','Peut-on prendre des photos ici ?','pö-tõ pran-drâ dê fo-tô i-ci?','Podemos tirar fotos aqui?'),
    f('Você','Combien de temps dure la croisière ?','cõ-biãn dâ tãn dür la cruá-ziér?','Quanto tempo dura o cruzeiro?'),
    f('Você','Où est l’embarquement pour les Vedettes de Paris ?','u é lan-bar-câ-mãn pur lê vâ-dét dâ pa-rí?','Onde é o embarque da Vedettes de Paris?'),
    h('Vocês podem ouvir','Présentez le QR code, s’il vous plaît.','prê-zan-tê lâ cu-ér cód, sil vu plé.','Apresente o QR code, por favor.'),
    h('Vocês podem ouvir','Les sacs doivent passer au contrôle.','lê sac duáv pá-sê ô cõ-trôl.','As bolsas precisam passar pela inspeção.'),
    h('Vocês podem ouvir','La dernière entrée est à dix-sept heures.','la dér-niér an-trê é ta dís-sét âr.','A última entrada é às dezessete horas.')
  ]},
  { id:'disney', label:'Disneyland', phrases:[
    f('Você','Nous avons des billets pour les deux parcs.','nu za-võ dê bi-iê pur lê dö parc.','Temos ingressos para os dois parques.'),
    f('Valentina','Je voudrais rencontrer cette princesse.','jâ vu-dré ran-cõ-trê sét pran-séss.','Eu gostaria de encontrar esta princesa.'),
    f('Você','Quelle est la taille minimale pour cette attraction ?','quél é la tái mi-ni-mál pur sét a-trac-ci-õ?','Qual é a altura mínima para esta atração?'),
    f('Você','Combien de temps d’attente ?','cõ-biãn dâ tãn da-tãnt?','Quanto tempo de espera?'),
    f('Você','Est-ce que cette attraction fait peur ?','és-câ sét a-trac-ci-õ fé pâr?','Esta atração dá medo?'),
    f('Você','Où peut-on remplir nos bouteilles d’eau ?','u pö-tõ ran-plír nô bu-téi dô?','Onde podemos encher nossas garrafas de água?'),
    h('Vocês podem ouvir','La file d’attente est d’environ quarante minutes.','la fil da-tãnt é dan-vi-rõ ca-rãnt mi-nüt.','A fila está em aproximadamente quarenta minutos.'),
    h('Vocês podem ouvir','Gardez les bras et les jambes à l’intérieur.','gar-dê lê brá ê lê jãmb a lan-tê-ri-âr.','Mantenham braços e pernas para dentro.')
  ]},
  { id:'compras', label:'Compras', phrases:[
    f('Você','Combien ça coûte ?','cõ-biãn sá cut?','Quanto custa?'),
    f('Você','Est-ce que je peux l’essayer ?','és-câ jâ pö lê-sê-iê?','Posso experimentar?'),
    f('Você','Vous avez une taille plus grande ?','vu za-vê ün tái plü grãnd?','Você tem um tamanho maior?'),
    f('Você','Vous avez une taille plus petite ?','vu za-vê ün tái plü pâ-tít?','Você tem um tamanho menor?'),
    f('Você','Je le prends.','jâ lâ pran.','Eu vou levar.'),
    f('Você','Je vais réfléchir, merci.','jâ vé rê-flê-chír, mér-ci.','Vou pensar, obrigada.'),
    f('Você','Puis-je payer par carte ?','püí-jâ pê-iê par cart?','Posso pagar com cartão?'),
    h('Vocês podem ouvir','Vous voulez le ticket de caisse ?','vu vu-lê lâ ti-kê dâ késs?','Você quer o recibo?'),
    h('Vocês podem ouvir','C’est en promotion.','cé tan pro-mo-ci-õ.','Está em promoção.')
  ]},
  { id:'saude', label:'Saúde e emergência', phrases:[
    f('Você','J’ai besoin d’une pharmacie.','jê bâ-zuãn dün far-ma-cí.','Preciso de uma farmácia.'),
    f('Você','Elle a de la fièvre.','él a dâ la fi-évr.','Ela está com febre.'),
    f('Você','Elle a mal au ventre.','él a mal ô van-trâ.','Ela está com dor de barriga.'),
    f('Você','J’ai mal à la tête.','jê mal a la tét.','Estou com dor de cabeça.'),
    f('Você','Il est allergique à…','il é ta-lér-jic a…','Ele é alérgico a…'),
    f('Você','C’est une urgence.','cé tün ür-jãns.','É uma emergência.'),
    f('Você','Appelez une ambulance, s’il vous plaît.','a-plê ün an-bü-lãns, sil vu plé.','Chame uma ambulância, por favor.'),
    f('Valentina','J’ai perdu mes parents.','jê pér-dü mê pa-rãn.','Eu perdi meus pais.'),
    f('Valentina','Ma mère s’appelle Angela et mon père s’appelle Rodrigo.','ma mér sa-pél an-jé-la ê mõ pér sa-pél rô-dri-gô.','Minha mãe se chama Angela e meu pai se chama Rodrigo.'),
    h('Vocês podem ouvir','Où avez-vous mal ?','u a-vê vu mal?','Onde dói?'),
    h('Vocês podem ouvir','Depuis combien de temps ?','dâ-püí cõ-biãn dâ tãn?','Há quanto tempo?')
  ]}
];

function f(speaker,fr,pronunciation,pt){return{speaker,fr,pronunciation,pt,heard:false};}
function h(speaker,fr,pronunciation,pt){return{speaker,fr,pronunciation,pt,heard:true};}

const $=selector=>document.querySelector(selector);
let active='todos';
const normalize=value=>value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();

function renderFilters(){
  const items=[{id:'todos',label:'Todas'},...situations];
  $('#situationFilters').innerHTML=items.map(item=>`<button class="filter-button ${item.id===active?'is-active':''}" data-situation="${item.id}">${item.label}</button>`).join('');
  document.querySelectorAll('[data-situation]').forEach(button=>button.onclick=()=>{active=button.dataset.situation;render();});
}

function render(){
  renderFilters();
  const query=normalize($('#phraseSearch').value.trim());
  const visible=situations.filter(group=>active==='todos'||group.id===active).map(group=>({
    ...group,
    phrases:group.phrases.filter(item=>!query||normalize(`${item.speaker} ${item.fr} ${item.pronunciation} ${item.pt} ${group.label}`).includes(query))
  })).filter(group=>group.phrases.length);
  const total=visible.reduce((sum,group)=>sum+group.phrases.length,0);
  const activeGroup=situations.find(group=>group.id===active);
  $('#activeSituation').textContent=activeGroup?activeGroup.label:'Todas as situações';
  $('#resultCount').textContent=`${total} ${total===1?'frase':'frases'}`;
  $('#phraseGroups').innerHTML=visible.length?visible.map(group=>`<section class="phrase-group"><h3>${group.label}</h3><div class="phrase-grid">${group.phrases.map(item=>`<article class="panel phrase-card ${item.heard?'is-heard':''}"><span class="tag ${item.heard?'rotina':'visita'} speaker-label">${item.speaker}</span><p class="french-phrase" lang="fr">${item.fr}</p><p class="pronunciation">Pronúncia: ${item.pronunciation}</p><p class="translation">${item.pt}</p><button class="listen-button" type="button" data-say="${encodeURIComponent(item.fr)}">Ouvir em francês</button></article>`).join('')}</div></section>`).join(''):'<div class="panel no-results">Nenhuma frase encontrada. Tente outra palavra.</div>';
  document.querySelectorAll('[data-say]').forEach(button=>button.onclick=()=>speak(decodeURIComponent(button.dataset.say)));
}

function speak(text){
  if(!('speechSynthesis' in window))return;
  window.speechSynthesis.cancel();
  const utterance=new SpeechSynthesisUtterance(text);
  utterance.lang='fr-FR';
  utterance.rate=0.82;
  window.speechSynthesis.speak(utterance);
}

$('#phraseSearch').addEventListener('input',render);
render();
