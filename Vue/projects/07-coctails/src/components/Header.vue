<template>
	<div class="cocktail__top top-cocktail">
		<header class="top-cocktail__header">
			<div class='header__top'>
				<a href='#' class="header__logo">
					<img src="https://www.thecocktaildb.com/images/logo.png" alt="logo" />
				</a>
				<input type="text" class='header__input'
					placeholder='Search for a cocktail...' />
			</div>
			<ul class="top-cocktail__categories categories__list">
				<li class='categories__item' data-name='nonAlcoholic'>Non Alcoholic</li>
				<li class='categories__item' data-name='alcoholic'>Alcoholic</li>
				<li class='categories__item' data-name='ordinary'>Ordinary</li>
				<li class='categories__item' data-name='cocktail'>Cocktails</li>
				<li class='categories__item' data-name='glass'>In Glass</li>
				<li class='categories__item' data-name='champagne'>Champagne</li>
			</ul>
		</header>
	</div>
</template>

<script setup ></script>

<style scoped  lang='scss'>
.top-cocktail {
	padding-top: 20px;
	transition: all 0.3s ease 0s;

	&__categories {}

	&__header {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		align-items: center;
		justify-content: space-between;
		margin: 20px 0;
		max-width: 1200px;
		margin: 0 auto;
		transition: all 0.3s ease 0s;
	}

}

.header {

	&__top {
		display: flex;
		width: 100%;
		gap: 20px;
		align-items: center;
		justify-content: space-between;

		@media (max-width: 600px) {
			flex-wrap: wrap;
		}
	}

	&__logo {
		img {
			max-width: 100%;
		}
	}

	&__input {
		padding: 5px 10px;
		border-radius: 5px;
		outline: 1px solid #fdbb00;
		border: none;

		@media (min-width: 600px) {
			margin-right: 30px;
		}

		@media (max-width: 600px) {
			margin: 0 auto;
		}

		&:focus {
			outline: 2px solid #fdbb00;
		}

		&::placeholder {
			color: #230312;
			opacity: 0.6;
			font-size: 16px;
		}
	}
}

.categories {
	&__list {
		display: flex;
		gap: 20px;
		margin-bottom: 30px;
		justify-content: center;
		user-select: none;

		@media (max-width: 900px) {
			flex-wrap: wrap;
			gap: 10px;
		}
	}

	&__item {
		text-align: center;
		padding: 5px 15px;
		background-color: #fdbb00;
		border-radius: 5px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease 0s;

		@media (max-width: 767px) {
			padding: 3px 10px;
		}

		&:hover {
			background-color: #ca9800;
		}
	}
}

.top-cocktail._active {
	background-color: rgba(#230312, 0.7);
	backdrop-filter: blur(5px);
	gap: 10px;
	padding-top: 0;

	.top-cocktail__header {
		gap: 5px;
	}

	.categories__list {
		margin-bottom: 10px;
	}
}
</style>