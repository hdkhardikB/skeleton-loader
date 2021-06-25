import * as React from 'react';
import { TileView } from '@components';
import { ItemWrapper, ListWrapper } from './CountryListStyles';
import countries from './countries';

export const CountryList: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [countryList, setCountryList] = React.useState<any[]>([]);

  const loadCountries = async () => {
    setIsLoading(true);

    setTimeout(() => {
      setCountryList(countries);
      setIsLoading(false);
    }, 5000);
  };

  React.useEffect(() => {
    loadCountries();
  }, []);

  return (
    <ListWrapper>
      {(countryList.length > 0 &&
        !isLoading &&
        countryList.map((item: any) => (
          <ItemWrapper>
            {' '}
            <TileView
              population={item.population}
              coverImage={item.flag}
              flag={item.flag}
              title={item.name}
              isLoading={isLoading}
            />
          </ItemWrapper>
        ))) ||
        new Array(3).fill(undefined).map(item => (
          <ItemWrapper>
            {' '}
            <TileView isLoading={isLoading} />
          </ItemWrapper>
        ))}
    </ListWrapper>
  );
};

export default CountryList;
