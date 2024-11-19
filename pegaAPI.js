import axios from 'axios';
import https from 'https';
import pkg from 'pg';

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

const axiosInstance = axios.create({
  httpsAgent,
});

const { Pool } = pkg;

// Configuração do PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Drinktoppia',
  password: '12345',
  port: 5432,
});

// Função para inserir dados no banco
async function insertCocktail(cocktail) {
  let ingredients = cocktail.strIngredient1 + ", "
  if (cocktail.strIngredient2) ingredients += cocktail.strIngredient2 + ", "
  if (cocktail.strIngredient3) ingredients += cocktail.strIngredient3 + ", "
  if (cocktail.strIngredient4) ingredients += cocktail.strIngredient4 + ", "
  if (cocktail.strIngredient5) ingredients += cocktail.strIngredient5 + ", "
  if (cocktail.strIngredient6) ingredients += cocktail.strIngredient6 + ", "
  if (cocktail.strIngredient7) ingredients += cocktail.strIngredient7 + ", "
  if (cocktail.strIngredient8) ingredients += cocktail.strIngredient8 + ", "
  if (cocktail.strIngredient9) ingredients += cocktail.strIngredient9 + ", "
  if (cocktail.strIngredient10) ingredients += cocktail.strIngredient10 + ", "
  if (cocktail.strIngredient11) ingredients += cocktail.strIngredient11 + ", "
  if (cocktail.strIngredient12) ingredients += cocktail.strIngredient12 + ", "
  if (cocktail.strIngredient13) ingredients += cocktail.strIngredient13 + ", "
  if (cocktail.strIngredient14) ingredients += cocktail.strIngredient14 + ", "
  if (cocktail.strIngredient15) ingredients += cocktail.strIngredient15

  const query = `
        INSERT INTO cocktails (
            id_drink, name, category, alcoholic, ingredients, instructions, image_url
        ) VALUES ($1, $2, $3, $4, $5, $6, $7)
        ON CONFLICT (id_drink) DO NOTHING;
    `;

  const values = [
    cocktail.idDrink,
    cocktail.strDrink,
    cocktail.strCategory,
    cocktail.strAlcoholic,
    ingredients,
    cocktail.strInstructions,
    cocktail.strDrinkThumb,
  ];

  try {
    await pool.query(query, values);
    console.log(`Inserted cocktail: ${cocktail.strDrink}`);
  } catch (err) {
    console.error(`Error inserting cocktail ${cocktail.strDrink}:`, err.message);
  }
}

// Função principal para buscar e salvar dados
async function fetchAndSaveCocktails() {
  const baseURL = 'https://reimagined-sniffle-xgg9pq54jxrh6x76-3000.app.github.dev/search.php?f=';
  const letters = 'abcdefghijklmnopqrstuvwxyz';

  for (const letter of letters) {
    try {
      const response = await axiosInstance.get(`${baseURL}${letter}`);
      const drinks = response.data.drinks;

      if (drinks) {
        console.log(`Fetched ${drinks.length} cocktails for letter: ${letter}`);
        for (const drink of drinks) {
          await insertCocktail(drink);
        }
      } else {
        console.log(`No cocktails found for letter: ${letter}`);
      }
    } catch (error) {
      console.error(`Error fetching data for letter ${letter}:`, error);
    }
  }

  // Fechar conexão com o banco
  await pool.end();
  console.log('All data saved. Connection closed.');
}

fetchAndSaveCocktails();

