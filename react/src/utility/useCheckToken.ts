import {useEffect} from 'react';

export function useCheckToken() {
  useEffect(() => {
    console.log('Token - ', localStorage.token);
  });
}
