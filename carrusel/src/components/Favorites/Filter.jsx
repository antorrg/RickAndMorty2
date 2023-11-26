import { useDispatch } from "react-redux";
import { filterFav} from "../../Redux/actions";



const Filter = () => {
  const dispatch = useDispatch();
    const optionGender = ['All','Male', 'Female', 'Unknown', 'Genderless']

    const filterCards = (event) => {
        dispatch(filterFav(event.target.value))
    }
  
  return (
    <div>
      <select onChange={filterCards}>
        {optionGender.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
