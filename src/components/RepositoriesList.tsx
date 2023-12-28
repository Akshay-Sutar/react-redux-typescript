import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';

export const RepositoriesList: React.FC = () => {
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const { searchRepositories } = useActions();
  const [name, setName] = useState<string>('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(name);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button>Search</button>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading.....</h3>}
        <ul>
          {data.map((repo) => (
            <li key={repo}>{repo}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};
