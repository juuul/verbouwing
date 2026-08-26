document.querySelectorAll('.tabs').forEach(tabs => {
  const buttons = tabs.querySelectorAll('.tab-button');
  const panes = tabs.querySelectorAll('.tab-pane');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const tabName = button.getAttribute('data-tab');

      buttons.forEach(btn => btn.classList.remove('active'));
      panes.forEach(pane => pane.classList.remove('active'));

      button.classList.add('active');
      const pane = document.getElementById(tabName + '-tab');
      if (pane) pane.classList.add('active');
    });
  });
});
