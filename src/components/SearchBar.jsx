import React, {useEffect, useState} from 'react';
import AutoCompleteBox from 'react-autocomplete';

export default ({searchInput}) => {
  const [value, setValue]  = useState('');
  useEffect(() => {

  }, [searchInput]);
  return (
    <AutoCompleteBox
      getItemValue={(value) => value.label}
      items={[
        { label: 'apple' },
        { label: 'banana' },
        { label: 'pear' }
      ]}
      renderItem={(item, isHighlighted) =>
        <div style={{ background: isHighlighted? 'grey': 'white', color: 'blue' }}>
          {item.label}
        </div>
      }
      value={value}
      onChange={(e) => setValue(e.targetvalue)}
      onSelect={(val) => setValue(value)}
    />
  )
}