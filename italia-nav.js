// Melhorias de navegação, especialmente para celular.
(function(){
  const workspace = document.getElementById('dayWorkspace');
  const calendarPanel = document.getElementById('calendarPanel');
  const prevButton = document.getElementById('prevDayButton');
  const nextButton = document.getElementById('nextDayButton');
  const daysButton = document.getElementById('daysButton');
  const dayLabel = document.getElementById('mobileDayLabel');
  const modalBack = document.getElementById('modalBack');
  const modalClose = document.getElementById('modalClose');

  const smooth = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

  function scrollToAgenda(){
    if (!workspace) return;
    workspace.scrollIntoView({behavior:smooth(), block:'start'});
  }

  function scrollToDays(){
    if (!calendarPanel) return;
    calendarPanel.scrollIntoView({behavior:smooth(), block:'start'});
  }

  function centerActiveDay(){
    const activeCard = document.querySelector('.day-card.is-active');
    const strip = activeCard && activeCard.parentElement;
    if (!activeCard || !strip || !window.matchMedia('(max-width: 720px)').matches) return;
    const target = activeCard.offsetLeft - (strip.clientWidth - activeCard.offsetWidth) / 2;
    strip.scrollTo({left:Math.max(0, target), behavior:smooth()});
  }

  function updateMobileNav(){
    const index = days.findIndex(d => d.id === active);
    const day = days[index];
    if (dayLabel && day) dayLabel.textContent = `${day.date} · ${day.weekday}`;
    if (prevButton) prevButton.disabled = index <= 0;
    if (nextButton) nextButton.disabled = index < 0 || index >= days.length - 1;
    requestAnimationFrame(centerActiveDay);
  }

  const originalRenderDays = renderDays;
  renderDays = function(){
    originalRenderDays();
    document.querySelectorAll('[data-day]').forEach(button => {
      const originalClick = button.onclick;
      button.onclick = () => {
        originalClick();
        requestAnimationFrame(scrollToAgenda);
      };
    });
  };

  const originalRender = render;
  render = function(){
    originalRender();
    updateMobileNav();
  };

  function changeDay(delta){
    const index = days.findIndex(d => d.id === active);
    const nextIndex = index + delta;
    if (nextIndex < 0 || nextIndex >= days.length) return;
    active = days[nextIndex].id;
    selected = null;
    hideModal();
    render();
    requestAnimationFrame(scrollToAgenda);
  }

  if (prevButton) prevButton.onclick = () => changeDay(-1);
  if (nextButton) nextButton.onclick = () => changeDay(1);
  if (daysButton) daysButton.onclick = scrollToDays;

  // Abrir detalhes cria uma etapa no histórico. Assim, o botão Voltar do celular
  // fecha somente o detalhe e mantém a pessoa no mesmo dia do roteiro.
  const originalShowModal = showModal;
  const originalCloseModal = closeModal;
  let handlingPopState = false;

  showModal = function(){
    const overlay = document.getElementById('modalOverlay');
    if (overlay && !overlay.classList.contains('is-open')) {
      history.pushState(Object.assign({}, history.state || {}, {tripDetail:true}), '', location.href);
    }
    originalShowModal();
  };

  closeModal = function(){
    const overlay = document.getElementById('modalOverlay');
    if (!handlingPopState && overlay && overlay.classList.contains('is-open') && history.state && history.state.tripDetail) {
      history.back();
      return;
    }
    originalCloseModal();
  };

  if (modalClose) modalClose.onclick = closeModal;
  if (modalBack) modalBack.onclick = closeModal;

  window.addEventListener('popstate', () => {
    const overlay = document.getElementById('modalOverlay');
    if (overlay && overlay.classList.contains('is-open')) {
      handlingPopState = true;
      originalCloseModal();
      handlingPopState = false;
    }
  });

  render();
})();
