import React,{useContext} from "react";
import { AppContext } from "../Context/appContext";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import SearchBox from "./SearchBox";
function Header() {
  const {state} = useContext(AppContext)
  return (
    <header>
      <Wrapper>
        <div className="appHeader">
          <div className="headerLeft">
            <Link to="/">
              <img src={Logo} alt="" width={96} />
            </Link>
            <Link to="/favorites">
              <div className="favCount">
                <span className="count"> {state?.favorites?.length} </span>
                Favorites
              </div>
            </Link>
          </div>

          <SearchBox />
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
