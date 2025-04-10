<template>
	<footer className="footer">
		<div className="footer__wrapper">
			<div className="footer__copy">
				<p>© 2024 TheCocktailDB.</p>
				<p>Proudly built in the UK </p>
			</div>
			<div className="footer__labels">
				<a href="#"><img src="https://www.thecocktaildb.com/images/logo-tsdb.png" alt="logo" /></a>
				<a href="#"><img src="https://www.thecocktaildb.com/images/logo-tadb.png" alt="logo" /></a>
				<a href="#"><img src="https://www.thecocktaildb.com/images/logo-tmdb.png" alt="logo" /></a>
			</div>
			<div className="footer__contacts">
				<a href='#'>Missing</a>
				<a href='#'>About</a>
				<a href='#'>Faq</a>
				<a href='#'>Contact</a>
			</div>
		</div>
	</footer>
</template>

<script setup ></script>

<style scoped  lang='scss'>
.footer {
	background-color: #1d000d;
	margin: 0 -15px;

	&__wrapper {
		display: flex;
		gap: 20px;
		align-items: center;
		justify-content: space-between;
		color: #fff;
		max-width: 1200px;
		margin: 0 auto;
		padding: 40px 15px;
		font-size: 16px;

		@media (max-width: 1000px) {
			flex-wrap: wrap;
		}

		@media (max-width: 550px) {
			padding: 20px 0;
		}
	}

	&__copy {
		font-size: 14px;

		@media (max-width: 1000px) {
			order: 1;
			flex: 0 0 45%;
		}

		@media (max-width: 550px) {
			order: 3;
			flex: 0 0 100%;
			justify-content: center;

			p {
				text-align: center;
			}
		}
	}

	&__labels {
		display: flex;
		gap: 15px;

		@media (max-width: 1000px) {
			order: 2;
			flex: 0 0 100%;
			justify-content: center;
		}

		a {
			transition: all 0.2s ease 0s;

			&:hover {
				transform: scale(1.1);
			}
		}

		img {
			max-width: 100%;
		}
	}

	&__contacts {
		display: flex;
		gap: 15px;

		@media (max-width: 1000px) {
			order: 1;
			flex: 0 0 45%;
			justify-content: end;
		}

		@media (max-width: 550px) {
			flex: 0 0 100%;
			justify-content: center;
		}

		a {
			transition: all 0.2s ease 0s;

			&:hover {
				color: orangered;
			}
		}
	}
}
</style>