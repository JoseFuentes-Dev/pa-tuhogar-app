import PropTypes from 'prop-types';

const Searchbarcategori = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar productos de Climatización..."
        className="p-2 border rounded w-full"
      />
    </div>
  );
};

Searchbarcategori.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default Searchbarcategori;
