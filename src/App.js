import { useState } from 'react';

import './App.css';

import { SplitScreen } from './layout/SplitScreen';
import { RegularList } from './RegularList';
import { SmallPersonListItem } from './person/SmallPersonListItem';
import { ProductInfo } from './product/ProductInfo';
import { Modal } from './Modal';

const LeftHandComponent = () => <h1>I'm on the left</h1>
const RightHandComponetn = () => <p>I'm on the right</p>

const people = [] //Abstract json array of objects;

function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  return (
    <>
      <SplitScreen
          leftWeight={1}
          rightWeight={3}
      >
        <LeftHandComponent />
        <RightHandComponetn />
      </SplitScreen>

      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />

      <ProductInfo productId="123" />

      <Modal
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}
      >
        something
      </Modal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Hide Modal" : "Show Modal"}
      </button>
    </>
  );
}

export default App;
