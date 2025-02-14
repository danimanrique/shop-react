import PropTypes from "prop-types";

const ContentLayout = ({ children }) => {
  return <div className="flex flex-col mt-20 items-center">{children}</div>;
};

ContentLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentLayout;
