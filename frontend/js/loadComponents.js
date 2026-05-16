export async function loadComponent(id, file) {
  const container = document.getElementById(id);
  if (!container) {
    console.error(`No s'ha trobat el contenidor #${id}`);
    return;
  }
  

  try {
    
    const res = await fetch(`/frontend/html/${file}`);
    if (!res.ok) {
      console.error(`Error carregant component ${file}:`, res.status);
      return;
    }

    const html = await res.text();
    container.innerHTML = html;

  } catch (err) {
    console.error(`Error carregant component ${file}:`, err);
  }
}
