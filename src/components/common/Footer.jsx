import logo from "../../../src/assets/common/logo.png";
import { BodyOne, Caption, CustomLink, Title } from "./CustomComponents";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div>

            <NavLink to="/">
              <img src={logo} alt="logo" className="h-16"/>
            </NavLink>

            <div className="flex flex-col gap-2 mt-5">
              <Caption>Addess : 451 Wall Street, UK, London</Caption>
              <Caption>Email : example@domain.com</Caption>
              <Caption>Call : 555-555-1234</Caption>
            </div>
            <br/>
            <BodyOne>Subscribe To Our Newsletter</BodyOne>
            <input 
              type="text" 
              className="p-3 w-full border bg-white-100 border-gray-300 rounded-md outline-none" 
              placeholder="Enter Your email address"
            />
          </div>
          
          <div>
            <Title level={5}>Our Stores</Title>
            <div className="flex flex-col gap-4 mt-4">
              <CustomLink>Normal</CustomLink>
              <CustomLink>Shop With Sidebar</CustomLink>
              <CustomLink>Shop With Category</CustomLink>
              <CustomLink>Shop Filters Top Bar</CustomLink>
              <CustomLink>Shop Wide</CustomLink>
              <CustomLink>My Account</CustomLink>
            </div>
          </div>
          
          <div>
            <Title level={5}>Useful Links</Title>
            <div className="flex flex-col gap-4 mt-4">
              <CustomLink>Normal</CustomLink>
              <CustomLink>Shop With Sidebar</CustomLink>
              <CustomLink>Shop With Category</CustomLink>
              <CustomLink>Shop Filters Top Bar</CustomLink>
              <CustomLink>Shop Wide</CustomLink>
              <CustomLink>My Account</CustomLink>
            </div>
          </div>

          <div>
            <Title level={5}>Blogs</Title>
            <div className="flex flex-col gap-4 mt-4">
              <CustomLink>Normal</CustomLink>
              <CustomLink>Shop With Sidebar</CustomLink>
              <CustomLink>Shop With Category</CustomLink>
              <CustomLink>Shop Filters Top Bar</CustomLink>
              <CustomLink>Shop Wide</CustomLink>
              <CustomLink>My Account</CustomLink>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer