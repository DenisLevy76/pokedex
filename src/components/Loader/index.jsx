import './styles.css';

export const Loader = ({ extraStyles }) => {
  return (
    <div className="loader__container" style={extraStyles}>
      <div className="loader__gradient"></div>
    </div>
  );
};
