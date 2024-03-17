import { Component } from 'solid-js';

export const FilterProductsBox: Component = () => {
  return (
    <div class="filter-products-box">
      <div class="js-toggle-list-view">&nbsp;</div>
      <button class="filter-products-btn gradient-btn">Hledat / Filtrovat</button>
      <div class="filter-products-content active">
        <div class="filter-content">
          <div class="filter-title">Vyhledávejte podle názvu:</div>
          <div class="search-box">
            <div class="field">
              <input
                type="text"
                id="filter-name-input"
                class="search-filter-input"
                placeholder="Hledaný výraz..."
              />
              <label for="filter-name-input">Hledaný výraz...</label>
            </div>

            <div class="magnify-icon search-filter-btn"></div>
            <div class="cleaner"></div>
          </div>
        </div>
        <div class="filter-content">
          <div class="filter-title">Seřadit podle:</div>
          <select id="item-filter-order">
            <option value="default">Výchozí</option>
            <option value="price-asc">Nejlevnějšího</option>
            <option value="price-desc">Nejdražšího</option>
            <option value="name-asc">Dle názvu vzestupně</option>
            <option value="name-desc">Dle názvu sestupně</option>
          </select>
        </div>
        <div class="cleaner" />
      </div>
    </div>
  );
};
