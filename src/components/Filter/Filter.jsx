import PropTypes from 'prop-types';

export function Filter({filterState}) {
    return (
        <form>
            <label>
                <input type='text' onChange={(e) => filterState(e.target.value)} />
            </label>
        </form>
    )
}

Filter.propTypes = {
    filterState: PropTypes.func.isRequired
}