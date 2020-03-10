import * as React from 'react';
import { FilterControl as FilterControlType, Filter } from 'evl-types-ui';
// import useStyles from './FilterControlJSS';
import EvlMultiCheckbox from '../multi-checkbox';
import EvlRangeSlider from '../range-slider';
import EvlSelect from '../select';
import EvlDateRange from '../date-range';

export interface EvlFilterControlProps {
  selectedFilters: Filter;
  filterOptions: any;
  filterType: FilterControlType;
  filterProperty: string;
  filterMeta: {
    [key: string]: any;
  };
  onChange: (filters: Filter) => void;
}

export const EvlFilterControl: React.FC<EvlFilterControlProps> = ({
  selectedFilters,
  filterOptions,
  filterType,
  filterProperty,
  filterMeta,
  onChange,
}) => {
  // const classes = useStyles();
  let filterControl = null;
  switch (filterType) {
    case FilterControlType.multiCheckbox: {
      const selectedFilterValues = selectedFilters[filterProperty] || [];
      filterControl = (
        <EvlMultiCheckbox
          options={filterOptions as string[]}
          selectedOptions={selectedFilterValues}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
            let newFilters;
            if (event.target.checked)
              newFilters = {
                ...selectedFilters,
                [filterProperty]: [...selectedFilterValues, value],
              };
            else {
              const newFilterAttribute = selectedFilterValues.filter((c: string) => c !== value);
              newFilters = {
                ...selectedFilters,
                [filterProperty]: newFilterAttribute,
              };
            }
            onChange(newFilters);
          }}
        />
      );
      break;
    }
    case FilterControlType.slider: {
      const [min, max] = filterOptions;
      filterControl = (
        <EvlRangeSlider
          marks
          valueLabelDisplay="on"
          value={selectedFilters[filterProperty] || filterOptions}
          onChange={
            //@ts-ignore
            (event: any, newValue: number | number[]) => {
              onChange({
                ...selectedFilters,
                [filterProperty]: newValue as number[],
              });
            }
          }
          step={filterMeta.steps}
          min={min}
          max={max}
          aria-labelledby="range-slider"
          getAriaValueText={(value: number) => `${value} ${filterProperty}`}
        />
      );
      break;
    }
    case FilterControlType.select: {
      filterControl = (
        <EvlSelect
          value={selectedFilters[filterProperty] || ''}
          options={filterOptions}
          onChange={(e: React.ChangeEvent<{ value: string }>) => {
            onChange({
              ...selectedFilters,
              [filterProperty]: e.target.value,
            });
          }}
          autoWidth
        />
      );
      break;
    }
    case FilterControlType.autocomplete: {
      filterControl = (
        <EvlAutoComplete
          options={filterOptions}
          onChange={(event: React.ChangeEvent<{}>, value: any) => {
            onChange({
              ...selectedFilters,
              [filterProperty]: (value && value.value) || '',
            });
          }}
        />
      );
      break;
    }
    case FilterControlType.dateRange: {
      const [min, max] = filterOptions;
      filterControl = (
        <EvlDateRange
          minDate={new Date(min)}
          maxDate={new Date(max)}
          startLabel={filterMeta.startLabel}
          endLabel={filterMeta.endLabel}
          value={selectedFilters[filterProperty] || filterOptions}
          onChange={dateRange => {
            onChange({
              ...selectedFilters,
              [filterProperty]: dateRange,
            });
          }}
        />
      );
      break;
    }
  }
  return filterControl;
};

export default EvlFilterControl;
