import Nav from '../Header/Nav'

function Footer(props) {
  return (
<footer>
	<h3>{props.siteData.site_name}</h3>
  <Nav nav={props.siteData.nav}/>
</footer>
  );
}

export default Footer;
