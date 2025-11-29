const globalClicks = [];

window.addEventListener('click', async (e) => {
  try {
    for (const cb of globalClicks) {
      await cb(e);
    }
  } catch (e) {
    console.error(e);
  }
});

{
  const output = document.querySelector('section input[readonly]');
  
  globalClicks.push(async ({ target }) => {
    if (target?.parentElement?.parentElement?.getAttribute('role') !== 'input') return;
    
    const { value } = target;
    switch (value) {
      case '=':
        output.value = eval(
          `${output.value||''}`.replaceAll('×', '*').replaceAll('÷', '/')
          
            
        );
        break;
      case 'AC':
        output.value = '';
        break;
      case 'x':
        output.value = `${output.value||''}`.slice(0, -1);
        break;
      default:
        output.value += value;
    }
    
    
    
  })
}