import { InputSearch, SearchContainer, SearchIcon } from './styles';

export default function Search() {
  return (
    <SearchContainer>
      <InputSearch placeholder="Find Your Favourite Movies" />
      <SearchIcon />
    </SearchContainer>
  );
}
