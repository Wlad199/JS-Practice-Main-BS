import CategoryDescription from './CategoryDescription';


function Category(props) {
  let list = props.data.nav;
  let listItem = list.map(item => <li key = {item.link}> <a href = {item.link}> {item.text}</a></li>)
  return (
    <>
    <CategoryDescription />
<ul>
  {listItem}
</ul>

    </>
  );
}

export default Category;
