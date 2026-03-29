import styles from './SearchBox.module.css';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilter } from '../../redux/filtersSlice';

function SearchBox() {
  const searchBoxId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div className={styles.searchBox}>
      <label htmlFor={searchBoxId}>Find contacts by name</label>
      <input
        id={searchBoxId}
        type="text"
        className={styles.searchInput}
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value.trim().toLowerCase()))}
      />
    </div>
  );
}

export default SearchBox;