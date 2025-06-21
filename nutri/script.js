// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
});

// Smooth scrolling with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
    navLinks.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', false);
  });
});

// Recipes data
const recipes = {
  'wrap-de-pollo-y-vegetales': {
    title: 'Wrap de Pollo y Vegetales',
    ingredients: [
      '2 tortillas integrales',
      '200g de pechuga de pollo',
      'Lechuga',
      'Tomate',
      'Zanahoria rallada',
      'Aguacate',
      'Yogur natural'
    ],
    instructions: [
      'Cocinar el pollo a la plancha con especias al gusto',
      'Lavar y cortar los vegetales',
      'Calentar ligeramente las tortillas',
      'Untar el yogur en las tortillas',
      'Agregar el pollo y los vegetales',
      'Enrollar y servir'
    ],
    nutritionalInfo: {
      calories: '320 kcal',
      protein: '25g',
      carbs: '30g',
      fats: '12g'
    },
    videoUrl: 'https://www.youtube.com/embed/vTbm0mP4yZ0'

  },
  'pizza-integral-casera': {
    title: 'Pizza Integral Casera',
    ingredients: [
      '300g de harina integral',
      '1 sobre de levadura',
      'Agua tibia',
      'Salsa de tomate',
      'Queso mozzarella bajo en grasa',
      'Vegetales variados',
      'Aceite de oliva'
    ],
    instructions: [
      'Preparar la masa con harina, levadura y agua',
      'Dejar reposar 1 hora',
      'Estirar la masa',
      'Agregar salsa, queso y vegetales',
      'Hornear a 200°C por 15-20 minutos'
    ],
    nutritionalInfo: {
      calories: '280 kcal',
      protein: '12g',
      carbs: '45g',
      fats: '8g'
    },
    videoUrl: 'https://www.youtube.com/embed/jcnsyw8CTVQ'
  },
  'hamburguesa-de-lentejas': {
    title: 'Hamburguesa de Lentejas',
    ingredients: [
      '200g de lentejas cocidas',
      'Cebolla',
      'Ajo',
      'Pan rallado integral',
      'Especias al gusto',
      'Pan integral de hamburguesa',
      'Vegetales para acompañar'
    ],
    instructions: [
      'Triturar las lentejas',
      'Mezclar con cebolla picada, ajo y especias',
      'Agregar pan rallado hasta conseguir consistencia',
      'Formar las hamburguesas',
      'Cocinar en sartén con poco aceite'
    ],
    nutritionalInfo: {
      calories: '250 kcal',
      protein: '15g',
      carbs: '35g',
      fats: '6g'
    },
    videoUrl: 'https://www.youtube.com/embed/OHw9iLxPUh4'
  },
  // Aquí agrego las nuevas 10 recetas:
  'ensalada-de-quinoa-y-tomate': {
    title: 'Ensalada de Quinoa y Tomate',
    ingredients: [
      '1 taza de quinoa cocida',
      'Tomates cherry cortados a la mitad',
      'Cebolla morada picada',
      'Perejil fresco',
      'Aceite de oliva',
      'Jugo de limón',
      'Sal y pimienta al gusto'
    ],
    instructions: [
      'Cocinar la quinoa y dejar enfriar',
      'Mezclar todos los ingredientes en un bol',
      'Aliñar con aceite de oliva, jugo de limón, sal y pimienta',
      'Refrigerar antes de servir'
    ],
    nutritionalInfo: {
      calories: '220 kcal',
      protein: '8g',
      carbs: '32g',
      fats: '7g'
    },
    videoUrl: 'https://www.youtube.com/embed/yAMAqRGEscQ'
  },
  'pollo-a-la-plancha-con-verduras': {
    title: 'Pollo a la Plancha con Verduras',
    ingredients: [
      '200g pechuga de pollo',
      'Brócoli',
      'Zanahoria',
      'Aceite de oliva',
      'Sal, pimienta y especias'
    ],
    instructions: [
      'Sazonar el pollo',
      'Cocinar el pollo a la plancha',
      'Saltear las verduras con aceite de oliva',
      'Servir el pollo con las verduras'
    ],
    nutritionalInfo: {
      calories: '300 kcal',
      protein: '35g',
      carbs: '10g',
      fats: '8g'
    },
    videoUrl: 'https://www.youtube.com/embed/comelhCcVtM'
  },
  'smoothie-verde-energetico': {
    title: 'Smoothie Verde Energético',
    ingredients: [
      'Espinacas frescas',
      'Plátano',
      'Manzana verde',
      'Agua o leche vegetal',
      'Semillas de chía'
    ],
    instructions: [
      'Licuar todos los ingredientes hasta obtener una mezcla homogénea',
      'Servir frío'
    ],
    nutritionalInfo: {
      calories: '180 kcal',
      protein: '4g',
      carbs: '35g',
      fats: '3g'
    },
    videoUrl: 'https://www.youtube.com/embed/6lvk5TLfBUw'

  },
  'granola-casera-saludable': {
    title: 'Granola Casera Saludable',
    ingredients: [
      'Avena',
      'Miel',
      'Nueces',
      'Almendras',
      'Semillas de girasol',
      'Aceite de coco'
    ],
    instructions: [
      'Mezclar todos los ingredientes',
      'Hornear a 180°C por 25 minutos',
      'Dejar enfriar y almacenar'
    ],
    nutritionalInfo: {
      calories: '450 kcal',
      protein: '10g',
      carbs: '50g',
      fats: '20g'
    },
    videoUrl: 'https://www.youtube.com/embed/de8FgYOuYaQ'
  },
  'omelette-de-espinacas-y-queso-fresco': {
    title: 'Omelette de Espinacas y Queso Fresco',
    ingredients: [
      '2 huevos',
      'Espinacas frescas',
      'Queso fresco',
      'Aceite de oliva',
      'Sal y pimienta'
    ],
    instructions: [
      'Batir los huevos',
      'Saltear las espinacas',
      'Agregar las espinacas y el queso a los huevos',
      'Cocinar en sartén hasta dorar'
    ],
    nutritionalInfo: {
      calories: '250 kcal',
      protein: '20g',
      carbs: '3g',
      fats: '18g'
    },
    videoUrl: 'https://www.youtube.com/embed/Q2U_3CcFjnk'
  },
  'batido-de-frutas-y-avena': {
    title: 'Batido de Frutas y Avena',
    ingredients: [
      'Frutas mixtas',
      'Avena',
      'Yogur natural',
      'Miel',
      'Leche vegetal'
    ],
    instructions: [
      'Licuar todos los ingredientes',
      'Servir frío'
    ],
    nutritionalInfo: {
      calories: '210 kcal',
      protein: '6g',
      carbs: '40g',
      fats: '3g'
    },
    videoUrl: 'https://www.youtube.com/embed/PwwRpsVadWE'
  },
  'bowl-de-acai-y-frutas': {
    title: 'Bowl de Acai y Frutas',
    ingredients: [
      'Pulpa de acai congelada',
      'Banana',
      'Fresas',
      'Granola',
      'Semillas'
    ],
    instructions: [
      'Licuar pulpa de acai con banana y fresas',
      'Verter en bowl y decorar con granola y semillas'
    ],
    nutritionalInfo: {
      calories: '300 kcal',
      protein: '5g',
      carbs: '50g',
      fats: '6g'
    },
    videoUrl: 'https://www.youtube.com/embed/T68U_E39PPg'
  },
  'ensalada-de-lentejas': {
    title: 'Ensalada de Lentejas',
    ingredients: [
      'Lentejas cocidas',
      'Tomate',
      'Cebolla',
      'Perejil',
      'Aceite de oliva',
      'Vinagre',
      'Sal y pimienta'
    ],
    instructions: [
      'Mezclar todos los ingredientes',
      'Refrigerar un rato antes de servir'
    ],
    nutritionalInfo: {
      calories: '250 kcal',
      protein: '18g',
      carbs: '35g',
      fats: '4g'
    },
    videoUrl: 'https://www.youtube.com/embed/jr2rtUDZcws'
  },
  'rollitos-de-berenjena': {
    title: 'Rollitos de Berenjena',
    ingredients: [
      'Berenjena',
      'Queso ricotta',
      'Salsa de tomate',
      'Albahaca',
      'Aceite de oliva'
    ],
    instructions: [
      'Cortar las berenjenas en láminas',
      'Rellenar con queso y albahaca',
      'Enrollar y cubrir con salsa',
      'Hornear a 180°C por 20 minutos'
    ],
    nutritionalInfo: {
      calories: '180 kcal',
      protein: '8g',
      carbs: '12g',
      fats: '10g'
    },
    videoUrl: 'https://www.youtube.com/embed/3Ktd_uM9zlU'
  },
};

