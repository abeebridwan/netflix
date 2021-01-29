/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';

export default function BrowseContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  console.log('user', user);
  return <SelectProfileContainer user={user} />;
}
