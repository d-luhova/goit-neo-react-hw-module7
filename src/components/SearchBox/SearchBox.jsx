import styles from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={styles.searchBox}>
      <label>Find contacts by name</label>
      <input
        type="text"
        className={styles.searchInput}
        value={filter}
        onChange={e =>
          dispatch(changeFilter(e.target.value.toLowerCase()))
        }
      />
    </div>
  );
};

export default SearchBox;