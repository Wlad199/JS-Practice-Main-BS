


export default function Cocktails({ coctailList, inputValue, sortHandler }) {

	return (
		<>
			<div className="cocktail__content content-cocktail" >
				<ul className="content-cocktail__list">
					{coctailList ? coctailList.filter(item => item.strDrink.toLowerCase().includes(inputValue.toLowerCase()))
						.map(item => (
							<li className="content-cocktail__item" key={item.idDrink}>
								<img src={item.strDrinkThumb} alt={item.strDrink} />
								<p><span>{item.strDrink}</span></p>
							</li>
						)) : <div className="content-cocktail__nothing">There is no such cocktails</div>}
				</ul>
			</div>
			<div className="content-cocktail__sort">
				<h4>Browse By Name</h4>
				<ul onClick={sortHandler} className="content-cocktail__sort-list">
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
		</>
	)
}