import PropTypes from 'prop-types';

export function Filter({ filter, handleFilterChange }) {
    return (
        <label htmlFor=''>
            Find contacts by name 
            <input 
                input={filter}
                type='text'
                name='filter'
                onChange={handleFilterChange}
            />
        </label>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleFilterChange: PropTypes.func.isRequired,
};