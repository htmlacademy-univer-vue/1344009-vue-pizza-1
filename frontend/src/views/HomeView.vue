<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <div class="content__dough">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите тесто</h2>

            <div class="sheet__content dough">
              <template v-for="dough in doughs" :key="dough.id">
                <label
                  class="dough__input"
                  :class="getDoughStyle(dough.name_eng)"
                >
                  <input
                    type="radio"
                    name="dought"
                    value="light"
                    class="visually-hidden"
                    checked
                  />
                  <b>{{ dough.name }}</b>
                  <span>{{ dough.description }}</span>
                </label>
              </template>
            </div>
          </div>
        </div>

        <div class="content__diameter">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите размер</h2>

            <div class="sheet__content diameter">
              <template v-for="size in sizes" :key="size.id">
                <label
                  class="diameter__input"
                  :class="getDiameterStyle(size.name)"
                >
                  <input
                    type="radio"
                    name="diameter"
                    value="small"
                    class="visually-hidden"
                  />
                  <span>{{ size.name }}</span>
                </label>
              </template>
            </div>
          </div>
        </div>

        <div class="content__ingredients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">
              Выберите ингредиенты
            </h2>

            <div class="sheet__content ingredients">
              <div class="ingredients__sauce">
                <p>Основной соус:</p>
                <template v-for="sauce in sauces" :key="sauce.id">
                  <label class="radio ingredients__input">
                    <input type="radio" name="sauce" value="tomato" checked />
                    <span>{{ sauce.name }}</span>
                  </label>
                </template>
              </div>

              <div class="ingredients__filling">
                <p>Начинка:</p>
                <ul class="ingredients__list">
                  <template
                    v-for="ingredient in ingredients"
                    :key="ingredient.id"
                  >
                    <li class="ingredients__item">
                      <span
                        class="filling"
                        :class="getFillingStyle(ingredient.name_eng)"
                        >{{ ingredient.name }}</span
                      >

                      <div class="counter counter--orange ingredients__counter">
                        <button
                          type="button"
                          class="counter__button counter__button--minus"
                          disabled
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                  </template>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="content__pizza">
          <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input
              type="text"
              name="pizza_name"
              placeholder="Введите название пиццы"
            />
          </label>

          <div class="content__constructor">
            <div class="pizza pizza--foundation--big-tomato">
              <div class="pizza__wrapper">
                <div class="pizza__filling pizza__filling--ananas"></div>
                <div class="pizza__filling pizza__filling--bacon"></div>
                <div class="pizza__filling pizza__filling--cheddar"></div>
              </div>
            </div>
          </div>

          <div class="content__result">
            <p>Итого: 0 ₽</p>
            <button type="button" class="button" disabled>Готовьте!</button>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>

<script setup>
import doughs from "../mocks/dough.json";
import ingredients from "../mocks/ingredients.json";
import sauces from "../mocks/sauces.json";
import sizes from "../mocks/sizes.json";

function getFillingStyle(ingredient_name) {
  return `filling--${ingredient_name}`;
}

function getDiameterStyle(diameter) {
  let styleName = "";
  if (diameter === "23 см") {
    styleName = "small";
  } else if (diameter === "32 см") {
    styleName = "normal";
  } else {
    styleName = "big";
  }
  return `diameter__input--${styleName}`;
}

function getDoughStyle(dough_name) {
  return `dough__input--${dough_name}`;
}
</script>
