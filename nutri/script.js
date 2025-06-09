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
    videoUrl: 'https://www.youtube.com/watch?v=N9BJIJNCio0'
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
    videoUrl: 'https://www.youtube.com/watch?v=jcnsyw8CTVQ'
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
    videoUrl: 'https://www.youtube.com/watch?v=OHw9iLxPUh4'
  }
};

// Create and show recipe modal
function showRecipeModal(recipeId) {
  const recipe = recipes[recipeId];
  if (!recipe) return;

  // Create modal element
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

  // Focus management
  const closeBtn = modal.querySelector('.close-modal');
  closeBtn.focus();

  // Close modal function
  function closeModal() {
    document.body.removeChild(modal);
    document.removeEventListener('keydown', onKeyDown);
  }

  // Close events
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  // Close on ESC
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
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  'lectura-etiquetas': {
    title: 'Cómo Leer Etiquetas Nutricionales',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  'meriendas-saludables': {
    title: 'Preparación de Meriendas Saludables',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
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
      showVideoModal('nutricion-basica'); // or you can add logic to choose which video by id
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
