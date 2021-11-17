import {
  useState,
  useEffect,
  Children,
  isValidElement,
  cloneElement
} from 'react';
import axios from 'axios';

export const ResourceLoader = ({ resourceUrl, resourceName, children}) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);

      setState(response.data);
    })();
  }, [resourceUrl]);

  return (
    <>
      {Children.map(children, child => {
        if (isValidElement(child)) {
          return cloneElement(child, { [resourceName]: state })
        }

        return child;
      })}
    </>
  )
}