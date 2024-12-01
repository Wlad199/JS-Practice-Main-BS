import Nav from './Nav'
function Header(props) {
  return (
<header>
 <h1>{props.siteData.site_name}</h1>
 <h2>{props.siteData.site_title}</h2>

 <Nav nav={props.siteData.nav}/>
</header>
  );
}

export default Header;
