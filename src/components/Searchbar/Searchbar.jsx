import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import {
  SearchForm,
  Button,
  Input,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchForm onSubmit={onSubmit}>
      <Button type="submit">
        <HiOutlineMagnifyingGlass />
      </Button>

      <Input
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </SearchForm>
  );
};