// Create and show recipe modal
function showRecipeModal(recipeId) {
  const recipe = recipes[recipeId];
  if (!recipe) return;

  const modal = document.createElement('div');
  modal.className = 'recipe-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('tabindex', '-1');

  modal.innerHTML = `
    <div class="modal-content">
      <button class="close-modal" aria-label="Cerrar modal">&times;</button>
      <div class="recipe-details">
        <h2>${recipe.title}</h2>
        <h3>Ingredientes</h3>
        <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
        <h3>Instrucciones</h3>
        <ol>${recipe.instructions.map(i => `<li>${i}</li>`).join('')}</ol>
        <h3>Información Nutricional</h3>
        <ul class="nutritional-info">
          <li>Calorías: ${recipe.nutritionalInfo.calories}</li>
          <li>Proteínas: ${recipe.nutritionalInfo.protein}</li>
          <li>Carbohidratos: ${recipe.nutritionalInfo.carbs}</li>
          <li>Grasas: ${recipe.nutritionalInfo.fats}</li>
        </ul>
        <h3>Video Tutorial</h3>
        <div class="recipe-video">
          <iframe src="${recipe.videoUrl}" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const closeBtn = modal.querySelector('.close-modal');
  closeBtn.focus();

  function closeModal() {
    document.body.removeChild(modal);
    document.removeEventListener('keydown', onKeyDown);
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  function onKeyDown(e) {
    if (e.key === 'Escape') closeModal();
  }
  document.addEventListener('keydown', onKeyDown);
}

// Attach click events for recipe buttons
document.querySelectorAll('.btn-recipe').forEach(button => {
  button.addEventListener('click', e => {
    const recipeCard = e.target.closest('.recipe-card');
    if (!recipeCard) return;
    const title = recipeCard.querySelector('h3').textContent.toLowerCase()
      .replace(/\s+/g, '-')
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    showRecipeModal(title);
  });
});

// Educational videos data
const educationalVideos = {
  'nutricion-basica': {
    title: 'Fundamentos de Nutrición',
    url: 'https://www.youtube.com/embed/qHimbDfTXYg'
  }
};
function showVideoModal(videoId) {
  const video = educationalVideos[videoId];
  if (!video) return;

  const modal = document.createElement('div');
  modal.className = 'video-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('tabindex', '-1');

  modal.innerHTML = `
    <div class="modal-content">
      <button class="close-modal" aria-label="Cerrar modal">&times;</button>
      <h2>${video.title}</h2>
      <div class="video-container">
        <iframe src="${video.url}" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const closeBtn = modal.querySelector('.close-modal');
  closeBtn.focus();

  function closeModal() {
    document.body.removeChild(modal);
    document.removeEventListener('keydown', onKeyDown);
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  function onKeyDown(e) {
    if (e.key === 'Escape') closeModal();
  }
  document.addEventListener('keydown', onKeyDown);
}

// Open educational video modal when clicking in the resources section
document.querySelectorAll('.resource-card').forEach(card => {
  if (card.querySelector('h3').textContent.includes('Videos')) {
    const btn = card.querySelector('.btn-download');
    btn.addEventListener('click', e => {
      e.preventDefault();
      showVideoModal('nutricion-basica');
    });
  }
});

// Stories slider
const storyCards = document.querySelectorAll('.story-card');
const prevButton = document.querySelector('.prev-story');
const nextButton = document.querySelector('.next-story');
let currentStory = 0;

function showStory(index) {
  storyCards.forEach(card => card.classList.remove('active'));
  storyCards[index].classList.add('active');
}

prevButton.addEventListener('click', () => {
  currentStory = (currentStory - 1 + storyCards.length) % storyCards.length;
  showStory(currentStory);
});

nextButton.addEventListener('click', () => {
  currentStory = (currentStory + 1) % storyCards.length;
  showStory(currentStory);
});

// Auto-advance stories every 5 seconds
setInterval(() => {
  currentStory = (currentStory + 1) % storyCards.length;
  showStory(currentStory);
}, 5000);

// Navbar style change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 1px 8px rgba(0,0,0,0.15)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});
/// --- Feedback rating & comments functionality ---

const commentForm = document.getElementById('commentForm');
const ratingInputs = commentForm.querySelectorAll('input[name="rating"]');
const commentText = commentForm.querySelector('textarea[name="comment"]');
const commentsList = document.getElementById('commentsList');
const formMessage = document.getElementById('formMessage');

// Load saved comments from localStorage or start empty
let savedComments = JSON.parse(localStorage.getItem('nutrieduca-comments')) || [];

function renderComments() {
  if (!commentsList) return;
  commentsList.innerHTML = '';

  if (savedComments.length === 0) {
    commentsList.innerHTML = '<p>No hay comentarios aún. Sé el primero en comentar.</p>';
    return;
  }

  savedComments.forEach(({ rating, comment, timestamp }, index) => {
    const commentItem = document.createElement('div');
    commentItem.className = 'comment-item';

    const stars = document.createElement('div');
    stars.className = 'comment-stars';
    stars.setAttribute('aria-label', `Calificación: ${rating} de 5 estrellas`);
    stars.textContent = '★'.repeat(rating) + '☆'.repeat(5 - rating);

    const text = document.createElement('p');
    text.className = 'comment-text';
    text.textContent = comment;

    const time = document.createElement('time');
    time.className = 'comment-time';
    const date = new Date(timestamp);
    time.dateTime = date.toISOString();
    time.textContent = date.toLocaleString();

    // Delete button
    const btnDelete = document.createElement('button');
    btnDelete.className = 'btn-delete-comment';
    btnDelete.setAttribute('aria-label', 'Eliminar comentario');
    btnDelete.textContent = 'Eliminar';
    btnDelete.style.marginTop = '8px';
    btnDelete.style.backgroundColor = '#ef4444';
    btnDelete.style.color = 'white';
    btnDelete.style.border = 'none';
    btnDelete.style.padding = '6px 12px';
    btnDelete.style.borderRadius = '8px';
    btnDelete.style.cursor = 'pointer';

    btnDelete.addEventListener('click', () => {
      if (confirm('¿Estás seguro de eliminar este comentario?')) {
        savedComments.splice(index, 1);
        localStorage.setItem('nutrieduca-comments', JSON.stringify(savedComments));
        renderComments();
      }
    });

    commentItem.appendChild(stars);
    commentItem.appendChild(text);
    commentItem.appendChild(time);
    commentItem.appendChild(btnDelete);

    commentsList.appendChild(commentItem);
  });
}

// Initial render
renderComments();

if (commentForm) {
  commentForm.addEventListener('submit', event => {
    event.preventDefault();

    formMessage.textContent = '';
    formMessage.style.color = '#ef4444'; // red error

    const selectedRating = Array.from(ratingInputs).find(input => input.checked);
    if (!selectedRating) {
      formMessage.textContent = 'Por favor, selecciona una calificación.';
      return;
    }

    const commentVal = commentText.value.trim();
    if (commentVal.length === 0) {
      formMessage.textContent = 'Por favor, escribe un comentario.';
      return;
    }

    const newComment = {
      rating: parseInt(selectedRating.value, 10),
      comment: commentVal,
      timestamp: new Date().toISOString()
    };

    savedComments.unshift(newComment);
    localStorage.setItem('nutrieduca-comments', JSON.stringify(savedComments));

    renderComments();

    commentForm.reset();
    formMessage.style.color = 'green';
    formMessage.textContent = 'Comentario enviado correctamente. ¡Gracias por tu aporte!';

    console.log('Comentario enviado correctamente:', newComment);

    setTimeout(() => {
      formMessage.textContent = '';
      formMessage.style.color = '#ef4444';
    }, 3000);
  });
}
// Variables globales
let puntajeTotal = parseInt(localStorage.getItem("nutrieduca-puntaje")) || 0;
let recetasDesbloqueadas = JSON.parse(localStorage.getItem("nutrieduca-recetas")) || [];
let ingredientesSeleccionados = [];

// Elementos del DOM
const items = document.querySelectorAll(".item");
const zonaPlato = document.getElementById("zona-plato");
const lista = document.getElementById("lista-ingredientes");
const btnCombinar = document.getElementById("btnCombinar");
const puntajeSpan = document.getElementById("puntaje");

// Función para actualizar el puntaje mostrado
function actualizarPuntaje() {
  puntajeSpan.textContent = puntajeTotal;
  localStorage.setItem("nutrieduca-puntaje", puntajeTotal);
}

// Mostrar recetas desbloqueadas al cargar
function mostrarRecetasDesbloqueadas() {
  recetasDesbloqueadas.forEach(id => {
    const receta = document.querySelector(`.recipe-card[data-recipe-id="${id}"]`);
    if (receta) {
      receta.classList.remove("hidden");
      const overlay = receta.querySelector(".lock-overlay");
      if (overlay) overlay.remove();
    }
  });
}

// Función para desbloquear recetas (CORREGIDA)
function desbloquearReceta(recipeId) {
  if (puntajeTotal < 50) {
    return alert("Necesitas al menos 50 puntos para desbloquear esta receta.");
  }

  if (!recetasDesbloqueadas.includes(recipeId)) {
    recetasDesbloqueadas.push(recipeId);
    localStorage.setItem("nutrieduca-recetas", JSON.stringify(recetasDesbloqueadas));
  }

  puntajeTotal -= 50;
  actualizarPuntaje();

  // Corregido: quitar visualmente el bloqueo al instante
  const receta = document.querySelector(`.recipe-card[data-recipe-id="${recipeId}"]`);
  if (receta) {
    receta.classList.remove("hidden");
    const overlay = receta.querySelector(".lock-overlay");
    if (overlay) overlay.remove();
  }

  alert(`Receta desbloqueada: ${recipeId}`);
}

// Drag & Drop
items.forEach(item => {
  item.addEventListener("dragstart", e => {
    e.dataTransfer.setData("nombre", item.textContent);
    e.dataTransfer.setData("puntos", item.dataset.puntos);
    e.dataTransfer.setData("id", item.textContent + Math.random());
  });
});

zonaPlato.addEventListener("dragover", e => {
  e.preventDefault();
  zonaPlato.classList.add("over");
});

zonaPlato.addEventListener("dragleave", () => {
  zonaPlato.classList.remove("over");
});

zonaPlato.addEventListener("drop", e => {
  e.preventDefault();
  zonaPlato.classList.remove("over");

  const nombre = e.dataTransfer.getData("nombre");
  const puntos = parseInt(e.dataTransfer.getData("puntos"));

  ingredientesSeleccionados.push({ nombre, puntos });

  const li = document.createElement("li");
  li.textContent = nombre;
  lista.appendChild(li);

  const item = [...items].find(i => i.textContent === nombre);
  if (item) {
    item.setAttribute("draggable", "false");
    item.style.opacity = "0.5";
    item.style.cursor = "not-allowed";
  }
});

// Cargar sonidos
const sonidoBien = new Audio("sonidos/positivo.mp3");
const sonidoMal = new Audio("sonidos/negativo.mp3");

// Botón de combinar ingredientes
btnCombinar.addEventListener("click", () => {
  if (ingredientesSeleccionados.length === 0) {
    alert("¡Agrega ingredientes primero!");
    return;
  }

  const hayNoSaludable = ingredientesSeleccionados.some(i => i.puntos === 0);

  if (hayNoSaludable) {
    sonidoMal.play();
    alert("😞 ¡Plato no saludable! Pierdes los puntos.");
  } else {
    const suma = ingredientesSeleccionados.reduce((acc, i) => acc + i.puntos, 0);
    puntajeTotal += suma;
    actualizarPuntaje();
    sonidoBien.play();
    alert("🎉 ¡Plato saludable! Ganaste " + suma + " puntos.");
  }

  ingredientesSeleccionados = [];
  lista.innerHTML = "";
  items.forEach(i => {
    i.setAttribute("draggable", "true");
    i.style.opacity = "1";
    i.style.cursor = "grab";
  });
});

// Eventos para desbloqueo y apertura de recetas
document.addEventListener("click", (e) => {
  if (e.target.matches(".unlock-btn")) {
    const rid = e.target.dataset.recipeId;
    desbloquearReceta(rid);
  }

  if (e.target.matches(".btn-recipe")) {
    const card = e.target.closest(".recipe-card");
    if (card && card.classList.contains("hidden")) {
      return alert("Esta receta aún está bloqueada. Desbloquéala primero.");
    }
    const rid = card.dataset.recipeId;
    showRecipeModal(rid); // Asegúrate que esta función esté definida
  }
});

// Inicialización
actualizarPuntaje();
mostrarRecetasDesbloqueadas();



