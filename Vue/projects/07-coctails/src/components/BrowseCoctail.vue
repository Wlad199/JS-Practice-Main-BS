<template>
	<div className="sort">
		<h4>Browse By Name</h4>
		<ul className="sort-list">
			<li><span data-name='A'>A</span></li>
			<li><span data-name='B'>B</span></li>
			<li><span data-name='C'>C</span></li>
			<li><span data-name='D'>D</span></li>
			<li><span data-name='E'>E</span></li>
			<li><span data-name='F'>F</span></li>
			<li><span data-name='G'>G</span></li>
			<li><span data-name='H'>H</span></li>
			<li><span data-name='I'>I</span></li>
			<li><span data-name='J'>J</span></li>
			<li><span data-name='K'>K</span></li>
			<li><span data-name='L'>L</span></li>
			<li><span data-name='M'>M</span></li>
			<li><span data-name='N'>N</span></li>
			<li><span data-name='O'>O</span></li>
			<li><span data-name='P'>P</span></li>
			<li><span data-name='Q'>Q</span></li>
			<li><span data-name='R'>R</span></li>
			<li><span data-name='S'>S</span></li>
			<li><span data-name='T'>T</span></li>
			<li><span data-name='U'>U</span></li>
			<li><span data-name='V'>V</span></li>
			<li><span data-name='W'>W</span></li>
			<li><span data-name='X'>X</span></li>
			<li><span data-name='Y'>Y</span></li>
			<li><span data-name='Z'>Z</span></li>
		</ul>
	</div>
</template>

<script setup >

</script>

<style scoped  lang='scss'>
.sort {
	margin: 20px 0;

	h4 {
		color: #fff;
		text-align: center;
		padding-bottom: 10px;
	}
}

.sort-list {
	text-align: center;
	color: #faabfa;
	user-select: none;

	li {
		display: inline;

		&:not(:last-child) {}

		position: relative;

		&:not(:last-child)::after {
			content: ' / ';
			color: #fff;
		}

		span {
			cursor: pointer;
			transition: all 0.2s ease 0s;
			font-size: 20px;

			&:hover {
				color: orangered;
			}
		}
	}
}
</style>