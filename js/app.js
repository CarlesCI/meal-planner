document.getElementById('preferences-form').addEventListener('submit', generateMenu);
document.getElementById('fridge-form').addEventListener('submit', findRecipes);

function generateMenu(event) {
    event.preventDefault();
    const numComensales = document.getElementById('num-comensales').value;
    const tipoComensales = document.getElementById('tipo-comensales').value;
    const menuOutput = document.getElementById('menu-output');

    // Aquí puedes generar el menú basado en las preferencias seleccionadas
    // Por ahora, se usará un ejemplo estático
    const menu = `
        <h3>Menú para ${numComensales} ${tipoComensales}</h3>
        <ul>
            <li>Lunes: Ensalada de pollo</li>
            <li>Martes: Pasta a la boloñesa</li>
            <li>Miércoles: Sopa de verduras</li>
            <li>Jueves: Arroz con pollo</li>
            <li>Viernes: Pescado al horno</li>
            <li>Sábado: Pizza casera</li>
            <li>Domingo: Barbacoa</li>
        </ul>
        <p>Recibirás una lista de ingredientes para cada día.</p>
    `;

    menuOutput.innerHTML = menu;
}

function findRecipes(event) {
    event.preventDefault();
    const ingredients = document.getElementById('ingredients').value;
    const recipeOutput = document.getElementById('recipe-output');

    // Aquí puedes buscar recetas basadas en los ingredientes disponibles
    // Por ahora, se usará un ejemplo estático
    const recipes = `
        <h3>Recetas con ${ingredients}</h3>
        <ul>
            <li>Ensalada de tomate y queso</li>
            <li>Pollo al ajillo</li>
            <li>Queso fundido con hierbas</li>
        </ul>
    `;

    recipeOutput.innerHTML = recipes;
}

// Función para recomendar supermercados y ofertas (puedes personalizarla)
function getSupermarketOffers() {
    const supermarketOutput = document.getElementById('supermarket-output');

    // Aquí puedes obtener datos reales de ofertas de supermercados
    // Por ahora, se usará un ejemplo estático
    const offers = `
        <h3>Ofertas de Supermercados</h3>
        <ul>
            <li>Supermercado A: Tomates a 1€/kg</li>
            <li>Supermercado B: Pollo a 3€/kg</li>
            <li>Supermercado C: Queso a 2€/200g</li>
        </ul>
    `;

    supermarketOutput.innerHTML = offers;
}

document.addEventListener('DOMContentLoaded', getSupermarketOffers);
