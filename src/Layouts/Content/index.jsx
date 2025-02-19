import PropTypes from "prop-types";
import Footer from "../../Components/Footer";

const ContentLayout = ({ children }) => {
  return (
    <>
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex- 1 flex-col mt-20 items-center">{children}</div>
        <Footer></Footer>
      </div>
    </>
  );
};

ContentLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentLayout;
