import PropTypes from 'prop-types';

const Searchbarcategori = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar productos:"
        className="relative shadow-md pl-4 text-[1.2em] text-[rgba(0,0,0,.7)] h-[50px] w-full p-2 rounded-lg  focus:outline-none focus:ring-1 focus:ring-[#008DDA]l mb-6"
      />
    </div>
  );
};

Searchbarcategori.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default Searchbarcategori;
