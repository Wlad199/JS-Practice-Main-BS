
function Header(props) {
  let list = props.data.nav;
  let listItem = list.map(item => <li key = {item.link}><a href = {item.link}>{item.text}</a></li>)
  
  return (
   <nav>
     <ul>
  {listItem}
</ul>
   </nav>
  );
}

export default Header;
